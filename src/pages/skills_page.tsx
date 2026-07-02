import React, { useEffect } from 'react';
import { 
  Terminal, 
  Layers, 
  Compass,
  Zap,
  Activity
} from 'lucide-react';
import HeaderBanner from '@/components/ui/headerBanner';
import skills from "@/data/skills.json";

export const SkillsPage: React.FC = () => {

  useEffect(() => {
    document.title = "Expertise — Pavel Mbah-Ndam";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      
      {/* BANNER DE PAGE RÉORGANISÉE (ÉDITORIALE & ÉPURÉE) */}
      <HeaderBanner
        tag="02 / Savoir-Faire"
        title="STACK TECHNIQUE"
        subtitle="Ingénierie logicielle avancée et conception d'écosystèmes numériques."
        breadcrumb={[
          { label: "Accueil", path: "/" },
          { label: "Expertise" }
        ]}
      />

      {/* SECTION PRINCIPALE */}
      <section className="relative py-20 px-6 lg:px-24 overflow-hidden">
        
        {/* LIGNES DE REPRÈS ARCHITECTURALES SUBTILES */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 bottom-0 left-1/4 w-[1px] bg-neutral-100/60 hidden lg:block" />
          <div className="absolute top-0 bottom-0 left-3/4 w-[1px] bg-neutral-100/60 hidden lg:block" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-24">
          
          {/* EN-TÊTE DE SECTION AVEC LE SIGNAL BLEU ROYAL */}
          <div className="flex flex-col items-start max-w-2xl">
            <div className="inline-flex items-center gap-2.5 text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-medium mb-4">
              <span>Matrice d'ingénierie</span>
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,1)]" />
            </div>
            <p className="text-neutral-500 text-lg font-light leading-relaxed">
              Une sélection rigoureuse d'outils et de méthodologies modernes articulés pour matérialiser des architectures stables, véloces et idéalement taillées pour l'échelle de vos ambitions.
            </p>
          </div>

          {/* GRILLE DES COMPÉTENCES (SKILLS GRID) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="group relative bg-white border border-neutral-200/60 p-8 transition-all duration-500 hover:border-neutral-300 hover:bg-neutral-50/30 flex flex-col justify-between min-h-[300px]"
              >
                {/* Code d'indexation discret */}
                <div className="absolute top-6 right-8 font-mono text-[9px] text-neutral-300 tracking-widest uppercase group-hover:text-blue-600 transition-colors duration-500">
                  {skillGroup.code}
                </div>

                <div>
                  {/* Titre et description de la catégorie */}
                  <div className="flex items-center gap-4 mb-6">
                    {/* L'icône passe du gris au bleu royal pur au survol de la carte */}
                    <div className="p-3 bg-neutral-50 text-neutral-400 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_4px_20px_rgba(37,99,235,0.2)]">
                      <Layers size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-neutral-900 uppercase tracking-wider">
                        {skillGroup.category}
                      </h3>
                      <p className="text-xs text-neutral-400 font-light mt-0.5">{skillGroup.description}</p>
                    </div>
                  </div>

                  {/* Badges des compétences individuelles */}
                  <div className="flex flex-wrap gap-2.5 mt-6">
                    {skillGroup.items.map((skill) => (
                      <div
                        key={skill}
                        className="px-3.5 py-1.5 bg-neutral-50/50 border border-neutral-100 text-neutral-500 text-xs uppercase tracking-wider font-medium transition-all duration-300 hover:bg-white hover:border-blue-600/30 hover:text-neutral-900 flex items-center gap-2 hover:scale-[1.02]"
                      >
                        {/* Une micro-puce bleue s'allume au survol de la compétence */}
                        <div className="w-1 h-1 rounded-full bg-neutral-300 transition-colors duration-300 group-hover/skill:bg-blue-600" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SECTION WORKFLOW EN ROW HORIZONTALE ÉPURÉE */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-neutral-100">
            {[
              { title: "Rigueur Globale", icon: Compass, text: "Lisibilité, modularité et architectures cleans érigées en normes absolues." },
              { title: "Optimisation Critique", icon: Zap, text: "Exigence maximale portée sur le temps de réponse et le comportement utilisateur." },
              { title: "Évolutivité Native", icon: Activity, text: "Structures applicatives pensées dès le premier jour pour supporter la charge." }
            ].map((feature, i) => (
              <div key={i} className="group flex items-start gap-4 p-4 transition-colors duration-300 hover:bg-neutral-50/50">
                <div className="w-10 h-10 flex-shrink-0 bg-neutral-50 border border-neutral-200/40 text-neutral-400 group-hover:text-neutral-900 group-hover:border-neutral-300 transition-colors flex items-center justify-center">
                  <feature.icon size={16} strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium text-neutral-900 text-xs uppercase tracking-wider">{feature.title}</h4>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* L'INTENTION FONDAMENTALE : LE DOSSIER DE VISION NOIR & HALO BLEU ROYAL */}
          <div className="relative overflow-hidden bg-neutral-950 text-neutral-400 p-8 md:p-14 border border-neutral-900 group/vision">
            
            {/* Halo de fond : La lumière bleue isolée */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none opacity-60 group-hover/vision:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-3">
                  <Terminal className="text-neutral-600 group-hover/vision:text-blue-500 transition-colors duration-500" size={16} />
                  <h3 className="text-sm font-medium text-white uppercase tracking-[0.25em]">Perspectives & Impact</h3>
                </div>
                <p className="text-neutral-400 text-lg font-light leading-relaxed">
                  Bâtir des plateformes <span className="text-white font-normal transition-colors duration-500 group-hover/vision:text-blue-400">SaaS d'envergure</span> pour le marché africain, structurer des systèmes de design hautement réutilisables et insuffler l'excellence technique auprès des équipes locales.
                </p>
              </div>
              
              {/* Badges de vision géométriques droits */}
              <div className="flex flex-wrap gap-3">
                {["Impact", "Innovation", "Cameroun"].map((word) => (
                  <div 
                    key={word} 
                    className="px-5 py-2.5 bg-neutral-900 text-neutral-400 border border-neutral-800 text-[10px] font-medium font-mono uppercase tracking-widest transition-all duration-300 hover:text-white hover:border-blue-600/30 cursor-default"
                  >
                    {word}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default SkillsPage;