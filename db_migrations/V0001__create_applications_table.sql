-- Создание таблицы для хранения заявок пользователей
CREATE TABLE IF NOT EXISTS applications (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    citizenship VARCHAR(100) NOT NULL,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(50),
    user_agent TEXT
);

-- Создание индекса для быстрого поиска по дате
CREATE INDEX idx_applications_created_at ON applications(created_at DESC);

-- Создание индекса для поиска по телефону
CREATE INDEX idx_applications_phone ON applications(phone);
