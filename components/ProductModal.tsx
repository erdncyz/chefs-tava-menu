import React, { useEffect } from 'react';
import { MenuItem } from '../types';
import { X, Leaf, Clock, Utensils, ChefHat } from 'lucide-react';
import defaultImg from '../assets/default.jpg';

interface ProductModalProps {
  item: MenuItem | null;
  onClose: () => void;
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

const ProductModal: React.FC<ProductModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  if (!item) return null;

  const displayImage = item.image || defaultImg;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-ink/80 backdrop-blur-md animate-fade-in"
    >
      <div
        className="bg-espresso w-full max-w-lg rounded-t-[2rem] sm:rounded-[2rem] overflow-hidden shadow-[0_-20px_60px_rgba(0,0,0,0.6)] sm:shadow-2xl gold-border relative animate-scale-in flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile drag handle */}
        <div className="sm:hidden absolute top-2.5 left-1/2 -translate-x-1/2 w-11 h-1.5 rounded-full bg-white/20 z-50"></div>

        {/* Image Header */}
        <div className="w-full h-56 sm:h-64 relative shrink-0">
          <img
            src={displayImage}
            alt={item.name}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-black/30"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent z-10"></div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Kapat"
          className="absolute top-4 right-4 z-50 p-2.5 rounded-full transition-all glass gold-border text-white hover:scale-110 hover:rotate-90"
        >
          <X size={18} />
        </button>

        {/* Content Section */}
        <div className="p-6 sm:p-8 flex flex-col relative overflow-y-auto no-scrollbar">
          {/* Background Watermark */}
          <div className="absolute -right-12 -top-10 text-white/[0.025] pointer-events-none">
            <ChefHat size={200} />
          </div>

          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-gold-200 text-[11px] font-bold tracking-[0.15em] uppercase border border-gold-500/30 px-3 py-1 rounded-full bg-gold-500/5">
                {item.category}
              </span>
              {item.isSpicy && <span className="text-red-300 text-[11px] font-bold flex items-center gap-1 bg-red-500/10 border border-red-500/20 px-2.5 py-1 rounded-full"><PepperIcon className="w-3 h-3 text-red-300" /> Acılı</span>}
              {item.isVegetarian && <span className="text-emerald-300 text-[11px] font-bold flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full"><Leaf size={12} className="fill-emerald-300" /> Vejetaryen</span>}
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight font-display">{item.name}</h2>

            <div className="h-px w-24 bg-gradient-to-r from-gold-400 to-transparent mb-6"></div>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 font-light">
              {item.description}
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="glass rounded-2xl p-3 text-center border border-white/5">
                <PepperIcon className="w-5 h-5 text-gold-400 mx-auto mb-2" />
                <div className="text-[10px] text-gray-500 uppercase tracking-wide">Lezzet</div>
                <div className="text-white font-semibold text-sm">{item.isSpicy ? 'Baharatlı' : 'Klasik'}</div>
              </div>
              <div className="glass rounded-2xl p-3 text-center border border-white/5">
                <Clock size={20} className="text-sky-300 mx-auto mb-2" />
                <div className="text-[10px] text-gray-500 uppercase tracking-wide">Hazırlık</div>
                <div className="text-white font-semibold text-sm">15-20 dk</div>
              </div>
              <div className="glass rounded-2xl p-3 text-center border border-white/5">
                <Utensils size={20} className="text-emerald-300 mx-auto mb-2" />
                <div className="text-[10px] text-gray-500 uppercase tracking-wide">Porsiyon</div>
                <div className="text-white font-semibold text-sm">1 Kişi</div>
              </div>
            </div>

            {/* Footer Action */}
            <div className="flex items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div className="flex flex-col">
                <span className="text-gray-500 text-[11px] uppercase tracking-wider font-semibold">Fiyat</span>
                <span className="text-3xl font-bold text-gold-gradient">{item.price} TL</span>
              </div>
              <button
                onClick={onClose}
                className="bg-gradient-to-r from-gold-300 to-gold-500 hover:from-gold-200 hover:to-gold-400 text-ink font-bold py-3.5 px-8 rounded-2xl shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 transform hover:-translate-y-0.5 transition-all active:scale-95"
              >
                Harika
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
