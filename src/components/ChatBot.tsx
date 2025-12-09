import { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatBotProps {
  isOpen: boolean;
  onToggle: () => void;
}

const ChatBot = ({ isOpen, onToggle }: ChatBotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Здравствуйте! Я виртуальный помощник. Задайте мне вопрос о контрактной службе.',
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('сколько') && (lowerMessage.includes('платят') || lowerMessage.includes('деньги') || lowerMessage.includes('выплата'))) {
      return 'Единовременная выплата составляет 1 100 000 рублей. Ежемесячное денежное довольствие начинается от 210 000 рублей. Дополнительно: страховка до 3 млн за травмы и 6 млн семье от МО РФ.';
    }

    if (lowerMessage.includes('гражданство')) {
      return 'Для граждан СНГ предусмотрена ускоренная процедура получения российского гражданства в течение 1-2 дней с момента подписания контракта.';
    }

    if (lowerMessage.includes('возраст')) {
      return 'Возраст для заключения контракта: от 18 до 55 лет для граждан СНГ, от 18 до 50 лет для граждан РФ.';
    }

    if (lowerMessage.includes('здоровье') || lowerMessage.includes('медицин')) {
      return 'Требуются категории годности A, B или В. Необходимо отсутствие ВИЧ и хронических заболеваний в острой форме. Медосмотр проводится на месте оформления.';
    }

    if (lowerMessage.includes('судимость')) {
      return 'Нельзя заключить контракт при судимости по статьям 134, 205.2, 220, 221, 280, 281-281.3 УК РФ. При других судимостях возможно индивидуальное рассмотрение.';
    }

    if (lowerMessage.includes('документ')) {
      return 'Необходимые документы: паспорт, СНИЛС (при наличии), документ об образовании, справка о несудимости, военный билет (при наличии), 6 фото 3x4 см.';
    }

    if (lowerMessage.includes('льгот') || lowerMessage.includes('преимущества')) {
      return 'Льготы: статус ветерана, освобождение от налога на имущество, бесплатное образование детей, бесплатный детский сад, кредитные каникулы, отпуск каждые 6 месяцев.';
    }

    if (lowerMessage.includes('контракт') && lowerMessage.includes('срок')) {
      return 'Стандартный контракт заключается на срок от 1 года. Точные условия обсуждаются индивидуально при оформлении.';
    }

    if (lowerMessage.includes('переезд') || lowerMessage.includes('дорога')) {
      return 'Организаторы полностью оплачивают переезд до места оформления документов. Компенсация до 20 000 рублей, бесплатное проживание на период оформления.';
    }

    if (lowerMessage.includes('специальност') || lowerMessage.includes('должност')) {
      return 'Доступные специальности: стрелковые, артиллерия, БПЛА, танкисты, инженеры, водители, связисты, ПВО, логистика, медицина и другие.';
    }

    if (lowerMessage.includes('телефон') || lowerMessage.includes('контакт') || lowerMessage.includes('связаться')) {
      return 'Бесплатная горячая линия: 8 (800) 302-67-35 (круглосуточно). Также можете оставить заявку на сайте в разделе "Контакты".';
    }

    if (lowerMessage.includes('отпуск')) {
      return 'Предусмотрен оплачиваемый отпуск 2 недели каждые 6 месяцев с компенсацией проезда до дома и обратно.';
    }

    if (lowerMessage.includes('снаряжение') || lowerMessage.includes('форма') || lowerMessage.includes('экипировка')) {
      return 'Все обмундирование, форма и снаряжение предоставляются государством абсолютно бесплатно после подписания контракта.';
    }

    if (lowerMessage.includes('обучение') || lowerMessage.includes('подготовка')) {
      return 'Военное образование не требуется. Базовая подготовка и обучение длятся от 2 до 4 недель в зависимости от специальности.';
    }

    if (lowerMessage.includes('привет') || lowerMessage.includes('здравствуй')) {
      return 'Здравствуйте! Чем могу помочь? Спросите о выплатах, условиях, требованиях или процессе оформления контракта.';
    }

    if (lowerMessage.includes('спасибо')) {
      return 'Пожалуйста! Если возникнут еще вопросы - обращайтесь. Или звоните на горячую линию 8 (800) 302-67-35.';
    }

    return 'Извините, я не совсем понял ваш вопрос. Попробуйте спросить о: выплатах, гражданстве, требованиях, документах, льготах, специальностях или контактах. Или позвоните на горячую линию 8 (800) 302-67-35.';
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    'Сколько платят?',
    'Как получить гражданство?',
    'Какие требования?',
    'Какие льготы?',
  ];

  return (
    <>
      {!isOpen && (
        <button
          onClick={onToggle}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 animate-pulse"
        >
          <Icon name="MessageCircle" size={28} />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl z-50 flex flex-col max-h-[600px] border border-border">
          <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Icon name="Bot" size={24} />
              </div>
              <div>
                <h3 className="font-bold">Помощник</h3>
                <p className="text-xs opacity-90">Онлайн</p>
              </div>
            </div>
            <button
              onClick={onToggle}
              className="hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/20">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isBot
                      ? 'bg-white border border-border'
                      : 'bg-gradient-to-r from-primary to-secondary text-white'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.isBot ? 'text-muted-foreground' : 'text-white/70'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString('ru-RU', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className="px-4 pb-2 space-y-2">
              <p className="text-xs text-muted-foreground">Быстрые вопросы:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setInputValue(question);
                      setTimeout(handleSend, 100);
                    }}
                    className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="p-4 border-t border-border bg-white rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Задайте вопрос..."
                className="flex-1 px-4 py-2 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="bg-gradient-to-r from-primary to-secondary text-white p-2 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Icon name="Send" size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
