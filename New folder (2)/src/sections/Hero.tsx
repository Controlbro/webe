import { useState } from 'react';
import { Copy, Check, FileText } from 'lucide-react';

import Button from '../components/ui/Button';
import heroImage from '../assets/hero.webp';
import arrowSvg from '../assets/arrowup.svg';
export default function Hero() {
  const [copied, setCopied] = useState(false);
  const ip = "mc.tbfmc.com"; 

  const handleCopy = () => {
    navigator.clipboard.writeText(ip);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative flex items-center bg-cream overflow-hidden pt-24 pb-16 lg:pt-36 lg:pb-0 lg:min-h-[85vh]">
      
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <svg viewBox="0 0 1000 1000" className="absolute -right-20 -top-40 w-[600px] h-[600px] lg:w-[1000px] lg:h-[1000px] text-orange-100 opacity-60">
          <path fill="currentColor" d="M856.5,338.5c56.5,123.5,14,269.5-35,389c-49,119.5-104.5,212.5-197.5,243.5s-223.5,0-348-73.5C151.5,824,32,708.5,10.5,584S-2.5,326,79.5,199.5s229-199.5,372-192.5S800,215,856.5,338.5z"/>
        </svg>
      </div>

      <div className="container max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left space-y-6 lg:space-y-8 order-1">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-700 font-bold text-sm tracking-wide transform -rotate-1 hover:rotate-0 transition-transform cursor-default border border-orange-200">
              <span>🚀</span>
              <span>SEASON 2 IS LIVE!</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-navy leading-[0.9]">
              TBF<span className="text-transparent bg-clip-text bg-gradient-to-br from-[#F59E0B] to-orange-600">MC</span>
              <br />
              <span className="text-4xl md:text-5xl text-navy-light opacity-80">Vanilla Survival</span>
            </h1>

            <p className="text-lg text-slate-600 w-full md:max-w-xl font-sans font-medium leading-relaxed">
              Experience a whitelisted vanilla survival world with a friendly community.
              <span className="font-bold text-navy"> Apply to join the adventure!</span>
            </p>

            <div className="relative pt-2 w-full md:w-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 relative z-10">
                
                <Button 
                  onClick={handleCopy} 
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto min-w-[200px] shrink-0" 
                  icon={copied ? <Check size={20} className="text-green-400"/> : <Copy size={20}/>}
                  iconPosition="before"
                >
                  {copied ? "IP COPIED!" : "MC.TBFMC.COM"}
                </Button>

                <Button 
                  href="/whitelist"
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto min-w-[180px] shrink-0"
                  icon={<FileText size={20} className="text-white" />}
                  iconPosition="after"
                >
                  Apply to Join
                </Button>

              </div>

              <div className="absolute top-full left-10 mt-4 hidden md:block w-16 opacity-80 transform -rotate-12 pointer-events-none">
                 <img src={arrowSvg} alt="Arrow" className="w-full h-auto" />
              </div>
            </div>
            
          </div>

          <div className="md:col-span-5 relative order-2 h-[350px] md:h-[500px] lg:h-[600px] w-full flex items-center justify-center md:justify-end">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[300px] h-[300px] bg-orange-300/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 animate-float w-full max-w-[350px] md:max-w-full">
               <img 
                 src={heroImage} 
                 alt="Moonveil Hero" 
                 className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
               />
               
               <div className="absolute bottom-10 -left-10 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce hidden lg:flex" style={{animationDuration: '3s'}}>
                  <div className="bg-green-100 p-2 rounded-lg text-green-600">
                    <Check size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-sans">Server Status</p>
                    <p className="text-navy font-bold">Online 24/7</p>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
