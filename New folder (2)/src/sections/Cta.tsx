import { ArrowRight } from 'lucide-react';
import SwordsIcon from '../components/icons/Swords';
import mountainLeft from '../assets/cta/mountainleft.svg';
import mountainRight from '../assets/cta/mountainright.svg';
import cloudLeft from '../assets/cta/cloudleft.svg';
import cloudRight from '../assets/cta/cloudright.svg';
import bird from '../assets/cta/bird.svg';
import giraffe from '../assets/cta/giraffe.svg'; 

export default function Cta() {
  return (
    <section className="relative pt-32 pb-20 bg-cream overflow-hidden font-pixelify">
      
      {/* --- SCENE CONTAINER --- */}
      <div className="mx-auto w-full max-w-6xl relative h-[600px] flex flex-col items-center justify-end">
        <div className="absolute top-20 z-0">
            <div className="h-40 w-40 sm:h-64 sm:w-64 rounded-full bg-gradient-to-t from-[#FFBF85]/60 to-[#FF9385]"></div>
        </div>
        {/* Blur */}
        <div className="absolute top-48 sm:top-60 z-0">
            <div className="h-32 w-80 bg-cream/20 backdrop-blur-md"></div>
        </div>        
        {/* Cloud */}
        <img src={cloudLeft} alt="Cloud" className="absolute top-10 left-0 w-32 sm:w-56 opacity-80 z-0" />
        <img src={cloudRight} alt="Cloud" className="absolute top-16 right-0 w-40 sm:w-64 opacity-80 z-0" />
        {/* Bird */}
        <div className="absolute top-24 left-[15%] hidden sm:flex gap-8 opacity-60 z-0">
            <img src={bird} alt="Bird" className="w-8" />
            <img src={bird} alt="Bird" className="w-6 mt-4" />
        </div>
        <div className="absolute top-32 right-[15%] hidden sm:flex gap-6 opacity-60 z-0">
             <img src={bird} alt="Bird" className="w-10" />
        </div>   
        {/* girraffe */}
        <div className="absolute bottom-[220px] left-[15%] sm:left-[20%] z-10 opacity-70 flex items-end gap-1">
             <img src={giraffe} alt="Giraffe" className="w-8 -scale-x-100" />
             <img src={giraffe} alt="Giraffe" className="w-12" />
             <img src={giraffe} alt="Giraffe" className="w-6 opacity-60" />
        </div>
        {/* mountain left */}
        <img 
            src={mountainLeft} 
            alt="Mountain Left" 
            className="absolute bottom-[100px] left-0 w-[300px] sm:w-[600px] z-10 opacity-90" 
        />      
        {/* mountain right */}
        <img 
            src={mountainRight} 
            alt="Mountain Right" 
            className="absolute bottom-[100px] right-0 w-[300px] sm:w-[600px] z-10 opacity-90" 
        />
        <div className="relative z-20 text-center w-full px-4 mb-10">
            {/* Sword */}
            <div className="flex justify-center mb-6">
                <div className="text-[var(--color-gold-500)] drop-shadow-sm">
                    <SwordsIcon width="80" height="80" />
                </div>
            </div>

            {/* TITLE */}
            <h2 className="text-3xl sm:text-5xl font-bold text-[var(--color-navy-900)] mb-4 tracking-tight">
                Ready to Start Your Adventure?
            </h2>

            {/* DESCRIPTION */}
            <p className="text-slate-500 font-sans text-lg max-w-lg mx-auto mb-10 leading-relaxed">
                Join TBFMC today and experience Minecraft Semi-Vanilla survival like never before.
                Build, trade, and conquer in a world without limits.
            </p>

            {/* GET STARTED BUTTON */}
            <a 
                href="https://discord.com/invite/vSajqg6ChK" 
                className="group relative flex w-full max-w-2xl mx-auto items-center justify-between gap-5 overflow-hidden rounded-2xl px-8 py-6 sm:px-12 sm:py-8 bg-gradient-to-br from-[#FFEDE3] to-[#FFEBCC] hover:ring-4 hover:ring-orange-100 transition-all duration-300 shadow-xl shadow-orange-100/50"
            >
                {/* Text */}
                <div className="text-2xl sm:text-3xl font-bold text-[var(--color-navy-900)]">
                    Get Started
                </div>

                {/* Arrow Icon */}
                <div className="pr-2 transform transition-transform duration-300 group-hover:translate-x-2">
                    <ArrowRight size={32} className="text-[var(--color-navy-900)]" />
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 -z-10 h-full w-full bg-white/0 transition duration-300 group-hover:bg-white/20"></div>
            </a>

        </div>

      </div>
    </section>
  );
}
