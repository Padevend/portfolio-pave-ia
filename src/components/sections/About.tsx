import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, Globe, Cpu, User, Database, ShieldCheck } from 'lucide-react';

// Note: J'ai remplacé AnimatedSection par un div standard avec motion pour assurer la compatibilité 
// mais vous pouvez le ré-intégrer si le composant est disponible dans votre projet.

export const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const featureCards = [
    {
      icon: Code2,
      title: "Architecture logicielle",
      desc: "Maîtrise de l'écosystème TypeScript/React et des microservices Node.js.",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: Zap,
      title: "Performance brute",
      desc: "Optimisation du Core Web Vitals et déploiement via architectures Edge.",
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      icon: Globe,
      title: "Impact local",
      desc: "Digitalisation de l'économie camerounaise via des solutions sur-mesure.",
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    }
  ];

  return (
    <section id="about" className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Background Decor - Similaire au Hero */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-50/50 blur-[120px] rounded-full -translate-y-1/2" />
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants as any} className="flex flex-col items-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-4">
              <User size={12} />
              Identity_Protocol
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center tracking-tight">
              Profil du <span className="text-blue-600">Développeur</span>
            </h2>
            <div className="w-12 h-1 bg-blue-600 mt-4 rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Colonne Gauche : Image & Stats */}
            <motion.div variants={itemVariants as any} className="lg:col-span-5">
              <div className="relative group">
                {/* Cadre décoratif style IA */}
                <div className="absolute -inset-4 border border-slate-100 rounded-[2rem] pointer-events-none group-hover:border-blue-200 transition-colors" />
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-blue-600 rounded-tl-xl" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-blue-600 rounded-br-xl" />
                
                <div className="relative bg-white p-3 rounded-3xl shadow-2xl shadow-slate-200 overflow-hidden">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 relative">
                    <img
                      src="/151115861.jpg"
                      alt="Pavel MBAH-NDAM"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay au hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                      <span className="text-white font-mono text-xs uppercase tracking-tighter flex items-center gap-2">
                        <Cpu size={14} className="text-blue-400" /> Kernel_Scan: Completed
                      </span>
                    </div>
                  </div>
                </div>

                {/* Badge Expérience flottant */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-8 -left-8 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 z-20"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-600 rounded-xl text-white">
                      <Database size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900 leading-none">3+ Ans</div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-tighter">Production_XP</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Colonne Droite : Bio & Features */}
            <div className="lg:col-span-7 space-y-10">
              <motion.div variants={itemVariants as any} className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 font-mono">
                  &gt; qui_suis_je ?
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed font-light">
                  Développeur Full-Stack basé au <span className="text-slate-900 font-medium">Cameroun</span>, je transforme des problématiques complexes en solutions numériques fluides. Mon approche fusionne la rigueur de l'ingénierie logicielle avec les opportunités offertes par l'intelligence artificielle.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed font-light">
                  Ma mission est de construire des outils qui propulsent l'écosystème technologique africain vers de nouveaux standards de performance et d'élégance.
                </p>
              </motion.div>

              {/* Grid des Features Card */}
              <motion.div variants={itemVariants as any} className="grid sm:grid-cols-1 gap-4">
                {featureCards.map((card, idx) => (
                  <div 
                    key={idx} 
                    className="group p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-blue-200 hover:shadow-md transition-all flex gap-5 items-start"
                  >
                    <div className={`p-4 rounded-xl ${card.bg} ${card.color} group-hover:scale-110 transition-transform`}>
                      <card.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{card.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Status Indicator Bar */}
              <motion.div variants={itemVariants as any} className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-green-500" size={18} />
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase">Disponibilité : Projets_Freelance</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;