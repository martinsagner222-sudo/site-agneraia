
import React from 'react';
import { CheckCircleIcon, ClockIcon, TrendingUpIcon } from './icons/Icons';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 bg-cover bg-center relative"
      style={{ backgroundImage: "url('https://picsum.photos/seed/tech/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A]"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter max-w-4xl mx-auto !leading-tight">
          Inteligência Operacional para Empresas que <span className="gradient-text">Não Aceitam Estagnação.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Transformamos WhatsApp e Redes Sociais em máquinas automáticas de captação, atendimento e conversão.
        </p>
        <div className="mt-10">
          <a
            href="https://wa.me/5538997365520"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#0A84FF] to-[#00E1FF] text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg shadow-[#0A84FF]/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#00E1FF]/30"
          >
            Falar com Consultor Especialista
          </a>
        </div>
        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 text-gray-400">
          <div className="flex items-center gap-3">
            <CheckCircleIcon className="w-6 h-6 text-[#00E1FF]" />
            <span>Implementação em 7 dias</span>
          </div>
          <div className="flex items-center gap-3">
            <ClockIcon className="w-6 h-6 text-[#00E1FF]" />
            <span>Atendimento 24/7 via IA</span>
          </div>
          <div className="flex items-center gap-3">
            <TrendingUpIcon className="w-6 h-6 text-[#00E1FF]" />
            <span>Infraestrutura escalável</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
