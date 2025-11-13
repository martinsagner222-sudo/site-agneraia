
import React, { useState, useEffect, useCallback } from 'react';
import { BarChart2Icon, TrendingUpIcon, ArrowLeftIcon, ArrowRightIcon, ZapIcon } from './icons/Icons';

const cases = [
  {
    title: "Aumento de Conversão",
    image: "https://picsum.photos/seed/case1/800/450",
    icon: <TrendingUpIcon className="w-6 h-6 text-[#00E1FF]" />,
    data: [
      { key: "Conversão", value: "+73%" },
      { key: "Tempo de Resposta", value: "-95%" },
      { key: "Vendas Recuperadas", value: "+21%" },
    ],
    caption: "Escalou conversões em 48 dias usando automação completa."
  },
  {
    title: "Atendimento 24/7",
    image: "https://picsum.photos/seed/case2/800/450",
    icon: <ZapIcon className="w-6 h-6 text-[#00E1FF]" />,
    data: [
      { key: "Atendimentos Simultâneos", value: "Ilimitado" },
      { key: "Custo Operacional", value: "-40%" },
      { key: "Capacidade de Resposta", value: "+500%" },
    ],
    caption: "O negócio passou a atender 24h sem contratar mais ninguém."
  },
  {
    title: "Recuperação de Clientes",
    image: "https://picsum.photos/seed/case3/800/450",
    icon: <BarChart2Icon className="w-6 h-6 text-[#00E1FF]" />,
    data: [
      { key: "Clientes Reativados", value: "+25%" },
      { key: "Engajamento", value: "+80%" },
      { key: "Custo por Reativação", value: "-98%" },
    ],
    caption: "Recuperou antigos compradores com uma linha de IA."
  },
];

const CasesSection: React.FC = () => {
  const [currentCase, setCurrentCase] = useState(0);

  const nextCase = useCallback(() => {
    setCurrentCase((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
  }, []);

  const prevCase = () => {
    setCurrentCase((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextCase();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextCase]);

  const activeCase = cases[currentCase];

  return (
    <section className="py-20 md:py-32 px-6 bg-[#111111] overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Empresas que Operam com Inteligência <span className="gradient-text">Escolhem a Agneraia</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Resultados reais de operações que ativaram um novo nível de performance.
          </p>
        </div>
        <div className="mt-16 max-w-5xl mx-auto relative">
          <div className="bg-[#1A1A1A] rounded-2xl glow-border overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 flex flex-col justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        {activeCase.icon}
                        <h3 className="text-2xl font-bold text-white">{activeCase.title}</h3>
                    </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {activeCase.data.map(d => (
                      <div key={d.key} className="bg-gray-900/50 p-3 rounded-lg">
                        <p className="text-2xl font-bold gradient-text">{d.value}</p>
                        <p className="text-xs text-gray-400">{d.key}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-gray-300 italic">“{activeCase.caption}”</p>
                </div>
                <div className="flex items-center gap-3 mt-8">
                    {cases.map((_, index) => (
                        <button key={index} onClick={() => setCurrentCase(index)} className={`h-2 flex-1 rounded-full ${currentCase === index ? 'bg-[#0A84FF]' : 'bg-gray-700'}`}></button>
                    ))}
                </div>
              </div>
              <div className="relative aspect-video lg:aspect-auto">
                 <img src={activeCase.image} alt={activeCase.title} className="w-full h-full object-cover"/>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent lg:bg-gradient-to-r"></div>
              </div>
            </div>
          </div>
          <button onClick={prevCase} className="absolute top-1/2 -translate-y-1/2 -left-4 bg-gray-800/50 hover:bg-gray-700 p-2 rounded-full hidden md:block backdrop-blur-sm">
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
          <button onClick={nextCase} className="absolute top-1/2 -translate-y-1/2 -right-4 bg-gray-800/50 hover:bg-gray-700 p-2 rounded-full hidden md:block backdrop-blur-sm">
            <ArrowRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
