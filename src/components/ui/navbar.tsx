import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Cpu,
  Menu,
  X,
  Layers,
  Lightbulb,
  Briefcase,
  Rocket,
  BookOpen,
  Zap,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

// --- COMPOSANT NAVBAR (STYLE LIGHT + GESTION SCROLL MOBILE) ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Gestion du scroll pour le style de la navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Blocage du scroll de la page quand le menu mobile est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    {
      name: "Accueil",
      path: "/",
      icon: <Layers size={14} />,
      status: "ONLINE",
    },
    {
      name: "Skills",
      path: "/skills",
      icon: <Lightbulb size={14} />,
      status: "TRAINING",
    },
    {
      name: "Expériences",
      path: "/experiences",
      icon: <Briefcase size={14} />,
      status: "STABLE",
    },
    {
      name: "Projets",
      path: "/projects",
      icon: <Rocket size={14} />,
      status: "DEPLOYED",
    },
    {
      name: "Blog",
      path: "/blog",
      icon: <BookOpen size={14} />,
      status: "READING",
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <Phone size={14} />,
      status: "ONLINE",
    }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "py-3 bg-white/80 backdrop-blur-xl  shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group relative">
          <div className="relative">
            <div className="w-10 h-10 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center group-hover:border-blue-500 transition-all duration-500">
              <Cpu className="text-blue-600" size={20} />
            </div>
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-900 font-mono font-black tracking-tighter text-lg leading-none uppercase">
              PAVEL<span className="text-blue-600 italic">.AI</span>
            </span>
            <span className="text-[8px] font-mono text-slate-400 tracking-[0.2em] uppercase">
              Light_Core_v4
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 bg-slate-100/50 p-1 rounded-2xl border border-slate-200 shadow-inner">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative group px-4 py-2 flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-all"
            >
              <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                {link.icon}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest font-mono">
                {link.name}
              </span>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-blue-600" />
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/contact"
            className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200"
          >
            <Zap size={14} className="fill-current" />
            INITIALIZE
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-[120] w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu FullScreen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 w-full h-screen bg-white z-[110] flex flex-col p-8 lg:hidden"
          >
            <div className="mt-10 flex flex-col gap-4 overflow-y-auto">
              <span className="text-blue-600 font-mono text-[10px] tracking-[0.3em] uppercase mb-4">
                Navigation_System
              </span>
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.name}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-2 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-300 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="p-2 bg-white rounded-xl shadow-sm text-blue-600">
                        {link.icon}
                      </span>
                      <span className="font-mono text-sm font-bold text-slate-900 uppercase">
                        {link.name}
                      </span>
                    </div>
                    <ArrowRight
                      size={18}
                      className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-4 border-t border-slate-200">
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[Github, Linkedin, Mail].map((Icon, i) => (
                  <button
                    key={i}
                    className="flex justify-center p-4 bg-slate-50 rounded-2xl text-slate-400 hover:text-blue-600 transition-colors"
                  >
                    <Icon size={20} />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
