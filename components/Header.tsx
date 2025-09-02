
import React from 'react';
import SearchBar from './SearchBar';
import { Tab } from '../types';
import { BookIcon, CogIcon, LeafIcon, ArrowLeftIcon, ClipboardListIcon, BookOpenIcon, CreditCardIcon, BeakerIcon, SparklesIcon } from './Icon';

interface HeaderProps {
  activeTab: Tab;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  view: 'main' | 'bible' | 'quickGuide' | 'simplePreparations' | 'arthritisRecipes' | 'checkout' | 'curativeJuices' | 'medicinalBottles' | 'medicinalOintments' | 'ideaGenerator';
  onBack: () => void;
}

const WelcomeHeader: React.FC = () => (
  <div className="flex items-center gap-4">
    <div className="bg-brand-primary text-white p-3 rounded-full">
      <LeafIcon className="w-6 h-6" />
    </div>
    <div>
      <h1 className="text-xl font-bold text-brand-text">Bem-vindo</h1>
      <p className="text-sm text-brand-muted">richardguilger@gmail.com</p>
    </div>
  </div>
);

const PageHeader: React.FC<{ icon: React.ReactNode, title: string, subtitle: string }> = ({ icon, title, subtitle }) => (
    <div className="flex items-center gap-4">
        <div className="bg-brand-premium text-white p-3 rounded-full">
            {icon}
        </div>
        <div>
            <h1 className="text-xl font-bold text-brand-text">{title}</h1>
            <p className="text-sm text-brand-muted">{subtitle}</p>
        </div>
    </div>
);

const SettingsHeader: React.FC<{ icon: React.ReactNode, title: string, subtitle: string }> = ({ icon, title, subtitle }) => (
    <div className="flex items-center gap-4">
        <div className="bg-brand-muted/20 text-brand-muted p-3 rounded-full">
            {icon}
        </div>
        <div>
            <h1 className="text-xl font-bold text-brand-text">{title}</h1>
            <p className="text-sm text-brand-muted">{subtitle}</p>
        </div>
    </div>
);

const BibleHeader: React.FC<{ onBack: () => void }> = ({ onBack }) => (
    <div className="flex items-center gap-3">
        <button onClick={onBack} className="p-2 -ml-2 text-brand-muted hover:text-brand-text transition-colors">
            <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <div className="bg-brand-primary text-white p-3 rounded-full">
            <LeafIcon className="w-6 h-6" />
        </div>
        <div>
            <h1 className="text-xl font-bold text-brand-text">Bíblia das Ervas</h1>
            <p className="text-sm text-brand-muted">Seu guia de remédios naturais</p>
        </div>
    </div>
);

const QuickGuideHeader: React.FC<{ onBack: () => void }> = ({ onBack }) => (
    <div className="flex items-center gap-3">
        <button onClick={onBack} className="p-2 -ml-2 text-brand-muted hover:text-brand-text transition-colors">
            <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <div className="bg-brand-premium text-white p-3 rounded-full">
            <ClipboardListIcon className="w-6 h-6" />
        </div>
        <div>
            <h1 className="text-xl font-bold text-brand-text">Guia Rápido de Uso</h1>
            <p className="text-sm text-brand-muted">Encontre ervas por problema</p>
        </div>
    </div>
);

const SimplePreparationsHeader: React.FC<{ onBack: () => void }> = ({ onBack }) => (
    <div className="flex items-center gap-3">
        <button onClick={onBack} className="p-2 -ml-2 text-brand-muted hover:text-brand-text transition-colors">
            <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <div className="bg-brand-premium text-white p-3 rounded-full">
            <BookOpenIcon className="w-6 h-6" />
        </div>
        <div>
            <h1 className="text-xl font-bold text-brand-text">Manual de Preparações</h1>
            <p className="text-sm text-brand-muted">Aprenda a fazer seus remédios</p>
        </div>
    </div>
);

const ArthritisRecipesHeader: React.FC<{ onBack: () => void }> = ({ onBack }) => (
    <div className="flex items-center gap-3">
        <button onClick={onBack} className="p-2 -ml-2 text-brand-muted hover:text-brand-text transition-colors">
            <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <div className="bg-brand-premium text-white p-3 rounded-full">
            <ClipboardListIcon className="w-6 h-6" />
        </div>
        <div>
            <h1 className="text-xl font-bold text-brand-text">Receitas para Artrite</h1>
            <p className="text-sm text-brand-muted">Alívio natural para dores articulares</p>
        </div>
    </div>
);

const CurativeJuicesHeader: React.FC<{ onBack: () => void }> = ({ onBack }) => (
    <div className="flex items-center gap-3">
        <button onClick={onBack} className="p-2 -ml-2 text-brand-muted hover:text-brand-text transition-colors">
            <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <div className="bg-brand-premium text-white p-3 rounded-full">
            <BeakerIcon className="w-6 h-6" />
        </div>
        <div>
            <h1 className="text-xl font-bold text-brand-text">Sucos Curativos</h1>
            <p className="text-sm text-brand-muted">Receitas para revitalizar sua saúde</p>
        </div>
    </div>
);

const MedicinalBottlesHeader: React.FC<{ onBack: () => void }> = ({ onBack }) => (
    <div className="flex items-center gap-3">
        <button onClick={onBack} className="p-2 -ml-2 text-brand-muted hover:text-brand-text transition-colors">
            <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <div className="bg-brand-premium text-white p-3 rounded-full">
            <BeakerIcon className="w-6 h-6" />
        </div>
        <div>
            <h1 className="text-xl font-bold text-brand-text">Garrafadas Medicinais</h1>
            <p className="text-sm text-brand-muted">Aprenda a criar seus elixires</p>
        </div>
    </div>
);

const MedicinalOintmentsHeader: React.FC<{ onBack: () => void }> = ({ onBack }) => (
    <div className="flex items-center gap-3">
        <button onClick={onBack} className="p-2 -ml-2 text-brand-muted hover:text-brand-text transition-colors">
            <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <div className="bg-brand-premium text-white p-3 rounded-full">
            <BeakerIcon className="w-6 h-6" />
        </div>
        <div>
            <h1 className="text-xl font-bold text-brand-text">Pomadas Medicinais</h1>
            <p className="text-sm text-brand-muted">Faça suas próprias pomadas</p>
        </div>
    </div>
);

const IdeaGeneratorHeader: React.FC<{ onBack: () => void }> = ({ onBack }) => (
    <div className="flex items-center gap-3">
        <button onClick={onBack} className="p-2 -ml-2 text-brand-muted hover:text-brand-text transition-colors">
            <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <div className="bg-brand-premium text-white p-3 rounded-full">
            <SparklesIcon className="w-6 h-6" />
        </div>
        <div>
            <h1 className="text-xl font-bold text-brand-text">Gerador de Ideias</h1>
            <p className="text-sm text-brand-muted">Crie conteúdo com Inteligência Artificial</p>
        </div>
    </div>
);


const CheckoutHeader: React.FC<{ onBack: () => void }> = ({ onBack }) => (
    <div className="flex items-center gap-3">
        <button onClick={onBack} className="p-2 -ml-2 text-brand-muted hover:text-brand-text transition-colors">
            <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <div className="bg-brand-premium text-white p-3 rounded-full">
            <CreditCardIcon className="w-6 h-6" />
        </div>
        <div>
            <h1 className="text-xl font-bold text-brand-text">Finalizar Compra</h1>
            <p className="text-sm text-brand-muted">Pagamento seguro</p>
        </div>
    </div>
);


const Header: React.FC<HeaderProps> = ({ activeTab, searchTerm, setSearchTerm, view, onBack }) => {

  const renderContentView = () => {
    switch(view) {
        case 'bible':
            return <BibleHeader onBack={onBack}/>;
        case 'quickGuide':
            return <QuickGuideHeader onBack={onBack}/>;
        case 'simplePreparations':
            return <SimplePreparationsHeader onBack={onBack}/>;
        case 'arthritisRecipes':
            return <ArthritisRecipesHeader onBack={onBack}/>;
        case 'curativeJuices':
            return <CurativeJuicesHeader onBack={onBack}/>;
        case 'medicinalBottles':
            return <MedicinalBottlesHeader onBack={onBack}/>;
        case 'medicinalOintments':
            return <MedicinalOintmentsHeader onBack={onBack}/>;
        case 'ideaGenerator':
            return <IdeaGeneratorHeader onBack={onBack}/>;
        case 'checkout':
            return <CheckoutHeader onBack={onBack}/>;
        default:
            return null;
    }
  }

  if (view !== 'main') {
    return (
        <header className="p-4 space-y-4 sticky top-0 bg-brand-background/80 backdrop-blur-lg z-10 border-b border-black/5">
             {renderContentView()}
        </header>
    )
  }

  const renderHeaderContent = () => {
    switch (activeTab) {
      case 'inicio':
        return (
          <>
            <WelcomeHeader />
            <SearchBar 
              searchTerm={searchTerm} 
              setSearchTerm={setSearchTerm} 
              placeholder="Pesquisar ervas, doenças..." 
            />
          </>
        );
      case 'maisConteudos':
        return (
          <>
            <PageHeader 
                icon={<BookIcon className="w-6 h-6"/>} 
                title="Mais conteúdos"
                subtitle="Conteúdos premium adicionais"
            />
            <SearchBar 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm} 
                placeholder="Buscar conteúdos premium..." 
            />
          </>
        );
      case 'configuracoes':
        return (
            <SettingsHeader 
                icon={<CogIcon className="w-6 h-6"/>} 
                title="Configurações"
                subtitle="Gerencie sua conta"
            />
        );
      default:
        return null;
    }
  };

  return (
    <header className="p-4 space-y-4">
      {renderHeaderContent()}
    </header>
  );
};

export default Header;