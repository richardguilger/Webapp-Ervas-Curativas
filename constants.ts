import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "A Bíblia Secreta das Ervas Curativas",
    description: "Guia completo com mais de 300 plantas medicin...",
    isBonus: false,
    imageUrl: "https://i.postimg.cc/kXqBjwfB/bible-herbs.jpg"
  },
  {
    id: 2,
    title: "Guia Rápido de Uso das Ervas",
    description: "Um guia prático para consulta rápida no dia a dia.",
    isBonus: true,
    imageUrl: "https://i.postimg.cc/d1hK5J9C/quick-guide.jpg"
  },
  {
    id: 3,
    title: "Manual de Preparações Simples",
    description: "Aprenda a fazer chás, tinturas e mais.",
    isBonus: true,
    imageUrl: "https://i.postimg.cc/tJ0M4pCy/preparations-manual.jpg"
  },
  {
    id: 4,
    title: "Receitas Especiais para Artrite",
    description: "Alívio natural para dores e inflamações articulares.",
    isBonus: true,
    imageUrl: "https://i.postimg.cc/L5K73s20/arthritis-recipes.jpg"
  }
];


export const PREMIUM_PRODUCTS: Product[] = [
    {
        id: 5,
        title: "Sucos Curativos",
        description: "Receitas de sucos detox para revitalizar sua saúde.",
        isBonus: false,
        imageUrl: "https://i.postimg.cc/Y0TN8yyp/curative-juices.jpg",
        price: "R$ 49,90"
    },
    {
        id: 6,
        title: "Garrafadas Medicinais",
        description: "Aprenda a criar tinturas e elixires poderosos.",
        isBonus: false,
        imageUrl: "https://i.postimg.cc/PqBYgL5G/medicinal-bottles.jpg",
        price: "R$ 59,90"
    },
    {
        id: 7,
        title: "Pomadas Medicinais",
        description: "Faça suas próprias pomadas para alívio de dores.",
        isBonus: false,
        imageUrl: "https://i.postimg.cc/SRvL2bN2/medicinal-ointments.jpg",
        price: "R$ 59,90"
    }
];