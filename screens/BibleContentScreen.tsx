
import React, { useState, useMemo } from 'react';
import { ALL_HERBS } from '../data/allHerbs';
import HerbCard from '../components/HerbCard';
import SearchBar from '../components/SearchBar';

const BibleContentScreen: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredHerbs = useMemo(() => {
        if (!searchTerm) {
            return ALL_HERBS;
        }
        return ALL_HERBS.filter(herb =>
            herb.nomePopular.toLowerCase().includes(searchTerm.toLowerCase()) ||
            herb.nomeCientifico.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    return (
        <div className="space-y-4 animate-fade-in">
             <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                placeholder="Pesquisar em A Bíblia das Ervas..."
            />
            <div className="space-y-3">
                {filteredHerbs.map(herb => (
                    <HerbCard key={herb.id} herb={herb} />
                ))}
            </div>
            {filteredHerbs.length === 0 && (
                <div className="text-center py-10">
                    <p className="text-brand-muted">Nenhuma erva encontrada.</p>
                </div>
            )}
        </div>
    );
};

export default BibleContentScreen;
