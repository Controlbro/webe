import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import DiscordIcon from './icons/Discord';
import YoutubeIcon from './icons/Youtube';
import XIcon from './icons/X';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuLinks = [
    { name: 'Home', href: '/' },
    { name: 'Map', href: 'http://208.84.101.72:25585' },
    { name: 'Rules', href: '/rules' },
    { name: 'Store', href: '/store' },
    { name: 'Staff', href: '/staff' },
    { name: 'Whitelist', href: '/whitelist' },
    { name: 'Players', href: '/players' },
    { name: 'Vote', href: '/vote' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-6 md:py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex justify-between items-center relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 -ml-2 text-[#0F172A] hover:bg-[#0F172A]/5 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <a href="#" className="block font-bold text-3xl tracking-tight text-[#0F172A] hover:opacity-80 transition-opacity">
              TBFMC
            </a>
          </div>
          <a
            href="https://discord.gg/vSajqg6ChK"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 -mr-2 text-[#0F172A] hover:text-[#5865F2] hover:bg-[#5865F2]/10 rounded-lg transition-all"
            aria-label="Join Discord"
          >
            <div className="w-7 h-7">
               <DiscordIcon />
            </div>
          </a>
          <div 
            ref={menuRef}
            className={`
              absolute top-full left-0 mt-4 w-64 bg-white rounded-2xl shadow-[0px_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 p-2 origin-top-left transition-all duration-200 ease-out
              ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
            `}
          >
            <div className="flex flex-col space-y-1">
              {menuLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-base font-bold text-[#0F172A]/70 hover:text-[#0F172A] hover:bg-gray-50 rounded-xl transition-colors block"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 px-4 pb-2 flex gap-4 justify-center">
               <a href="http://194.153.216.79:25961" className="text-gray-400 hover:text-[#5865F2] transition-colors"><div className="w-5 h-5"><DiscordIcon/></div></a>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}
