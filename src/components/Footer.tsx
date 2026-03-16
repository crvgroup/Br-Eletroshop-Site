import React from 'react';
import { Truck, CreditCard, ShieldCheck, PhoneCall, Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200 pt-12 mt-12">
      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50">
            <div className="bg-[#FFEF00] p-3 rounded-full">
              <Truck size={24} className="text-black" />
            </div>
            <div>
              <h4 className="font-bold text-zinc-800">Frete Grátis</h4>
              <p className="text-xs text-zinc-500">Confira as regras</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50">
            <div className="bg-[#FFEF00] p-3 rounded-full">
              <CreditCard size={24} className="text-black" />
            </div>
            <div>
              <h4 className="font-bold text-zinc-800">Parcele em até 10x</h4>
              <p className="text-xs text-zinc-500">Sem juros no cartão</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50">
            <div className="bg-[#FFEF00] p-3 rounded-full">
              <ShieldCheck size={24} className="text-black" />
            </div>
            <div>
              <h4 className="font-bold text-zinc-800">Compra Segura</h4>
              <p className="text-xs text-zinc-500">Seus dados protegidos</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50">
            <div className="bg-[#FFEF00] p-3 rounded-full">
              <PhoneCall size={24} className="text-black" />
            </div>
            <div>
              <h4 className="font-bold text-zinc-800">Atendimento Especializado</h4>
              <p className="text-xs text-zinc-500">Seg a Sáb, das 8h às 20h</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="bg-zinc-900 text-zinc-300 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex flex-col items-start bg-[#FFEF00] px-4 py-2 rounded-md font-extrabold text-black text-2xl leading-none relative w-fit mb-6">
              <span className="tracking-tight">Br Eletroshop</span>
              <svg width="100" height="12" viewBox="0 0 100 12" className="mt-0.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2 Q 50 12 90 2" stroke="black" strokeWidth="3" strokeLinecap="round" fill="transparent"/>
              </svg>
            </div>
            <p className="text-sm text-zinc-400 mb-6 max-w-sm">
              A sua loja completa de materiais de construção, reforma e decoração. Tudo o que você precisa para sua casa, com os melhores preços.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-zinc-800 p-2 rounded-full hover:bg-[#FFEF00] hover:text-black transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-zinc-800 p-2 rounded-full hover:bg-[#FFEF00] hover:text-black transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-zinc-800 p-2 rounded-full hover:bg-[#FFEF00] hover:text-black transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Institucional</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#FFEF00] transition-colors">Sobre a Br Eletroshop</a></li>
              <li><a href="#" className="hover:text-[#FFEF00] transition-colors">Nossas Lojas</a></li>
              <li><a href="#" className="hover:text-[#FFEF00] transition-colors">Trabalhe Conosco</a></li>
              <li><a href="#" className="hover:text-[#FFEF00] transition-colors">Sustentabilidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Atendimento</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#FFEF00] transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-[#FFEF00] transition-colors">Trocas e Devoluções</a></li>
              <li><a href="#" className="hover:text-[#FFEF00] transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-[#FFEF00] transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#FFEF00] transition-colors">Cartão Br Eletroshop</a></li>
              <li><a href="#" className="hover:text-[#FFEF00] transition-colors">Instalação e Montagem</a></li>
              <li><a href="#" className="hover:text-[#FFEF00] transition-colors">Cursos Gratuitos</a></li>
              <li><a href="#" className="hover:text-[#FFEF00] transition-colors">Venda para Empresas</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-zinc-500 py-6 text-xs text-center border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Br Eletroshop. Todos os direitos reservados.</p>
          <p>www.breletroshop.com.br</p>
        </div>
      </div>
    </footer>
  );
}
