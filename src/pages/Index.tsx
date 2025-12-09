import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import HowTo from '@/components/HowTo';
import Requirements from '@/components/Requirements';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import ChatBot from '@/components/ChatBot';
import Footer from '@/components/Footer';

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <HowTo />
      <Requirements />
      <FAQ />
      <Contact />
      <Footer />
      <ChatBot isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />
    </div>
  );
};

export default Index;
