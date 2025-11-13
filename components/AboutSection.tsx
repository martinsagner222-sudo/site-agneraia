
import React from 'react';
import { ZapIcon, MessageCircleIcon, BarChartIcon, CpuChipIcon, TargetIcon } from './icons/Icons';

const pillars = [
  {
    icon: <ZapIcon className="w-8 h-8 text-[#0A84FF]" />,
    title: "Velocidade Operacional",
    description: "Execução ultra-rápida que elimina gargalos e acelera o crescimento."
  },
  {
    icon: <MessageCircleIcon className="w-8 h-8 text-[#0A84FF]" />,
    title: "Inteligência de Atendimento",
    description: "IA que entende, resolve e converte, operando 24/7 com precisão humana."
  },
  {
    icon: <BarChartIcon className="w-8 h-8 text-[#0A84FF]" />,
    title: "Crescimento com Consistência",
    description: "Estruturas que sustentam a escala, garantindo performance em alta demanda."
  },
  {
    icon: <CpuChipIcon className="w-8 h-8 text-[#0A84FF]" />,
    title: "Automação com Propósito",
    description: "Foco em automações que geram margem, reduzem custos e liberam capital humano."
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-[#111111]">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Nós não vendemos software. Nós construímos <span className="gradient-text">infraestruturas de comando.</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-400">
            Um ecossistema de automação criado para empresas que operam com alta demanda e precisam de previsibilidade. A Agneraia foi fundada sob a premissa de que a tecnologia deve ser um ativo dominante, não um centro de custo. Nossa missão é verticalizar a inteligência operacional, transformando canais de comunicação em sistemas autônomos de crescimento.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#0A84FF]/50 transition-colors duration-300">
              <div className="mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
              <p className="mt-2 text-gray-400">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
