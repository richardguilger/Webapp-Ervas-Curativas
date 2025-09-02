
import React, { useState } from 'react';
import { PreparationSection, PreparationContent } from '../types';
import { ChevronDownIcon } from './Icon';
import PlantProfileCard from './PlantProfileCard';

interface PreparationSectionCardProps {
  section: PreparationSection;
}

const ContentRenderer: React.FC<{ content: PreparationContent }> = ({ content }) => {
    switch (content.type) {
        case 'heading':
            return <h2 className="text-xl font-bold text-brand-text mt-4">{content.text}</h2>;
        case 'subheading':
            return <h3 className="text-lg font-bold text-brand-accent mt-3 mb-2">{content.text}</h3>;
        case 'paragraph':
            return <p className="text-brand-muted leading-relaxed">{content.text}</p>;
        case 'list':
            const ListTag = content.ordered ? 'ol' : 'ul';
            const listItemStyle = content.ordered ? 'list-decimal' : 'list-disc';
            return (
                <ListTag className={`pl-5 space-y-2 text-brand-muted ${listItemStyle}`}>
                    {content.items?.map((item, index) => <li key={index}>{item}</li>)}
                </ListTag>
            );
        case 'image':
            return <img src={content.src} alt={content.alt} className="rounded-lg my-3 w-full h-auto object-cover" />;
        case 'note':
            return (
                <div className="bg-brand-secondary/70 p-3 rounded-lg my-2">
                    <p className="text-sm text-brand-accent">{content.text}</p>
                </div>
            );
        case 'link':
            return (
                <a 
                    href={content.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-brand-primary font-semibold hover:underline"
                >
                    {content.text}
                </a>
            );
        case 'table':
            return (
                <div className="overflow-x-auto my-3">
                    <table className="w-full text-sm text-left text-brand-muted">
                        <thead className="text-xs text-brand-text uppercase bg-brand-secondary/70">
                            <tr>
                                {content.headers?.map((header, index) => <th key={index} scope="col" className="px-4 py-2">{header}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {content.rows?.map((row, rowIndex) => (
                                <tr key={rowIndex} className="bg-white border-b border-brand-secondary">
                                    {row.map((cell, cellIndex) => <td key={cellIndex} className="px-4 py-2">{cell}</td>)}
                                tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        case 'plantProfile':
            if (!content.profile) return null;
            return <PlantProfileCard profile={content.profile} />;
        default:
            return null;
    }
};


const PreparationSectionCard: React.FC<PreparationSectionCardProps> = ({ section }) => {
  const [isOpen, setIsOpen] = useState(false);

  const Icon = section.icon;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm transition-shadow duration-300 w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center p-4 text-left gap-4"
        aria-expanded={isOpen}
      >
        <div className="bg-brand-premium-light text-brand-premium p-3 rounded-full">
            <Icon className="w-6 h-6" />
        </div>
        <div className="flex-grow">
          <h3 className="font-bold text-brand-text text-lg">{section.title}</h3>
        </div>
        <ChevronDownIcon 
          className={`w-6 h-6 text-brand-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      <div 
        className={`transition-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[12000px]' : 'max-h-0'}`}
      >
        <div className="px-4 pb-4 space-y-4 text-base">
          <div className="border-t border-black/5 pt-4 space-y-3">
            {section.content.map((contentItem, index) => (
              <ContentRenderer key={index} content={contentItem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreparationSectionCard;