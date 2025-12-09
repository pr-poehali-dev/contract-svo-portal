import { useState } from 'react';
import Icon from '@/components/ui/icon';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Сколько платят за контракт на СВО?',
      answer: 'Единовременная выплата составляет 1 100 000 рублей. Ежемесячное денежное довольствие начинается от 210 000 рублей и может быть выше в зависимости от должности и условий службы. Дополнительно предоставляется страховка до 3 млн рублей за травмы и 6 млн рублей семье от Министерства обороны.',
    },
    {
      question: 'Как быстро можно получить гражданство РФ?',
      answer: 'Для граждан стран СНГ предусмотрена ускоренная процедура получения российского гражданства. Документы оформляются в течение 1-2 дней с момента подписания контракта. Это официальная государственная программа.',
    },
    {
      question: 'Какие требования к здоровью?',
      answer: 'Требуются категории годности A, B или В. Необходимо отсутствие ВИЧ-инфекции и хронических заболеваний в острой форме. Медицинское освидетельствование проводится на месте оформления контракта.',
    },
    {
      question: 'Можно ли заключить контракт с судимостью?',
      answer: 'Нельзя заключить контракт при наличии судимости по статьям 134, 205.2, 220, 221, 280, 281-281.3 УК РФ. При наличии судимости по другим статьям возможно индивидуальное рассмотрение заявки.',
    },
    {
      question: 'Какие социальные льготы предоставляются?',
      answer: 'Контрактники получают статус ветерана с полным освобождением от налога на имущество, кредитные каникулы, бесплатное высшее образование для детей, бесплатное зачисление в детский сад без очереди, оплачиваемый отпуск каждые 6 месяцев с компенсацией проезда.',
    },
    {
      question: 'Сколько длится контракт?',
      answer: 'Стандартный контракт заключается на срок от 1 года. Точные условия и возможность продления обсуждаются индивидуально при оформлении.',
    },
    {
      question: 'Кто оплачивает переезд к месту оформления?',
      answer: 'Организаторы полностью оплачивают ваш переезд до места оформления документов и обратно. Компенсация составляет до 20 000 рублей. Также предоставляется бесплатное проживание на период оформления.',
    },
    {
      question: 'Нужно ли военное образование или опыт службы?',
      answer: 'Военное образование или предыдущий опыт службы не являются обязательными. Все необходимые навыки вы получите в процессе базовой подготовки и обучения, которое длится от 2 до 4 недель в зависимости от специальности.',
    },
    {
      question: 'Предоставляется ли форма и снаряжение?',
      answer: 'Да, все необходимое обмундирование, форма и снаряжение предоставляются государством абсолютно бесплатно после подписания контракта.',
    },
    {
      question: 'Как часто можно увидеть семью?',
      answer: 'Предусмотрен оплачиваемый отпуск продолжительностью 2 недели каждые 6 месяцев с компенсацией проезда до дома и обратно.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <Icon name="MessageCircleQuestion" size={16} />
              Вопросы и ответы
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ответы на самые популярные вопросы о контрактной службе
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-muted/30 transition-colors rounded-xl"
                >
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  <div
                    className={`flex-shrink-0 transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    <Icon name="ChevronDown" size={24} className="text-primary" />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5">
                    <div className="pt-2 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-1 shadow-2xl">
            <div className="bg-card rounded-xl p-8 text-center border border-border">
              <Icon name="Headphones" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Не нашли ответ на свой вопрос?</h3>
              <p className="text-muted-foreground mb-6">
                Свяжитесь с нами по телефону или оставьте заявку, и наши специалисты ответят на все ваши вопросы
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="tel:+79990955559"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  <Icon name="Phone" size={20} />
                  +7 (999) 095-55-59
                </a>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  <Icon name="MessageSquare" size={20} />
                  Оставить заявку
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;