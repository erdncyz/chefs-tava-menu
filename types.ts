export enum Category {
  POPULAR = 'Popüler',
  TAVUK = 'Tavuk Menüleri',
  ET = 'Kırmızı Et',
  CIGER = 'Ciğer',
  ASYA = 'Asya Tava',
  WRAP = 'Wrap',
  BURRITO = 'Burrito',
  MENU = 'Menüler',
  ICECEK = 'İçecekler',
  ALTERNATIF = 'Alternatifler',
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  image?: string;
  calories?: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
