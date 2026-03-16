export const categories = [
  { id: 1, name: 'Construção', icon: 'HardHat', image: 'https://images.unsplash.com/photo-1504307651254-35680f356f12?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 2, name: 'Ferramentas', icon: 'Wrench', image: 'https://images.unsplash.com/photo-1581147036324-c177711f628c?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 3, name: 'Decoração', icon: 'Sofa', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 4, name: 'Iluminação', icon: 'Lightbulb', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 5, name: 'Jardim', icon: 'Flower2', image: 'https://images.unsplash.com/photo-1416879598553-5698ae2474ae?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 6, name: 'Banheiro', icon: 'Bath', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 7, name: 'Cozinha', icon: 'ChefHat', image: 'https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 8, name: 'Pisos', icon: 'Grid', image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=200&h=200' },
];

export const menuDepartments = [
  {
    id: 'construcao',
    name: 'Construção',
    categories: [
      { name: 'Materiais Básicos', subcategories: ['Cimento', 'Areia e Pedra', 'Tijolos e Blocos', 'Aço para Construção'] },
      { name: 'Telhados', subcategories: ['Telhas', 'Calhas e Rufos', 'Mantas Asfálticas'] },
      { name: 'Portas e Janelas', subcategories: ['Portas de Madeira', 'Janelas de Alumínio', 'Fechaduras e Dobradiças'] }
    ]
  },
  {
    id: 'ferramentas',
    name: 'Ferramentas',
    categories: [
      { name: 'Ferramentas Elétricas', subcategories: ['Furadeiras e Parafusadeiras', 'Serras', 'Lixadeiras e Politrizes'] },
      { name: 'Ferramentas Manuais', subcategories: ['Chaves de Fenda e Philips', 'Alicates', 'Martelos e Marretas'] },
      { name: 'Acessórios', subcategories: ['Brocas', 'Discos de Corte', 'Lixas'] }
    ]
  },
  {
    id: 'decoracao',
    name: 'Decoração',
    categories: [
      { name: 'Quadros e Espelhos', subcategories: ['Quadros Decorativos', 'Espelhos de Parede', 'Molduras'] },
      { name: 'Tapetes e Cortinas', subcategories: ['Tapetes para Sala', 'Cortinas Blackout', 'Persianas'] },
      { name: 'Papel de Parede', subcategories: ['Papel de Parede Vinílico', 'Adesivos de Parede'] }
    ]
  },
  {
    id: 'iluminacao',
    name: 'Iluminação',
    categories: [
      { name: 'Lâmpadas', subcategories: ['Lâmpadas LED', 'Lâmpadas Inteligentes', 'Tubulares'] },
      { name: 'Luminárias', subcategories: ['Pendentes', 'Plafons', 'Arandelas', 'Lustres'] },
      { name: 'Iluminação Externa', subcategories: ['Refletores', 'Balizadores', 'Postes de Luz'] }
    ]
  },
  {
    id: 'banheiro',
    name: 'Banheiro',
    categories: [
      { name: 'Louças Sanitárias', subcategories: ['Vasos Sanitários', 'Cubas', 'Lavatórios'] },
      { name: 'Metais', subcategories: ['Torneiras', 'Misturadores', 'Duchas e Chuveiros'] },
      { name: 'Móveis', subcategories: ['Gabinetes', 'Espelheiras', 'Armários'] }
    ]
  }
];

export const products = [
  {
    id: 1,
    name: 'Furadeira Parafusadeira a Bateria 12V Bivolt',
    brand: 'Bosch',
    price: 299.90,
    oldPrice: 349.90,
    installments: 10,
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=400&h=400',
    badge: 'Mais Vendido'
  },
  {
    id: 2,
    name: 'Porcelanato Esmaltado Polido 70x70cm',
    brand: 'Portobello',
    price: 59.90,
    unit: 'm²',
    installments: 6,
    rating: 4.5,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1502005097973-f54f5000f5c8?auto=format&fit=crop&q=80&w=400&h=400',
  },
  {
    id: 3,
    name: 'Tinta Acrílica Fosca Rende Muito 18L Branco',
    brand: 'Coral',
    price: 389.90,
    oldPrice: 429.90,
    installments: 10,
    rating: 4.9,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=400&h=400',
    badge: 'Oferta'
  },
  {
    id: 4,
    name: 'Pendente Gota Alumínio Preto Fosco',
    brand: 'Taschibra',
    price: 89.90,
    installments: 3,
    rating: 4.6,
    reviews: 45,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?auto=format&fit=crop&q=80&w=400&h=400',
  },
  {
    id: 5,
    name: 'Kit Vaso Sanitário com Caixa Acoplada',
    brand: 'Deca',
    price: 549.90,
    oldPrice: 699.90,
    installments: 10,
    rating: 4.7,
    reviews: 178,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400&h=400',
    badge: 'Frete Grátis'
  },
  {
    id: 6,
    name: 'Serra Circular 7.1/4" 1400W 110V',
    brand: 'Makita',
    price: 459.90,
    installments: 10,
    rating: 4.9,
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80&w=400&h=400',
  },
  {
    id: 7,
    name: 'Chuveiro Eletrônico Acqua Duo 7800W 220V',
    brand: 'Lorenzetti',
    price: 329.90,
    oldPrice: 389.90,
    installments: 10,
    rating: 4.4,
    reviews: 560,
    image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=400&h=400',
  },
  {
    id: 8,
    name: 'Cimento CP II F-32 50kg',
    brand: 'Votorantim',
    price: 32.90,
    installments: 1,
    rating: 4.8,
    reviews: 890,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=400&h=400',
  }
];
