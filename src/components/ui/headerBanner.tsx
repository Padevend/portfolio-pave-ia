import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Sparkles, 
  ChevronRight,
  Home
} from 'lucide-react';


interface HeaderBannerProps {
  tag: string;
  title: string;
  subtitle: string;
  breadcrumb: { label: string; path?: string }[];
}

const HeaderBanner: React.FC<HeaderBannerProps> = ({ tag, title, subtitle, breadcrumb }) => {
  return (
    <div className="relative pt-32 pb-24 px-6 overflow-hidden bg-gray-50">
      {/* Background IA Light Style */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(50%_50%_at_50%_0%,rgba(59,130,246,0.05)_0%,transparent_100%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Breadcrumb */}
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-8 text-[10px] font-mono tracking-widest text-slate-400 uppercase"
          >
            <Home size={10} className="text-blue-500" />
            {breadcrumb.map((item, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight size={10} className="opacity-30" />
                <span className={idx === breadcrumb.length - 1 ? "text-blue-600 font-bold" : ""}>
                  {item.label}
                </span>
              </React.Fragment>
            ))}
          </motion.nav>

          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-100 bg-blue-50/50 text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-sm"
          >
            <Sparkles size={12} className="text-blue-400" />
            {tag}
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6"
          >
            {title.split(' ')[0]} <span className="text-blue-600 italic">{title.split(' ')[1]}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4 text-slate-400 font-mono text-xs uppercase tracking-[0.3em]"
          >
            <div className="h-[1px] w-8 bg-slate-200" />
            {subtitle}
            <div className="h-[1px] w-8 bg-slate-200" />
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-10 right-10 text-blue-500/10 pointer-events-none"
      >
        <Cpu size={180} strokeWidth={0.5} />
      </motion.div>
    </div>
  );
};

export default HeaderBanner;