import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(74,82,64,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                <Icon name="Star" size={16} />
                Официальная программа
              </div>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Контракт на СВО<br />
              <span className="text-primary">для граждан России</span><br />
              <span className="text-secondary">и СНГ</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Официальная программа контрактной службы с финансовыми гарантиями, социальными льготами и возможностью получения гражданства РФ
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-5 shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-secondary mb-1">1.1 млн ₽</div>
                <div className="text-sm text-muted-foreground">Единовременная выплата</div>
              </div>
              <div className="bg-card rounded-xl p-5 shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-secondary mb-1">от 210 тыс ₽</div>
                <div className="text-sm text-muted-foreground">Ежемесячно</div>
              </div>
              <div className="bg-card rounded-xl p-5 shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-secondary mb-1">1-2 дня</div>
                <div className="text-sm text-muted-foreground">Гражданство РФ</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Оставить заявку
                <Icon name="ArrowRight" size={20} />
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="bg-card text-foreground border border-border px-8 py-4 rounded-lg font-semibold text-lg hover:bg-muted transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Узнать подробнее
                <Icon name="Info" size={20} />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-1 shadow-2xl">
              <div className="bg-card rounded-xl p-8 space-y-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Users" size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Возраст: 18-55 лет</h3>
                    <p className="text-muted-foreground text-sm">Для граждан России и стран СНГ</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Icon name="Heart" size={28} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Категории здоровья A, B, V</h3>
                    <p className="text-muted-foreground text-sm">Базовые требования по здоровью</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="FileCheck" size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Без судимостей</h3>
                    <p className="text-muted-foreground text-sm">По определенным статьям УК РФ</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Icon name="Trophy" size={28} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Статус ветерана</h3>
                    <p className="text-muted-foreground text-sm">Социальные льготы и преференции</p>
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

export default Hero;