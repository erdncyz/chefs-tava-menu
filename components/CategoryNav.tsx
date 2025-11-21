import React, { useRef } from 'react';
import { Category } from '../types';

interface CategoryNavProps {
  activeCategory: Category | 'ALL';
  onSelectCategory: (category: Category | 'ALL') => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ activeCategory, onSelectCategory }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = ['ALL', ...Object.values(Category)];
  const getDisplayName = (cat: string) => cat === 'ALL' ? 'Tümü' : cat;

  return (
    <div className="sticky top-0 z-40 pt-2 pb-4 bg-[#09090b]/95 backdrop-blur-md border-b border-white/5 shadow-2xl">
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto no-scrollbar px-4 gap-3 w-full max-w-7xl mx-auto snap-x"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat as Category | 'ALL')}
            className={`
              snap-start flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 relative overflow-hidden
              ${activeCategory === cat 
                ? 'text-black shadow-[0_0_20px_rgba(245,158,11,0.4)] scale-105' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'}
            `}
          >
            {/* Active Background Gradient */}
            {activeCategory === cat && (
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 z-0"></div>
            )}
            
            {/* Text Content */}
            <span className="relative z-10">{getDisplayName(cat)}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav;