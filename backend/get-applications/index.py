import json
import os
import psycopg2
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Получение списка заявок из базы данных для администратора
    Args: event - dict с httpMethod, queryStringParameters
          context - объект с атрибутами request_id, function_name
    Returns: HTTP response dict со списком заявок
    '''
    method: str = event.get('httpMethod', 'GET')
    
    # CORS preflight
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    # Получение параметров
    params = event.get('queryStringParameters') or {}
    limit = int(params.get('limit', 50))
    offset = int(params.get('offset', 0))
    
    # Подключение к БД
    dsn = os.environ.get('DATABASE_URL')
    if not dsn:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Database configuration error'}),
            'isBase64Encoded': False
        }
    
    conn = psycopg2.connect(dsn)
    cur = conn.cursor()
    
    # Получение заявок
    cur.execute(
        """
        SELECT id, name, phone, citizenship, message, created_at, ip_address, user_agent
        FROM applications
        ORDER BY created_at DESC
        LIMIT %s OFFSET %s
        """,
        (limit, offset)
    )
    
    rows = cur.fetchall()
    
    # Получение общего количества
    cur.execute("SELECT COUNT(*) FROM applications")
    total_count = cur.fetchone()[0]
    
    cur.close()
    conn.close()
    
    # Форматирование данных
    applications = []
    for row in rows:
        applications.append({
            'id': row[0],
            'name': row[1],
            'phone': row[2],
            'citizenship': row[3],
            'message': row[4] or '',
            'createdAt': row[5].isoformat() if row[5] else None,
            'ipAddress': row[6],
            'userAgent': row[7]
        })
    
    return {
        'statusCode': 200,
        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({
            'applications': applications,
            'total': total_count,
            'limit': limit,
            'offset': offset
        }),
        'isBase64Encoded': False
    }
