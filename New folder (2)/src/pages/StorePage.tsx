import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import { ShoppingCart, Crown, Key, Star, Shield, Package } from 'lucide-react';

// IMPORT DATA
import { rankData } from '../data/store/RankData';
import { keyData } from '../data/store/KeyData';

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState<'ranks' | 'keys'>('ranks');

  // Menu Items Config
  const menuItems = [
    { id: 'ranks', label: 'Ranks', icon: Crown },
    { id: 'keys', label: 'Crate Keys', icon: Key },
  ];

  return (
    <div className="min-h-screen bg-cream font-pixelify text-navy flex flex-col">
      <Navbar />
      <div className="pt-40 pb-16 px-6 relative overflow-hidden bg-cream mb-8">
         
         {/* Background Decoration */}
         <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <svg viewBox="0 0 1000 1000" className="absolute -right-20 -top-40 w-[600px] h-[600px] lg:w-[1000px] lg:h-[1000px] text-orange-100 opacity-60">
              <path fill="currentColor" d="M856.5,338.5c56.5,123.5,14,269.5-35,389c-49,119.5-104.5,212.5-197.5,243.5s-223.5,0-348-73.5C151.5,824,32,708.5,10.5,584S-2.5,326,79.5,199.5s229-199.5,372-192.5S800,215,856.5,338.5z"/>
            </svg>
         </div>

         <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[var(--color-navy-900)]">
                    Server <span className="text-[var(--color-gold-500)]">Store</span>
                </h1>
                <p className="text-slate-500 font-sans text-lg">
                    Support the server and get unique perks!
                </p>
            </div>
            
            {/* Shopping Cart Summary */}
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-xl border-2 border-[var(--color-navy-900)]/5 shadow-sm">
                <div className="p-2 bg-orange-50 rounded-lg text-[var(--color-gold-500)]">
                    <ShoppingCart className="w-5 h-5" />
                </div>
                <div className="font-sans">
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">Cart Total</div>
                    <div className="font-bold text-xl text-[var(--color-navy-900)]">$0.00</div>
                </div>
            </div>
         </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="flex-1 max-w-7xl mx-auto px-4 md:px-8 w-full pb-24 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
            
            {/* --- SIDEBAR MENU --- */}
            <div className="w-full md:w-64 flex-shrink-0">
                <div className="sticky top-32 bg-white rounded-2xl border-2 border-[var(--color-navy-900)] shadow-[6px_6px_0px_0px_var(--color-navy-900)] p-4">
                    <h3 className="text-lg font-bold text-[var(--color-navy-900)] mb-4 px-2 uppercase tracking-widest flex items-center gap-2">
                        <Package size={18} /> Categories
                    </h3>
                    
                    <div className="flex flex-col gap-2">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeCategory === item.id;
                            
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveCategory(item.id as 'ranks' | 'keys')}
                                    className={`
                                        flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-bold text-sm md:text-base
                                        ${isActive 
                                            ? 'bg-[var(--color-navy-900)] text-white shadow-md translate-x-1' 
                                            : 'bg-transparent text-slate-500 hover:bg-slate-100 hover:text-[var(--color-navy-900)]'
                                        }
                                    `}
                                >
                                    <Icon size={20} className={isActive ? 'text-[var(--color-gold-500)]' : ''} />
                                    {item.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Sale Banner */}
                    <div className="mt-8 p-4 bg-orange-50 rounded-xl border border-orange-100 text-center">
                        <div className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-1">Active Sale</div>
                        <div className="text-xl font-bold text-orange-600">40% OFF</div>
                        <div className="text-xs text-slate-500 font-sans mt-1">For all store items</div>
                    </div>
                </div>
            </div>

            {/* --- PRODUCT GRID (Dynamic Content) --- */}
            <div className="flex-1">
                
                {/* Section Title */}
                <div className="mb-8 flex items-center gap-4">
                    <div className="h-8 w-1 bg-[var(--color-gold-500)] rounded-full"></div>
                    <h2 className="text-3xl font-bold text-[var(--color-navy-900)] capitalize">
                        {activeCategory === 'ranks' ? 'Server Ranks' : 'Other'}
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                    {/* LOGIC RENDER: Ranks */}
                    {activeCategory === 'ranks' && rankData.map((item) => (
                        <div key={item.id} className="group relative flex flex-col h-full bg-white rounded-2xl border-2 border-slate-100 hover:border-[var(--color-navy-900)] shadow-sm hover:shadow-[8px_8px_0px_0px_var(--color-navy-900)] transition-all duration-300 transform hover:-translate-y-1">
                            
                            {/* Popular Badge */}
                            {item.isPopular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-gold-500)] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm z-10 flex items-center gap-1">
                                    <Star size={10} fill="currentColor" /> BEST VALUE
                                </div>
                            )}

                            {/* Image Header */}
                            <div className="h-40 bg-slate-50 rounded-t-2xl p-6 flex items-center justify-center relative overflow-hidden group-hover:bg-[var(--color-navy-900)] transition-colors duration-300">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="h-full object-contain drop-shadow-xl transform group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-[var(--color-navy-900)] text-center mb-1">{item.name}</h3>
                                <div className="text-2xl font-bold text-[var(--color-gold-500)] text-center mb-6">${item.price.toFixed(2)}</div>

                                <ul className="space-y-2 mb-6 flex-1">
                                    {item.features.map((feat, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-xs md:text-sm font-sans text-slate-600">
                                            <Shield size={14} className="text-green-500 mt-0.5 shrink-0" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>

                                <Button variant="primary" size="sm" className="w-full">
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    ))}

                    {/* LOGIC RENDER: Keys */}
                    {activeCategory === 'keys' && keyData.map((item) => (
                        <div key={item.id} className="group relative flex flex-col h-full bg-white rounded-2xl border-2 border-slate-100 hover:border-[var(--color-navy-900)] shadow-sm hover:shadow-[8px_8px_0px_0px_var(--color-navy-900)] transition-all duration-300 transform hover:-translate-y-1">
                            
                            {/* Discount Badge */}
                            {item.discount && (
                                <div className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm z-10 rotate-3">
                                    {item.discount}
                                </div>
                            )}

                            <div className="h-40 bg-slate-50 rounded-t-2xl p-6 flex items-center justify-center relative overflow-hidden group-hover:bg-[var(--color-navy-900)] transition-colors duration-300">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="h-24 object-contain drop-shadow-xl transform group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12"
                                />
                            </div>

                            <div className="p-5 flex flex-col flex-1 text-center">
                                <h3 className="text-xl font-bold text-[var(--color-navy-900)] mb-1">{item.name}</h3>
                                <div className="text-2xl font-bold text-[var(--color-gold-500)] mb-4">${item.price.toFixed(2)}</div>
                                
                                <p className="text-sm text-slate-500 font-sans mb-6 flex-1 px-2">
                                    {item.description}
                                </p>

                                <Button variant="primary" size="sm" className="w-full">
                                    View all
                                </Button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
