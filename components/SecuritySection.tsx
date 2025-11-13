import React from 'react';
// FIX: Import ZapIcon and CpuChipIcon to resolve 'used before declaration' errors.
import { ShieldCheckIcon, CloudIcon, DatabaseIcon, LockIcon, ZapIcon, CpuChipIcon } from './icons/Icons';

const protocols = [
  { icon: <CloudIcon className="w-6 h-6 text-[#00E1FF]" />, text: "Estruturas baseadas em nuvem" },
  { icon: <LockIcon className="w-6 h-6 text-[#00E1FF]" />, text: "Conexões Criptografadas" },
  { icon: <ShieldCheckIcon className="w-6 h-6 text-[#00E1FF]" />, text: "Processamento Seguro" },
  { icon: <DatabaseIcon className="w-6 h-6 text-[#00E1FF]" />, text: "Zero Perda de Dados" },
  { icon: <ZapIcon className="w-6 h-6 text-[#00E1FF]" />, text: "Alta Disponibilidade e Resiliência" },
  { icon: <CpuChipIcon className="w-6 h-6 text-[#00E1FF]" />, text: "Monitoramento Contínuo 24h" },
];

const SecuritySection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-[#111111]">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Protocolos de Segurança e <span className="gradient-text">Confiabilidade Operacional</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Construído sobre uma arquitetura de nível enterprise para garantir a integridade, segurança e continuidade da sua operação.
          </p>
        </div>
        <div className="mt-16 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {protocols.map((protocol, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4 bg-gray-800 p-4 rounded-full">
                {protocol.icon}
              </div>
              <p className="text-gray-300">{protocol.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;