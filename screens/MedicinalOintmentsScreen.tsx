
import React from 'react';
import { MEDICINAL_OINTMENTS_DATA } from '../data/medicinalOintments';
import PreparationSectionCard from '../components/PreparationSectionCard';

const MedicinalOintmentsScreen: React.FC = () => {
    return (
        <div className="space-y-3 animate-fade-in">
            {MEDICINAL_OINTMENTS_DATA.map(section => (
                <PreparationSectionCard key={section.id} section={section} />
            ))}
        </div>
    );
};

export default MedicinalOintmentsScreen;