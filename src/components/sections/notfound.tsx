import React from "react";
import { ArrowLeft, RotateCw } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const NotFound: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col items-center justify-center p-6 font-sans antialiased relative overflow-hidden selection:bg-blue-600 selection:text-white">
      
      {/* ─── COUTURES ARCHITECTURALES (Alignement identique) ─── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 bottom-0 left-1/4 w-[1px] bg-neutral-100/60 hidden lg:block" />
        <div className="absolute top-0 bottom-0 left-3/4 w-[1px] bg-neutral-100/60 hidden lg:block" />
      </div>

      {/* ─── CONTENU CENTRÉ ─── */}
      <div className="w-full max-w-md text-center space-y-8 relative z-10">
        
        {/* Identifiant Numérique Visuel */}
        <div className="space-y-1">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-blue-600 font-semibold block">
            Erreur Système
          </span>
          <h1 className="text-8xl font-light tracking-tighter text-neutral-950 uppercase leading-none">
            404
          </h1>
        </div>

        {/* Note Éditoriale */}
        <p className="text-neutral-500 text-xs font-light leading-relaxed max-w-sm mx-auto italic font-serif">
          Le segment ou la note d'archive demandé n'existe pas ou a été déplacé de façon permanente.
        </p>

        {/* Séparateur Minimaliste */}
        <div className="h-[1px] w-12 bg-neutral-200 mx-auto" />

        {/* Actions Épurées */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <button
            onClick={()=>navigate(-1)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-neutral-900 bg-neutral-950 text-white font-mono text-[10px] tracking-widest uppercase hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 shadow-sm"
          >
            <ArrowLeft size={11} />
            Retour
          </button>
          
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-neutral-200 text-neutral-500 bg-white font-mono text-[10px] tracking-widest uppercase hover:bg-neutral-50 hover:text-neutral-900 transition-all duration-300"
          >
            <RotateCw size={11} />
            Rafraîchir
          </button>
        </div>
      </div>

      {/* Identifiant technique discret */}
      <div className="absolute bottom-6 font-mono text-[8px] tracking-[0.2em] text-neutral-300 uppercase pointer-events-none">
        status_code // 0xCF404
      </div>
    </div>
  );
};

export default NotFound;