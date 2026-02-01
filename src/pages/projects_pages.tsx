import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Cpu,
  Crosshair,
  Activity,
} from "lucide-react";
import projects from "@/data/projects.json";
import TechHeader from "@/components/sections/techHeader";
import ProjectNode from "@/components/ui/projectNode";

export const ProjectsPage: React.FC = () => {

  useEffect(() => {
    document.title = "Projects - MBAH-NDAM TSOMELOU Pavel";

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <TechHeader />

      {/* MATRIX GRID SECTION (LIGHT) */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Toolbar Interface */}
        <div className="flex flex-wrap items-center justify-between border-y border-slate-100 py-6 mb-12 gap-6 font-mono text-[10px] tracking-widest text-slate-400 uppercase">
          <div className="flex items-center gap-8">
            <button className="flex items-center gap-2 text-blue-600 font-bold tracking-widest bg-blue-50 px-3 py-1 rounded">
              <Terminal size={12} /> Entities_All
            </button>
            <button className="flex items-center gap-2 hover:text-slate-900 transition-colors">
              <Cpu size={12} /> Neural_Nets
            </button>
          </div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectNode key={index} project={project} index={index} />
          ))}
        </div>

        {/* System Stats Footer */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 border border-slate-100 p-8 rounded-2xl bg-slate-50/50 backdrop-blur-xl">
          <div className="flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-slate-400 font-mono text-[9px] uppercase mb-2">
                Utilisation_Mémoire
              </span>
              <div className="w-48 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "65%" }}
                  className="h-full bg-blue-600"
                />
              </div>
            </div>
            <div className="h-10 w-[1px] bg-slate-200" />
            <div className="flex flex-col">
              <span className="text-slate-400 font-mono text-[9px] uppercase mb-1">
                Stabilité_Système
              </span>
              <div className="flex items-center gap-2">
                <Activity size={12} className="text-green-500 animate-pulse" />
                <span className="text-slate-900 font-mono text-[11px] font-bold tracking-widest">
                  STABLE // 99.9%
                </span>
              </div>
            </div>
          </div>

          <button className="group flex items-center gap-4 px-10 py-5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-blue-600 transition-all rounded-xl shadow-xl shadow-slate-200">
            Initialiser_Collaborateur
            <Crosshair
              size={14}
              className="group-hover:rotate-180 transition-transform duration-500"
            />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
