import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import MenuItemCard from './components/MenuItemCard';
import ProductModal from './components/ProductModal';
import { MENU_ITEMS, POPULAR_ITEMS } from './constants';
import { Category, MenuItem } from './types';
import { UtensilsCrossed, ExternalLink } from 'lucide-react';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'ALL'>('ALL');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Filter logic
  const filteredItems = useMemo(() => {
    if (activeCategory === 'ALL') return MENU_ITEMS;
    if (activeCategory === Category.POPULAR) {
      return MENU_ITEMS.filter(item => POPULAR_ITEMS.includes(item.id));
    }
    return MENU_ITEMS.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-cream pb-20 selection:bg-gold-300 selection:text-cocoa relative">
      {/* Premium ambient background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="hidden md:block absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-gold-400/[0.12] rounded-full blur-[140px] animate-aurora"></div>
        <div className="hidden md:block absolute bottom-[10%] left-[-10%] w-[420px] h-[420px] bg-gold-500/[0.1] rounded-full blur-[130px] animate-aurora" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="relative z-10">
        <Header />

        {/* Category navigation aligned after hero for seamless background */}
        <div className="relative z-30">
          <CategoryNav
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        <main className="max-w-6xl mx-auto px-4 md:px-6 pt-12">
          {/* Section Title */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-8">
            <div>
              <span className="text-gold-600/80 text-[11px] font-semibold tracking-[0.3em] uppercase">Menü</span>
              <h2 className="text-3xl md:text-5xl font-bold text-cocoa tracking-tight font-display mt-1">
                {activeCategory === 'ALL' ? 'Tüm Lezzetler' : activeCategory}
              </h2>
            </div>
            <span className="text-gold-600/70 text-sm font-mono shrink-0 sm:pb-1">{filteredItems.length} ürün</span>
          </div>

          {/* Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-7">
              {filteredItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="md:animate-fade-in-up"
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
            <div className="flex flex-col items-center justify-center py-32 text-cocoa/50">
              <div className="glass gold-border p-6 rounded-3xl mb-5">
                <UtensilsCrossed size={48} className="text-gold-500/50" />
              </div>
              <p className="text-lg text-cocoa/60">Bu kategoride henüz lezzet bulunmuyor.</p>
              <button
                onClick={() => setActiveCategory('ALL')}
                className="mt-5 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-white font-semibold text-sm shadow-lg shadow-gold-500/20 hover:-translate-y-0.5 transition-transform"
              >
                Tüm Lezzetlere Dön
              </button>
            </div>
          )}
        </main>

        <ProductModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />

        <footer className="text-center py-16 mt-16 border-t border-cocoa/10 relative">
          <div className="max-w-md mx-auto px-4">
            <h4 className="font-display italic text-3xl mb-2 text-gold-gradient">Chef's Tava</h4>
            <p className="mb-1 text-cocoa/55 font-light tracking-wide">En iyi malzemelerle, en lezzetli anlar.</p>
            <p className="mb-7 text-cocoa/40 text-sm">&copy; {new Date().getFullYear()} Tüm hakları saklıdır.</p>

            <a
              href="https://erdincyilmaz.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass gold-border hover:-translate-y-0.5 transition-all duration-300 group shadow-lg shadow-cocoa/5"
            >
              <span className="text-gold-gradient font-bold tracking-wide text-sm">Powered by Erdinç Yılmaz</span>
              <ExternalLink size={14} className="text-gold-600 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;