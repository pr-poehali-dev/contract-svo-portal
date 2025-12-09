import json
import os
import psycopg2
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Обработка заявок от пользователей с сохранением в базу данных
    Args: event - dict с httpMethod, body, headers
          context - объект с атрибутами request_id, function_name
    Returns: HTTP response dict
    '''
    method: str = event.get('httpMethod', 'GET')
    
    # CORS preflight
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    # Парсинг данных
    body_data = json.loads(event.get('body', '{}'))
    name = body_data.get('name', '').strip()
    phone = body_data.get('phone', '').strip()
    citizenship = body_data.get('citizenship', '').strip()
    message = body_data.get('message', '').strip()
    
    # Валидация
    if not name or not phone or not citizenship:
        return {
            'statusCode': 400,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Все обязательные поля должны быть заполнены'}),
            'isBase64Encoded': False
        }
    
    # Получение IP и User-Agent
    request_context = event.get('requestContext', {})
    identity = request_context.get('identity', {})
    ip_address = identity.get('sourceIp', 'unknown')
    headers = event.get('headers', {})
    user_agent = headers.get('user-agent', headers.get('User-Agent', 'unknown'))
    
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
    
    # Вставка данных
    cur.execute(
        "INSERT INTO applications (name, phone, citizenship, message, ip_address, user_agent) VALUES (%s, %s, %s, %s, %s, %s) RETURNING id",
        (name, phone, citizenship, message, ip_address, user_agent)
    )
    
    application_id = cur.fetchone()[0]
    conn.commit()
    
    cur.close()
    conn.close()
    
    return {
        'statusCode': 200,
        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({
            'success': True,
            'message': 'Заявка успешно отправлена',
            'applicationId': application_id
        }),
        'isBase64Encoded': False
    }
