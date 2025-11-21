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
    <div className="min-h-screen bg-[#09090b] pb-32 selection:bg-amber-500 selection:text-black">
      <Header />
      
      {/* Search Bar Container - Overlapping Header */}
      <div className="px-4 -mt-8 relative z-30 mb-6">
         <div className="max-w-2xl mx-auto">
            <div className="glass rounded-2xl p-2 flex items-center shadow-2xl">
                <div className="p-2 text-gray-400">
                   <Search size={22} />
                </div>
                <input 
                  type="text"
                  placeholder="Canınız ne çekiyor? (Örn: Köri soslu...)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-transparent text-white px-2 py-2 focus:outline-none placeholder-gray-500 text-lg"
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
              <button onClick={() => {setSearchTerm(''); setActiveCategory('ALL')}} className="mt-4 text-amber-500 hover:underline">Filtreleri Temizle</button>
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
             href="https://erdinc-yilmaz.vercel.app/" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-700 hover:text-amber-500 transition-all duration-300 group"
           >
             <span>Powered by Mercury Software</span>
             <ExternalLink size={10} className="group-hover:-translate-y-0.5 transition-transform" />
           </a>
         </div>
      </footer>
    </div>
  );
};

export default App;