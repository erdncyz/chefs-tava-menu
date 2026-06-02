import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import MenuItemCard from './components/MenuItemCard';
import ProductModal from './components/ProductModal';
import { MENU_ITEMS, POPULAR_ITEMS } from './constants';
import { Category, MenuItem } from './types';
import { Search, UtensilsCrossed, ExternalLink, X } from 'lucide-react';

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
    <div className="min-h-screen bg-ink pb-20 selection:bg-gold-400 selection:text-ink relative">
      {/* Premium ambient background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-gold-500/[0.06] rounded-full blur-[140px] animate-aurora"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[420px] h-[420px] bg-gold-700/[0.07] rounded-full blur-[130px] animate-aurora" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="relative z-10">
        <Header />

        {/* Floating Glass Search Bar */}
        <div className="px-4 -mt-10 relative z-30 mb-10">
          <div className="max-w-2xl mx-auto">
            <div className="glass gold-border rounded-2xl p-1.5 flex items-center shadow-[0_12px_40px_rgba(0,0,0,0.5)] group focus-within:shadow-[0_12px_50px_rgba(217,142,35,0.2)] transition-all duration-500">
              <div className="p-3 text-gray-400 group-focus-within:text-gold-300 transition-colors">
                <Search size={22} />
              </div>
              <input
                type="text"
                placeholder="Lezzet ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent text-white px-1 py-2.5 focus:outline-none placeholder-gray-500 font-light text-lg tracking-wide"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="p-2 mr-1 text-gray-500 hover:text-white transition-colors"
                  aria-label="Aramayı temizle"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>
        </div>

        <CategoryNav
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        <main className="max-w-6xl mx-auto px-4 md:px-6 pt-10">
          {/* Section Title */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-gold-400/70 text-[11px] font-semibold tracking-[0.3em] uppercase">Menü</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-display mt-1">
                {activeCategory === 'ALL' ? 'Tüm Lezzetler' : activeCategory}
              </h2>
            </div>
            <span className="text-gold-300/60 text-sm font-mono shrink-0 pb-1">{filteredItems.length} ürün</span>
          </div>

          {/* Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-7">
              {filteredItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${Math.min(idx * 60, 600)}ms` }}
                >
                  <MenuItemCard
                    item={item}
                    onClick={() => setSelectedItem(item)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 text-gray-600">
              <div className="glass gold-border p-6 rounded-3xl mb-5">
                <UtensilsCrossed size={48} className="text-gold-400/40" />
              </div>
              <p className="text-lg text-gray-400">Aradığınız kriterlere uygun lezzet bulunamadı.</p>
              <button
                onClick={() => { setSearchTerm(''); setActiveCategory('ALL'); }}
                className="mt-5 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 text-ink font-semibold text-sm hover:-translate-y-0.5 transition-transform"
              >
                Filtreleri Temizle
              </button>
            </div>
          )}
        </main>

        <ProductModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />

        <footer className="text-center py-16 mt-16 border-t border-white/5 relative">
          <div className="max-w-md mx-auto px-4">
            <h4 className="font-display italic text-3xl mb-2 text-gold-gradient">Chef's Tava</h4>
            <p className="mb-1 text-gray-500 font-light tracking-wide">En iyi malzemelerle, en lezzetli anlar.</p>
            <p className="mb-7 text-gray-600 text-sm">&copy; {new Date().getFullYear()} Tüm hakları saklıdır.</p>

            <a
              href="https://erdincyilmaz.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass gold-border hover:-translate-y-0.5 transition-all duration-300 group shadow-lg"
            >
              <span className="text-gold-gradient font-bold tracking-wide text-sm">Powered by Erdinç Yılmaz</span>
              <ExternalLink size={14} className="text-gold-300 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;