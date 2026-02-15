import React from 'react';
import { MenuItem } from '../types';
import { X, Leaf, Clock, Utensils, ChefHat } from 'lucide-react';
import defaultImg from '../assets/default.jpg';

interface ProductModalProps {
  item: MenuItem | null;
  onClose: () => void;
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

const ProductModal: React.FC<ProductModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  const displayImage = item.image || defaultImg;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
      <div
        className="bg-[#18181b] w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative animate-in zoom-in-95 duration-300 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Image Header */}
        <div className="w-full h-64 relative shrink-0">
          <img
            src={displayImage}
            alt={item.name}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] via-transparent to-black/40"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 z-10"></div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full transition-colors bg-black/30 hover:bg-black/50 text-white backdrop-blur-md border border-white/10"
        >
          <X size={20} />
        </button>


        {/* Content Section */}
        <div className="p-8 flex flex-col h-auto relative overflow-hidden">
          {/* Background Watermark */}
          <div className="absolute -right-12 -top-12 text-white/[0.03] pointer-events-none">
            <ChefHat size={200} />
          </div>

          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-amber-500 text-xs font-bold tracking-wider uppercase border border-amber-500/30 px-3 py-1 rounded-full bg-amber-500/5">
                {item.category}
              </span>
              {item.isSpicy && <span className="text-red-400 text-xs font-bold flex items-center gap-1 bg-red-500/10 px-2 py-1 rounded-full"><PepperIcon className="w-3 h-3 text-red-400" /> Acılı</span>}
              {item.isVegetarian && <span className="text-green-400 text-xs font-bold flex items-center gap-1 bg-green-500/10 px-2 py-1 rounded-full"><Leaf size={12} className="fill-green-400" /> Vejetaryen</span>}
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">{item.name}</h2>

            <div className="h-px w-20 bg-gradient-to-r from-amber-500 to-transparent mb-6"></div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              {item.description}
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white/5 p-3 rounded-2xl text-center border border-white/5 hover:border-amber-500/20 transition-colors">
                <PepperIcon className="w-5 h-5 text-amber-500 mx-auto mb-2" />
                <div className="text-[10px] text-gray-400 uppercase tracking-wide">Lezzet</div>
                <div className="text-white font-bold">{item.isSpicy ? 'Baharatlı' : 'Klasik'}</div>
              </div>
              <div className="bg-white/5 p-3 rounded-2xl text-center border border-white/5 hover:border-amber-500/20 transition-colors">
                <Clock size={20} className="text-blue-400 mx-auto mb-2" />
                <div className="text-[10px] text-gray-400 uppercase tracking-wide">Hazırlık</div>
                <div className="text-white font-bold">15-20 dk</div>
              </div>
              <div className="bg-white/5 p-3 rounded-2xl text-center border border-white/5 hover:border-amber-500/20 transition-colors">
                <Utensils size={20} className="text-green-400 mx-auto mb-2" />
                <div className="text-[10px] text-gray-400 uppercase tracking-wide">Porsiyon</div>
                <div className="text-white font-bold">1 Kişi</div>
              </div>
            </div>

            {/* Footer Action */}
            <div className="flex items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div className="flex flex-col">
                <span className="text-gray-500 text-xs uppercase tracking-wider font-semibold">Fiyat</span>
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">{item.price} TL</span>
              </div>
              <button
                onClick={onClose}
                className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 px-8 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transform hover:-translate-y-0.5 transition-all active:scale-95"
              >
                Tamam
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
