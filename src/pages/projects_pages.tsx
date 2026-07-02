import React, { useEffect } from "react";
import { ArrowUpRight, Activity } from "lucide-react";
import projects from "@/data/projects.json";
import HeaderBanner from "@/components/ui/headerBanner";
import ProjectNode from "@/components/ui/projectNode";
import { useNavigate } from "react-router-dom";

export const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Projets & Réalisations — Pavel Mbah-Ndam";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      
      {/* HEADER BANNER ÉDITORIALISÉ */}
      <HeaderBanner
        tag="01 / Réalisations"
        title="PROJETS SÉLECTIONNÉS"
        subtitle="Des applications et des interfaces pensées pour être à la fois belles, utiles et durables."
        breadcrumb={[{ label: "Accueil", path: "/" }, { label: "Projets" }]}
      />

      {/* ZONE DE CONTENU PRINCIPAL */}
      <section className="max-w-7xl mx-auto px-6 lg:px-24 py-16">

        {/* COMPOSITIONS VERTICALES ASYMÉTRIQUES (L'ALTERNATIVE À LA GRILLE) */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectNode key={index} project={project} index={index} />
          ))}
        </div>

        {/* SECTION DE STATUTS COMPORTEMENTAUX ET APPEL À L'ACTION */}
        <div className="mt-32 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-t border-neutral-100 pt-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 w-full lg:w-auto">
            
            
            {/* Statut Réseau / Disponibilité */}
            <div className="flex flex-col text-left">
              <span className="text-neutral-400 font-mono text-[9px] uppercase tracking-widest mb-1.5">
                Disponibilité
              </span>
              <div className="flex items-center gap-2.5">
                <Activity size={12} className="text-blue-600 animate-pulse" />
                <span className="text-neutral-900 font-mono text-[11px] font-medium tracking-wider">
                  En ligne et opérationnel
                </span>
              </div>
            </div>
          </div>

          {/* Bouton d'initialisation de contact */}
          <button 
            onClick={() => navigate("/contact")} 
            className="group flex items-center justify-between gap-6 px-8 py-4 bg-neutral-950 text-white text-xs font-medium uppercase tracking-widest transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_4px_25px_rgba(37,99,235,0.3)] w-full lg:w-auto text-center"
          >
            <span>Discutons de votre projet</span>
            <ArrowUpRight
              size={14}
              className="text-neutral-400 group-hover:text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>

      </section>
    </div>
  );
};

export default ProjectsPage;