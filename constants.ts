
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "A Bíblia Secreta das Ervas Curativas",
    description: "Guia completo com mais de 300 plantas medicin...",
    isBonus: false,
    imageUrl: "https://i.imgur.com/GzB2P0Q.jpeg"
  },
  {
    id: 2,
    title: "Guia Rápido de Uso das Ervas",
    description: "Um guia prático para consulta rápida no dia a dia.",
    isBonus: true,
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Manual de Preparações Simples",
    description: "Aprenda a fazer chás, tinturas e mais.",
    isBonus: true,
    imageUrl: "https://images.unsplash.com/photo-1556928045-16f7f50be0f3?q=80&w=400&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Receitas Especiais para Artrite",
    description: "Alívio natural para dores e inflamações articulares.",
    isBonus: true,
    imageUrl: "https://images.unsplash.com/photo-1596234628020-205a1912423c?q=80&w=400&h=400&fit=crop"
  },
  {
    id: 100, // ID para o Gerador de Ideias
    title: "Gerador de Ideias com IA",
    description: "Crie banners e textos para seus posts com IA.",
    isBonus: true,
    imageUrl: "https://images.unsplash.com/photo-1677756119517-756a188d2278?q=80&w=400&h=400&fit=crop"
  }
];


export const PREMIUM_PRODUCTS: Product[] = [
    {
        id: 5,
        title: "Sucos Curativos",
        description: "Receitas de sucos detox para revitalizar sua saúde.",
        isBonus: false,
        imageUrl: "https://images.unsplash.com/photo-1578351784969-9377b693524b?q=80&w=400&h=400&fit=crop",
        price: "R$ 49,90"
    },
    {
        id: 6,
        title: "Garrafadas Medicinais",
        description: "Aprenda a criar tinturas e elixires poderosos.",
        isBonus: false,
        imageUrl: "https://images.unsplash.com/photo-1620988602684-9187de8e919a?q=80&w=400&h=400&fit=crop",
        price: "R$ 59,90"
    },
    {
        id: 7,
        title: "Pomadas Medicinais",
        description: "Faça suas próprias pomadas para alívio de dores.",
        isBonus: false,
        imageUrl: "https://images.unsplash.com/photo-1598603638739-0210b3523b88?q=80&w=400&h=400&fit=crop",
        price: "R$ 59,90"
    }
];