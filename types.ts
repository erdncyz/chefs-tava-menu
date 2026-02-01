export enum Category {
  POPULAR = 'Popüler',
  BURRITO = 'Burrito Çeşitleri',
  KAVURMA = 'Kavurma',
  TAVUK = 'Tavuk Tavalar',
  ET = 'Kırmızı Et',
  CIGER = 'Ciğer Tava',
  SALATA = 'Salata',
  TATLI = 'Tatlılar',
  ICECEK = 'İçecekler'
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