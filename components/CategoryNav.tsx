import React, { useEffect, useRef } from 'react';
import { Category } from '../types';
import { Sparkles, Flame, Beef, Drumstick, Soup, Salad, Cake, CupSoda, LayoutGrid } from 'lucide-react';

interface CategoryNavProps {
  activeCategory: Category | 'ALL';
  onSelectCategory: (category: Category | 'ALL') => void;
}

const ICONS: Record<string, React.ReactNode> = {
  ALL: <LayoutGrid size={15} />,
  [Category.POPULAR]: <Sparkles size={15} />,
  [Category.BURRITO]: <Flame size={15} />,
  [Category.ET]: <Beef size={15} />,
  [Category.TAVUK]: <Drumstick size={15} />,
  [Category.CIGER]: <Soup size={15} />,
  [Category.SALATA]: <Salad size={15} />,
  [Category.TATLI]: <Cake size={15} />,
  [Category.ICECEK]: <CupSoda size={15} />,
};

const CategoryNav: React.FC<CategoryNavProps> = ({ activeCategory, onSelectCategory }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeBtnRef = useRef<HTMLButtonElement>(null);

  const categories = ['ALL', ...Object.values(Category)];
  const getDisplayName = (cat: string) => (cat === 'ALL' ? 'Tümü' : cat);

  // Keep active chip in view
  useEffect(() => {
    activeBtnRef.current?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [activeCategory]);

  return (
    <div className="sticky top-0 z-40 bg-ink/80 backdrop-blur-xl border-b border-white/5">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"></div>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto no-scrollbar px-4 md:px-6 py-3 gap-2.5 w-full max-w-6xl mx-auto snap-x"
      >
        {categories.map((cat) => {
          const active = activeCategory === cat;
          return (
            <button
              key={cat}
              ref={active ? activeBtnRef : null}
              onClick={() => onSelectCategory(cat as Category | 'ALL')}
              className={`
                snap-start flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] font-semibold
                transition-all duration-300 relative overflow-hidden border
                ${active
                  ? 'text-ink border-gold-300/50 shadow-[0_6px_24px_-6px_rgba(217,142,35,0.6)] scale-[1.03]'
                  : 'text-gray-400 border-white/8 hover:text-gold-100 hover:border-gold-400/30 hover:bg-white/[0.03]'}
              `}
            >
              {active && (
                <span className="absolute inset-0 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 z-0"></span>
              )}
              <span className="relative z-10 flex items-center gap-2">
                <span className={active ? 'text-ink' : 'text-gold-400/80'}>{ICONS[cat]}</span>
                {getDisplayName(cat)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryNav;