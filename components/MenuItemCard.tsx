import React from 'react';
import { MenuItem } from '../types';
import { Leaf, ArrowUpRight } from 'lucide-react';
import defaultImg from '../assets/default.jpg';

interface MenuItemCardProps {
  item: MenuItem;
  onClick: () => void;
}

// Custom Chili Pepper Icon Component
const PepperIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M11.57 2.47a.75.75 0 01.66 1.16l-1.27 2.12c2.9.4 5.63 1.84 7.48 4.32 2.38 3.18 1.9 7.65-.79 10.32a.75.75 0 01-1.06-1.06c2.09-2.08 2.48-5.58.64-8.06-1.75-2.34-4.48-3.58-7.27-3.58-2.55 0-5.05.86-7.06 2.4a.75.75 0 11-.92-1.19C4.45 6.9 7.46 5.75 10.43 5.75c.15 0 .3-.01.45-.01l1.32-2.2a.75.75 0 01-.63-1.07z" />
    <path d="M8.23 7.41a.75.75 0 01.53 1.05 9.04 9.04 0 00-2.06 3.8.75.75 0 01-1.48-.25 10.54 10.54 0 012.41-4.43.75.75 0 01.6-.17z" />
  </svg>
);

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, onClick }) => {
  const displayImage = item.image || defaultImg;

  return (
    <div
      onClick={onClick}
      className="group relative bg-ivory rounded-[1.75rem] overflow-hidden cursor-pointer gold-border shadow-[0_10px_30px_-12px_rgba(42,33,24,0.18)] hover:shadow-[0_24px_50px_-15px_rgba(217,142,35,0.35)] transition-all duration-500 hover:-translate-y-1.5 h-full flex flex-col"
    >
      {/* Image Section */}
      <div className="w-full h-52 md:h-60 overflow-hidden relative">
        <img
          src={displayImage}
          alt={item.name}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1100ms] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/10 to-transparent"></div>

        {/* Badges top-left */}
        <div className="absolute top-3 left-3 flex gap-2">
          {item.isSpicy && (
            <div className="flex items-center gap-1 bg-white/85 backdrop-blur-md rounded-full px-2.5 py-1 border border-red-500/30 shadow-sm" title="Acılı">
              <PepperIcon className="w-3.5 h-3.5 text-red-500" />
              <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider">Acılı</span>
            </div>
          )}
          {item.isVegetarian && (
            <div className="flex items-center gap-1 bg-white/85 backdrop-blur-md rounded-full px-2.5 py-1 border border-emerald-500/30 shadow-sm" title="Vejetaryen">
              <Leaf size={13} className="text-emerald-600" />
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Vege</span>
            </div>
          )}
        </div>

        {/* Price tag */}
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md gold-border rounded-2xl px-3.5 py-2 flex items-baseline gap-1 shadow-lg">
          <span className="text-xl font-bold text-gold-gradient tracking-tight">{item.price}</span>
          <span className="text-[11px] text-gold-600/80 font-semibold">TL</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 pt-4 flex flex-col flex-grow relative z-10">
        <h3 className="text-xl font-bold text-cocoa leading-snug font-display tracking-wide group-hover:text-gold-700 transition-colors mb-2">
          {item.name}
        </h3>

        <p className="text-cocoa/55 text-sm line-clamp-2 mb-5 font-light leading-relaxed flex-grow">
          {item.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-cocoa/8 group-hover:border-gold-500/25 transition-colors">
          <span className="text-[11px] font-semibold text-cocoa/45 uppercase tracking-[0.2em] group-hover:text-gold-700 transition-colors">
            Detaylar
          </span>
          <div className="w-8 h-8 rounded-full bg-sand flex items-center justify-center text-gold-600 group-hover:bg-gradient-to-br group-hover:from-gold-400 group-hover:to-gold-600 group-hover:text-white transition-all duration-300 group-hover:rotate-45">
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
