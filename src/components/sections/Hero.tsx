import { ArrowRight, ArrowUpRight, Linkedin, Github, Mail } from "lucide-react";

export const Hero = () => {
  const name = "Pavel MBAH-NDAM TSOMELOU";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-zinc-50 overflow-hidden px-6 lg:px-20 py-24 border-b border-zinc-200"
    >
      {/* ─── STRUCTURE DE L'IMAGE INCRUSTÉE ─── */}
      <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full pointer-events-none z-0">
        {/* Ligne de structure verticale séparatrice */}
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-zinc-200" />
        
        {/* Conteneur de l'image avec masque de fusion linéaire */}
        <div className="relative w-full h-full opacity-10 lg:opacity-20 grayscale contrast-125 mix-blend-multiply">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop"
            alt="Minimal Abstract Architecture"
            className="w-full h-full object-cover object-center"
          />
          {/* Masques de dégradés pour incruster l'image parfaitement dans le fond blanc */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-50 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-transparent to-zinc-50" />
        </div>
      </div>

      {/* ─── CONTENU PRINCIPAL ─── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Colonne Gauche : Éditorial Épuré */}
        <div className="w-full lg:max-w-2xl text-center lg:text-left">
          
          {/* Ligne fine décorative style agence de design */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
            <span className="w-12 h-px bg-zinc-900" />
            <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-zinc-500">
              Portfolio Personnel
            </span>
          </div>

          {/* Titre Majeur Style Éditorial */}
          <h1 className="text-4xl sm:text-6xl font-light text-zinc-950 tracking-tight leading-[1.1] mb-8">
            Concevoir des solutions <br />
            <span className="font-medium">digitales sur-mesure.</span>
          </h1>

          {/* Texte de présentation clair et accessible */}
          <p className="text-zinc-600 text-lg sm:text-xl max-w-xl lg:mx-0 mx-auto mb-12 leading-relaxed font-light">
            Je m'appelle <span className="font-normal text-zinc-900">{name}</span>. 
            J'accompagne les entreprises dans la création d'applications modernes, 
            intelligentes et centrées sur l'expérience utilisateur.
          </p>

          {/* Actions Minimalistes */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <a
              href="/projects"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-zinc-950 text-white font-medium text-sm rounded-none tracking-wide transition-all duration-300 hover:bg-zinc-800 w-full sm:w-auto"
            >
              <span>Découvrir mes réalisations</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={16} />
            </a>

            <a
              href="/contact"
              className="group flex items-center justify-center gap-2 px-8 py-4 text-zinc-900 font-medium text-sm border border-zinc-300 bg-white/80 backdrop-blur-sm rounded-none tracking-wide transition-all duration-300 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 w-full sm:w-auto"
            >
              <span>Me contacter</span>
              <ArrowUpRight className="opacity-60 group-hover:opacity-100 transition-opacity" size={16} />
            </a>
          </div>
        </div>

        {/* Colonne Droite : Cartouche de Informations (Incrusté et discret) */}
        <div className="hidden lg:flex w-[350px] flex-col gap-8 bg-white/40 backdrop-blur-md border border-zinc-200/80 p-8 shadow-sm">
          <div className="space-y-1">
            <div className="text-[10px] font-medium tracking-wider text-zinc-400 uppercase">Localisation</div>
            <div className="text-sm font-medium text-zinc-900">Yaoundé, Cameroun</div>
          </div>
          
          <div className="w-full h-px bg-zinc-200" />
          
          <div className="space-y-1">
            <div className="text-[10px] font-medium tracking-wider text-zinc-400 uppercase">Philosophie</div>
            <div className="text-sm text-zinc-600 leading-relaxed font-light">
              "La simplicité est la sophistication suprême. Chaque détail doit avoir un but précis."
            </div>
          </div>

          <div className="w-full h-px bg-zinc-200" />

          {/* Liens Réseaux Intégrés au bloc */}
          <div className="flex items-center gap-4 text-zinc-400">
            <a href="#" className="hover:text-zinc-950 transition-colors duration-300">
              <Linkedin size={18} />
            </a>
            <a href="#" className="hover:text-zinc-950 transition-colors duration-300">
              <Github size={18} />
            </a>
            <a href="#" className="hover:text-zinc-950 transition-colors duration-300">
              <Mail size={18} />
            </a>
          </div>
        </div>

      </div>

      {/* Barre de Réseaux Sociaux pour le Mobile */}
      <div className="flex lg:hidden absolute bottom-6 left-6 right-6 gap-6 justify-center text-zinc-400 border-t border-zinc-200 pt-4 z-10">
        <a href="#" className="hover:text-zinc-950 transition-colors"><Linkedin size={18} /></a>
        <a href="#" className="hover:text-zinc-950 transition-colors"><Github size={18} /></a>
        <a href="#" className="hover:text-zinc-950 transition-colors"><Mail size={18} /></a>
      </div>
    </section>
  );
};

export default Hero;