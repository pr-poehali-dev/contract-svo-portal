import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 shadow-lg border-b border-border' : 'bg-background/90 backdrop-blur-sm border-b border-border/50'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="bg-primary text-white p-2 rounded-lg">
              <Icon name="Shield" size={24} />
            </div>
            <span className="text-xl font-bold text-foreground">Контракт - СВОим</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-colors font-medium">
              Главная
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors font-medium">
              О программе
            </button>
            <button onClick={() => scrollToSection('how-to')} className="text-foreground hover:text-primary transition-colors font-medium">
              Как заключить
            </button>
            <button onClick={() => scrollToSection('requirements')} className="text-foreground hover:text-primary transition-colors font-medium">
              Требования
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-foreground hover:text-primary transition-colors font-medium">
              Вопросы и ответы
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors font-medium">
              Контакты
            </button>
          </nav>

          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Связаться
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={28} />
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden pb-6 space-y-4">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2">
              Главная
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2">
              О программе
            </button>
            <button onClick={() => scrollToSection('how-to')} className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2">
              Как заключить
            </button>
            <button onClick={() => scrollToSection('requirements')} className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2">
              Требования
            </button>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2">
              Вопросы и ответы
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2">
              Контакты
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Связаться
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;