import React from 'react';
import { Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = 2026; // Mis à jour pour l'année en cours

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Expertise', path: '/skills' },
    { name: 'Expériences', path: '/experiences' },
    { name: 'Projets', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="relative bg-neutral-950 text-neutral-400 pt-24 pb-12 px-6 lg:px-24 overflow-hidden border-t border-neutral-900">
      
      {/* L'INTENTION : LA LUMIÈRE BLEUE DANS UN MONDE SANS COULEUR */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Halo Bleu Royal unique et immersif en arrière-plan */}
        <div className="absolute top-[-100px] left-1/4 w-[350px] h-[350px] bg-blue-600/15 rounded-full blur-[100px]" />
        
        {/* Lignes de structure minimalistes */}
        <div className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-neutral-900/40 hidden lg:block" />
        <div className="absolute top-0 bottom-0 left-2/3 w-[1px] bg-neutral-900/40 hidden lg:block" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* GRILLE PRINCIPALE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 mb-20">
          
          {/* Bloc Marque & Signature */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex flex-col tracking-widest group">
              {/* Le point bleu royal perçant comme repère visuel unique */}
              <span className="text-lg font-bold uppercase text-white flex items-center gap-2">
                P. Mbah-Ndam
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,1)]" />
              </span>
              <span className="text-[10px] uppercase text-neutral-500 tracking-[0.25em] font-light mt-1">
                Direction Digitale & Design
              </span>
            </div>
            
            <p className="text-neutral-400 text-sm font-light leading-relaxed max-w-sm">
              Création d'écosystèmes numériques haut de gamme, de plateformes sur-mesure et d'expériences utilisateur mémorables.
            </p>
            
            <div className="pt-2 flex items-center gap-8 text-xs uppercase tracking-widest text-neutral-500">
              <div>
                <span className="block text-[9px] text-neutral-600 mb-1">Localisation</span>
                <span className="text-neutral-300 font-light">Cameroun</span>
              </div>
              <div>
                <span className="block text-[9px] text-neutral-600 mb-1">Influence</span>
                <span className="text-neutral-300 font-light">International</span>
              </div>
            </div>
          </div>

          {/* Liens de Navigation Épurés */}
          <div className="lg:col-span-3 lg:pl-12">
            <h3 className="text-white text-xs font-medium uppercase tracking-[0.2em] mb-6">
              Navigation
            </h3>
            <ul className="space-y-3.5 text-xs uppercase tracking-wider">
              {navLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.path}
                    className="text-neutral-500 hover:text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations de Contact Directes */}
          <div className="lg:col-span-4">
            <h3 className="text-white text-xs font-medium uppercase tracking-[0.2em] mb-6">
              Iniciatives & Échanges
            </h3>
            <ul className="space-y-4 text-sm font-light">
              <li>
                <a 
                  href="mailto:mbpavel21@gmail.com" 
                  className="flex items-center gap-3 p-3 border border-neutral-900 bg-neutral-900/20 text-neutral-400 hover:text-white hover:border-neutral-800 transition-all duration-300 group"
                >
                  <Mail size={14} className="text-neutral-600 group-hover:text-blue-500 transition-colors duration-300" />
                  <span>mbpavel21@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+237671941782" 
                  className="flex items-center gap-3 p-3 border border-neutral-900 bg-neutral-900/20 text-neutral-400 hover:text-white hover:border-neutral-800 transition-all duration-300 group"
                >
                  <Phone size={14} className="text-neutral-600 group-hover:text-blue-500 transition-colors duration-300" />
                  <span>+237 671 941 782</span>
                </a>
              </li>
              <li className="flex items-center gap-3 p-3 border border-transparent text-neutral-500 select-none">
                <MapPin size={14} className="text-neutral-700" />
                <span>Yaoundé, Cameroun</span>
              </li>
            </ul>
          </div>
        </div>

        {/* LIGNE DE SÉPARATION MINIMALISTE */}
        <div className="h-[1px] bg-neutral-900 mb-8 w-full" />

        {/* METADONNÉES DE PIED DE PAGE */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-neutral-500 font-medium">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <p>&copy; {currentYear} Pavel Mbah-Ndam. Tous droits réservés.</p>
            <span className="hidden md:inline text-neutral-800">|</span>
            <p className="font-serif italic text-neutral-400 lowercase tracking-normal text-xs">
              Conçu avec rigueur & clarté
            </p>
          </div>
          
          {/* Réseaux Sociaux Épurés */}
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/Padevend" 
              className="hover:text-white transition-colors duration-300 flex items-center gap-1"
              aria-label="Github"
            >
              <Github size={14} />
              <span>Github</span>
            </a>
            <a 
              href="#" 
              className="hover:text-white transition-colors duration-300 flex items-center gap-1"
              aria-label="Linkedin"
            >
              <Linkedin size={14} />
              <span>Linkedin</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};