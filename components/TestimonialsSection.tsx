
import React from 'react';
import { QuoteIcon } from './icons/Icons';

const testimonials = [
  "A Agneraia mudou nossa operação em sete dias.",
  "Nunca mais perdemos cliente por demora no WhatsApp.",
  "A automação trouxe previsibilidade para o negócio.",
  "Crescemos sem contratar mais ninguém.",
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-black">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            A Voz de Quem Já <span className="gradient-text">Está em Comando</span>
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#1A1A1A] p-8 rounded-2xl border border-gray-800 relative overflow-hidden">
                <QuoteIcon className="absolute -top-2 -left-2 w-16 h-16 text-gray-800/50" />
                <p className="relative z-10 text-lg text-white italic">"{testimonial}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
