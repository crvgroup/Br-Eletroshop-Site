import React from 'react';

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-3 py-3 md:py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4 h-auto lg:h-[400px]">
        {/* Main Banner */}
        <div className="lg:col-span-2 relative rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=1200&h=600" 
            alt="Festival de Ferramentas" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-[200px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex flex-col justify-center p-5 md:p-12">
            <span className="bg-[#FFEF00] text-black text-[10px] md:text-xs font-bold px-2 py-1 md:px-3 rounded-full w-fit mb-2 md:mb-4 uppercase tracking-wider">
              Especial Mês do Consumidor
            </span>
            <h2 className="text-2xl md:text-5xl font-extrabold text-white mb-2 md:mb-4 leading-tight">
              Festival de <br/>Ferramentas
            </h2>
            <p className="text-zinc-200 text-xs md:text-lg mb-4 md:mb-6 max-w-xs md:max-w-md line-clamp-2 md:line-clamp-none">
              As melhores marcas com até 40% de desconto e frete grátis para todo o Brasil.
            </p>
            <button className="bg-[#FFEF00] text-black text-sm md:text-base font-bold py-2 px-4 md:py-3 md:px-8 rounded-full w-fit hover:bg-yellow-300 transition-colors">
              Aproveitar Ofertas
            </button>
          </div>
        </div>

        {/* Side Banners */}
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4 h-full">
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer h-[120px] md:h-[200px] lg:h-[192px]">
            <img 
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600&h=300" 
              alt="Decoração" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-3 md:p-6">
              <h3 className="text-sm md:text-2xl font-bold text-white mb-0.5 md:mb-1">Decoração</h3>
              <p className="text-zinc-200 text-[10px] md:text-sm">Renove sua casa</p>
            </div>
          </div>
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer h-[120px] md:h-[200px] lg:h-[192px]">
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600&h=300" 
              alt="Banheiros" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-3 md:p-6">
              <h3 className="text-sm md:text-2xl font-bold text-white mb-0.5 md:mb-1">Banheiros</h3>
              <p className="text-zinc-200 text-[10px] md:text-sm">Tudo para sua reforma</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
