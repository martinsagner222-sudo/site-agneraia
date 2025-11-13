
import React from 'react';

const DemoSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-[#111111] overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Veja a <span className="gradient-text">Inteligência em Comando</span> Funcionando
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
          Nossa tecnologia não é uma promessa, é uma realidade operacional. Visualize o fluxo de automação que impulsiona o crescimento.
        </p>

        <div className="mt-16 relative aspect-video max-w-5xl mx-auto rounded-2xl glow-border bg-black p-2">
           <img
            src="https://picsum.photos/seed/hologram/1200/675"
            alt="Painel de Dados Futurista"
            className="rounded-lg w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-left">
            <h3 className="text-lg md:text-3xl font-bold">Painel Executivo em Tempo Real</h3>
            <p className="text-sm md:text-base text-gray-300 max-w-sm">CEO observando dados em um painel transparente e tomando decisões estratégicas.</p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 text-left">
                <h4 className="font-bold text-lg text-white">IA Classificando Leads</h4>
                <p className="text-gray-400 mt-2 text-sm">Leads que entram pelo Instagram são automaticamente qualificados e inseridos no funil de vendas.</p>
                <img src="https://picsum.photos/seed/chatui/400/250" alt="Chat UI" className="mt-4 rounded-md object-cover"/>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 text-left">
                <h4 className="font-bold text-lg text-white">Agenda Preenchendo Sozinha</h4>
                <p className="text-gray-400 mt-2 text-sm">A IA negocia horários com o cliente via WhatsApp e preenche a agenda do consultor sem intervenção.</p>
                 <img src="https://picsum.photos/seed/calendar/400/250" alt="Calendar UI" className="mt-4 rounded-md object-cover"/>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 text-left">
                <h4 className="font-bold text-lg text-white">CRM Atualizado em Tempo Real</h4>
                <p className="text-gray-400 mt-2 text-sm">Novos contatos e o histórico de conversas são enviados instantaneamente para o CRM da empresa.</p>
                 <img src="https://picsum.photos/seed/crm/400/250" alt="CRM UI" className="mt-4 rounded-md object-cover"/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
