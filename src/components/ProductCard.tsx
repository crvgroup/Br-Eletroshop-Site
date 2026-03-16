import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    brand: string;
    price: number;
    oldPrice?: number;
    unit?: string;
    installments: number;
    rating: number;
    reviews: number;
    image: string;
    badge?: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const installmentValue = product.price / product.installments;

  return (
    <div className="bg-white rounded-xl md:rounded-2xl p-2 md:p-4 border border-zinc-100 shadow-sm hover:shadow-md transition-shadow relative flex flex-col h-full group">
      {product.badge && (
        <span className="absolute top-2 left-2 md:top-4 md:left-4 bg-[#FFEF00] text-black text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 md:px-2 md:py-1 rounded-full z-10 uppercase tracking-wide">
          {product.badge}
        </span>
      )}
      
      <div className="relative aspect-square mb-2 md:mb-4 overflow-hidden rounded-lg md:rounded-xl bg-zinc-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300 p-2 md:p-4"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <span className="text-[10px] md:text-xs text-zinc-500 font-medium mb-0.5 uppercase tracking-wider">{product.brand}</span>
        <h3 className="text-xs md:text-sm font-medium text-zinc-800 line-clamp-2 mb-1 md:mb-2 min-h-[32px] md:min-h-[40px] leading-tight">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-1 mb-2 md:mb-3">
          <div className="flex text-yellow-400">
            <Star size={12} className="md:w-3.5 md:h-3.5" fill="currentColor" />
          </div>
          <span className="text-[10px] md:text-xs font-bold text-zinc-700">{product.rating}</span>
          <span className="text-[10px] md:text-xs text-zinc-400">({product.reviews})</span>
        </div>

        <div className="mt-auto">
          {product.oldPrice && (
            <p className="text-[10px] md:text-xs text-zinc-400 line-through mb-0">
              R$ {product.oldPrice.toFixed(2).replace('.', ',')}
            </p>
          )}
          <div className="flex items-baseline gap-0.5 md:gap-1">
            <span className="text-xs md:text-sm font-bold text-black">R$</span>
            <span className="text-lg md:text-2xl font-extrabold text-black">
              {Math.floor(product.price)}
            </span>
            <span className="text-xs md:text-sm font-bold text-black">
              ,{((product.price % 1) * 100).toFixed(0).padStart(2, '0')}
            </span>
            {product.unit && <span className="text-[10px] md:text-xs text-zinc-500 ml-1">/ {product.unit}</span>}
          </div>
          <p className="text-[9px] md:text-xs text-green-600 font-medium mt-0.5 md:mt-1 leading-tight">
            em até {product.installments}x de R$ {installmentValue.toFixed(2).replace('.', ',')} s/ juros
          </p>
        </div>
      </div>

      <button className="w-full mt-2 md:mt-4 bg-zinc-100 hover:bg-[#FFEF00] text-black font-bold py-1.5 md:py-2.5 rounded-lg md:rounded-xl flex items-center justify-center gap-1.5 md:gap-2 transition-colors text-xs md:text-base">
        <ShoppingCart size={14} className="md:w-[18px] md:h-[18px]" />
        Comprar
      </button>
    </div>
  );
}
