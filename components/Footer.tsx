
import React from 'react';
import { AiIcon } from './icons/Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-900/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Coluna 1 - Agneraia */}
          <div className="space-y-4">
            <h3 className="font-bold text-white tracking-wider">AGNERAIA</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Manifesto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
            </ul>
          </div>
          {/* Coluna 2 - Soluções */}
          <div className="space-y-4">
            <h3 className="font-bold text-white tracking-wider">SOLUÇÕES</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Automação via WhatsApp</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Automação de Redes Sociais</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CRM Inteligente</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Painéis e Analytics</a></li>
            </ul>
          </div>
          {/* Coluna 3 - Documentação */}
          <div className="space-y-4">
            <h3 className="font-bold text-white tracking-wider">DOCUMENTAÇÃO</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contratos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Segurança</a></li>
            </ul>
          </div>
          {/* Coluna 4 - Contatos Diretos */}
          <div className="space-y-4">
            <h3 className="font-bold text-white tracking-wider">CONTATOS DIRETOS</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="https://wa.me/5538997365520" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a></li>
              <li><a href="mailto:contato@agneraia.com" className="hover:text-white transition-colors">Email</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Suporte</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-900/50">
        <div className="container mx-auto px-6 py-6 md:flex md:justify-between md:items-center text-center md:text-left">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Agneraia | Inteligência em Comando — Engenharia Operacional de IA para Empresas que Crescem Rápido.</p>
          <div className="flex items-center justify-center gap-2 mt-4 md:mt-0">
            <AiIcon className="w-5 h-5 text-[#0A84FF]/70" />
            <span className="text-gray-600 text-xs tracking-wider">Construído para dominar o futuro.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
