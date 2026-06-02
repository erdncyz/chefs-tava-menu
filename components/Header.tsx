import React from 'react';
import { Flame, MapPin, Star } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative w-full h-[80vh] min-h-[560px] overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <img
          src="https://png.pngtree.com/thumb_back/fw800/background/20251108/pngtree-chef-cooking-stir-fry-with-flames-erupting-from-a-wok-in-image_20242845.webp"
          alt="Chef's Tava ateş üzerinde wok"
          className="w-full h-full object-cover scale-110 animate-[float_18s_ease-in-out_infinite]"
        />
        {/* Layered cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,10,12,0.7)_100%)]"></div>
      </div>

      {/* Aurora glows */}
      <div className="absolute top-1/4 right-0 w-[420px] h-[420px] bg-gold-500/20 rounded-full blur-[130px] animate-aurora pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-gold-600/15 rounded-full blur-[120px] animate-aurora pointer-events-none" style={{ animationDelay: '4s' }}></div>

      {/* Top bar */}
      <div className="absolute top-0 left-0 w-full z-20 px-6 pt-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-gold-200/90">
            <div className="w-9 h-9 rounded-full glass gold-border flex items-center justify-center">
              <Flame size={16} className="text-gold-300 fill-gold-400/40" />
            </div>
            <span className="font-display italic text-lg tracking-wide hidden sm:block">Chef's Tava</span>
          </div>
          <div className="flex items-center gap-1.5 glass gold-border rounded-full px-3.5 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.7)]"></span>
            <span className="text-[11px] font-medium tracking-wide text-gold-50/80 uppercase">Açık · Sıcak Servis</span>
          </div>
        </div>
      </div>

      {/* Centerpiece content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6">
        <div className="animate-fade-in-up flex flex-col items-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold-400"></span>
            <span className="flex items-center gap-1.5 text-gold-200/90 text-[11px] font-semibold tracking-[0.35em] uppercase">
              <Star size={11} className="fill-gold-400 text-gold-400" /> Premium Mutfak
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold-400"></span>
          </div>

          {/* Title */}
          <h1 className="font-display leading-[0.85] select-none">
            <span className="block text-6xl md:text-8xl font-medium italic shimmer-text drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
              Chef's
            </span>
            <span className="block text-7xl md:text-9xl font-black text-white tracking-tight mt-1 drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
              TAVA
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-7 max-w-md text-gold-50/70 text-lg md:text-xl font-light tracking-wide font-script italic leading-relaxed">
            Ateşle harmanlanan, usta ellerden çıkan eşsiz lezzet yolculuğu.
          </p>

          {/* Scroll hint */}
          <div className="mt-10 flex flex-col items-center gap-2 text-gold-200/50">
            <span className="text-[10px] tracking-[0.3em] uppercase">Menüyü Keşfet</span>
            <div className="w-5 h-9 rounded-full border border-gold-300/30 flex justify-center pt-1.5">
              <span className="w-1 h-2 rounded-full bg-gold-300/70 animate-bounce"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;