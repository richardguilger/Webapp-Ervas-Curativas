
import React, { useMemo } from 'react';
import { Product } from '../types';
import Card from '../components/Card';

interface MyContentScreenProps {
  products: Product[];
  searchTerm: string;
  onProductSelect: (productId: number) => void;
}

const MyContentScreen: React.FC<MyContentScreenProps> = ({ products, searchTerm, onProductSelect }) => {
  const filteredProducts = useMemo(() => {
    if (!searchTerm) {
      return products;
    }
    return products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, products]);

  return (
    <div className="space-y-4 animate-fade-in">
      <div>
        <h2 className="text-xl font-bold text-brand-text">Meus conteúdos</h2>
        <p className="text-sm text-brand-muted">Acesse seus materiais exclusivos</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {filteredProducts.map(product => (
          <Card 
            key={product.id} 
            product={product} 
            onClick={() => onProductSelect(product.id)}
          />
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <div className="text-center py-10 col-span-2">
          <p className="text-brand-muted">Nenhum conteúdo encontrado.</p>
        </div>
      )}
    </div>
  );
};

export default MyContentScreen;