import Icon from '@/components/ui/icon';

const HowTo = () => {
  const steps = [
    {
      number: '01',
      icon: 'FileText',
      title: 'Подача заявки',
      description: 'Заполните форму на сайте или свяжитесь с нами по телефону. Консультант ответит на все вопросы и проведет первичную консультацию.',
      duration: '1 день',
    },
    {
      number: '02',
      icon: 'MessageCircle',
      title: 'Консультация с куратором',
      description: 'Персональный куратор поможет собрать необходимые документы и ответит на все вопросы о процессе оформления.',
      duration: '1-2 дня',
    },
    {
      number: '03',
      icon: 'Plane',
      title: 'Организация переезда',
      description: 'Мы организуем и полностью оплатим ваш переезд до места оформления документов. Компенсация до 20 000 рублей.',
      duration: '2-3 дня',
    },
    {
      number: '04',
      icon: 'FileCheck',
      title: 'Оформление документов',
      description: 'Проверка документов, медицинское освидетельствование и подписание контракта. Для граждан СНГ - оформление гражданства РФ.',
      duration: '1-2 дня',
    },
    {
      number: '05',
      icon: 'Package',
      title: 'Получение снаряжения',
      description: 'Выдача формы, экипировки и необходимого снаряжения. Все предоставляется государством бесплатно.',
      duration: '1 день',
    },
    {
      number: '06',
      icon: 'GraduationCap',
      title: 'Обучение и подготовка',
      description: 'Прохождение базовой подготовки и обучения в зависимости от выбранной специальности.',
      duration: '2-4 недели',
    },
  ];

  return (
    <section id="how-to" className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <Icon name="Route" size={16} />
              Как заключить контракт
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Простой процесс оформления
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Весь процесс от подачи заявки до начала службы занимает от 1 до 2 недель. Мы помогаем на каждом этапе.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4 lg:gap-6">
                      {index % 2 === 0 ? (
                        <>
                          <div className="flex-1">
                            <div className="text-5xl font-bold text-primary/20 mb-2">{step.number}</div>
                            <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-semibold">
                              <Icon name="Clock" size={16} />
                              {step.duration}
                            </div>
                          </div>
                          <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-xl">
                            <Icon name={step.icon} size={32} className="text-white" />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-xl">
                            <Icon name={step.icon} size={32} className="text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-5xl font-bold text-primary/20 mb-2">{step.number}</div>
                            <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-semibold">
                              <Icon name="Clock" size={16} />
                              {step.duration}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-card border-4 border-primary rounded-full items-center justify-center shadow-lg z-10">
                  <span className="text-primary font-bold text-lg">{index + 1}</span>
                </div>

                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-1 shadow-2xl">
          <div className="bg-card rounded-xl p-8 md:p-12 text-center border border-border">
            <Icon name="Phone" size={48} className="text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Бесплатная горячая линия</h3>
            <a href="tel:+79990955559" className="text-4xl font-bold text-primary hover:text-secondary transition-colors mb-6 inline-block">
              +7 (999) 095-55-59
            </a>
            <p className="text-muted-foreground text-lg">
              Звоните по всей России бесплатно. Консультанты работают круглосуточно.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowTo;