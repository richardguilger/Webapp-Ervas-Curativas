
import React, { useState } from 'react';
import { Herb } from '../types';
import { ChevronDownIcon } from './Icon';

interface HerbCardProps {
  herb: Herb;
}

const HerbCard: React.FC<HerbCardProps> = ({ herb }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm transition-shadow duration-300 w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center p-4 text-left gap-4"
        aria-expanded={isOpen}
      >
        <img 
          src={herb.imagemUrl} 
          alt={herb.nomePopular}
          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
        />
        <div className="flex-grow">
          <h3 className="font-bold text-brand-text">{herb.nomePopular}</h3>
          <p className="text-sm text-brand-muted italic">{herb.nomeCientifico}</p>
        </div>
        <ChevronDownIcon 
          className={`w-6 h-6 text-brand-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      <div 
        className={`transition-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}
      >
        <div className="px-4 pb-4 space-y-4 text-sm">
          <div className="border-t border-black/5 pt-4">
            <p><strong className="font-semibold text-brand-text">Parte usada:</strong> {herb.parteUsada}</p>
            <p><strong className="font-semibold text-brand-text">Forma de uso principal:</strong> {herb.formaDeUsoPrincipal}</p>
          </div>

          <div>
            <h4 className="font-bold text-brand-text mb-2">✅ Para que serve (usos principais):</h4>
            <ul className="list-disc list-inside space-y-1 text-brand-muted">
              {herb.usosPrincipais.map((uso, index) => (
                <li key={index}>{uso}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-text mb-2">Receitas rápidas:</h4>
            <div className="space-y-3">
              {herb.receitasRapidas.map((receita, index) => (
                <div key={index} className="bg-brand-background p-3 rounded-lg">
                  <p className="font-semibold text-brand-accent">{receita.titulo}</p>
                  <p className="text-brand-muted whitespace-pre-line">{receita.descricao}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-brand-text mb-2">⚠️ Cuidados e contraindicações:</h4>
            <p className="text-brand-muted">{herb.cuidadosEContraindicacoes}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HerbCard;
