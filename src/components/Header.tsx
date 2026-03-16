import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, MapPin, Phone, Download, ChevronDown, X, ChevronRight } from 'lucide-react';
import { downloadBloggerTemplate } from '../utils/downloadTemplate';
import { menuDepartments } from '../data/mockData';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileDept, setExpandedMobileDept] = useState<string | null>(null);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);
  
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [activeDesktopDept, setActiveDesktopDept] = useState<string>(menuDepartments[0].id);

  return (
    <header className="w-full flex flex-col relative z-50">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex md:hidden">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="relative w-[85%] max-w-sm bg-white h-full flex flex-col shadow-2xl animate-in slide-in-from-left duration-300">
            <div className="bg-[#FFEF00] p-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
              <span className="font-extrabold text-xl text-black">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-1.5 bg-black/10 rounded-full hover:bg-black/20 transition-colors">
                <X size={24} className="text-black" />
              </button>
            </div>
            
            <div className="overflow-y-auto flex-1 pb-20">
              <div className="p-4 bg-zinc-50 border-b border-zinc-200 flex items-center gap-3">
                <div className="bg-white p-2.5 rounded-full shadow-sm"><User size={20} className="text-zinc-700" /></div>
                <div>
                  <p className="font-bold text-sm text-black">Olá, faça seu login</p>
                  <p className="text-xs text-zinc-500">ou cadastre-se</p>
                </div>
              </div>
              
              <div className="flex flex-col py-2">
                <a href="#" className="px-4 py-3.5 font-bold text-red-600 border-b border-zinc-100 flex items-center gap-2">
                  Ofertas do Dia
                </a>
                
                {menuDepartments.map(dept => (
                  <div key={dept.id} className="border-b border-zinc-100">
                    <button 
                      className={`w-full px-4 py-3.5 flex items-center justify-between font-medium transition-colors ${expandedMobileDept === dept.id ? 'bg-zinc-50 text-black' : 'text-zinc-700'}`}
                      onClick={() => {
                        if (expandedMobileDept === dept.id) {
                          setExpandedMobileDept(null);
                        } else {
                          setExpandedMobileDept(dept.id);
                          setExpandedMobileCategory(null);
                        }
                      }}
                    >
                      {dept.name}
                      <ChevronDown size={18} className={`transition-transform duration-300 ${expandedMobileDept === dept.id ? 'rotate-180 text-black' : 'text-zinc-400'}`} />
                    </button>
                    
                    {/* Mobile Subcategories Accordion */}
                    <div className={`overflow-hidden transition-all duration-300 ${expandedMobileDept === dept.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="bg-zinc-50 px-4 py-2 flex flex-col border-t border-zinc-100 shadow-inner">
                        {dept.categories.map((cat, idx) => {
                          const isCatExpanded = expandedMobileCategory === `${dept.id}-${cat.name}`;
                          return (
                            <div key={idx} className="border-b border-zinc-200/60 last:border-0">
                              <button 
                                className="w-full py-3 flex items-center justify-between font-bold text-sm text-black"
                                onClick={() => setExpandedMobileCategory(isCatExpanded ? null : `${dept.id}-${cat.name}`)}
                              >
                                {cat.name}
                                <ChevronDown size={16} className={`transition-transform duration-300 text-zinc-400 ${isCatExpanded ? 'rotate-180' : ''}`} />
                              </button>
                              <div className={`overflow-hidden transition-all duration-300 ${isCatExpanded ? 'max-h-[500px] opacity-100 pb-3' : 'max-h-0 opacity-0'}`}>
                                <ul className="flex flex-col gap-2 pl-3 border-l-2 border-[#FFEF00] ml-1">
                                  {cat.subcategories.map((sub, subIdx) => (
                                    <li key={subIdx}>
                                      <a href="#" className="text-sm text-zinc-600 hover:text-black block py-1">{sub}</a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Top Bar */}
      <div className="bg-zinc-100 text-zinc-600 text-xs py-1.5 px-4 hidden md:flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><Phone size={14} /> Televendas: 0800 123 4567</span>
          <span className="flex items-center gap-1"><MapPin size={14} /> Lojas Físicas</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-black transition-colors">Atendimento</a>
          <a href="#" className="hover:text-black transition-colors">Meus Pedidos</a>
          <button 
            onClick={downloadBloggerTemplate}
            className="flex items-center gap-1 text-blue-600 font-medium hover:text-blue-800 transition-colors"
            title="Baixar template otimizado para Blogger"
          >
            <Download size={14} /> Baixar Template Blogger
          </button>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-[#FFEF00] py-2 px-3 md:py-4 md:px-4 shadow-sm relative z-40">
        <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between gap-3 md:gap-4">
          
          {/* Logo & Mobile Menu */}
          <div className="flex items-center gap-2 md:gap-3">
            <button className="md:hidden p-1.5 bg-black/5 rounded-md active:bg-black/10 transition-colors" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={26} className="text-black" />
            </button>
            <a href="/" className="flex flex-col items-center justify-center bg-[#FFEF00] px-1 py-1 rounded-md font-extrabold text-black text-3xl md:text-4xl leading-none relative group">
              <span className="tracking-tight">Br Eletroshop</span>
              <svg width="120" height="14" viewBox="0 0 100 12" className="mt-1 group-hover:scale-105 transition-transform" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2 Q 50 12 90 2" stroke="black" strokeWidth="4" strokeLinecap="round" fill="transparent"/>
              </svg>
            </a>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-auto md:flex-1 max-w-3xl order-3 md:order-2 mt-1 md:mt-0">
            <div className="relative flex items-center w-full">
              <input 
                type="text" 
                placeholder="O que você procura?" 
                className="w-full py-2.5 md:py-3 pl-4 pr-10 md:pr-12 rounded-full border-none focus:ring-2 focus:ring-black shadow-inner bg-white text-sm"
              />
              <button className="absolute right-1 p-1.5 md:p-2 bg-black text-[#FFEF00] rounded-full hover:bg-zinc-800 transition-colors">
                <Search size={18} className="md:w-5 md:h-5" />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 md:gap-4 order-2 md:order-3">
            <div className="hidden md:flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="bg-white p-2 rounded-full shadow-sm">
                <User size={20} />
              </div>
              <div className="text-sm leading-tight">
                <p className="font-semibold text-black">Entrar</p>
                <p className="text-zinc-700 text-xs">ou Cadastrar</p>
              </div>
            </div>
            <div className="relative cursor-pointer hover:opacity-80 transition-opacity">
              <div className="bg-white p-2 md:p-2.5 rounded-full shadow-sm">
                <ShoppingCart size={20} className="md:w-[22px] md:h-[22px]" />
              </div>
              <span className="absolute -top-1 -right-1 bg-black text-[#FFEF00] text-[10px] font-bold w-4 h-4 md:w-5 md:h-5 flex items-center justify-center rounded-full shadow-sm">
                3
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu (Desktop) */}
      <nav className="bg-white border-b border-zinc-200 hidden md:block relative z-30">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-6 text-sm font-medium text-zinc-700">
          
          {/* Mega Menu Trigger */}
          <div 
            className="relative"
            onMouseEnter={() => setIsDesktopMenuOpen(true)}
            onMouseLeave={() => setIsDesktopMenuOpen(false)}
          >
            <button className={`flex items-center gap-2 py-3.5 px-3 border-b-2 transition-colors font-bold ${isDesktopMenuOpen ? 'border-[#FFEF00] text-black bg-zinc-50' : 'border-transparent text-black hover:border-[#FFEF00]'}`}>
              <Menu size={18} /> Todos os Departamentos
            </button>
            
            {/* Mega Menu Dropdown */}
            {isDesktopMenuOpen && (
              <div className="absolute top-full left-0 w-[850px] bg-white shadow-2xl border border-zinc-200 rounded-b-xl flex min-h-[450px] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                
                {/* Left Sidebar - Departments */}
                <div className="w-[30%] bg-zinc-50 border-r border-zinc-200 py-3 flex flex-col">
                  {menuDepartments.map(dept => (
                    <button
                      key={dept.id}
                      onMouseEnter={() => setActiveDesktopDept(dept.id)}
                      className={`w-full text-left px-5 py-3.5 flex items-center justify-between text-sm transition-all ${
                        activeDesktopDept === dept.id 
                          ? 'bg-white font-bold text-black border-l-4 border-[#FFEF00] shadow-[0_-1px_2px_rgba(0,0,0,0.02),0_1px_2px_rgba(0,0,0,0.02)] relative z-10' 
                          : 'font-medium text-zinc-600 hover:bg-zinc-100 border-l-4 border-transparent'
                      }`}
                    >
                      {dept.name}
                      <ChevronRight size={16} className={activeDesktopDept === dept.id ? 'text-black' : 'text-zinc-300'} />
                    </button>
                  ))}
                </div>
                
                {/* Right Area - Categories & Subcategories */}
                <div className="w-[70%] p-8 bg-white">
                  <h3 className="text-2xl font-extrabold text-black mb-6 pb-4 border-b border-zinc-100">
                    {menuDepartments.find(d => d.id === activeDesktopDept)?.name}
                  </h3>
                  <div className="grid grid-cols-2 gap-x-10 gap-y-8">
                    {menuDepartments.find(d => d.id === activeDesktopDept)?.categories.map((cat, idx) => (
                      <div key={idx}>
                        <a href="#" className="font-bold text-black mb-3 flex items-center gap-1 hover:text-blue-600 transition-colors group">
                          {cat.name} <ChevronRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                        </a>
                        <ul className="flex flex-col gap-2.5">
                          {cat.subcategories.map((sub, subIdx) => (
                            <li key={subIdx}>
                              <a href="#" className="text-sm text-zinc-500 hover:text-black hover:underline transition-all">{sub}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Quick Links */}
          <a href="#" className="py-3.5 px-2 hover:text-black border-b-2 border-transparent hover:border-[#FFEF00] transition-colors text-red-600 font-bold">
            Ofertas do Dia
          </a>
          {menuDepartments.slice(0, 5).map(dept => (
            <a key={dept.id} href="#" className="py-3.5 px-2 hover:text-black border-b-2 border-transparent hover:border-[#FFEF00] transition-colors">
              {dept.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
