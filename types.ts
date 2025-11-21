export enum Category {
  POPULAR = 'Popüler',
  KAVURMA = 'Kavurma',
  TAVUK = 'Tavuk Dünyası',
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
  calories?: number; 
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}