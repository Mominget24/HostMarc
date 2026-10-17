import React from 'react';
import { Sparkles, Mail, Users, Send, Database, Compass, CheckCircle2 } from 'lucide-react';

export type ActiveTab = 'ai-generator' | 'template-preview' | 'csv-clients' | 'bulk-sender' | 'code-architecture';

interface SunlitHeaderProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  campaignTitle: string;
}

export const SunlitHeader: React.FC<SunlitHeaderProps> = ({
  activeTab,
  onTabChange,
  campaignTitle,
}) => {
  return (
    <header className="border-b border-stone-800 bg-stone-950/90 backdrop-blur-md sticky top-0 z-50">
      {/* Top micro-bar */}
      <div className="bg-gradient-to-r from-stone-900 via-amber-950/40 to-stone-900 border-b border-stone-800/80 px-4 py-1.5 text-xs text-stone-400 flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-medium text-stone-300">Sunlitbd.com Enterprise Marketing Engine</span>
          <span className="text-stone-600">|</span>
          <span className="hidden sm:inline text-stone-400">Dhaka Interior Design & Home Service Suite</span>
        </div>
        <div className="flex items-center space-x-4 text-[11px]">
          <span className="text-amber-400 font-mono font-medium">Free Tier Optimized: Vercel + Supabase + Gemini 3 Flash</span>
          <span className="hidden md:inline bg-stone-800 text-stone-300 px-2 py-0.5 rounded text-[10px] uppercase font-semibold">ExonHost / Hostinger SMTP Ready</span>
        </div>
      </div>

      {/* Main navigation header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white shadow-lg shadow-amber-900/30">
            <Compass className="w-6 h-6 text-stone-950 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-serif text-xl font-bold tracking-wider text-stone-100">
                SUNLIT<span className="text-amber-500">.</span>BD
              </span>
              <span className="bg-amber-500/10 text-amber-400 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded border border-amber-500/20">
                Email Studio
              </span>
            </div>
            <p className="text-xs text-stone-400">
              Active Project: <span className="text-stone-200 font-medium">{campaignTitle || 'Kitchen Cabinet Offer'}</span>
            </p>
          </div>
        </div>

        {/* Tab Pills */}
        <nav className="flex items-center space-x-1 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          <button
            onClick={() => onTabChange('ai-generator')}
            className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'ai-generator'
                ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20 font-bold'
                : 'text-stone-300 hover:text-white hover:bg-stone-800/80'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Content (Gemini)</span>
          </button>

          <button
            onClick={() => onTabChange('template-preview')}
            className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'template-preview'
                ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20 font-bold'
                : 'text-stone-300 hover:text-white hover:bg-stone-800/80'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>MJML Master Template</span>
          </button>

          <button
            onClick={() => onTabChange('csv-clients')}
            className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'csv-clients'
                ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20 font-bold'
                : 'text-stone-300 hover:text-white hover:bg-stone-800/80'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Client CSV Data</span>
          </button>

          <button
            onClick={() => onTabChange('bulk-sender')}
            className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'bulk-sender'
                ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20 font-bold'
                : 'text-stone-300 hover:text-white hover:bg-stone-800/80'
            }`}
          >
            <Send className="w-3.5 h-3.5" />
            <span>Anti-Spam Dispatcher</span>
          </button>

          <button
            onClick={() => onTabChange('code-architecture')}
            className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'code-architecture'
                ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20 font-bold'
                : 'text-stone-300 hover:text-white hover:bg-stone-800/80'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>Database & Code (Export)</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
