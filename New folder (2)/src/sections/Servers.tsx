import ServerCard from '../components/ServerCard';
import Button from '../components/ui/Button';
import survivalImage from '../assets/servers/survival.webp';
import skyblockImage from '../assets/servers/skyblock.webp';
import donutImage from '../assets/servers/donut.webp';
import creativeImage from '../assets/servers/creative.webp';
import { Globe, Cloud, Skull, Palette } from 'lucide-react';

const servers = [
  {
    name: "Survival",
    description: "Whitelisted vanilla Survival gameplay with Land Claim, No TP, and a Webmap!",
    image: survivalImage,
    icon: <Globe className="w-6 h-6 text-[var(--color-gold-500)]" />,
    players: 1240,
    status: "online" as const,
    tags: ["Vanilla", "PvE", "Survival"]
  },
];

export default function Servers() {
  return (
    <section id="servers" className="py-24 bg-cream relative overflow-hidden">
      
      {/* Background Accents (Subtle) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-orange-100/40 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-blue-50/40 rounded-full blur-[100px]"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/50 text-orange-700 text-xs font-bold uppercase tracking-widest mb-4 border border-orange-200/50">
            Our Gamemodes
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-navy-900)] mb-4">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold-500)] to-orange-600">Adventure</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We offer whitelisted, exciting game modes for every type of player. Find your favorite way to play!
          </p>
        </div>

        {/* Server Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-16 lg:gap-y-20">
          {servers.map((server, index) => (
            <ServerCard 
              key={index}
              {...server}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
             <Button variant="outlined" size="lg" className="border-slate-300 hover:border-[var(--color-gold-500)] hover:text-[var(--color-gold-500)] hover:bg-cream">
                View All Servers
             </Button>
        </div>

      </div>
    </section>
  );
}
