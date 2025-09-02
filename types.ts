export type Tab = 'inicio' | 'maisConteudos' | 'configuracoes';

export interface Product {
  id: number;
  title: string;
  description: string;
  isBonus: boolean;
  imageUrl: string;
  price?: string;
}

export interface Herb {
  id: number;
  nomePopular: string;
  nomeCientifico: string;
  parteUsada: string;
  formaDeUsoPrincipal: string;
  usosPrincipais: string[];
  receitasRapidas: { titulo: string; descricao: string }[];
  cuidadosEContraindicacoes: string;
  imagemUrl: string;
}

export interface QuickGuideProblem {
  problem: string;
  herbs: string[];
}

export interface QuickGuideCategory {
  id: number;
  category: string;
  problems: QuickGuideProblem[];
}

export interface PlantProfile {
  id: string;
  name: string;
  scientificName: string;
  images: string[];
  usedPart: string;
  toxicity: string;
  contraindications: string;
  applications: string;
}

export interface PreparationContent {
    type: 'paragraph' | 'heading' | 'subheading' | 'list' | 'image' | 'link' | 'note' | 'recipe-step' | 'table' | 'plantProfile';
    text?: string;
    items?: string[];
    src?: string;
    alt?: string;
    href?: string;
    ordered?: boolean;
    // For table
    headers?: string[];
    rows?: string[][];
    // For plant profiles
    profile?: PlantProfile;
}


export interface PreparationSection {
  id: string;
  title: string;
  icon: React.FC<{className?: string}>;
  content: PreparationContent[];
}