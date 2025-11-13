
import React from 'react';
import { SealIcon } from './icons/Icons';

const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-[#111111]">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-black rounded-2xl glow-border p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
              Compromisso de Performance <span className="gradient-text">Agneraia™</span>
            </h2>
            <p className="mt-6 text-gray-300 md:text-lg">
              A Agneraia implementa, configura, treina e ajusta toda a operação em até 7 dias. Se o sistema não estiver funcional conforme o escopo, o valor do setup é absorvido pela própria Agneraia. Simples, direto, transparente. Essa é a segurança de uma empresa que confia na própria engenharia.
            </p>
          </div>
          <div className="text-center flex flex-col items-center">
            <SealIcon className="w-24 h-24 text-yellow-400" />
            <p className="mt-4 font-bold text-yellow-400 tracking-wider">GARANTIA AGNERAIA</p>
            <p className="text-sm text-gray-400">IMPLEMENTAÇÃO EM 7 DIAS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
