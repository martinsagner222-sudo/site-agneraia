
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', company: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would handle the form submission, e.g., send to an API
        console.log('Form submitted:', formData);
        alert('Diagnóstico solicitado. Entraremos em contato em breve.');
        setFormData({ name: '', email: '', company: '' });
    };

    return (
        <section className="py-20 md:py-32 px-6 bg-black relative">
            <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Inicie Seu Processo de <span className="gradient-text">Automação</span>
                    </h2>
                    <p className="mt-6 text-lg text-gray-300">
                        Você está prestes a implementar uma infraestrutura de inteligência operacional na sua empresa. Nossa equipe estratégica irá analisar seu caso e orientar a melhor arquitetura para o seu fluxo, escala e demanda.
                    </p>
                    <a
                        href="https://wa.me/5538997365520"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-block w-full lg:w-auto text-center bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                    >
                        Falar com Consultor Especialista
                    </a>
                </div>
                
                <div className="bg-[#1A1A1A] p-8 rounded-2xl glow-border">
                    <h3 className="text-xl font-bold text-center text-white mb-6">Solicitar Diagnóstico Estratégico</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="sr-only">Nome</label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Nome Completo" 
                                required 
                                className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0A84FF]"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email Corporativo" 
                                required 
                                className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0A84FF]"
                            />
                        </div>
                        <div>
                            <label htmlFor="company" className="sr-only">Empresa</label>
                            <input 
                                type="text" 
                                name="company" 
                                id="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                placeholder="Nome da Empresa" 
                                required 
                                className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0A84FF]"
                            />
                        </div>
                        <button 
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#0A84FF] to-[#00E1FF] text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-[#0A84FF]/20 transition-all duration-300 transform hover:scale-105"
                        >
                            Solicitar Diagnóstico
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
