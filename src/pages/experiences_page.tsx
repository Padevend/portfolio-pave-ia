import React, { useEffect } from "react";
import { Building2, ArrowUpRight, Briefcase, Calendar } from "lucide-react";
import HeaderBanner from "@/components/ui/headerBanner";
import experiences from "@/data/experiences.json";
import { useNavigate } from "react-router-dom";

export const ExperiencePage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Parcours — Pavel Mbah-Ndam";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      
      {/* BANNER DE PAGE STYLE STUDIO GRAPHIQUE */}
      <HeaderBanner
        tag="03 / Chronologie"
        title="PARCOURS PRO"
        subtitle="Rétrospective des déploiements techniques et des contributions stratégiques."
        breadcrumb={[{ label: "Accueil", path: "/" }, { label: "Expériences" }]}
      />

      {/* CONTENU PRINCIPAL */}
      <section className="relative py-20 px-6 lg:px-24 overflow-hidden">
        
        {/* LIGNES DE GUIDAGE VERTICALES */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 bottom-0 left-1/4 w-[1px] bg-neutral-100/60 hidden lg:block" />
          <div className="absolute top-0 bottom-0 left-3/4 w-[1px] bg-neutral-100/60 hidden lg:block" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          
          {/* EN-TÊTE DE SECTION MINI-MALISTE */}
          <div className="flex flex-col items-start lg:items-center text-left lg:text-center mb-28 max-w-xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2.5 text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-medium">
              <span>Annales de Réalisations</span>
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,1)]" />
            </div>
            <p className="text-neutral-500 text-base font-light leading-relaxed">
              Une progression rigoureuse marquée par la conception de briques logicielles complexes et la direction technique d'architectures applicatives scalables.
            </p>
          </div>

          {/* CONTENEUR DE LA TIMELINE */}
          <div className="relative">
            
            {/* Ligne d'ancrage centrale (Fine couture de repère) */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-neutral-200/80 transform md:-translate-x-1/2 z-0" />

            {/* LISTE DES EXPÉRIENCES */}
            <div className="space-y-20 relative z-10">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`group/item relative flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-16 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  
                  {/* LE POINT CHRONOLOGIQUE : S'allume en bleu royal intense au survol de la ligne */}
                  <div className="absolute left-4 md:left-1/2 top-8 w-3 h-3 -ml-[5px] md:-translate-x-1/2 flex items-center justify-center z-30">
                    <div className="w-2.5 h-2.5 rounded-full bg-white border border-neutral-300 transition-all duration-500 ease-in-out group-hover/item:border-blue-600 group-hover/item:bg-blue-600 group-hover/item:scale-125 group-hover/item:shadow-[0_0_15px_rgba(37,99,235,0.8)]" />
                  </div>

                  {/* COLONNE DATE / PÉRIODE (DESKTOP) */}
                  <div
                    className={`hidden md:flex flex-col justify-top pt-6 w-1/2 ${
                      index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"
                    }`}
                  >
                    <div className="text-[11px] font-mono tracking-[0.2em] text-neutral-400 uppercase font-medium transition-colors duration-500 group-hover/item:text-blue-600 flex items-center gap-2 justify-end group-hover/item:translate-x-0 transition-transform">
                      {index % 2 === 0 && <span>{exp.period}</span>}
                      <Calendar size={11} className="text-neutral-300 group-hover/item:text-blue-600 transition-colors" />
                      {index % 2 !== 0 && <span>{exp.period}</span>}
                    </div>
                    <span className="text-[9px] font-mono tracking-widest text-neutral-200 uppercase mt-1">
                      Ref_Index_0{index + 1}
                    </span>
                  </div>

                  {/* CARTE DE L'EXPÉRIENCE */}
                  <div className="pl-12 md:pl-0 md:w-1/2">
                    <div className="bg-white border border-neutral-200/70 p-8 transition-all duration-500 ease-in-out hover:border-neutral-300 hover:bg-neutral-50/40 hover:-translate-y-1 flex flex-col h-full justify-between">
                      
                      <div>
                        {/* En-tête de carte */}
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-6">
                          <div>
                            <h3 className="text-base font-medium text-neutral-950 uppercase tracking-wider">
                              {exp.title}
                            </h3>
                            <div className="inline-flex items-center gap-1.5 mt-1.5 text-neutral-400 font-mono text-xs uppercase tracking-wider">
                              <Building2 size={12} strokeWidth={1.5} />
                              <span className="transition-colors duration-500 group-hover/item:text-neutral-900">{exp.company}</span>
                            </div>
                          </div>
                          {/* Période visible uniquement sur Mobile */}
                          <div className="md:hidden inline-block font-mono text-[10px] text-neutral-400 uppercase tracking-wider mt-1">
                            {exp.period}
                          </div>
                        </div>

                        {/* Description textuelle */}
                        <p className="text-neutral-500 text-xs font-light leading-relaxed mb-8">
                          {exp.description}
                        </p>
                      </div>

                      {/* Faits marquants / Technologies utilisées */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100">
                        {exp.highlights.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 bg-neutral-50 border border-neutral-100 text-neutral-500 text-[10px] uppercase tracking-wider font-medium transition-colors duration-300 hover:border-blue-600/20 hover:text-neutral-900"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* SECTION DE CLÔTURE ET DE SÉCURISATION DES JALONS (CTA EN ENCRE NOIRE) */}
          <div className="mt-36 relative overflow-hidden bg-neutral-950 text-neutral-400 p-8 md:p-16 border border-neutral-900 group/cta">
            
            {/* Halo de lumière Bleu Royal masqué, magnifié au survol */}
            <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none opacity-40 group-hover/cta:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              <div className="max-w-xl space-y-4">
                <div className="flex items-center gap-3">
                  <Briefcase className="text-neutral-700 group-hover/cta:text-blue-500 transition-colors duration-500" size={16} />
                  <h3 className="text-sm font-medium text-white uppercase tracking-[0.25em]">Ouverture aux défis</h3>
                </div>
                <p className="text-neutral-400 text-lg font-light leading-relaxed">
                  Je reste continuellement réceptif à l'étude d'écosystèmes ambitieux et de <span className="text-white font-normal transition-colors duration-500 group-hover/cta:text-blue-400">collaborations à forte valeur technologique</span>. Initialisons l'échange.
                </p>
              </div>

              <button
                onClick={() => navigate("/contact")}
                className="group flex items-center justify-center gap-4 px-8 py-4 bg-white text-neutral-950 font-medium text-xs uppercase tracking-widest transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-[0_4px_25px_rgba(37,99,235,0.3)] w-full lg:w-auto shrink-0"
              >
                <span>Ouvrir la connexion</span>
                <ArrowUpRight className="text-neutral-400 group-hover:text-white transition-colors duration-300" size={14} />
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;