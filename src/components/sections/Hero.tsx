import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Terminal,
  Cpu,
  Sparkles,
  Code2,
} from "lucide-react";

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "MBAH-NDAM TSOMELOU Pavel";
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Effet d'écriture de code (Typing effect)
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
        setIsTypingComplete(true);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const revealVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden px-6 lg:px-20 py-32"
    >
      {/* Background IA Light - Mesh Gradient subtil */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glows dynamiques IA adaptés au mode clair */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, -45, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-blue-100/50 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-100/40 blur-[100px] rounded-full"
        />

        {/* Particules "Neurones" - Version Soft Blue */}
        <div className="absolute inset-0 opacity-40">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
              }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0, 1.2, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              className="absolute w-1.5 h-1.5 bg-blue-300 rounded-full shadow-[0_0_8px_#93c5fd]"
            />
          ))}
        </div>

        {/* Grille de données Light */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12"
      >
        {/* Colonne Gauche : Contenu principal */}
        <div className="flex-[1.5] text-center lg:text-left">
          <motion.div
            variants={revealVariants as any}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50/80 text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-sm shadow-sm"
          >
            <Sparkles size={14} className="animate-pulse" />
            AI-Driven Architecture
          </motion.div>

          <motion.h1
            variants={revealVariants as any}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight"
          >
            <span className="text-slate-400 font-mono text-xl lg:text-2xl block mb-4">
              const <span className="text-purple-600">developer</span> = &#123;
            </span>

            <div className="pl-4 lg:pl-8 border-l-2 border-slate-200 ml-2">
              <span className="text-blue-500 font-mono italic text-2xl lg:text-3xl block mb-2">
                name:
              </span>
              <span className="font-mono bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-700 to-indigo-600">
                "{displayText}"
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-1 h-8 lg:h-12 bg-blue-600 ml-1 align-middle"
                />
              </span>
            </div>

            <span className="text-slate-400 font-mono text-xl lg:text-2xl block mt-4">
              &#125;;
            </span>
          </motion.h1>

          <motion.p
            variants={revealVariants as any}
            className="text-slate-600 text-lg md:text-xl max-w-2xl lg:mx-0 mx-auto mb-10 leading-relaxed font-light"
          >
            Conception d'écosystèmes{" "}
            <span className="text-slate-900 font-medium">Full-Stack</span>{" "}
            augmentés par l'IA. Expert en interfaces prédictives et
            architectures
            <span className="text-blue-600 font-medium">
              {" "}
              ultra-performantes
            </span>{" "}
            basées au Cameroun.
          </motion.p>

          <motion.div
            variants={revealVariants as any}
            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center"
          >
            <a
              href="#projects"
              className="group relative flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl overflow-hidden transition-all hover:bg-blue-700 shadow-lg shadow-blue-200"
            >
              <Code2
                size={20}
                className="group-hover:rotate-12 transition-transform"
              />
              <span className="relative z-10 text-sm">Initialiser Projets</span>
              <ArrowRight
                className="group-hover:translate-x-2 transition-transform"
                size={18}
              />
            </a>

            <a
              href="#contact"
              className="group flex items-center gap-2 px-8 py-4 text-slate-700 font-medium border border-slate-200 rounded-xl hover:bg-white hover:border-blue-400 transition-all shadow-sm text-sm"
            >
              <Terminal size={16} className="text-blue-500" />
              ./contact_me --now
            </a>
          </motion.div>
        </div>

        {/* Colonne Droite : Visualisation IA Light */}
        <motion.div
          variants={revealVariants as any}
          className="hidden lg:flex flex-1 relative h-[600px] items-center justify-center"
        >
          <div className="relative">
            {/* Anneaux de calcul - Soft Grays */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  rotate: i % 2 === 0 ? 360 : -360,
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: {
                    duration: 15 + i * 5,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
                style={{ width: 250 + i * 60, height: 250 + i * 60 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-slate-200 rounded-full"
              >
                <div
                  className={`absolute top-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_5px_rgba(59,130,246,0.5)] ${i === 1 ? "hidden" : ""}`}
                />
              </motion.div>
            ))}

            {/* Cœur visuel Light */}
            <div className="relative w-48 h-48 flex items-center justify-center">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(59,130,246,0.05)",
                    "0 0 40px rgba(59,130,246,0.15)",
                    "0 0 20px rgba(59,130,246,0.05)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-tr from-white via-blue-50 to-indigo-50 rounded-3xl rotate-45 border border-slate-100 shadow-sm backdrop-blur-sm"
              />
              <div className="relative z-10 flex flex-col items-center gap-2">
                <Cpu className="text-blue-600 animate-pulse" size={40} />
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-tighter font-bold">
                  Neural Engine
                </span>
              </div>
            </div>

            {/* Tags flottants IA Light */}
            <AnimatePresence>
              {isTypingComplete && (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 60 }}
                    className="absolute top-0 right-0 p-2 bg-white/80 border border-slate-200 rounded-lg backdrop-blur-md text-[10px] text-indigo-600 font-mono shadow-sm"
                  >
                    Processing: 100%
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: -90 }}
                    className="absolute bottom-10 left-0 p-2 bg-white/80 border border-slate-200 rounded-lg backdrop-blur-md text-[10px] text-blue-600 font-mono shadow-sm"
                  >
                    Status: Optimal
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Social Floating Bar - Light Version */}
          <div className="absolute right-[-20px] flex flex-col gap-4">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Mail, href: "#" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                whileHover={{
                  scale: 1.1,
                  x: -5,
                  backgroundColor: "#f8fafc",
                  borderColor: "#3b82f6",
                }}
                className="p-4 bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-blue-600 transition-all shadow-sm group"
              >
                <social.icon size={20} className="group-hover:drop-shadow-sm" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Social Mobile */}
      <motion.div
        variants={revealVariants as any}
        className="flex lg:hidden gap-8 justify-center mt-12 relative z-10"
      >
        <Github className="text-slate-400" />
        <Linkedin className="text-slate-400" />
        <Mail className="text-slate-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
