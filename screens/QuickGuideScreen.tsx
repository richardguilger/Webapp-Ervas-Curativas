
import React, { useState, useMemo } from 'react';
import { QUICK_GUIDE_DATA } from '../data/quickGuide';
import QuickGuideCategoryCard from '../components/QuickGuideCategoryCard';
import SearchBar from '../components/SearchBar';
import { AlertTriangleIcon } from '../components/Icon';

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
            <div className="bg-white p-4 rounded-2xl shadow-sm space-y-3 text-sm">
                <p className="text-brand-muted">Este guia é um material de apoio e facilitação do livro “A Bíblia Perdida dos Remédios Naturais". Para ter resultados melhores e mais seguros, siga as orientações abaixo:</p>
                <ol className="list-decimal list-inside text-brand-muted space-y-1 pl-2">
                    <li>Encontre o problema que deseja resolver e escolha as ervas que atendam ao seu caso;</li>
                    <li>Leia as informações detalhadas no livro “A Bíblia Perdida dos Remédios Naturais”.</li>
                </ol>
             </div>

            <div className="bg-orange-100/50 border-l-4 border-orange-400 text-orange-800 p-4 rounded-r-lg space-y-2 text-sm flex gap-3" role="alert">
                <AlertTriangleIcon className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                    <p className="font-bold">Importante</p>
                    <p>Este material é meramente informativo e não tem o propósito de ser usado para autodiagnóstico e automedicação. Recomendamos fortemente que um médico seja consultado antes de fazer uso de qualquer medicamento, incluindo as ervas (plantas) medicinais. Jamais abandone o tratamento convencional sem a concordância de seu médico. Não nos responsabilizamos por efeitos adversos ou danos causados pelo uso deste material.</p>
                </div>
            </div>

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