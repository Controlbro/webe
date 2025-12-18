import DiscordIcon from './icons/Discord';
import YoutubeIcon from './icons/Youtube';
import XIcon from './icons/X';

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-[var(--color-navy-900)]/5 font-pixelify pt-16 pb-8 relative z-10">
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8 mb-16">
          <div className="max-w-xs">
            <div className="text-3xl font-bold text-[var(--color-navy-900)] tracking-tight mb-4">
              TBFMC
            </div>
            <p className="text-slate-500 font-sans text-sm leading-relaxed">
              The ultimate Minecraft survival experience. Join our community, build your empire, and conquer the world without limits.
            </p>
          </div>
          <div className="flex flex-wrap gap-16 md:gap-24">
            <div>
              <h4 className="font-bold text-[var(--color-navy-900)] mb-6 text-lg">Navigation</h4>
              <ul className="space-y-4 font-sans text-sm font-medium text-slate-500">
                <li><a href="#home" className="hover:text-[var(--color-gold-500)] transition-colors">Home</a></li>
                <li><a href="#servers" className="hover:text-[var(--color-gold-500)] transition-colors">Servers</a></li>
                <li><a href="#features" className="hover:text-[var(--color-gold-500)] transition-colors">Features</a></li>
                <li><a href="#reviews" className="hover:text-[var(--color-gold-500)] transition-colors">Reviews</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[var(--color-navy-900)] mb-6 text-lg">Support</h4>
              <ul className="space-y-4 font-sans text-sm font-medium text-slate-500">
                <li><a href="https://store.moonveil.net" target="_blank" className="hover:text-[var(--color-gold-500)] transition-colors">Store</a></li>
                <li><a href="https://vote.moonveil.net" target="_blank" className="hover:text-[var(--color-gold-500)] transition-colors">Vote</a></li>
                <li><a href="#staff" className="hover:text-[var(--color-gold-500)] transition-colors">Staff Team</a></li>
                <li><a href="mailto:support@moonveil.net" className="hover:text-[var(--color-gold-500)] transition-colors">Contact Us</a></li>
              </ul>
            </div>

          </div>
        </div>
        <div className="pt-8 border-t border-[var(--color-navy-900)]/5 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          
          <div className="text-slate-400 font-sans text-sm font-medium text-center md:text-left">
            © 2025 TBFMC. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <SocialLink href="https://discord.gg/vSajqg6ChK" icon={<DiscordIcon />} label="Discord" />
          </div>

        </div>

      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#1E293B]/5 text-[#1E293B] hover:bg-[var(--color-gold-500)] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="w-5 h-5">
        {icon}
      </div>
    </a>
  );
}
