
import React from 'react';
import { TrendingUpIcon, BarChart2Icon, ZapIcon } from './icons/Icons';

const results = [
  { value: "+70%", label: "Aumento médio de conversões", icon: <TrendingUpIcon className="w-8 h-8 text-white" /> },
  { value: "-92%", label: "Redução do tempo de resposta", icon: <ZapIcon className="w-8 h-8 text-white" /> },
  { value: "+40%", label: "Aumento de retenção de clientes", icon: <TrendingUpIcon className="w-8 h-8 text-white" /> },
  { value: "+300%", label: "Aumento de engajamento social", icon: <BarChart2Icon className="w-8 h-8 text-white" /> },
  { value: "-35%", label: "Redução de custos operacionais", icon: <ZapIcon className="w-8 h-8 text-white" /> },
  { value: "+25%", label: "Recuperação de clientes inativos", icon: <TrendingUpIcon className="w-8 h-8 text-white" /> },
];

const ResultsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-black">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Resultados que Acontecem Porque a <span className="gradient-text">IA Não Dorme</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Métricas de performance que refletem uma operação de alta eficiência, 24 horas por dia.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {results.map((result, index) => (
            <div key={index} className="bg-gradient-to-br from-[#0A84FF]/20 to-[#00E1FF]/20 p-6 rounded-2xl text-center border border-[#0A84FF]/30">
              <div className="mb-4 inline-block p-4 bg-black/30 rounded-full">
                {result.icon}
              </div>
              <p className="text-4xl md:text-5xl font-black tracking-tighter text-white">{result.value}</p>
              <p className="mt-2 text-gray-300">{result.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
