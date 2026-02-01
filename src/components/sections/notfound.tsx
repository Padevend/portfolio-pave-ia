import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal,
  RefreshCw, 
  Home, 
  ShieldAlert,
  Database,
  Activity,
  Cpu
} from 'lucide-react';

export const NotFound: React.FC = () => {
  const [glitchText, setGlitchText] = useState("404");
  const [logs, setLogs] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(true);

  // Simulation de logs système
  useEffect(() => {
    const messages = [
      "> Initialisation du protocole de récupération...",
      "> Requête GET /path_unknown envoyée au cluster central",
      "> ERREUR : Pointeur nul détecté à l'adresse 0xCF404",
      "> Analyse des secteurs de mémoire en cours...",
      "> Diagnostic : Index de route non trouvé (ID_NOT_FOUND)",
      "> Tentative de routage vers le noyau sécurisé..."
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < messages.length) {
        setLogs(prev => [...prev, messages[i]]);
        i++;
      } else {
        setIsSearching(false);
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  // Effet de glitch sur le texte 404
  useEffect(() => {
    const interval = setInterval(() => {
      const chars = "4040/X";
      const randomText = Array(3).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join("");
      setGlitchText(randomText);
      setTimeout(() => setGlitchText("404"), 150);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col items-center justify-center p-6 overflow-hidden relative font-mono">
      {/* Background Neural Grid - Version Claire */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#3b82f610_0%,transparent_70%)]" />
      </div>

      {/* Main Content Node */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-2xl bg-white/80 backdrop-blur-xl border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-blue-500/5"
      >
        {/* Header Decrypt */}
        <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-50 border border-red-200 rounded-lg flex items-center justify-center">
              <ShieldAlert className="text-red-500 animate-pulse" size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-blue-600 font-black tracking-[0.2em] uppercase">System_Alert</span>
              <span className="text-xs text-slate-500 font-bold tracking-tighter italic">EXCEPTION_CRITICAL</span>
            </div>
          </div>
          <div className="flex flex-col items-end text-[10px] text-slate-400">
            <span>MEM_BLOCK: FAILED</span>
            <span>NODE_SYNC: LOST</span>
          </div>
        </div>

        {/* Big Glitchy 404 */}
        <div className="relative text-center py-10">
          <motion.h1 
            className="text-8xl md:text-9xl font-black text-slate-900 tracking-tighter"
            animate={{ x: [0, -1, 1, 0] }}
            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
          >
            {glitchText}
          </motion.h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none flex items-center justify-center">
             <div className="w-48 h-48 bg-blue-500/10 blur-3xl rounded-full" />
          </div>
          <p className="text-blue-600 font-black tracking-[0.4em] uppercase text-xs mt-4">
            Segment_Introuvable
          </p>
        </div>

        {/* Terminal Simulation - Thème Clair */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-8 font-mono text-[10px] md:text-xs leading-relaxed shadow-inner">
          <div className="flex items-center gap-2 mb-3 border-b border-slate-200 pb-2">
            <Terminal size={12} className="text-slate-400" />
            <span className="text-slate-400 italic">kernel_output.log</span>
          </div>
          <div className="space-y-1 h-32 overflow-hidden flex flex-col justify-end">
            {logs.map((log, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`${log?.includes('ERREUR') ? 'text-red-500' : 'text-slate-600'}`}
              >
                {log}
              </motion.div>
            ))}
            {isSearching && (
              <motion.div 
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="w-2 h-4 bg-blue-600 inline-block align-middle ml-1"
              />
            )}
          </div>
        </div>

        {/* Recovery Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a 
            href="/"
            className="group flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 text-white font-bold rounded-xl transition-all hover:bg-blue-700 shadow-lg shadow-blue-500/20"
          >
            <Home size={18} />
            <span className="text-xs uppercase tracking-widest">Retour_Noyau</span>
          </a>
          <button 
            onClick={() => window.location.reload()}
            className="group flex items-center justify-center gap-3 px-6 py-4 bg-white border border-slate-200 text-slate-500 font-bold rounded-xl transition-all hover:border-blue-400/50 hover:text-blue-600 hover:bg-blue-50"
          >
            <RefreshCw size={18} className="group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-xs uppercase tracking-widest">Recharger_Node</span>
          </button>
        </div>
      </motion.div>

      {/* Background Stats Overlay */}
      <div className="absolute bottom-10 left-10 hidden xl:flex flex-col gap-4 text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em]">
        <div className="flex items-center gap-4">
          <Activity size={14} className="text-blue-200" />
          <span>Core_Temp: 42°C</span>
        </div>
        <div className="flex items-center gap-4">
          <Database size={14} className="text-blue-200" />
          <span>Cluster_Status: PARTIAL</span>
        </div>
      </div>

      <div className="absolute top-10 right-10 hidden xl:flex items-center gap-2">
         <div className="flex flex-col items-end">
            <span className="text-[8px] text-slate-300 font-mono tracking-widest uppercase">Encryption_Link</span>
            <span className="text-[10px] text-red-200 font-mono font-bold tracking-tighter">ERROR_404_VOID</span>
         </div>
         <Cpu className="text-slate-200" size={32} />
      </div>
    </div>
  );
};

export default NotFound;