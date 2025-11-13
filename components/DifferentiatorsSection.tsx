import React from 'react';
import { CheckIcon, XIcon } from './icons/Icons';

const comparisonData = [
  { feature: 'Velocidade', agneraia: true, common: false },
  { feature: 'Inteligência', agneraia: true, common: false },
  { feature: 'Atendimento 24h', agneraia: true, common: false },
  { feature: 'Escalabilidade', agneraia: true, common: false },
  { feature: 'Conversão', agneraia: true, common: false },
  { feature: 'Garantia', agneraia: true, common: false },
  { feature: 'Suporte', agneraia: true, common: false },
  { feature: 'Profissionalismo', agneraia: true, common: false },
];

const differentiators = [
    'Implementação em 7 dias', 'IA própria e ajustada ao negócio', 'Fluxos personalizados', 'Suporte premium', 'Estrutura escalável', 'Zero complexidade para o cliente', 'Operações que funcionam mesmo dormindo', 'Alto padrão de design e engenharia', 'Experiência real com múltiplos mercados', 'Operações integradas (WhatsApp + Redes + CRM)'
];

// FIX: Moved CheckCircleIcon definition before its usage to prevent a 'used before declaration' error.
const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const DifferentiatorsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-[#111111]">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Por Que a Agneraia é a Escolha das Empresas que <span className="gradient-text">Crescem Rápido</span>
          </h2>
           <p className="mt-4 text-lg text-gray-400">
            Nós não competimos. Nós estabelecemos um novo padrão de operação.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
            {differentiators.map(item => (
                <div key={item} className="flex items-center gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-[#0A84FF] flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                </div>
            ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <div className="bg-[#1A1A1A] rounded-xl glow-border">
            <div className="grid grid-cols-3 text-center p-4 border-b border-gray-800">
              <span className="font-bold text-gray-400">Diferencial</span>
              <span className="font-bold text-lg text-white">AGNERAIA</span>
              <span className="font-bold text-gray-400">Empresa Comum</span>
            </div>
            {comparisonData.map((item, index) => (
              <div key={item.feature} className={`grid grid-cols-3 text-center p-4 ${index < comparisonData.length - 1 ? 'border-b border-gray-800/50' : ''}`}>
                <span className="text-left text-gray-300 my-auto">{item.feature}</span>
                <div className="flex justify-center items-center">
                  <CheckIcon className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex justify-center items-center">
                  <XIcon className="w-5 h-5 text-red-500/50" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;