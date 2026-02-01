import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, Building2, ExternalLink, Milestone } from "lucide-react";
import HeaderBanner from "@/components/ui/headerBanner";
import experiences from "@/data/experiences.json";

export const ExperiencePage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 100,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  useEffect(() => {
    document.title = "Experiences - MBAH-NDAM TSOMELOU Pavel";

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <HeaderBanner
        tag="Parcours Professionnel"
        title="EXPÉRIENCES RÉCENTES"
        subtitle="Work_History // Career_Growth // Innovations"
        breadcrumb={[{ label: "Accueil", path: "/" }, { label: "Expériences" }]}
      />

      {/* MAIN CONTENT */}
      <section className="relative py-12 px-6">
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            variants={containerVariants as any}
            viewport={{ once: true}}
          >
            {/* Page Intro Sub-Header */}
            <motion.div
              variants={itemVariants as any}
              className="flex flex-col items-center mb-24 text-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50/30 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-4">
                <Milestone size={12} />
                Professional_Log_v4.2
              </div>
              <p className="max-w-xl text-slate-500 font-light">
                Une progression constante à travers des projets ambitieux,
                alliant rigueur technique et vision stratégique.
              </p>
            </motion.div>

            {/* Timeline Wrapper */}
            <div className="relative">
              {/* Central Line - Light Design */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-100 transform md:-translate-x-1/2 overflow-hidden">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="w-full bg-gradient-to-b from-blue-500 via-blue-200 to-transparent"
                />
              </div>

              {/* Items */}
              <div className="space-y-24">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants as any}
                    className={`relative md:flex items-center justify-between gap-12 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline Point */}
                    <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 w-8 h-8 -ml-4 md:-translate-y-1/2 flex items-center justify-center z-20">
                      <div className="w-4 h-4 rounded-full bg-white border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                      <div
                        className="absolute w-12 h-px bg-blue-100 hidden md:block"
                        style={{ [index % 2 === 0 ? "right" : "left"]: "100%" }}
                      />
                    </div>

                    {/* Date / Period Tag */}
                    <div
                      className={`hidden md:block w-1/2 ${index % 2 === 0 ? "text-right pr-16" : "text-left pl-16"}`}
                    >
                      <div className="font-mono text-[10px] text-blue-600 font-bold tracking-widest uppercase mb-1">
                        {exp.period}
                      </div>
                      <div className="text-[10px] text-slate-300 font-mono tracking-tighter">
                        TIMESTAMP_{index}_STABLE
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="ml-10 md:ml-0 md:w-1/2 relative">
                      <motion.div
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-100 transition-all duration-500"
                      >
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <h3 className="text-xl font-black text-slate-900 tracking-tight leading-none group-hover:text-blue-600 transition-colors">
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-2 text-blue-500 font-bold text-sm tracking-tight">
                              <Building2 size={14} />
                              {exp.company}
                            </div>
                          </div>
                          <div className="md:hidden font-mono text-[9px] text-slate-400">
                            {exp.period}
                          </div>
                        </div>

                        <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {exp.highlights.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-slate-50 text-slate-600 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-slate-100"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Contact / CTA */}
            <motion.div
              variants={itemVariants as any}
              className="mt-32 p-1 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-transparent rounded-[3rem]"
            >
              <div className="bg-slate-900 rounded-[2.8rem] p-10 md:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-5">
                  <Briefcase size={200} className="text-white" />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                  <div className="max-w-xl">
                    <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                      Prêt pour de nouveaux{" "}
                      <span className="text-blue-400 italic">Défis</span> ?
                    </h3>
                    <p className="text-slate-400 font-light leading-relaxed">
                      Je suis toujours ouvert à discuter de projets innovants ou
                      d'opportunités de collaboration technique. Initialisons
                      une connexion.
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-900/40 flex items-center gap-3 hover:bg-blue-500 transition-colors"
                  >
                    CONTACT_SYSTEM.init()
                    <ExternalLink size={18} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
