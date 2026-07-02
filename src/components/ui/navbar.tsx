import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, Linkedin, Github, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Gestion du scroll pour affiner la navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquer le défilement de la page quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Expertise", path: "/skills" },
    { name: "Expériences", path: "/experiences" },
    { name: "Projets", path: "/projects" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-neutral-100 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        
        {/* LOGO : Typographie Élégante & Studio de Design */}
        <Link to="/" className="flex flex-col tracking-widest group">
          <span className="text-sm font-bold uppercase text-neutral-900">
            P. Mbah-Ndam
          </span>
          <span className="text-[9px] uppercase text-neutral-400 tracking-[0.25em] font-light mt-0.5">
            Developpeur
          </span>
        </Link>

        {/* DESKTOP NAVIGATION : Épurée, sans icônes superflues */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
                  isActive
                    ? "text-neutral-900 font-medium"
                    : "text-neutral-400 hover:text-neutral-900"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* ACTION BUTTON : Bouton Noir Plein assorti au Hero */}
        <div className="hidden lg:flex items-center">
          <Link
            to="/contact"
            className="group flex items-center gap-3 px-5 py-2.5 bg-neutral-950 text-white text-xs font-medium tracking-widest uppercase transition-colors duration-300 hover:bg-neutral-800"
          >
            <span>Discuter</span>
            <ArrowUpRight size={14} className="text-neutral-400 group-hover:text-white transition-colors duration-300" />
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="lg:hidden relative z-[120] text-neutral-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU FULLSCREEN (Transition Native Pure CSS) */}
      <div
        className={`fixed inset-0 w-full h-screen bg-white z-[110] flex flex-col p-8 lg:hidden transition-all duration-500 ease-in-out ${
          isOpen 
            ? "translate-y-0 opacity-100 pointer-events-auto" 
            : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        {/* Liens Mobile Épurés (Style Éditorial Large) */}
        <div className="mt-20 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-light tracking-tight text-neutral-800 hover:text-neutral-900 py-2 border-b border-neutral-100/60"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-serif italic text-neutral-400 hover:text-neutral-900 py-2"
          >
            Me contacter &rarr;
          </Link>
        </div>

        {/* Pied du menu mobile : Réseaux & Infos */}
        <div className="mt-auto pt-6 border-t border-neutral-100 flex flex-col gap-4">
          <div className="text-[10px] text-neutral-400 uppercase tracking-widest">
            © 2026 &bull; Portfolio Pro
          </div>
          <div className="flex gap-6 text-neutral-400">
            <a href="#" className="hover:text-neutral-900 transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="hover:text-neutral-900 transition-colors"><Github size={18} /></a>
            <a href="#" className="hover:text-neutral-900 transition-colors"><Mail size={18} /></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;