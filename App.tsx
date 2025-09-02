
import React, { useState, useMemo } from 'react';
import { Tab, Product } from './types';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import MyContentScreen from './screens/MyContentScreen';
import MoreContentScreen from './screens/MoreContentScreen';
import SettingsScreen from './screens/SettingsScreen';
import LoginScreen from './screens/LoginScreen';
import BibleContentScreen from './screens/BibleContentScreen';
import QuickGuideScreen from './screens/QuickGuideScreen';
import SimplePreparationsScreen from './screens/SimplePreparationsScreen';
import ArthritisRecipesScreen from './screens/ArthritisRecipesScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import { PRODUCTS, PREMIUM_PRODUCTS } from './constants';
import CurativeJuicesScreen from './screens/CurativeJuicesScreen';
import MedicinalBottlesScreen from './screens/MedicinalBottlesScreen';
import MedicinalOintmentsScreen from './screens/MedicinalOintmentsScreen';


type View = 'main' | 'bible' | 'quickGuide' | 'simplePreparations' | 'arthritisRecipes' | 'checkout' | 'curativeJuices' | 'medicinalBottles' | 'medicinalOintments';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('inicio');
  const [searchTerm, setSearchTerm] = useState('');
  const [view, setView] = useState<View>('main');
  const [productToCheckout, setProductToCheckout] = useState<Product | null>(null);
  const [unlockedProductIds, setUnlockedProductIds] = useState<number[]>([]);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleProductSelect = (productId: number) => {
    if (productId === 1) setView('bible');
    else if (productId === 2) setView('quickGuide');
    else if (productId === 3) setView('simplePreparations');
    else if (productId === 4) setView('arthritisRecipes');
    else if (productId === 5) setView('curativeJuices');
    else if (productId === 6) setView('medicinalBottles');
    else if (productId === 7) setView('medicinalOintments');
    else {
        // Placeholder for other premium products
        alert(`Acessando conteúdo de: ${[...PRODUCTS, ...PREMIUM_PRODUCTS].find(p => p.id === productId)?.title}`);
        return;
    }
  };
  
  const handlePremiumProductSelect = (product: Product) => {
    setProductToCheckout(product);
    setView('checkout');
  };
  
  const handlePurchaseConfirm = (product: Product) => {
    // Simulate purchase
    setUnlockedProductIds(prev => [...prev, product.id]);
    setProductToCheckout(null);
    setView('main');
    setActiveTab('inicio'); // Go to "My Content" to see the new product
  };

  const myProducts = useMemo(() => {
    const unlockedPremium = PREMIUM_PRODUCTS.filter(p => unlockedProductIds.includes(p.id));
    return [...PRODUCTS, ...unlockedPremium];
  }, [unlockedProductIds]);

  const moreProducts = useMemo(() => {
    return PREMIUM_PRODUCTS.filter(p => !unlockedProductIds.includes(p.id));
  }, [unlockedProductIds]);

  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  const renderCurrentView = () => {
    if (view === 'bible') return <BibleContentScreen />;
    if (view === 'quickGuide') return <QuickGuideScreen />;
    if (view === 'simplePreparations') return <SimplePreparationsScreen />;
    if (view === 'arthritisRecipes') return <ArthritisRecipesScreen />;
    if (view === 'curativeJuices') return <CurativeJuicesScreen />;
    if (view === 'medicinalBottles') return <MedicinalBottlesScreen />;
    if (view === 'medicinalOintments') return <MedicinalOintmentsScreen />;
    if (view === 'checkout' && productToCheckout) return <CheckoutScreen product={productToCheckout} onConfirmPurchase={handlePurchaseConfirm} />;


    switch (activeTab) {
      case 'inicio':
        return <MyContentScreen products={myProducts} searchTerm={searchTerm} onProductSelect={handleProductSelect} />;
      case 'maisConteudos':
        return <MoreContentScreen products={moreProducts} searchTerm={searchTerm} onProductSelect={handlePremiumProductSelect} />;
      case 'configuracoes':
        return <SettingsScreen />;
      default:
        return <MyContentScreen products={myProducts} searchTerm={searchTerm} onProductSelect={handleProductSelect} />;
    }
  };
  
  const mainContentKey = view === 'main' ? activeTab : view;


  return (
    <div className="font-sans text-brand-text flex flex-col w-full max-w-md mx-auto bg-brand-background" style={{minHeight: '100dvh'}}>
        <Header 
          activeTab={activeTab} 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm}
          view={view}
          onBack={() => {
            setView('main');
            setSearchTerm('');
            setProductToCheckout(null);
          }}
        />
        <main className="flex-grow overflow-y-auto p-4" key={mainContentKey}>
          {renderCurrentView()}
        </main>
        {view === 'main' && <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />}
    </div>
  );
};

export default App;