import Icon from '@/components/ui/icon';

const Requirements = () => {
  const requirements = [
    {
      category: 'Возраст',
      icon: 'Users',
      items: [
        'От 18 до 55 лет для граждан СНГ',
        'От 18 до 50 лет для граждан РФ',
        'Особые условия для специалистов',
      ],
      color: 'primary',
    },
    {
      category: 'Гражданство',
      icon: 'Flag',
      items: [
        'Граждане Российской Федерации',
        'Граждане стран СНГ (Казахстан, Узбекистан, Таджикистан, Киргизия, Молдова, Туркменистан)',
        'Граждане Абхазии и Южной/Северной Осетии',
        'Базовое знание русского языка для иностранцев',
      ],
      color: 'secondary',
    },
    {
      category: 'Здоровье',
      icon: 'Heart',
      items: [
        'Категории годности: A, B или В',
        'Отсутствие ВИЧ-инфекции',
        'Отсутствие хронических заболеваний в острой форме',
        'Прохождение медицинского освидетельствования',
      ],
      color: 'primary',
    },
    {
      category: 'Судимость',
      icon: 'FileCheck',
      items: [
        'Отсутствие судимости по статьям: 134, 205.2, 220, 221, 280, 281-281.3 УК РФ',
        'Для других судимостей - индивидуальное рассмотрение',
        'Справка о несудимости обязательна',
      ],
      color: 'secondary',
    },
  ];

  const positions = [
    { name: 'Стрелковые специальности', icon: 'Target' },
    { name: 'Артиллерия', icon: 'Crosshair' },
    { name: 'Операторы БПЛА', icon: 'Radio' },
    { name: 'Танковые экипажи', icon: 'Truck' },
    { name: 'Инженерные войска', icon: 'Wrench' },
    { name: 'Водители', icon: 'Car' },
    { name: 'Связисты', icon: 'Wifi' },
    { name: 'ПВО', icon: 'Shield' },
    { name: 'Логистика', icon: 'Package' },
    { name: 'Медицинский персонал', icon: 'HeartPulse' },
  ];

  return (
    <section id="requirements" className="py-20 bg-gradient-to-br from-blue-50/30 via-white to-red-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <Icon name="ClipboardCheck" size={16} />
              Требования к кандидатам
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Кто может заключить контракт
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Базовые требования для подачи заявки на контрактную службу
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {requirements.map((req, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-xl ${req.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'}`}>
                  <Icon
                    name={req.icon}
                    size={32}
                    className={req.color === 'primary' ? 'text-primary' : 'text-secondary'}
                  />
                </div>
                <h3 className="text-2xl font-bold">{req.category}</h3>
              </div>
              <ul className="space-y-3">
                {req.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`p-1 rounded-lg mt-1 ${req.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'}`}>
                      <Icon
                        name="Check"
                        size={16}
                        className={req.color === 'primary' ? 'text-primary' : 'text-secondary'}
                      />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-1 shadow-2xl mb-16">
          <div className="bg-white rounded-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Необходимые документы</h3>
              <p className="text-muted-foreground text-lg">
                Подготовьте следующие документы для оформления контракта
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary/5 to-transparent rounded-xl border border-border">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="IdCard" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Паспорт</h4>
                  <p className="text-sm text-muted-foreground">Действующий паспорт гражданина</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-secondary/5 to-transparent rounded-xl border border-border">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <Icon name="FileText" size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">СНИЛС</h4>
                  <p className="text-sm text-muted-foreground">Страховой номер (при наличии)</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary/5 to-transparent rounded-xl border border-border">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="GraduationCap" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Образование</h4>
                  <p className="text-sm text-muted-foreground">Документ об образовании</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-secondary/5 to-transparent rounded-xl border border-border">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <Icon name="FileCheck" size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Справка о несудимости</h4>
                  <p className="text-sm text-muted-foreground">Из МВД или аналог</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary/5 to-transparent rounded-xl border border-border">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="Heart" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Военный билет</h4>
                  <p className="text-sm text-muted-foreground">При наличии</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-secondary/5 to-transparent rounded-xl border border-border">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <Icon name="Image" size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Фотографии</h4>
                  <p className="text-sm text-muted-foreground">3x4 см (6 штук)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Доступные специальности</h3>
            <p className="text-muted-foreground text-lg">
              Выберите специальность в зависимости от ваших навыков и опыта
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {positions.map((position, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name={position.icon} size={28} className="text-primary" />
                </div>
                <span className="text-center font-semibold text-sm">{position.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Requirements;
