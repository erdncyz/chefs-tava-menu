import { Category, MenuItem } from './types';

export const RESTAURANT_NAME = "Chef's Tava";

export const MENU_ITEMS: MenuItem[] = [
  // --- KAVURMA ---
  {
    id: 'k1',
    name: 'Baget Ekmek Arası Kavurma',
    description: 'Julienne doğranmış dana eti, soğan, biber ve domates eşliğinde.',
    price: 340,
    category: Category.KAVURMA,
  },

  // --- TAVUK ---
  {
    id: 't1',
    name: 'Barbekü Soslu Tavuk',
    description: 'Julienne doğranmış tavuk eti, mantar, yeşil biber, Chef\'s Tava patates kızartması ve barbekü sos eşliğinde.',
    price: 350,
    category: Category.TAVUK,
  },
  {
    id: 't2',
    name: 'Buffalo Soslu Tavuk',
    description: 'Julienne doğranmış tavuk eti, mantar, yeşil biber, Chef\'s Tava patates kızartması ve buffalo sos eşliğinde.',
    price: 350,
    category: Category.TAVUK,
    isSpicy: true
  },
  {
    id: 't3',
    name: 'Chilli Soslu Tavuk',
    description: 'Julienne doğranmış tavuk eti, mantar, yeşil biber, Chef\'s Tava patates kızartması ve chilli sos eşliğinde.',
    price: 350,
    category: Category.TAVUK,
    isSpicy: true
  },
  {
    id: 't4',
    name: 'Köri Soslu Tavuk',
    description: 'Julienne doğranmış tavuk eti, Chef\'s Tava patates kızartması ve köri sos eşliğinde.',
    price: 330,
    category: Category.TAVUK,
  },
  {
    id: 't5',
    name: 'Köz Tavuk',
    description: 'Julienne doğranmış tavuk eti, köz yeşil biber, köz arpacık soğanı, köz sarımsak eşliğinde.',
    price: 365,
    category: Category.TAVUK,
  },
  {
    id: 't6',
    name: 'Tereyağlı Tavuk',
    description: 'Julienne doğranmış tavuk eti, tereyağ.',
    price: 325,
    category: Category.TAVUK,
  },
  {
    id: 't7',
    name: 'Teriyaki Soslu Tavuk',
    description: 'Julienne doğranmış tavuk eti, mantar, yeşil biber, Chef\'s Tava patates kızartması ve teriyaki sos eşliğinde.',
    price: 350,
    category: Category.TAVUK,
  },

  // --- KIRMIZI ET ---
  {
    id: 'e1',
    name: 'Beğendili Tava',
    description: 'Dana sırt eti, patlıcanlı beğendi yatağında.',
    price: 450,
    category: Category.ET,
  },
  {
    id: 'e2',
    name: 'Chef\'s Köz Tava',
    description: 'Dana sırt eti, közlenmiş yeşil biber, közlenmiş arpacık soğanı, közlenmiş sarımsak, közlenmiş kapya biber eşliğinde.',
    price: 475,
    category: Category.ET,
  },
  {
    id: 'e3',
    name: 'Sebzeli Tava',
    description: 'Dana sırt eti, yeşilbiber, mantar, havuç ve domates eşliğinde.',
    price: 450,
    category: Category.ET,
  },
  {
    id: 'e4',
    name: 'Spesiyal Tava',
    description: 'Dana sırt eti, yeşil biber, kapya biber, mantar, Chef Tava sos eşliğinde.',
    price: 475,
    category: Category.ET,
    isSpicy: true
  },
  {
    id: 'e5',
    name: 'Tereyağlı Tava',
    description: 'Dana sırt eti, baharatlar ve tereyağ eşliğinde.',
    price: 450,
    category: Category.ET,
  },

  // --- CİĞER ---
  {
    id: 'c1',
    name: 'Chef\'s Tava Ciğer',
    description: 'İnce doğranmış ciğer, tereyağ, sarımsak ve baharatlar eşliğinde.',
    price: 375,
    category: Category.CIGER,
  },
  {
    id: 'c2',
    name: 'Mantarlı Ciğer Tava',
    description: 'İnce doğranmış ciğer, mantar, tereyağ ve baharatlar eşliğinde.',
    price: 375,
    category: Category.CIGER,
  },

  // --- SALATA ---
  {
    id: 's1',
    name: 'Chef\'s Tava Salata',
    description: 'Mevsim yeşillikleri ve özel sos ile.',
    price: 125,
    category: Category.SALATA,
  },

  // --- TATLI ---
  {
    id: 'ta1',
    name: 'Tahinli Kadayıf',
    description: 'Özel tahin ve çıtır kadayıfın eşsiz uyumu.',
    price: 125,
    category: Category.TATLI,
  },

  // --- İÇECEKLER ---
  {
    id: 'i1',
    name: 'Cappy Meyve Suyu',
    description: 'Şeftali, Vişne veya Karışık seçenekleri ile.',
    price: 70,
    category: Category.ICECEK,
  },
  {
    id: 'i2',
    name: 'Coca Cola Kutu',
    description: 'Serinletici kola.',
    price: 70,
    category: Category.ICECEK,
  },
  {
    id: 'i2b',
    name: 'Coca Cola Şişe',
    description: 'Serinletici kola.',
    price: 70,
    category: Category.ICECEK,
  },
  {
    id: 'i3',
    name: 'Fanta Kutu',
    description: 'Serinletici portakal aroması.',
    price: 70,
    category: Category.ICECEK,
  },
  {
    id: 'i3b',
    name: 'Fanta Şişe',
    description: 'Serinletici portakal aroması.',
    price: 70,
    category: Category.ICECEK,
  },
  {
    id: 'i3c',
    name: 'Sprite Şişe',
    description: 'Serinletici limon aroması.',
    price: 70,
    category: Category.ICECEK,
  },
  {
    id: 'i3d',
    name: 'Sprite Kutu',
    description: 'Serinletici limon aroması.',
    price: 70,
    category: Category.ICECEK,
  },
  {
    id: 'i4',
    name: 'Fuse Tea',
    description: 'Soğuk çay çeşitleri.',
    price: 70,
    category: Category.ICECEK,
  },
  {
    id: 'i5',
    name: 'Büyük Ayran',
    description: 'Bol köpüklü, ferahlatıcı.',
    price: 30,
    category: Category.ICECEK,
  },
  {
    id: 'i5b',
    name: 'Küçük Ayran',
    description: 'Bol köpüklü, ferahlatıcı.',
    price: 15,
    category: Category.ICECEK,
  },
  {
    id: 'i6',
    name: 'Soda',
    description: 'Doğal maden suyu.',
    price: 30,
    category: Category.ICECEK,
  },
  {
    id: 'i7',
    name: 'Su',
    description: 'Kaynak suyu.',
    price: 25,
    category: Category.ICECEK,
  }
];

export const POPULAR_ITEMS = ['e2', 't1', 'ta1', 'k1', 'e4'];