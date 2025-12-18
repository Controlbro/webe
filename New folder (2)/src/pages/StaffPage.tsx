import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { staffData } from '../data/StaffData';
import { Users, Crown } from 'lucide-react';

export default function StaffPage() {
  return (
    <div className="min-h-screen bg-cream font-pixelify text-navy flex flex-col">
      <Navbar />
      
      {/* HEADER SECTION */}
      <div className="pt-40 pb-16 px-6 relative overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 bg-red-100/50 rounded-full blur-[80px]"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-gold-100/50 rounded-full blur-[80px]"></div>
         </div>

         <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                <Users className="w-5 h-5 text-[var(--color-gold-500)]" />
                <span className="text-sm font-bold text-slate-500 tracking-widest uppercase font-sans">Our Team</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-navy-900)] mb-6">
                Meet the <span className="text-[var(--color-gold-500)]">Staff</span>
            </h1>
            <p className="text-lg text-slate-500 font-sans max-w-2xl mx-auto leading-relaxed">
                The dedicated team behind TBFMC who work hard to keep the server running, fair, and fun for everyone.
            </p>
         </div>
      </div>

      {/* STAFF LIST SECTION */}
      <div className="flex-1 max-w-7xl mx-auto px-6 md:px-8 pb-32 w-full">
        
        {staffData.map((category, catIndex) => (
            <div key={catIndex} className="mb-20 last:mb-0">
                
                {/* Category Title */}
                <div className="flex items-center gap-4 mb-10">
                    <div className="h-px flex-1 bg-slate-200"></div>
                    <h2 className="text-3xl font-bold text-[var(--color-navy-900)] uppercase tracking-wider">
                        {category.title}
                    </h2>
                    <div className="h-px flex-1 bg-slate-200"></div>
                </div>

                {/* Grid Members */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.members.map((member, index) => {
                        const avatarUrl = member.customImage 
                            ? member.customImage 
                            : `https://minotar.net/helm/${member.name}/100.png`;

                        return (
                            <div key={index} className="group relative break-inside-avoid">
                                {/* Offset Shadow */}
                                <div className={`absolute top-0 left-0 w-full h-full rounded-2xl bg-white border-2 border-[var(--color-navy-900)] shadow-[6px_6px_0px_0px_var(--color-navy-900)] transition-all duration-300 group-hover:shadow-[10px_10px_0px_0px_var(--color-gold-500)] group-hover:-translate-y-1`}>
                                </div>

                                {/* Content Card */}
                                <div className="relative z-10 p-6 h-full flex flex-col items-center text-center">
                                    
                                    {/* Avatar Wrapper */}
                                    <div className="relative mb-6">
                                        <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-slate-100 shadow-sm bg-gray-100">
                                            <img 
                                                src={avatarUrl} 
                                                alt={member.name} 
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        {/* Crown Icon for Founder */}
                                        {category.title === "High Management" && (
                                            <div className="absolute -top-3 -right-3 bg-[var(--color-gold-500)] text-white p-1.5 rounded-full shadow-md border-2 border-white transform rotate-12">
                                                <Crown size={16} fill="currentColor" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Name & Role */}
                                    <h3 className="text-2xl font-bold text-[var(--color-navy-900)] mb-2">
                                        {member.name}
                                    </h3>
                                    
                                    <span className={`inline-block px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider border ${category.color} bg-opacity-50 mb-4`}>
                                        {member.role}
                                    </span>

                                    {/* Description */}
                                    <p className="text-sm text-slate-500 font-sans leading-relaxed">
                                        {member.description}
                                    </p>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        ))}

      </div>

      <Footer />
    </div>
  );
}
