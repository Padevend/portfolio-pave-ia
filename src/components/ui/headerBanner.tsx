import React from 'react';

interface HeaderBannerProps {
  tag: string;
  title: string;
  subtitle: string;
  breadcrumb: { label: string; path?: string }[];
}

const HeaderBanner: React.FC<HeaderBannerProps> = ({ tag, title, subtitle, breadcrumb }) => {
  return (
    <div className="relative pt-40 pb-20 px-6 lg:px-24 overflow-hidden bg-white border-b border-neutral-100">
      
      {/* ─── COUTURES ARCHITECTURALES & HALO BLEU SUBTILE ─── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Lignes de repère verticales identiques au Hero et aux pages */}
        <div className="absolute top-0 bottom-0 left-1/4 w-[1px] bg-neutral-100/50 hidden lg:block" />
        <div className="absolute top-0 bottom-0 left-3/4 w-[1px] bg-neutral-100/50 hidden lg:block" />
        
        {/* L'INTENTION : Aura Bleu Royal diffuse très légère en haut au centre */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-blue-600/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-start text-left">
          
          {/* FIL D'ARIANE (BREADCRUMB) ET SIGNAL LUMINEUX */}
          <nav className="flex items-center gap-2.5 mb-8 text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-medium">
            {/* Le point bleu perçant comme repère initial unique */}
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,1)] animate-pulse" />
            
            {breadcrumb.map((item, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="text-neutral-200 font-light">/</span>}
                {item.path ? (
                  <a 
                    href={item.path} 
                    className="hover:text-neutral-900 transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="text-neutral-900 font-semibold">{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* TITRE PRINCIPAL STYLE MAGAZINE */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-neutral-950 tracking-tight leading-[1.1] mb-6 max-w-4xl uppercase">
            {/* Gestion sécurisée de la typographie combinée sans coupure brute du split */}
            {title.includes(' ') ? (
              <>
                {title.substring(0, title.indexOf(' '))}{' '}
                <span className="font-serif italic text-neutral-400 normal-case">
                  {title.substring(title.indexOf(' ') + 1)}
                </span>
              </>
            ) : (
              title
            )}
          </h1>

          {/* SOUS-TITRE / SOUS-EN-TÊTE ÉDITORIAL */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pt-4 w-full border-t border-neutral-100 text-neutral-400">
            <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-neutral-900 shrink-0">
              {tag}
            </span>
            <span className="hidden sm:inline h-3 w-[1px] bg-neutral-200" />
            <p className="text-xs uppercase tracking-widest font-light font-mono text-neutral-400">
              {subtitle}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;