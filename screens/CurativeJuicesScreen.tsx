
import React from 'react';
import { CURATIVE_JUICES_DATA } from '../data/curativeJuices';
import PreparationSectionCard from '../components/PreparationSectionCard';

const CurativeJuicesScreen: React.FC = () => {
    return (
        <div className="space-y-3 animate-fade-in">
            {CURATIVE_JUICES_DATA.map(section => (
                <PreparationSectionCard key={section.id} section={section} />
            ))}
        </div>
    );
};

export default CurativeJuicesScreen;
