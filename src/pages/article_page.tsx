import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Share2,
  Cpu,
  Activity,
  Loader2,
  AlertTriangle,
  ArrowUpRight,
} from "lucide-react";
import MarkdownRenderer from "@/components/ui/markdwonRenderer";
import BlogController from "@/utils/article_controllers";
import { share_link } from "@/utils/helpers";
import { defineSEO } from "@/hooks/useSeo";


export const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [recentArticle, setRecentArticle] = useState<Article[]>([])

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress as any, {
    damping: 30,
    restDelta: 0.001,
  });

  const loadContent = async () => {
    setLoading(true);

    const found = BlogController.getArticleById(id || "");

    if (!found) {
      defineSEO({
        title: "Not Fount",
        description: "Article introuvable"
      })
      setError("Article non trouvé dans la base de données.");
      setLoading(false);
      return;
    }
    setArticle(found);
    defineSEO({
      title: found.title,
      description: found.short_desc
    })

    try {
      const content = await BlogController.getArticlesContent(
        found.content_path,
      );
      setHtmlContent(content);


      const recent_articles: Article[] = BlogController.getAllArticles({
        order: "asc",
        limit: 3,
        exclude: [`${id}`]
      });
      setRecentArticle(recent_articles)
    } catch (err) {
      setError("Échec du chargement du contenu.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContent();

    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="text-blue-600 animate-spin" size={40} />
          <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
            Initialisation_du_flux_données...
          </span>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6 text-center">
        <div className="max-w-md">
          <AlertTriangle className="mx-auto text-amber-500 mb-6" size={48} />
          <h1 className="text-2xl font-black text-slate-900 mb-4 tracking-tighter uppercase">
            Erreur_Système
          </h1>
          <p className="text-slate-500 font-mono text-sm mb-8">{error}</p>
          <button
            onClick={() => navigate("/blog")}
            className="px-8 py-3 bg-slate-900 text-white font-mono text-[10px] uppercase rounded-xl hover:bg-blue-600 transition-all shadow-lg"
          >
            Retour_Index_Blog
          </button>
        </div>
      </div>
    );
  }

  // ── Article ──────────────────────────────────────────────────────────────
  return (
    <>
      <>

      </>
      <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
        {/* Progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[100]"
          style={{ scaleX }}
        />

        {/* Header */}
        <header className="pt-32 pb-16 px-6 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none text-slate-900">
            <Cpu size={400} />
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100/50 border border-blue-200 rounded-full text-[10px] font-mono font-black text-blue-700 uppercase tracking-wide"
                >
                  #{tag.replace(" ", "_")}
                </span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight mb-8"
            >
              {article.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-8 text-[11px] font-mono text-slate-500 uppercase tracking-widest"
            >
              <span className="flex items-center gap-2 font-medium">
                <Calendar size={14} className="text-blue-500" /> {article.date}
              </span>
            </motion.div>
          </div>
        </header>

        {/* Content */}
        <main className="py-20 px-6 bg-white">
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <MarkdownRenderer content={htmlContent} />
          </motion.article>

          {/* Nav */}
          <nav className=" w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 px-6">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
              <button
                onClick={() => navigate("/blog")}
                className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 hover:text-blue-600 transition-colors group"
              >
                <ArrowLeft
                  size={16}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                RETURN_TO_INDEX
              </button>
              <div className="flex items-center gap-3">
                <div className="hidden md:flex flex-col items-end mr-4 text-right">
                  <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest">
                    Diagnostic_Path
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-700 uppercase">
                    /blog/{article.slug}
                  </span>
                </div>
                <button
                  onClick={() =>
                    share_link({
                      title: article.title,
                      desc: article.short_desc,
                    })
                  }
                  className="p-2 rounded-lg border border-slate-100 text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all"
                >
                  <Share2 size={16} />
                </button>
              </div>
            </div>
          </nav>
        </main>

        {/* Footer */}
        <footer className="py-24 bg-slate-50 border-t border-slate-100 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-slate-200 rounded-2xl mb-8 shadow-sm">
              <Activity size={14} className="text-blue-500 animate-pulse" />
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                End_of_Transmission
              </span>
            </div>

            <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tighter uppercase">
              Plus d'articles
            </h3>
            <p className="text-slate-500 text-sm font-medium mb-10 max-w-md mx-auto">
              Merci d'avoir consulté ce journal de bord technique. De nouveaux
              logs sont disponibles ici:
            </p>

            {/* Another Articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentArticle.map((article, idx) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => navigate(`/blog/${article.slug}`)}
                  className="group cursor-pointer bg-white border border-slate-200 rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 hover:shadow-blue-500/10 transition-all relative overflow-hidden"
                >
                  {/* Card Index Decor */}
                  <div className="absolute top-0 right-0 p-6 flex flex-col items-end opacity-20 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-mono font-bold text-blue-600">
                      ID: 0{idx + 1}
                    </span>
                    <ArrowUpRight
                      size={20}
                      className="text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-[10px] font-mono text-slate-400 mb-6 uppercase tracking-widest">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} /> {article.date}
                    </span>
                  </div>

                  <h2 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                    {article.title}
                  </h2>

                  <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3 font-light">
                    {article.short_desc}
                  </p>

                  {/* Tags Section */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[9px] font-mono font-bold text-slate-500 uppercase tracking-tighter"
                      >
                        #{tag.replace(" ", "_")}
                      </span>
                    ))}
                  </div>

                  {/* Hover Effect Layer */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </motion.div>
              ))}

            </div>

            <div className="flex justify-center gap-4 mt-10">
              <button
                onClick={() => navigate("/blog")}
                className="flex items-center gap-2 px-10 py-4 bg-slate-900 text-white font-mono text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-blue-600 transition-all shadow-xl hover:-translate-y-1"
              >
                EXPLORE_NEXT_MODULES
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ArticlePage;
