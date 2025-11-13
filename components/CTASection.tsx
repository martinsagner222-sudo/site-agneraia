
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-[#0A0A0A]">
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter max-w-4xl mx-auto !leading-tight">
          Sua Empresa Não Precisa de Mais Horas. <span className="gradient-text">Precisa de Inteligência.</span>
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          A automação só funciona quando é feita com engenharia, precisão e visão. A Agneraia entrega as três.
        </p>
        <div className="mt-10">
          <a
            href="https://wa.me/5538997365520"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#0A84FF] to-[#00E1FF] text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg shadow-[#0A84FF]/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#00E1FF]/30"
          >
            Ativar Inteligência em Comando
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
