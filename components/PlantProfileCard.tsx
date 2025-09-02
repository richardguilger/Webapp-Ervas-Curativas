import React, { useState } from 'react';
import { PlantProfile } from '../types';
import { ChevronDownIcon } from './Icon';

interface PlantProfileCardProps {
  profile: PlantProfile;
}

const InfoSection: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h4 className="font-bold text-brand-text mb-1">{title}</h4>
        <div className="text-brand-muted text-sm space-y-1">{children}</div>
    </div>
);

const PlantProfileCard: React.FC<PlantProfileCardProps> = ({ profile }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-brand-background rounded-2xl overflow-hidden border border-black/5 my-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center p-3 text-left gap-4"
        aria-expanded={isOpen}
      >
        <img 
          src={profile.images[0]} 
          alt={profile.name}
          className="w-14 h-14 object-cover rounded-lg flex-shrink-0"
        />
        <div className="flex-grow">
          <h3 className="font-semibold text-brand-text">{profile.name}</h3>
          <p className="text-sm text-brand-muted italic">{profile.scientificName}</p>
        </div>
        <ChevronDownIcon 
          className={`w-5 h-5 text-brand-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      <div 
        className={`transition-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}
      >
        <div className="px-4 pb-4 space-y-3">
          <div className="border-t border-black/5 pt-3 space-y-3">
            <InfoSection title="🌿 Parte usada:">
                <p>{profile.usedPart}</p>
            </InfoSection>
            <InfoSection title="⚠️ Toxicidade e efeitos adversos:">
                <p>{profile.toxicity}</p>
            </InfoSection>
            <InfoSection title="🚫 Contraindicações:">
                <p>{profile.contraindications}</p>
            </InfoSection>
            <InfoSection title="✅ Aplicações Terapêuticas:">
                <p>{profile.applications}</p>
            </InfoSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantProfileCard;