import Icon from '@/components/ui/icon';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                <Icon name="Shield" size={28} />
              </div>
              <span className="text-xl font-bold">Контракт - СВОим</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Официальная программа контрактной службы с финансовыми гарантиями и социальными льготами
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/88003026735"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="https://t.me/+88003026735"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors"
              >
                <Icon name="Send" size={20} />
              </a>
              <a
                href="tel:88003026735"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors"
              >
                <Icon name="Phone" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Главная
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  О программе
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('how-to')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Как заключить
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('requirements')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Требования
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Вопросы и ответы
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Контакты
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Информация</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <Icon name="DollarSign" size={18} className="mt-1 flex-shrink-0" />
                <span>1,1 млн ₽ единовременно</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Wallet" size={18} className="mt-1 flex-shrink-0" />
                <span>от 210 тыс ₽ ежемесячно</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Flag" size={18} className="mt-1 flex-shrink-0" />
                <span>Гражданство за 1-2 дня</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Award" size={18} className="mt-1 flex-shrink-0" />
                <span>Статус ветерана</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Shield" size={18} className="mt-1 flex-shrink-0" />
                <span>Страховка до 6 млн ₽</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={18} className="mt-1 text-primary" />
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Горячая линия</p>
                    <a
                      href="tel:88003026735"
                      className="text-white font-semibold hover:text-primary transition-colors"
                    >
                      8 (800) 302-67-35
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={18} className="mt-1 text-primary" />
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Режим работы</p>
                    <p className="text-white font-semibold">Круглосуточно</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Icon name="MessageSquare" size={18} className="mt-1 text-primary" />
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Мессенджеры</p>
                    <p className="text-white font-semibold">WhatsApp, Telegram</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Контракт - СВОим. Официальная государственная программа.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Icon name="ShieldCheck" size={16} className="text-primary" />
              <span>Конфиденциальность гарантирована</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
