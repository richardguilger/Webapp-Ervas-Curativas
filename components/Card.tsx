
import React from 'react';
import { Product } from '../types';

interface CardProps {
  product: Product;
  variant?: 'default' | 'premium';
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ product, variant = 'default', onClick }) => {
  const isPremium = variant === 'premium';
  const overlayColor = isPremium ? 'bg-gradient-to-t from-orange-900/50 to-transparent' : 'bg-gradient-to-t from-green-900/50 to-transparent';

  const CardContent = () => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group flex flex-col h-full">
      <div className="relative">
        <img 
          src={product.imageUrl} 
          alt={product.title}
          className="w-full h-32 object-cover"
        />
        <div className={`absolute inset-0 ${overlayColor}`}></div>
        {!product.isBonus ? (
           <div className="absolute top-2 right-2 bg-white/90 text-brand-primary text-xs font-bold px-2 py-1 rounded-md">
            PRINCIPAL
           </div>
        ) : (
          <div className="absolute top-2 right-2 bg-brand-premium-light text-brand-premium text-xs font-bold px-2 py-1 rounded-md">
            BÔNUS
          </div>
        )}
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-base font-bold text-brand-text leading-tight group-hover:text-brand-primary transition-colors flex-grow">
          {product.title}
        </h3>
        <p className="text-xs text-brand-muted mt-1">{product.description}</p>
      </div>
    </div>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className="text-left h-full w-full">
        <CardContent />
      </button>
    );
  }

  return <CardContent />;
};

export default Card;