import React from 'react';
import { products } from '../data/mockData';
import { ProductCard } from './ProductCard';

export function ProductSection() {
  return (
    <section className="max-w-7xl mx-auto px-3 py-6 md:py-8 bg-zinc-50/50">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-lg md:text-2xl font-bold text-zinc-800">Ofertas em Destaque</h2>
        <a href="#" className="text-xs md:text-sm font-bold text-blue-600 hover:underline">Ver todas</a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
