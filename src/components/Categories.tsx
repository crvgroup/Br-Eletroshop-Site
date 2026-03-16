import React from 'react';
import { categories } from '../data/mockData';

export function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-3 py-4 md:py-8">
      <h2 className="text-lg md:text-2xl font-bold text-zinc-800 mb-4 md:mb-6">Compre por Categoria</h2>
      
      <div className="grid grid-cols-4 lg:grid-cols-8 gap-2 md:gap-4">
        {categories.map((category) => (
          <a 
            key={category.id} 
            href="#" 
            className="flex flex-col items-center group"
          >
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden mb-2 md:mb-3 border-2 md:border-4 border-transparent group-hover:border-[#FFEF00] transition-colors shadow-sm">
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-[10px] md:text-sm font-medium text-zinc-700 group-hover:text-black text-center leading-tight">
              {category.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
