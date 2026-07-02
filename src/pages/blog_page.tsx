import React, { useState, useEffect } from "react";
import { Search, Calendar, ArrowUpRight, Inbox, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BlogController from "@/utils/article_controllers";

// Interface stricte respectée à la lettre
interface Article {
  title: string;
  tags: string[];
  short_desc: string;
  slug: string;
  content_path: string;
  date: string;
}

const articles: Article[] = BlogController.getAllArticles({ order: "asc" });

export const Blog: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.title = "Écrits & Perspectives — Pavel Mbah-Ndam";
  }, []);

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section className="min-h-screen bg-white text-neutral-900 pt-40 pb-24 px-6 lg:px-24 font-sans antialiased selection:bg-blue-600 selection:text-white">
      
      {/* ─── COUTURES ARCHITECTURALES ─── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 bottom-0 left-1/4 w-[1px] bg-neutral-100/60 hidden lg:block" />
        <div className="absolute top-0 bottom-0 left-3/4 w-[1px] bg-neutral-100/60 hidden lg:block" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ─── DISPOSITION EN GRILLE SPLITÉE (SIDEBAR + STREAM) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* COLONNE GAUCHE STATIQUE : RECHERCHE & INTENTION EDITORIALE (4 Colonnes) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,1)]" />
                <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-neutral-400">
                  04 / Écrits & Réflexions
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-light tracking-tight text-neutral-950 uppercase leading-none">
                Insights <br />
                <span className="font-serif italic text-neutral-400 normal-case">& Notes.</span>
              </h1>
            </div>

            <p className="text-neutral-500 text-xs font-light leading-relaxed max-w-sm">
              Partage d'expériences logicielles, d'analyses architecturales et de réflexions sur la tech face aux enjeux du continent africain.
            </p>

            {/* Barre de Recherche Épurée Style Galerie */}
            <div className="relative w-full max-w-sm flex items-center bg-neutral-50/50 border border-neutral-200/80 rounded-none">
              <Search className="text-neutral-400 ms-3" size={16} />
              <input
                type="text"
                placeholder="Rechercher une note ou un mot-clé..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3.5 px-4 text-xs tracking-wide focus:outline-none focus:border-blue-600 focus:bg-white transition-all duration-300"
              />
            </div>
          </div>

          {/* COLONNE DROITE DYNAMIQUE : LE FLUX DES ARTICLES (8 Colonnes) */}
          <div className="lg:col-span-8 border-t border-neutral-100 lg:border-t-0">
            
            {filteredArticles.length > 0 ? (
              <div className="divide-y divide-neutral-100">
                {filteredArticles.map((article, idx) => {
                  const formattedIndex = String(idx + 1).padStart(2, "0");
                  
                  return (
                    <article
                      key={article.slug}
                      onClick={() => navigate(`/blog/${article.slug}`)}
                      className="group/article cursor-pointer py-10 first:pt-0 last:pb-0 flex flex-col md:flex-row items-start gap-6 md:gap-10 transition-all duration-500 ease-in-out hover:bg-neutral-50/40 px-2 -mx-2 border-none"
                    >
                      {/* Métadonnées et Indexation de la ligne */}
                      <div className="flex md:flex-col items-center md:items-start justify-between w-full md:w-24 shrink-0 font-mono text-[10px] tracking-widest text-neutral-500">
                        <span className="text-neutral-400 group-hover/article:text-blue-600 font-medium transition-colors duration-500">
                          N° {formattedIndex}
                        </span>
                        <span className="flex items-center gap-1.5 md:mt-2">
                          <Calendar size={11} className="text-neutral-300" />
                          {article.date}
                        </span>
                      </div>

                      {/* Corps éditorial de l'article */}
                      <div className="space-y-3 flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <h2 className="text-lg font-medium text-neutral-950 uppercase tracking-wide group-hover/article:text-blue-600 transition-colors duration-500 leading-snug">
                            {article.title}
                          </h2>
                          <ArrowUpRight 
                            size={16} 
                            className="text-neutral-300 group-hover/article:text-blue-600 group-hover/article:translate-x-0.5 group-hover/article:-translate-y-0.5 transition-all duration-500 shrink-0" 
                          />
                        </div>

                        <p className="text-neutral-500 text-xs font-light leading-relaxed max-w-2xl">
                          {article.short_desc}
                        </p>

                        {/* Flux de tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {article.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[9px] font-mono tracking-wider text-neutral-400 uppercase bg-neutral-50 px-2 py-0.5 border border-neutral-100/60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              /* ÉTAT VIDE (EMPTY STATE) SOIGNÉ */
              <div className="py-24 text-center border border-dashed border-neutral-200 bg-neutral-50/20 max-w-xl mx-auto lg:mt-6">
                <Inbox className="mx-auto text-neutral-300 mb-4" size={40} strokeWidth={1.2} />
                <h3 className="text-sm font-medium text-neutral-950 uppercase tracking-wider">Aucune note trouvée</h3>
                <p className="text-neutral-400 text-xs font-light mt-1 max-w-xs mx-auto">
                  La recherche pour "{searchTerm}" n'a retourné aucun article correspondant dans nos registres.
                </p>
              </div>
            )}

          </div>
        </div>

        {/* ─── COMPTEURS ET MÉTADONNÉES DE PIED DE PAGE ─── */}
        <div className="mt-28 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-medium">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Indexation synchronisée
            </span>
            <span>Publications totales : {articles.length}</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-400 font-light">
            <BookOpen size={11} />
            <span>Pavel Mbah-Ndam — Édition 2026</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Blog;