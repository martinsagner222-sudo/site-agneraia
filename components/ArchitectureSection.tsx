
import React from 'react';
import { BotIcon, FunnelIcon, Share2Icon, LayoutGridIcon } from './icons/Icons';

const pillars = [
  {
    icon: <BotIcon className="w-8 h-8 text-[#0A84FF]" />,
    title: "Core de Atendimento Automatizado",
    description: "IA responde no WhatsApp 24/7, classifica intenções, encaminha para setores e elimina o tempo de espera.",
  },
  {
    icon: <FunnelIcon className="w-8 h-8 text-[#00E1FF]" />,
    title: "Núcleo de Conversão Automática",
    description: "Funis inteligentes integrados, recuperação de inativos e otimização contínua para fechamento de vendas.",
  },
  {
    icon: <Share2Icon className="w-8 h-8 text-[#0A84FF]" />,
    title: "Engajamento Multicanal Inteligente",
    description: "Integração nativa com Instagram, Facebook e Google para captura e qualificação automática de leads.",
  },
  {
    icon: <LayoutGridIcon className="w-8 h-8 text-[#00E1FF]" />,
    title: "Painel Operacional e Analytics",
    description: "Painel executivo com dados em tempo real, KPIs corporativos, projeções e insights automáticos.",
  },
];

const ArchitectureSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-black relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#0A84FF]/50 to-transparent"></div>
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Agneraia Command Engine™
          </h2>
          <p className="mt-4 text-lg md:text-xl font-light text-gray-400 uppercase tracking-widest">
            Arquitetura Inteligente de Automação Operacional
          </p>
          <p className="mt-6 text-lg text-gray-300">
            O sistema operacional da sua empresa. Uma estrutura proprietária, projetada com engenharia de automação avançada para garantir máxima eficiência e escalabilidade.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="glow-border bg-[#1A1A1A]/50 p-8 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-[#1A1A1A]"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 bg-gray-800 p-3 rounded-lg">{pillar.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                  <p className="mt-2 text-gray-400">{pillar.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
