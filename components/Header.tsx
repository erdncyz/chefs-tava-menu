import React from 'react';
import { Flame, Star } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative w-full h-[68vh] min-h-[500px] overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <img
          src="https://png.pngtree.com/thumb_back/fw800/background/20251108/pngtree-chef-cooking-stir-fry-with-flames-erupting-from-a-wok-in-image_20242845.webp"
          alt="Chef's Tava ateş üzerinde wok"
          className="w-full h-full object-cover scale-110 animate-[float_18s_ease-in-out_infinite]"
        />
        {/* Layered cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-cocoa/30 via-cocoa/35 to-cream"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-b from-transparent via-cream/70 to-cream"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(42,33,24,0.45)_100%)]"></div>
      </div>

      {/* Aurora glows */}
      <div className="absolute top-1/4 right-0 w-[420px] h-[420px] bg-gold-400/25 rounded-full blur-[130px] animate-aurora pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-gold-500/20 rounded-full blur-[120px] animate-aurora pointer-events-none" style={{ animationDelay: '4s' }}></div>

      {/* Top bar */}
      <div className="absolute top-0 left-0 w-full z-20 px-6 pt-6">
        <div className="max-w-6xl mx-auto flex items-center justify-start">
          <div className="flex items-center gap-2 text-white">
            <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center">
              <Flame size={16} className="text-gold-200 fill-gold-300/50" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display italic text-base sm:text-lg tracking-wide drop-shadow-lg">Chef's Tava</span>
              <span className="text-[9px] sm:text-[10px] font-medium tracking-wide text-gold-100/90 drop-shadow">by Diyetisyen K. Furkan Altun</span>
            </div>
          </div>
        </div>
      </div>

      {/* Centerpiece content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end text-center z-10 px-6 pb-16">
        <div className="animate-fade-in-up flex flex-col items-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold-200"></span>
            <span className="flex items-center gap-1.5 text-gold-100 text-[11px] font-semibold tracking-[0.35em] uppercase drop-shadow">
              <Star size={11} className="fill-gold-300 text-gold-300" /> Premium Mutfak
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold-200"></span>
          </div>

          {/* Title */}
          <h1 className="font-display leading-[0.85] select-none">
            <span className="block text-6xl md:text-8xl font-medium italic shimmer-text drop-shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
              Chef's
            </span>
            <span className="block text-7xl md:text-9xl font-black text-white tracking-tight mt-1 drop-shadow-[0_10px_40px_rgba(0,0,0,0.7)]">
              TAVA
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-md text-white/85 text-lg md:text-xl font-light tracking-wide font-script italic leading-relaxed drop-shadow-lg">
            Ateşle harmanlanan, usta ellerden çıkan eşsiz lezzet yolculuğu.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;