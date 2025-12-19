import { useState } from 'react';
import { Send, ShieldCheck, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';

const webhookUrl = import.meta.env.VITE_WHITELIST_WEBHOOK_URL as string | undefined;

export default function WhitelistPage() {
  const [formValues, setFormValues] = useState({
    age: '',
    ign: '',
    discord: '',
    notes: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!webhookUrl) {
      setStatus('error');
      setStatusMessage('Whitelist webhook is not configured yet. Please try again later.');
      return;
    }

    setStatus('submitting');
    setStatusMessage('Submitting your application...');

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: '📨 New whitelist application received!',
          embeds: [
            {
              title: 'Whitelist Application',
              color: 1541819,
              fields: [
                { name: 'Age', value: formValues.age || 'N/A', inline: true },
                { name: 'IGN', value: formValues.ign || 'N/A', inline: true },
                { name: 'Discord', value: formValues.discord || 'N/A', inline: true },
                { name: 'Notes', value: formValues.notes || 'N/A', inline: false },
              ],
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error('Webhook request failed.');
      }

      setStatus('success');
      setStatusMessage('Application submitted! Join Discord to see your status.');
      setFormValues({ age: '', ign: '', discord: '', notes: '' });
    } catch (error) {
      setStatus('error');
      setStatusMessage('Something went wrong. Please try again in a moment.');
    }
  };

  return (
    <div className="min-h-screen bg-cream font-pixelify text-navy flex flex-col">
      <Navbar />

      <div className="pt-40 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-12 left-1/4 w-64 h-64 bg-orange-100 rounded-full blur-[90px] opacity-60"></div>
          <div className="absolute top-32 right-1/4 w-72 h-72 bg-blue-100 rounded-full blur-[90px] opacity-60"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <ShieldCheck className="w-5 h-5 text-[var(--color-gold-500)]" />
            <span className="text-sm font-bold text-slate-500 tracking-widest uppercase font-sans">
              Whitelist Application
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-navy-900)] mb-6">
            Apply for <span className="text-[var(--color-gold-500)]">Whitelist</span>
          </h1>
          <p className="text-lg text-slate-500 font-sans max-w-2xl mx-auto leading-relaxed">
            Submit your details and join Discord to see whether your application is accepted.
          </p>
        </div>
      </div>

      <div className="flex-1 max-w-5xl mx-auto px-4 md:px-8 pb-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10">
          <form
            onSubmit={handleSubmit}
            className="bg-white border-2 border-[var(--color-navy-900)] rounded-3xl shadow-[8px_8px_0px_0px_var(--color-navy-900)] p-6 md:p-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-bold uppercase tracking-wider text-slate-500 font-sans">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  min={1}
                  value={formValues.age}
                  onChange={handleChange}
                  placeholder="Your age"
                  className="mt-2 w-full border-2 border-[var(--color-navy-900)] rounded-2xl bg-cream px-4 py-3 text-lg font-sans focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)]"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-bold uppercase tracking-wider text-slate-500 font-sans">
                  In-Game Name (IGN)
                </label>
                <input
                  type="text"
                  name="ign"
                  value={formValues.ign}
                  onChange={handleChange}
                  placeholder="Minecraft username"
                  className="mt-2 w-full border-2 border-[var(--color-navy-900)] rounded-2xl bg-cream px-4 py-3 text-lg font-sans focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)]"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-bold uppercase tracking-wider text-slate-500 font-sans">
                  Discord Name
                </label>
                <input
                  type="text"
                  name="discord"
                  value={formValues.discord}
                  onChange={handleChange}
                  placeholder="Example#0000"
                  className="mt-2 w-full border-2 border-[var(--color-navy-900)] rounded-2xl bg-cream px-4 py-3 text-lg font-sans focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)]"
                  required
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="text-sm font-bold uppercase tracking-wider text-slate-500 font-sans">
                Notes
              </label>
              <textarea
                name="notes"
                value={formValues.notes}
                onChange={handleChange}
                placeholder="Tell us about yourself or your plans on the server."
                rows={5}
                className="mt-2 w-full border-2 border-[var(--color-navy-900)] rounded-2xl bg-cream px-4 py-3 text-lg font-sans focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)]"
              />
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full justify-center"
                icon={<Send size={18} />}
                iconPosition="after"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
              </Button>
              {statusMessage && (
                <p
                  className={`text-sm font-sans ${
                    status === 'success' ? 'text-green-600' : 'text-orange-500'
                  }`}
                >
                  {statusMessage}
                </p>
              )}
            </div>
          </form>

          <div className="flex flex-col gap-6">
            <div className="bg-white border-2 border-[var(--color-navy-900)] rounded-3xl shadow-[6px_6px_0px_0px_var(--color-navy-900)] p-6">
              <h2 className="text-2xl font-bold text-[var(--color-navy-900)] mb-3">
                What happens next?
              </h2>
              <p className="text-slate-500 font-sans leading-relaxed">
                Applications are reviewed by staff. Join Discord to check your status and chat while you wait.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#FFEDE3] to-[#FFFBF0] border-2 border-[var(--color-gold-500)] rounded-3xl shadow-[6px_6px_0px_0px_var(--color-gold-500)] p-6">
              <h3 className="text-xl font-bold text-[var(--color-navy-900)] mb-4">
                Join the Discord
              </h3>
              <p className="text-slate-500 font-sans leading-relaxed mb-6">
                Stay updated on whitelist decisions and community announcements.
              </p>
              <Button
                href="https://discord.gg/vSajqg6ChK"
                target="_blank"
                variant="outlined"
                size="lg"
                className="w-full justify-center border-[var(--color-gold-500)] text-[var(--color-gold-500)] hover:bg-white"
                icon={<ExternalLink size={18} />}
                iconPosition="after"
              >
                Open Discord
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
