import { useMemo, useState } from 'react';
import { Search, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { playersData } from '../data/PlayersData';

export default function PlayersPage() {
  const [searchName, setSearchName] = useState('');
  const trimmedName = searchName.trim();

  const filteredPlayers = useMemo(() => {
    if (!trimmedName) {
      return playersData;
    }

    return playersData.filter((player) =>
      player.name.toLowerCase().includes(trimmedName.toLowerCase())
    );
  }, [trimmedName]);

  const previewName = trimmedName || 'PlayerName';

  return (
    <div className="min-h-screen bg-cream font-pixelify text-navy flex flex-col">
      <Navbar />

      <div className="pt-40 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-16 left-1/4 w-64 h-64 bg-green-100 rounded-full blur-[80px] opacity-60"></div>
          <div className="absolute top-32 right-1/4 w-72 h-72 bg-blue-100 rounded-full blur-[80px] opacity-60"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <Users className="w-5 h-5 text-[var(--color-gold-500)]" />
            <span className="text-sm font-bold text-slate-500 tracking-widest uppercase font-sans">
              Server Roster
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-navy-900)] mb-6">
            Meet the <span className="text-[var(--color-gold-500)]">Players</span>
          </h1>
          <p className="text-lg text-slate-500 font-sans max-w-2xl mx-auto leading-relaxed">
            Type a player name to instantly load their Minecraft avatar, or browse the roster below.
          </p>
        </div>
      </div>

      <div className="flex-1 max-w-6xl mx-auto px-4 md:px-8 pb-32 w-full">
        <div className="bg-white border-2 border-[var(--color-navy-900)] rounded-3xl shadow-[8px_8px_0px_0px_var(--color-navy-900)] p-6 md:p-10 mb-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <label className="text-sm font-bold uppercase tracking-wider text-slate-500 font-sans">
                Player Name
              </label>
              <div className="relative mt-3">
                <input
                  type="text"
                  value={searchName}
                  onChange={(event) => setSearchName(event.target.value)}
                  placeholder="Type a player name..."
                  className="w-full border-2 border-[var(--color-navy-900)] rounded-2xl bg-cream px-4 py-3 pr-12 text-lg font-sans focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)]"
                />
                <Search className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2" />
              </div>
              <p className="text-sm text-slate-400 font-sans mt-3">
                Showing {filteredPlayers.length} player{filteredPlayers.length === 1 ? '' : 's'}.
              </p>
            </div>

            <div className="flex items-center gap-5 bg-cream rounded-2xl border-2 border-dashed border-[var(--color-navy-900)] px-6 py-4">
              <div className="w-16 h-16 rounded-2xl border-2 border-[var(--color-navy-900)] bg-gray-200 overflow-hidden shadow-md">
                <img
                  src={`https://minotar.net/helm/${previewName}/100.png`}
                  alt={previewName}
                  className="w-full h-full"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400 font-sans">Preview</p>
                <p className="text-2xl font-bold text-[var(--color-navy-900)]">{previewName}</p>
              </div>
            </div>
          </div>
        </div>

        {filteredPlayers.length === 0 ? (
          <div className="text-center text-slate-500 font-sans">
            No players found. Try a different name.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlayers.map((player) => (
              <div
                key={player.name}
                className="relative group rounded-3xl border-2 border-[var(--color-navy-900)] bg-white p-6 shadow-[6px_6px_0px_0px_var(--color-navy-900)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl border-2 border-[var(--color-navy-900)] bg-gray-200 overflow-hidden shadow-md">
                    <img
                      src={`https://minotar.net/helm/${player.name}/100.png`}
                      alt={player.name}
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-sans">Player</p>
                    <p className="text-2xl font-bold text-[var(--color-navy-900)]">{player.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
