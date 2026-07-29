import React, { useState } from 'react';

const prefixes = [
  "Mr.",
  "Mrs.",
  "Miss",
  "Mr. & Mrs.",
  "Family",
  "Dear"
];

export const AdminPage: React.FC = () => {
  const [prefix, setPrefix] = useState(prefixes[0]);
  const [name, setName] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const handleGenerate = () => {
    if (!name.trim()) return;
    const url = new URL(window.location.origin);
    url.searchParams.set('prefix', prefix);
    url.searchParams.set('name', name.trim());
    setGeneratedLink(url.toString());
    setCopiedLink(false);
    setCopiedMessage(false);
  };

  const getFullMessage = () => {
    return `Dear ${prefix} ${name.trim()} ❤️

With joyful hearts, we warmly invite you to celebrate one of the most special days of our lives as we begin our journey together.

Please view our wedding invitation and all the event details through the link below 🌐:

${generatedLink}

Your presence would truly mean the world to us, and we would be honored to celebrate this beautiful moment together.

With love,
❤️ Chinthaka & Deshani`;
  };

  const handleCopyLink = async () => {
    if (!generatedLink) return;
    try {
      await navigator.clipboard.writeText(generatedLink);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handleCopyMessage = async () => {
    if (!generatedLink) return;
    try {
      await navigator.clipboard.writeText(getFullMessage());
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2000);
    } catch (err) {
      console.error('Failed to copy message', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center p-6 font-sans">
      <div className="bg-[#1a1a1a] p-8 rounded-2xl shadow-2xl w-full max-w-md border border-[#A68846]/30 relative z-10">
        <h1 className="text-3xl font-serif text-[#A68846] mb-8 text-center" style={{ textShadow: "0 0 20px rgba(166,136,70,0.5)" }}>Link Generator</h1>
        
        <div className="space-y-6">
          <div>
            <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2 font-bold">Prefix</label>
            <select 
              value={prefix} 
              onChange={(e) => setPrefix(e.target.value)}
              className="w-full bg-black/50 border border-[#A68846]/50 text-[#A68846] rounded-lg p-3 focus:outline-none focus:border-[#A68846] transition-colors cursor-pointer"
            >
              {prefixes.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2 font-bold">Guest Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Sanjaya"
              className="w-full bg-black/50 border border-[#A68846]/50 text-[#A68846] rounded-lg p-3 focus:outline-none focus:border-[#A68846] transition-colors placeholder:text-[#A68846]/30"
            />
          </div>

          <button 
            onClick={handleGenerate}
            disabled={!name.trim()}
            className="w-full py-3 bg-gradient-to-r from-[#A68846] to-[#91763A] text-[#111111] font-extrabold uppercase tracking-[0.2em] text-sm rounded-lg hover:opacity-90 disabled:opacity-50 transition-opacity mt-4 shadow-[0_0_15px_rgba(166,136,70,0.3)]"
          >
            Generate Link
          </button>

          {generatedLink && (
            <div className="mt-8 space-y-4">
              <div className="p-4 bg-black/60 border border-[#A68846]/30 rounded-lg break-all text-[#A0A0A0] text-xs overflow-y-auto max-h-48 whitespace-pre-wrap">
                {getFullMessage()}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button 
                  onClick={handleCopyLink}
                  className="w-full py-3 border border-[#A68846] text-[#A68846] font-bold uppercase tracking-wider text-xs rounded-lg hover:bg-[#A68846]/10 transition-colors flex items-center justify-center gap-2"
                >
                  {copiedLink ? '✓ Copied Link!' : 'Copy Link Only'}
                </button>
                <button 
                  onClick={handleCopyMessage}
                  className="w-full py-3 bg-[#A68846] text-[#111111] font-bold uppercase tracking-wider text-xs rounded-lg hover:bg-[#A68846]/90 transition-colors flex items-center justify-center gap-2"
                >
                  {copiedMessage ? '✓ Copied Message!' : 'Copy Full Message'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Background aesthetics */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: "radial-gradient(circle at center, #A68846 0%, transparent 70%)" }} />
    </div>
  );
};
