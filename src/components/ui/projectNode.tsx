import React from "react";
import { Github, Globe, ArrowRight } from "lucide-react";

interface ProjectNodeProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    image: string;
    link?: string;
    github?: string;
  };
  index: number;
}

const ProjectNode: React.FC<ProjectNodeProps> = ({ project, index }) => {
  // Aligner l'ordre visuel (Texte à gauche ou à droite) pour créer le rythme asymétrique
  const isEven = index % 2 === 0;

  return (
    <div className="group/node flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16 items-center text-left">
      
      {/* BLOC TEXTE & SPÉCIFICATIONS (Prend 5 colonnes) */}
      <div className={`w-full lg:col-span-5 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
        
        {/* Index et Métadonnées de l'Œuvre */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-blue-600 font-semibold tracking-widest uppercase">
            Projet n°0{index + 1}
          </span>
          <span className="h-[1px] w-6 bg-neutral-200" />
          <span className="text-[9px] font-mono tracking-wider text-neutral-400 uppercase">
            Disponible en ligne
          </span>
        </div>

        {/* Titre Typographique Typé Magazine */}
        <h3 className="text-2xl sm:text-3xl font-light text-neutral-950 tracking-tight uppercase leading-none">
          {project.title}
        </h3>
        
        {/* Descriptif d'intention */}
        <p className="text-neutral-500 text-xs sm:text-sm font-light leading-relaxed max-w-md">
          {project.description}
        </p>
        
        {/* Tags Monospaces épurés (Sans boîtes colorées agressives) */}
        <div className="flex flex-wrap gap-x-3 gap-y-1.5 pt-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-[10px] font-mono text-neutral-400 tracking-tight transition-colors duration-300 group-hover/node:text-neutral-600"
            >
              #{tag.toLowerCase()}
            </span>
          ))}
        </div>

        {/* LIENS COMPORTEMENTAUX DIRECTS (S'allument en Bleu Royal au survol) */}
        <div className="flex items-center gap-6 pt-4 border-t border-neutral-100 max-w-xs">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[10px] font-medium tracking-widest uppercase text-neutral-900 hover:text-blue-600 transition-colors duration-300 group/link"
            >
              <span>Voir le site</span>
              <Globe size={12} className="text-neutral-400 group-hover/link:text-blue-600 transition-colors" />
            </a>
          )}
          
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[10px] font-medium tracking-widest uppercase text-neutral-400 hover:text-neutral-900 transition-colors duration-300"
            >
              <span>Voir le code</span>
              <Github size={12} />
            </a>
          )}
        </div>
      </div>

      {/* BLOC IMAGE COMMISSURÉ (Prend 7 colonnes) */}
      <div className={`w-full lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
        <div className="relative w-full aspect-[16/10] bg-neutral-50 border border-neutral-200/70 p-2 transition-all duration-500 group-hover/node:border-neutral-300 bg-white shadow-sm">
          
          {/* L'image passe de Noir & Blanc / Luminosité atténuée vers ses Couleurs Primitives au survol */}
          <div className="w-full h-full overflow-hidden relative grayscale mix-blend-luminosity opacity-85 contrast-[1.05] transition-all duration-700 ease-in-out group-hover/node:grayscale-0 group-hover/node:mix-blend-normal group-hover/node:opacity-100 group-hover/node:scale-[1.005]">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            
            {/* Overlay d'assombrissement léger en cas de fond d'image trop clair */}
            <div className="absolute inset-0 bg-neutral-950/5 pointer-events-none group-hover/node:opacity-0 transition-opacity duration-500" />
          </div>

          {/* Micro-indicateur d'action discret au coin inférieur droit */}
          {project.link && (
            <div className="absolute bottom-4 right-4 p-2 bg-white/90 border border-neutral-200 text-neutral-900 opacity-0 transform translate-y-2 transition-all duration-500 group-hover/node:opacity-100 group-hover/node:translate-y-0 hidden sm:flex items-center justify-center">
              <ArrowRight size={14} className="text-neutral-800" />
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default ProjectNode;