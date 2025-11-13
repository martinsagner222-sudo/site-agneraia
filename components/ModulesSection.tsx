
import React from 'react';
import { CheckCircleIcon } from './icons/Icons';

const modules = [
  {
    title: "Atendimento Inteligente 24/7",
    description: "Automatiza 100% do primeiro contato e resolve até 80% dos atendimentos sem intervenção humana."
  },
  {
    title: "Conversão Automática no WhatsApp",
    description: "Funis invisíveis transformam conversas em vendas, com fechamento automático e geração de orçamentos."
  },
  {
    title: "Engajamento em Redes Sociais",
    description: "Comentários, directs e mensagens são respondidos automaticamente, inserindo leads no funil sem esforço."
  },
  {
    title: "CRM Integrado com IA",
    description: "Todos os leads organizados, classificados e prontos para acionar, com pipeline e segmentação automática."
  },
  {
    title: "Agendamentos e Rotinas Automatizadas",
    description: "Agenda que se preenche sozinha. Lembretes, confirmações e reagendamentos sem atrito."
  },
  {
    title: "Relatórios e KPIs em Tempo Real",
    description: "Dados de crescimento exibidos em um painel corporativo para decisões baseadas em performance."
  }
];

const ModulesSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-black">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Módulos do Sistema <span className="gradient-text">Agneraia™</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Uma suíte de produtos de automação premium, desenhados para operar em sinergia e entregar performance máxima.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div key={index} className="bg-[#1A1A1A] p-8 rounded-2xl border border-gray-800 flex flex-col">
              <h3 className="text-xl font-bold text-white">{module.title}</h3>
              <p className="mt-3 text-gray-400 flex-grow">{module.description}</p>
              <div className="mt-6">
                <CheckCircleIcon className="w-6 h-6 text-[#0A84FF]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
