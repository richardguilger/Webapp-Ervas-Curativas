
import React, { useState, useMemo } from 'react';
import { QUICK_GUIDE_DATA } from '../data/quickGuide';
import QuickGuideCategoryCard from '../components/QuickGuideCategoryCard';
import SearchBar from '../components/SearchBar';

const QuickGuideScreen: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = useMemo(() => {
        if (!searchTerm) {
            return QUICK_GUIDE_DATA;
        }
        const lowercasedFilter = searchTerm.toLowerCase();
        return QUICK_GUIDE_DATA.map(category => {
            const filteredProblems = category.problems.filter(problem => 
                problem.problem.toLowerCase().includes(lowercasedFilter) ||
                problem.herbs.some(herb => herb.toLowerCase().includes(lowercasedFilter))
            );
            return { ...category, problems: filteredProblems };
        }).filter(category => category.problems.length > 0);

    }, [searchTerm]);

    return (
        <div className="space-y-4 animate-fade-in">
             <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                placeholder="Pesquisar problemas ou ervas..."
            />
            <div className="space-y-3">
                {filteredData.map(categoryItem => (
                    <QuickGuideCategoryCard key={categoryItem.id} categoryItem={categoryItem} />
                ))}
            </div>
            {filteredData.length === 0 && (
                <div className="text-center py-10">
                    <p className="text-brand-muted">Nenhum resultado encontrado.</p>
                </div>
            )}
        </div>
    );
};

export default QuickGuideScreen;
