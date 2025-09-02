
import React from 'react';
import { MEDICINAL_BOTTLES_DATA } from '../data/medicinalBottles';
import PreparationSectionCard from '../components/PreparationSectionCard';

const MedicinalBottlesScreen: React.FC = () => {
    return (
        <div className="space-y-3 animate-fade-in">
            {MEDICINAL_BOTTLES_DATA.map(section => (
                <PreparationSectionCard key={section.id} section={section} />
            ))}
        </div>
    );
};

export default MedicinalBottlesScreen;