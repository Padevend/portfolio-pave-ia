import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { Github, Globe, ShieldCheck } from "lucide-react";

const ProjectNode = ({ project, index }: { project: any, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative group cursor-crosshair h-[550px] overflow-hidden bg-white border border-slate-200 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 hover:border-blue-200"
    >
      {/* Background Image */}
      <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/95" />
      </div>

      {/* Persistent Scan-Line */}
      <motion.div 
        animate={{ y: [0, 550, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-[1px] bg-blue-600/10 z-10 pointer-events-none"
      />

      {/* Header Info Node */}
      <div className="absolute top-0 left-0 w-full p-8 z-30 flex justify-between items-start">
        <div className="flex flex-col">
          <span className="font-mono text-[9px] text-blue-600 font-black tracking-[0.2em] mb-1">
            NODE_{project.id} // {project.category}
          </span>
          <div className="flex gap-1 items-center">
             <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
             <span className="text-[8px] font-mono text-slate-400 uppercase tracking-tighter">{project.stats}</span>
          </div>
        </div>
        
        {/* Action Buttons (Optional) */}
        <div className="flex gap-2">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl shadow-sm hover:bg-slate-900 hover:text-white transition-all duration-300 group/btn"
              title="Code Source"
            >
              <Github size={18} className="group-hover/btn:scale-110 transition-transform" />
            </motion.a>
          )}
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-blue-600 text-white border border-blue-500 rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 group/btn"
            >
              <Globe size={18} className="group-hover/btn:rotate-12 transition-transform" />
              <span className="text-[10px] font-bold uppercase tracking-widest hidden group-hover:block transition-all animate-in fade-in slide-in-from-right-2">Live Preview</span>
            </motion.a>
          )}
          {!project.link && !project.github && (
             <div className="p-3 bg-slate-100 border border-slate-200 rounded-2xl text-slate-400">
               <ShieldCheck size={18} />
             </div>
          )}
        </div>
      </div>

      {/* Content Card */}
      <div className="absolute bottom-0 left-0 w-full p-6 z-30">
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-sm transition-all duration-500 group-hover:border-blue-500/20 group-hover:translate-y-[-8px]">
          <h3 className="text-2xl font-black text-slate-900 tracking-tighter mb-2 transition-colors group-hover:text-blue-600">
            {project.title.toUpperCase()}
          </h3>
          
          <p className="text-slate-500 font-mono text-[11px] leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag:string) => (
              <span key={tag} className="text-[9px] font-mono text-blue-600 bg-blue-50/50 border border-blue-100 px-2 py-1 rounded-md">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover Light Effect */}
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: `radial-gradient(circle 120px at ${mouseX}px ${mouseY}px, rgba(37, 99, 235, 0.08), transparent 80%)`
            }}
          />
        )}
      </AnimatePresence>

      {/* Tech Corners Overlay */}
      <div className="absolute inset-4 border border-slate-200/30 rounded-2xl pointer-events-none" />
      <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-blue-500/40 rounded-tl-lg transition-all group-hover:scale-125" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-blue-500/40 rounded-br-lg transition-all group-hover:scale-125" />
    </motion.div>
  );
};


export default ProjectNode;