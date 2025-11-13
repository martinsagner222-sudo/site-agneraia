import React from 'react';
// FIX: Import CpuChipIcon to resolve 'used before declaration' error.
import { ChevronsUpIcon, PlusIcon, Share2Icon, CpuChipIcon } from './icons/Icons';

const features = [
  {
    icon: <ChevronsUpIcon className="w-8 h-8 text-[#0A84FF]" />,
    title: "Onboarding Rápido",
    description: "Sistemas prontos para operar em dias, não meses, acelerando seu time-to-market."
  },
  {
    icon: <PlusIcon className="w-8 h-8 text-[#0A84FF]" />,
    title: "Adição de Novos Canais",
    description: "Incorpore novos pontos de contato e redes sociais de forma fluida e integrada."
  },
  {
    icon: <Share2Icon className="w-8 h-8 text-[#0A84FF]" />,
    title: "Integração com Plataformas",
    description: "Conecte-se ao seu ecossistema de software existente, de CRMs a ERPs."
  },
  {
    icon: <CpuChipIcon className="w-8 h-8 text-[#0A84FF]" />,
    title: "Expansão de Fluxos e Setores",
    description: "Automatize novos departamentos e processos com a mesma infraestrutura central."
  }
];

const ScaleSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-black">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Criado para Escalar Junto com a <span className="gradient-text">Sua Empresa</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Sua expansão não deve ser limitada pela tecnologia. Nossa arquitetura foi projetada para crescimento sem fricção.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800 hover:border-[#0A84FF]/50 transition-colors duration-300 text-center">
              <div className="inline-block mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              <p className="mt-2 text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScaleSection;