import Icon from '@/components/ui/icon';

const About = () => {
  const benefits = [
    {
      icon: 'DollarSign',
      title: 'Финансовые гарантии',
      description: '1,1 млн рублей единовременно и от 210 тыс рублей ежемесячно',
      color: 'primary',
    },
    {
      icon: 'Flag',
      title: 'Гражданство РФ',
      description: 'Ускоренное получение за 1-2 дня от момента подписания контракта',
      color: 'secondary',
    },
    {
      icon: 'Shield',
      title: 'Страхование',
      description: 'До 3 млн за травмы и 6 млн семье от Министерства обороны',
      color: 'primary',
    },
    {
      icon: 'Award',
      title: 'Статус ветерана',
      description: 'Льготы по налогам, бесплатное обучение детей, кредитные каникулы',
      color: 'secondary',
    },
    {
      icon: 'Home',
      title: 'Освобождение от налогов',
      description: 'Полное освобождение от налога на имущество',
      color: 'primary',
    },
    {
      icon: 'Plane',
      title: 'Отпуск каждые 6 месяцев',
      description: '2 недели оплачиваемого отпуска с компенсацией проезда',
      color: 'secondary',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <Icon name="Info" size={16} />
              О программе
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Преимущества контрактной службы
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Государственная программа с полными социальными гарантиями, финансовой поддержкой и льготами для вас и вашей семьи
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex p-4 rounded-xl mb-6 ${benefit.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'}`}>
                <Icon
                  name={benefit.icon}
                  size={32}
                  className={benefit.color === 'primary' ? 'text-primary' : 'text-secondary'}
                />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-1 shadow-2xl">
          <div className="bg-card rounded-xl p-8 md:p-12 border border-border">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Дополнительные льготы</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1.5 rounded-lg mt-1">
                      <Icon name="Check" size={16} className="text-primary" />
                    </div>
                    <span className="text-muted-foreground">Бесплатное высшее образование для детей</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1.5 rounded-lg mt-1">
                      <Icon name="Check" size={16} className="text-primary" />
                    </div>
                    <span className="text-muted-foreground">Бесплатное зачисление в детский сад без очереди</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1.5 rounded-lg mt-1">
                      <Icon name="Check" size={16} className="text-primary" />
                    </div>
                    <span className="text-muted-foreground">Кредитные каникулы и налоговые льготы</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1.5 rounded-lg mt-1">
                      <Icon name="Check" size={16} className="text-primary" />
                    </div>
                    <span className="text-muted-foreground">Компенсация проезда до места службы и обратно (до 20 тыс ₽)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1.5 rounded-lg mt-1">
                      <Icon name="Check" size={16} className="text-primary" />
                    </div>
                    <span className="text-muted-foreground">Обеспечение формой и снаряжением</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8">
                <div className="space-y-6">
                  <div className="bg-background rounded-lg p-6 shadow-sm border border-border">
                    <div className="text-sm text-muted-foreground mb-2">Единовременная выплата</div>
                    <div className="text-4xl font-bold text-secondary">1 100 000 ₽</div>
                  </div>
                  <div className="bg-background rounded-lg p-6 shadow-sm border border-border">
                    <div className="text-sm text-muted-foreground mb-2">Ежемесячное денежное довольствие</div>
                    <div className="text-4xl font-bold text-secondary">от 210 000 ₽</div>
                  </div>
                  <div className="bg-background rounded-lg p-6 shadow-sm border border-border">
                    <div className="text-sm text-muted-foreground mb-2">Страховка от МО РФ семье</div>
                    <div className="text-4xl font-bold text-secondary">6 000 000 ₽</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;