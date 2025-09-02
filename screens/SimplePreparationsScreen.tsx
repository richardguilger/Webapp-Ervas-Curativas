
import React from 'react';
import { PREPARATIONS_DATA } from '../data/simplePreparations';
import PreparationSectionCard from '../components/PreparationSectionCard';


const SimplePreparationsScreen: React.FC = () => {
    return (
        <div className="space-y-3 animate-fade-in">
            {PREPARATIONS_DATA.map(section => (
                <PreparationSectionCard key={section.id} section={section} />
            ))}
        </div>
    );
};

export default SimplePreparationsScreen;