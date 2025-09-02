
import React, { useMemo } from 'react';
import { Product } from '../types';
import Card from '../components/Card';
import { LightningIcon } from '../components/Icon';

interface MoreContentScreenProps {
    products: Product[];
    searchTerm: string;
    onProductSelect: (product: Product) => void;
}

const MoreContentScreen: React.FC<MoreContentScreenProps> = ({ products, searchTerm, onProductSelect }) => {
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
            <div className="bg-brand-premium-light p-4 rounded-xl flex items-start gap-4">
                <LightningIcon className="w-5 h-5 text-brand-premium mt-1 flex-shrink-0" />
                <div>
                    <h3 className="font-bold text-brand-text">Conteúdos Premium</h3>
                    <p className="text-sm text-brand-muted">Materiais exclusivos para aprofundar seus conhecimentos</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {filteredProducts.map(product => (
                    <Card 
                        key={product.id} 
                        product={product} 
                        variant="premium" 
                        onClick={() => onProductSelect(product)}
                    />
                ))}
            </div>
            
            {filteredProducts.length === 0 && (
                <div className="text-center py-10 col-span-2">
                    <p className="text-brand-muted">Nenhum conteúdo premium encontrado ou todos já foram adquiridos.</p>
                </div>
            )}
        </div>
    );
};

export default MoreContentScreen;