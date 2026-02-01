import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import MenuItemCard from './components/MenuItemCard';
import ProductModal from './components/ProductModal';
import { MENU_ITEMS, POPULAR_ITEMS } from './constants';
import { Category, MenuItem } from './types';
import { Search, UtensilsCrossed, ExternalLink } from 'lucide-react';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'ALL'>('ALL');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter logic
  const filteredItems = useMemo(() => {
    let items = MENU_ITEMS;

    if (activeCategory !== 'ALL') {
      if (activeCategory === Category.POPULAR) {
        items = MENU_ITEMS.filter(item => POPULAR_ITEMS.includes(item.id));
      } else {
        items = MENU_ITEMS.filter(item => item.category === activeCategory);
      }
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      items = items.filter(item =>
        item.name.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term)
      );
    }

    return items;
  }, [activeCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-[#09090b] pb-32 selection:bg-amber-500 selection:text-black relative">
      {/* Premium Background FX */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      <div className="relative z-10">
        <Header />

        {/* Search Bar Container - Floating Glass */}
        <div className="px-4 -mt-7 relative z-30 mb-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-1.5 flex items-center shadow-[0_8px_32px_rgba(0,0,0,0.4)] ring-1 ring-white/5 group hover:ring-amber-500/30 transition-all duration-500">
              <div className="p-3 text-gray-400 group-hover:text-amber-500 transition-colors">
                <Search size={22} />
              </div>
              <input
                type="text"
                placeholder="Lezzet ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent text-white px-2 py-2 focus:outline-none placeholder-gray-500 font-light text-lg tracking-wide"
              />
            </div>
          </div>
        </div>

        <CategoryNav
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        <main className="max-w-7xl mx-auto px-4 pt-8">
          {/* Section Title */}
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              {activeCategory === 'ALL' ? 'Tüm Lezzetler' : activeCategory}
            </h2>
            <span className="text-amber-500/60 text-sm font-mono">{filteredItems.length} Ürün</span>
          </div>

          {/* Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {filteredItems.map((item) => (
                <div key={item.id} className="animate-fade-in-up">
                  <MenuItemCard
                    item={item}
                    onClick={() => setSelectedItem(item)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 text-gray-600">
              <div className="bg-white/5 p-6 rounded-full mb-4">
                <UtensilsCrossed size={48} className="opacity-50" />
              </div>
              <p className="text-lg">Aradığınız kriterlere uygun lezzet bulunamadı.</p>
              <button onClick={() => { setSearchTerm(''); setActiveCategory('ALL') }} className="mt-4 text-amber-500 hover:underline">Filtreleri Temizle</button>
            </div>
          )}
        </main>

        <ProductModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />

        <footer className="text-center text-gray-600 py-12 text-sm border-t border-white/5 mt-12 bg-[#0c0c0e]">
          <div className="max-w-md mx-auto px-4">
            <h4 className="text-white font-bold text-lg mb-2">Chef's Tava</h4>
            <p className="mb-4 text-gray-500">En iyi malzemelerle, en lezzetli anlar.</p>
            <p className="mb-6">&copy; {new Date().getFullYear()} Tüm hakları saklıdır.</p>

            <a
              href="https://erdincyilmaz.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/10 transition-all duration-300 group shadow-lg"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 font-bold tracking-wide text-sm">Powered by Erdinç Yılmaz</span>
              <ExternalLink size={14} className="text-amber-500 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;