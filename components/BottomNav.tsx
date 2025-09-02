import React from 'react';
import { Tab } from '../types';
import { HomeIcon, BookIcon, CogIcon } from './Icon';

interface BottomNavProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const NavItem: React.FC<{
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, icon, isActive, onClick }) => {
  const activeClasses = 'text-brand-primary bg-brand-primary-light';
  const inactiveClasses = 'text-brand-muted';
  
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={`flex flex-col items-center justify-center gap-1 w-full transition-colors duration-200 py-2`}
    >
      <div className={`flex items-center justify-center rounded-full p-3 transition-colors duration-200 ${isActive ? activeClasses : ''}`}>
          {icon}
      </div>
      <span className={`text-xs font-medium ${isActive ? 'text-brand-primary' : inactiveClasses}`}>{label}</span>
    </button>
  );
};

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="sticky bottom-0 bg-white/80 backdrop-blur-lg border-t border-black/5 z-10">
      <div className="flex justify-around items-center h-20 px-2">
        <NavItem
          label="Início"
          icon={<HomeIcon className="h-6 w-6" />}
          isActive={activeTab === 'inicio'}
          onClick={() => setActiveTab('inicio')}
        />
        <NavItem
          label="Mais conteúdos"
          icon={<BookIcon className="h-6 w-6" />}
          isActive={activeTab === 'maisConteudos'}
          onClick={() => setActiveTab('maisConteudos')}
        />
        <NavItem
          label="Configurações"
          icon={<CogIcon className="h-6 w-6" />}
          isActive={activeTab === 'configuracoes'}
          onClick={() => setActiveTab('configuracoes')}
        />
      </div>
    </nav>
  );
};

export default BottomNav;