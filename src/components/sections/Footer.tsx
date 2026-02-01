import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail, 
  Phone, 
  MapPin, 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Github, 
  Linkedin,
  Activity
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
      { name: 'Accueil', path: '/'},
      { name: 'Skills', path: '/skills'},
      { name: 'Expériences', path: '/experiences' },
      { name: 'Projets', path: '/projects'},
      { name: 'Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' }
    ];

  return (
    <footer className="relative bg-[#020617] text-white pt-24 pb-12 px-6 overflow-hidden border-t border-blue-500/10">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20"
        >
          {/* Brand & AI Status */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600/10 border border-blue-500/30 rounded-lg flex items-center justify-center">
                <Cpu className="text-blue-400" size={20} />
              </div>
              <h3 className="text-2xl font-black tracking-tighter uppercase">
                PAVEL<span className="text-blue-500">.AI</span>
              </h3>
            </div>
            <p className="text-slate-400 font-mono text-sm leading-relaxed max-w-sm mb-8">
              Développeur Full-Stack spécialisé dans la conception d'architectures numériques 
              <span className="text-white"> haute performance</span> et d'interfaces intelligentes.
            </p>
            
            <div className="flex items-center gap-6">
               <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Status</span>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[11px] font-mono text-blue-400 tracking-tighter italic">NODE_STABLE_V4</span>
                  </div>
               </div>
               <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Region</span>
                  <span className="text-[11px] font-mono text-white tracking-tighter italic">CENTRAL_AFRICA_NODE</span>
               </div>
            </div>
          </div>

          {/* Quick Links Interface */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 mb-6 text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em]">
               <Terminal size={12} /> Navigation_Paths
            </div>
            <ul className="space-y-3 font-mono text-xs uppercase tracking-wider">
              {navLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.path}
                    className="text-slate-400 hover:text-white flex items-center gap-2 transition-all group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-blue-500 transition-all duration-300" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Node */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-6 text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em]">
               <Activity size={12} /> Contact_Encryption
            </div>
            <ul className="space-y-4 text-slate-400 font-mono text-xs">
              <li className="flex items-start gap-4 p-3 border border-slate-800 rounded-xl hover:border-blue-500/30 transition-colors">
                <Mail size={16} className="text-blue-500 shrink-0" />
                <a href="mailto:mbpavel21@gmail.com" className="hover:text-white transition-colors">
                  mbpavel21@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-4 p-3 border border-slate-800 rounded-xl hover:border-blue-500/30 transition-colors">
                <Phone size={16} className="text-blue-500 shrink-0" />
                <a href="tel:+237659155723" className="hover:text-white transition-colors">
                  +237 659 155 723
                </a>
              </li>
              <li className="flex items-start gap-4 p-3 border border-slate-800 rounded-xl">
                <MapPin size={16} className="text-blue-500 shrink-0" />
                <span>Cameroon, Central Africa Node</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Divider with Scan Effect */}
        <div className="relative h-px bg-slate-800 mb-8 overflow-hidden">
           <motion.div 
             animate={{ x: ['-100%', '100%'] }}
             transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
             className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
           />
        </div>

        {/* Bottom Metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 font-mono text-[10px] uppercase tracking-widest"
        >
          <div className="flex items-center gap-4">
             <p>&copy; {currentYear} PAVEL MBAH-NDAM. SYS_ALL_RIGHTS_RESERVED.</p>
             <div className="h-3 w-px bg-slate-800 hidden md:block" />
             <div className="flex items-center gap-2">
               <ShieldCheck size={12} className="text-blue-600" />
               <span>SECURED_BY_ZEROTRACEX</span>
             </div>
          </div>
          
          <div className="flex items-center gap-4">
             <span className="text-blue-500 font-black italic">v4.0.2-Stable</span>
             <div className="flex gap-4">
                <a href="https://github.com/Padevend" className="hover:text-white transition-colors"><Github size={14} /></a>
                <a href="#" className="hover:text-white transition-colors"><Linkedin size={14} /></a>
             </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};