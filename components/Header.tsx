import React from 'react';
import { Flame } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative w-full h-[45vh] min-h-[320px] overflow-hidden group">
      {/* Background Image with Modern Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://png.pngtree.com/thumb_back/fw800/background/20251108/pngtree-chef-cooking-stir-fry-with-flames-erupting-from-a-wok-in-image_20242845.webp"
          alt="Chef's Tava Cooking Fire"
          className="w-full h-full object-cover transform transition-transform duration-[20s] group-hover:scale-110"
        />
        {/* Adjusted overlays to make the fire pop while keeping text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-[#09090b]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 pb-12 flex flex-col items-center text-center z-10">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center justify-center gap-2 bg-amber-500/20 border border-amber-500/30 backdrop-blur-md px-4 py-1.5 rounded-full mb-4 shadow-[0_0_20px_rgba(245,158,11,0.4)]">
            <Flame size={14} className="text-amber-500 fill-amber-500" />
            <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">Lezzet Ateşi</span>
          </div>

          <h1 className="text-7xl md:text-9xl mb-6 font-script transform -rotate-2 select-none drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
            <span className="text-amber-500">Chef's</span>
            <span className="ml-4 text-white">Tava</span>
          </h1>

          <p className="text-gray-100 text-sm md:text-lg max-w-lg mx-auto font-medium tracking-wide drop-shadow-lg shadow-black">
            Usta ellerden çıkan, ateşle harmanlanan lezzetler.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;