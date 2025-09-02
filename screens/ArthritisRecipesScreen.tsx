import React from 'react';
import { ARTHRITIS_RECIPES_DATA } from '../data/arthritisRecipes';
import PreparationSectionCard from '../components/PreparationSectionCard';

const ArthritisRecipesScreen: React.FC = () => {
    return (
        <div className="space-y-3 animate-fade-in">
            {ARTHRITIS_RECIPES_DATA.map(section => (
                <PreparationSectionCard key={section.id} section={section} />
            ))}
        </div>
    );
};

export default ArthritisRecipesScreen;
