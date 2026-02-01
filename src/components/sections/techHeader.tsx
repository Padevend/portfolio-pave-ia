import React from 'react';
import { motion } from 'framer-motion';

const TechHeader: React.FC = () => {
  return (
    <div className="relative pt-32 pb-12 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="flex-1">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-blue-600 font-mono text-[10px] tracking-[0.3em] uppercase mb-4"
          >
            <div className="w-8 h-[1px] bg-blue-600" />
            Core_Repository_Access
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none"
          >
            PROJECTS<span className="text-blue-600">.DB</span>
          </motion.h1>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-end text-right font-mono text-[9px] text-slate-400 uppercase leading-relaxed"
        >
          <div>Statut: <span className="text-green-600 font-bold">Live_Node</span></div>
          <div>Chiffrement: RSA_4096_Active</div>
          <div>Version: 4.0.2-Stable</div>
        </motion.div>
      </div>
      
      {/* Background Matrix Effect (Light) */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#f1f5f9_0%,transparent_70%)]" />
      </div>
    </div>
  );
};

export default TechHeader;
