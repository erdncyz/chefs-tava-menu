import React from 'react';
import { MenuItem } from '../types';
import { Leaf, ChevronRight, Utensils } from 'lucide-react';
import defaultImg from '../assets/default.jpg';

interface MenuItemCardProps {
  item: MenuItem;
  onClick: () => void;
}

// Custom Chili Pepper Icon Component (New Design)
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
      className="group relative bg-[#18181b] rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-amber-500/30 shadow-md hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
    >
      {/* Image Section */}
      <div className="w-full h-48 overflow-hidden relative">
        <img
          src={displayImage}
          alt={item.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] via-transparent to-transparent opacity-80"></div>
      </div>


      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow relative z-10">
        <div className="flex justify-between items-start gap-3 mb-3">
          <h3 className="text-xl font-bold text-white leading-snug group-hover:text-amber-500 transition-colors">
            {item.name}
          </h3>

          {/* Badges */}
          <div className="flex gap-1.5 shrink-0 mt-0.5">
            {item.isSpicy && (
              <div className="flex flex-col items-center justify-center bg-red-500/10 border border-red-500/20 px-2 py-1.5 rounded-lg gap-0.5 min-w-[42px]" title="Acılı">
                <PepperIcon className="w-5 h-5 text-red-500" />
                <span className="text-[9px] font-bold text-red-500 uppercase tracking-wider leading-none">ACILI</span>
              </div>
            )}
            {item.isVegetarian && (
              <div className="flex flex-col items-center justify-center bg-green-500/10 border border-green-500/20 px-2 py-1.5 rounded-lg gap-0.5 min-w-[42px]" title="Vejetaryen">
                <Leaf size={18} className="text-green-500" />
                <span className="text-[9px] font-bold text-green-500 uppercase tracking-wider leading-none">VEGE</span>
              </div>
            )}
          </div>
        </div>

        <p className="text-gray-400 text-sm line-clamp-3 mb-6 font-light leading-relaxed flex-grow">
          {item.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5 group-hover:border-amber-500/20 transition-colors">
          {/* Price */}
          <div className="text-2xl font-bold text-white tracking-tight">
            {item.price} <span className="text-sm text-amber-500 font-medium">TL</span>
          </div>

          {/* Action Button */}
          <div className="flex items-center text-xs font-semibold text-gray-500 uppercase tracking-wider group-hover:text-amber-500 transition-colors gap-1">
            İncele <ChevronRight size={14} />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default MenuItemCard;