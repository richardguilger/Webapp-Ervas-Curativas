import React from 'react';
import { Product } from '../types';
import { ShieldIcon } from '../components/Icon';

interface CheckoutScreenProps {
  product: Product;
  onConfirmPurchase: (product: Product) => void;
}

const CheckoutScreen: React.FC<CheckoutScreenProps> = ({ product, onConfirmPurchase }) => {
  return (
    <div className="flex flex-col h-full animate-fade-in">
      <div className="flex-grow space-y-6">
        {/* Product Info */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm flex gap-4 p-4 items-center">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
          />
          <div className="flex-grow">
            <h2 className="text-lg font-bold text-brand-text">{product.title}</h2>
            <p className="text-sm text-brand-muted">{product.description}</p>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl p-4 shadow-sm space-y-3">
          <h3 className="font-bold text-brand-text">Resumo do Pedido</h3>
          <div className="flex justify-between items-center text-sm">
            <p className="text-brand-muted">Produto:</p>
            <p className="text-brand-text font-medium">{product.title}</p>
          </div>
          <div className="flex justify-between items-center text-sm">
            <p className="text-brand-muted">Subtotal:</p>
            <p className="text-brand-text font-medium">{product.price}</p>
          </div>
          <div className="border-t border-black/5 my-2"></div>
          <div className="flex justify-between items-center">
            <p className="text-brand-text font-bold">Total:</p>
            <p className="text-brand-primary font-bold text-xl">{product.price}</p>
          </div>
        </div>

        <div className="bg-brand-secondary/50 rounded-2xl p-4 text-center flex items-center justify-center gap-3">
            <ShieldIcon className="w-5 h-5 text-brand-muted"/>
            <p className="text-xs text-brand-muted">Ambiente de pagamento 100% seguro.</p>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-6">
        <button
          onClick={() => onConfirmPurchase(product)}
          className="w-full bg-brand-premium text-white font-bold py-3.5 rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-brand-premium/30 transform hover:scale-105"
        >
          Confirmar Compra
        </button>
      </div>
    </div>
  );
};

export default CheckoutScreen;
