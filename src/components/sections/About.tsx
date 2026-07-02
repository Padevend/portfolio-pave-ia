import React from 'react';
import { ArrowUpRight, CheckCircle, Compass, Eye, Globe } from 'lucide-react';

export const About: React.FC = () => {
  const featureCards = [
    {
      icon: Compass,
      title: "Ingénierie sur-mesure",
      desc: "Conception de structures numériques robustes, pensées pour évoluer face aux exigences de votre secteur."
    },
    {
      icon: Eye,
      title: "Expérience & Fluidité",
      desc: "Optimisation millimétrée de la rapidité et du confort de navigation pour vos utilisateurs."
    },
    {
      icon: Globe,
      title: "Solutions d'impact",
      desc: "Accompagnement et digitalisation des entreprises au Cameroun et à l'international."
    }
  ];

  return (
    <section id="about" className="relative py-24 px-6 lg:px-24 bg-white text-neutral-900 overflow-hidden">
      
      {/* TRACE DE GRILLE ARCHITECTURALE */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 bottom-0 left-1/4 w-[1px] bg-neutral-100/50 hidden lg:block" />
        <div className="absolute top-0 bottom-0 left-3/4 w-[1px] bg-neutral-100/50 hidden lg:block" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-neutral-100/60" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* GRILLE PRINCIPALE : TEXTE À GAUCHE, IMAGE À DROITE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-20">
          
          {/* BLOC GAUCHE : EN-TÊTE & BIOGRAPHIE (7 Colonnes) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-medium mb-3">
                <span>01 / Positionnement</span>
                {/* Point bleu éclatant comme une impulsion dans le vide */}
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
              </div>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-neutral-900 leading-tight">
                Parcours & <span className="font-serif italic text-neutral-400">Vision Strategy</span>
              </h2>
            </div>

            <div className="space-y-6 text-neutral-500 font-light leading-relaxed">
              <p className="text-lg sm:text-xl">
                Concepteur et consultant numérique basé au <span className="text-neutral-900 font-normal">Cameroun</span>, je transforme des visions d'entreprise complexes en plateformes digitales évidentes, fluides et performantes.
              </p>
              <p className="text-base">
                Mon approche associe une grande rigueur technique aux exigences esthétiques du design contemporain. Ma mission est de bâtir des outils modernes qui élèvent les standards de services numériques et accompagnent durablement la croissance de vos projets.
              </p>
            </div>

            {/* Barre de Statut Minimaliste */}
            <div className="inline-flex items-center justify-between w-full p-4 bg-neutral-50 border border-neutral-100 transition-colors duration-300 hover:border-blue-600/20 max-w-xl">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-neutral-900 transition-colors duration-300" size={16} strokeWidth={1.5} />
                <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
                  Collaboration ouverte &bull; Projets Sélectionnés
                </span>
              </div>
              <a 
                href="/contact" 
                className="text-xs uppercase tracking-wider text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1 transition-colors duration-300"
              >
                <span>S'entretenir</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* BLOC DROITE : PORTRAIT AVEC LUMIÈRE ET RETOUR DES COULEURS (5 Colonnes) */}
          <div className="lg:col-span-5 relative group">
            
            {/* LUEUR BLEU ROYAL : Apparaît derrière l'image au survol */}
            <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
            
            {/* Cadre fin réactif */}
            <div className="absolute -inset-4 border border-neutral-100 transition-colors duration-500 group-hover:border-blue-600/20 pointer-events-none z-10" />
            
            <div className="relative bg-white p-2 border border-neutral-200/60 shadow-sm overflow-hidden z-10">
              {/* IMAGE: Initiale N&B, retrouve ses couleurs d'origine au survol grâce aux classes de transition natives */}
              <div className="aspect-[4/5] bg-neutral-50 relative overflow-hidden grayscale mix-blend-luminosity contrast-[1.05] transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:scale-[1.01]">
                <img
                  src="/151115861.jpg"
                  alt="Pavel MBAH-NDAM"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Badge d'expérience ré-ancré au design */}
            <div className="absolute -bottom-6 -left-4 z-11 bg-neutral-950 text-white p-5 border border-neutral-900 shadow-xl transition-all duration-500 group-hover:border-blue-600/30">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-light tracking-tight text-white group-hover:text-blue-500 transition-colors duration-500">+3</span>
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium">Ans d'expertise</span>
              </div>
            </div>
          </div>

        </div>

        {/* NOUVELLE DISPOSITION : LES CARTES EN FRISE HORIZONTALE BASSE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-neutral-100">
          {featureCards.map((card, idx) => (
            <div 
              key={idx} 
              className="group p-6 bg-white border border-transparent transition-all duration-300 hover:bg-neutral-50/60 flex flex-col items-start justify-between min-h-[160px]"
            >
              {/* L'icône s'illumine en bleu royal pur au survol de la carte */}
              <div className="p-3 bg-neutral-50 text-neutral-400 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_4px_20px_rgba(37,99,235,0.25)] mb-4">
                <card.icon size={18} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-medium text-neutral-900 text-xs uppercase tracking-wider mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;