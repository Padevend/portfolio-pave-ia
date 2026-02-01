import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Cpu, 
  Layers, 
  Sparkles, 
  Braces, 
  Rocket,
} from 'lucide-react';
import HeaderBanner from '@/components/ui/headerBanner';
import skills from "@/data/skills.json"


export const SkillsPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  useEffect(() => {
    document.title = "Skills - MBAH-NDAM TSOMELOU Pavel";

    window.scrollTo({top: 0, behavior: 'smooth'});
  },[])

  return (
    <div className="min-h-screen bg-white font-sans">=
      <HeaderBanner
        tag="Stack Technologique de Pointe"
        title="EXPERTISE TECHNIQUE"
        subtitle="System_Architecture // Full-Stack_Development"
        breadcrumb={[
          { label: "Accueil", path: "/" },
          { label: "Skills" }
        ]}
      />

      {/* MAIN CONTENT */}
      <section className="relative py-12 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={containerVariants}
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Page Sub-Header */}
            <motion.div variants={itemVariants as any} className="flex flex-col items-center mb-16 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50/30 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-4 shadow-sm">
                <Cpu size={12} />
                Capabilities_Matrix_v4
              </div>
              <p className="max-w-2xl text-slate-500 font-light leading-relaxed">
                Une synergie de technologies modernes sélectionnées pour construire des solutions scalables, 
                performantes et adaptées aux enjeux du marché numérique actuel.
              </p>
            </motion.div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skillGroup) => (
                <motion.div
                  key={skillGroup.category}
                  variants={itemVariants as any}
                  className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500"
                >
                  <div className="absolute top-6 right-8 font-mono text-[9px] text-slate-300 group-hover:text-blue-400 transition-colors uppercase">
                    {skillGroup.code}
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-slate-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                      <Layers size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                        {skillGroup.category}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">{skillGroup.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {skillGroup.items.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-4 py-2 bg-slate-50 border border-slate-50 rounded-xl flex items-center gap-2 group/skill hover:bg-white hover:border-blue-100 hover:shadow-sm transition-all"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40 group-hover/skill:bg-blue-600 transition-colors" />
                        <span className="text-sm font-medium text-slate-600 group-hover/skill:text-slate-900 uppercase tracking-tighter">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Workflow Section */}
            <motion.div variants={itemVariants as any} className="mt-16 grid lg:grid-cols-3 gap-6">
              {[
                { title: "Clean Code", icon: Braces, text: "Lisibilité et maintenabilité comme standard." },
                { title: "Performance", icon: Rocket, text: "Optimisation de la vitesse et du SEO." },
                { title: "Scalabilité", icon: Layers, text: "Architecture prête pour la croissance." }
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-4 p-6 bg-slate-50/50 border border-slate-100 rounded-2xl">
                  <div className="w-12 h-12 flex-shrink-0 bg-white text-blue-600 border border-slate-100 rounded-xl flex items-center justify-center">
                    <feature.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{feature.title}</h4>
                    <p className="text-xs text-slate-500">{feature.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Footer Card */}
            <motion.div
              variants={itemVariants as any}
              className="mt-16 relative overflow-hidden bg-slate-900 rounded-[2.5rem] p-10 md:p-14 group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 text-white group-hover:opacity-20 transition-opacity">
                <Sparkles size={120} />
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <div className="flex-1">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                    <Terminal className="text-blue-400" size={20} />
                    <h3 className="text-2xl font-bold text-white tracking-tight">Intérêts & Vision</h3>
                  </div>
                  <p className="text-slate-400 text-lg font-light leading-relaxed max-w-2xl">
                    Développement d'outils <span className="text-blue-400 font-medium">SaaS</span> pour l'Afrique, architecture de librairies UI modernes et mentorat pour la nouvelle génération.
                  </p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4">
                  {["Impact", "Innovation", "Cameroun"].map((word) => (
                    <div key={word} className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-mono text-xs uppercase tracking-widest hover:border-blue-500/50 transition-colors cursor-default">
                      {word}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default SkillsPage;