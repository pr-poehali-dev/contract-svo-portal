import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    citizenship: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: 'Заявка отправлена!',
      description: 'Наш специалист свяжется с вами в ближайшее время.',
    });

    setFormData({
      name: '',
      phone: '',
      citizenship: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50/30 via-white to-red-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <Icon name="Phone" size={16} />
              Контакты
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Оставьте заявку, и наши специалисты свяжутся с вами для консультации
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Иван Иванов"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div>
                  <label htmlFor="citizenship" className="block text-sm font-semibold mb-2">
                    Гражданство
                  </label>
                  <select
                    id="citizenship"
                    name="citizenship"
                    value={formData.citizenship}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  >
                    <option value="">Выберите страну</option>
                    <option value="Россия">Россия</option>
                    <option value="Казахстан">Казахстан</option>
                    <option value="Узбекистан">Узбекистан</option>
                    <option value="Таджикистан">Таджикистан</option>
                    <option value="Киргизия">Киргизия</option>
                    <option value="Молдова">Молдова</option>
                    <option value="Туркменистан">Туркменистан</option>
                    <option value="Абхазия">Абхазия</option>
                    <option value="Южная Осетия">Южная Осетия</option>
                    <option value="Другое">Другое</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Сообщение (необязательно)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    placeholder="Расскажите о себе или задайте вопрос"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg flex items-center justify-center gap-2"
                >
                  Отправить заявку
                  <Icon name="Send" size={20} />
                </button>

                <p className="text-sm text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-4 rounded-xl">
                  <Icon name="Phone" size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Телефон горячей линии</h3>
                  <a href="tel:88003026735" className="text-2xl font-bold text-primary hover:text-secondary transition-colors">
                    8 (800) 302-67-35
                  </a>
                  <p className="text-muted-foreground mt-2">Бесплатно по всей России, круглосуточно</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-4 rounded-xl">
                  <Icon name="MessageSquare" size={28} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">WhatsApp и Telegram</h3>
                  <p className="text-muted-foreground mb-3">Связаться с куратором в мессенджерах</p>
                  <div className="flex gap-3">
                    <a
                      href="https://wa.me/88003026735"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors text-sm"
                    >
                      <Icon name="MessageCircle" size={18} />
                      WhatsApp
                    </a>
                    <a
                      href="https://t.me/+88003026735"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors text-sm"
                    >
                      <Icon name="Send" size={18} />
                      Telegram
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-4 rounded-xl">
                  <Icon name="Clock" size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Время работы</h3>
                  <p className="text-muted-foreground">Горячая линия работает круглосуточно</p>
                  <p className="text-muted-foreground">7 дней в неделю, без выходных</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-1 shadow-2xl">
              <div className="bg-white rounded-xl p-8">
                <div className="text-center">
                  <Icon name="ShieldCheck" size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Официальная программа</h3>
                  <p className="text-muted-foreground">
                    Все условия гарантированы государством. Конфиденциальность ваших данных обеспечена.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
