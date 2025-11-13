
import React from 'react';

const stats = [
  {
    value: "82%",
    label: "das empresas perdem clientes por falhas no WhatsApp.",
    color: "#00E1FF"
  },
  {
    value: "62%",
    label: "dos consumidores abandonam um atendimento lento.",
    color: "#0A84FF"
  },
  {
    value: "40%",
    label: "de redução de custos operacionais via automação.",
    color: "#00E1FF"
  },
  {
    value: "70%",
    label: "de aumento em conversões e retenção com o uso de IA.",
    color: "#0A84FF"
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-[#0A0A0A]">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Diagnóstico Estratégico do <span className="gradient-text">Cenário Atual</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            O mercado não perdoa ineficiência. Operar sem automação inteligente é operar com desvantagem competitiva.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="glow-border bg-[#1A1A1A] p-8 rounded-2xl text-center flex flex-col items-center justify-center">
              <span 
                className="text-6xl md:text-7xl font-black tracking-tighter"
                style={{
                    background: `linear-gradient(90deg, ${stat.color}, #FFFFFF)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
              >
                {stat.value}
              </span>
              <p className="mt-4 text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
