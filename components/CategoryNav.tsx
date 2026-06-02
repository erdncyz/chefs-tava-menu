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
    <div className="sticky top-0 z-40 bg-transparent">
      <div
        ref={scrollContainerRef}
        className="max-w-6xl mx-auto flex md:flex-wrap md:justify-center overflow-x-auto md:overflow-visible no-scrollbar px-3 md:px-6 py-3 gap-2.5 w-full snap-x"
      >
        {categories.map((cat) => {
          const active = activeCategory === cat;
          return (
            <button
              key={cat}
              ref={active ? activeBtnRef : null}
              onClick={() => onSelectCategory(cat as Category | 'ALL')}
              className={`
                snap-start flex-shrink-0 whitespace-nowrap flex items-center gap-2.5 px-4 py-2.5 rounded-full text-[14px] font-semibold
                transition-all duration-250 relative overflow-hidden border
                ${active
                  ? 'text-white border-gold-500/60 shadow-[0_8px_22px_-8px_rgba(217,142,35,0.75)]'
                  : 'text-cocoa/60 border-cocoa/12 hover:text-gold-700 hover:border-gold-400/45 hover:bg-gold-400/[0.06]'}
              `}
            >
              {active && (
                <span className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-600 z-0"></span>
              )}
              <span className="relative z-10 flex items-center gap-2.5">
                <span className={active ? 'text-white' : 'text-gold-500/85'}>{ICONS[cat]}</span>
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