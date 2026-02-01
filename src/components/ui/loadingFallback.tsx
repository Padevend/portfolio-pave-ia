import { useMemo } from "react";

const LoadingFallback = () => {
  return useMemo(()=>(
    <div className="flex flex-col items-center justify-center h-screen w-full bg-slate-50/50 backdrop-blur-sm transition-all">
      <div className="relative flex items-center justify-center">
        {/* Anneau extérieur pulsant */}
        <div className="absolute h-20 w-20 rounded-full border-4 border-indigo-100 animate-ping opacity-20"></div>
        
        {/* Spinner principal avec gradient */}
        <div className="h-16 w-16 rounded-full border-4 border-t-indigo-600 border-r-transparent border-b-indigo-600 border-l-transparent animate-spin"></div>
        
        {/* Point central statique ou icône discrète */}
        <div className="absolute h-2 w-2 bg-indigo-600 rounded-full"></div>
      </div>

      {/* Texte de chargement avec animation de fondu */}
      <div className="mt-8 flex flex-col items-center gap-1">
        <span className="text-sm font-semibold text-slate-700 tracking-widest uppercase animate-pulse">
          Préparation du contenu
        </span>
        <div className="flex gap-1">
          <span className="h-1 w-1 bg-indigo-400 rounded-full animate-[bounce_1s_infinite_100ms]"></span>
          <span className="h-1 w-1 bg-indigo-500 rounded-full animate-[bounce_1s_infinite_200ms]"></span>
          <span className="h-1 w-1 bg-indigo-600 rounded-full animate-[bounce_1s_infinite_300ms]"></span>
        </div>
      </div>

      {/* Accessibilité : annonceur pour lecteurs d'écran */}
      <span className="sr-only">Chargement en cours, veuillez patienter...</span>
    </div>
  ), [])
};

export default LoadingFallback;