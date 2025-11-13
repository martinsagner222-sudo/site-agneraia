
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-widest uppercase">
          <span className="font-extrabold">AGNER</span><span className="font-light text-gray-400">AIA</span>
        </div>
        <a 
          href="https://wa.me/5538997365520"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-[#0A84FF] hover:bg-[#0077E6] text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Falar com Consultor
        </a>
      </div>
       <div className="h-[1px] bg-gradient-to-r from-transparent via-[#0A84FF]/30 to-transparent"></div>
    </header>
  );
};

export default Header;
