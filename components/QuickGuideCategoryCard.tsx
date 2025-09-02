
import React, { useState } from 'react';
import { QuickGuideCategory } from '../types';
import { ChevronDownIcon } from './Icon';

interface QuickGuideCategoryCardProps {
  categoryItem: QuickGuideCategory;
}

const QuickGuideCategoryCard: React.FC<QuickGuideCategoryCardProps> = ({ categoryItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm transition-shadow duration-300 w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center p-4 text-left gap-4"
        aria-expanded={isOpen}
      >
        <div className="flex-grow">
          <h3 className="font-bold text-brand-text text-lg">{categoryItem.category}</h3>
        </div>
        <ChevronDownIcon 
          className={`w-6 h-6 text-brand-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      <div 
        className={`transition-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[2000px]' : 'max-h-0'}`}
      >
        <div className="px-4 pb-4 space-y-4 text-sm">
          <div className="border-t border-black/5 pt-4 space-y-3">
            {categoryItem.problems.map((problemItem, index) => (
              <div key={index}>
                <p className="font-semibold text-brand-text">{problemItem.problem}:</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {problemItem.herbs.map((herb, herbIndex) => (
                    <span key={herbIndex} className="bg-brand-secondary text-brand-accent text-xs font-medium px-2 py-1 rounded-md">
                      {herb}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickGuideCategoryCard;
