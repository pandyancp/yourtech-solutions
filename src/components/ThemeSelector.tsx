import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, Moon, Sun, Sparkles, Compass } from 'lucide-react';
import { useTheme, ThemeType } from '../context/ThemeContext';

export const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const themes: { id: ThemeType; name: string; desc: string; icon: React.ReactNode; preview: string }[] = [
    {
      id: 'obsidian',
      name: 'Midnight Cyber (Dark)',
      desc: 'Obsidian navy with electric blue & cyan glow',
      icon: <Moon className="w-4 h-4 text-cyan-400" />,
      preview: 'bg-gradient-to-tr from-slate-950 via-slate-900 to-brand-900 border-cyan-500/50'
    },
    {
      id: 'deepblue',
      name: 'Cosmic Deep Blue',
      desc: 'Deep cobalt & sapphire cloud aura',
      icon: <Compass className="w-4 h-4 text-brand-400" />,
      preview: 'bg-gradient-to-tr from-[#020b1f] via-brand-950 to-blue-800 border-blue-400/50'
    },
    {
      id: 'aurora',
      name: 'Aurora Emerald',
      desc: 'Emerald green, violet & neon matrix glow',
      icon: <Sparkles className="w-4 h-4 text-emerald-400" />,
      preview: 'bg-gradient-to-tr from-[#040d14] via-emerald-950 to-purple-900 border-emerald-400/50'
    },
    {
      id: 'light',
      name: 'Enterprise Light',
      desc: 'Crisp white & silver slate corporate theme',
      icon: <Sun className="w-4 h-4 text-amber-500" />,
      preview: 'bg-gradient-to-tr from-white via-slate-100 to-sky-100 border-slate-300'
    }
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-cyan-400/60 text-slate-300 hover:text-white transition-all shadow-sm group"
        title="Change Background Theme"
        aria-label="Change Background Theme"
      >
        <Palette className="w-4 h-4 text-cyan-400 group-hover:rotate-45 transition-transform" />
        <span className="hidden md:inline text-xs font-mono capitalize">{theme}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-72 p-3 rounded-2xl glass-island shadow-2xl border border-brand-500/30 z-50 animate-fadeIn">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-xs font-mono text-slate-400">
            <span>SELECT BACKGROUND THEME</span>
            <span className="text-[10px] text-cyan-400">4 PRESETS</span>
          </div>

          <div className="space-y-1.5">
            {themes.map((t) => {
              const isSelected = theme === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all ${
                    isSelected
                      ? 'bg-brand-950/80 border border-cyan-400 text-white'
                      : 'hover:bg-slate-800/60 border border-transparent text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-6 h-6 rounded-lg border ${t.preview} flex items-center justify-center`}>
                      {t.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold leading-tight">{t.name}</p>
                      <p className="text-[10px] text-slate-400 leading-tight mt-0.5">{t.desc}</p>
                    </div>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
