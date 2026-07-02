import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Share2,
  ArrowUpRight,
  Loader2,
  AlertTriangle,
  BookOpen,
} from "lucide-react";
import MarkdownRenderer from "@/components/ui/markdwonRenderer";
import BlogController from "@/utils/article_controllers";
import { share_link } from "@/utils/helpers";
import { defineSEO } from "@/hooks/useSeo";

interface Article {
  title: string;
  tags: string[];
  short_desc: string;
  slug: string;
  content_path: string;
  date: string;
}

export const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [recentArticle, setRecentArticle] = useState<Article[]>([]);

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
        title: "Introuvable",
        description: "Article introuvable",
      });
      setError("Cet article n'existe pas ou a été déplacé.");
      setLoading(false);
      return;
    }
    setArticle(found);
    defineSEO({
      title: found.title,
      description: found.short_desc,
    });

    try {
      const content = await BlogController.getArticlesContent(
        found.content_path
      );
      setHtmlContent(content);

      const recent_articles: Article[] = BlogController.getAllArticles({
        order: "asc",
        limit: 3,
        exclude: [`${id}`],
      });
      setRecentArticle(recent_articles);
    } catch (err) {
      setError("Le contenu n'a pas pu être chargé.");
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
          <Loader2 className="text-neural-500 animate-spin" size={32} strokeWidth={1.5} />
          <span className="text-[10px] font-medium text-neutral-400 uppercase tracking-[0.3em]">
            Chargement de l'article
          </span>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6 text-center">
        <div className="max-w-md">
          <AlertTriangle className="mx-auto text-neutral-300 mb-6" size={40} strokeWidth={1.2} />
          <h1 className="text-2xl font-light text-neutral-950 mb-4 tracking-tight uppercase">
            Article introuvable
          </h1>
          <p className="text-neutral-500 text-sm font-light mb-8">{error}</p>
          <button
            onClick={() => navigate("/blog")}
            className="px-8 py-3.5 bg-neutral-950 text-white text-[10px] font-medium uppercase tracking-widest hover:bg-blue-600 transition-all duration-300"
          >
            Retour aux écrits
          </button>
        </div>
      </div>
    );
  }

  // ── Article ──────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased selection:bg-blue-600 selection:text-white pt-15 sm:pt-21">
      {/* Barre de progression de lecture */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-blue-600 origin-left z-[100]"
        style={{ scaleX }}
      />


      {/* En-tête éditorial */}
      <header className="pt-16 pb-10 px-6 lg:px-24 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2.5 mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,1)]" />
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-neutral-400">
              Écrits & Réflexions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-light text-neutral-950 tracking-tight uppercase leading-[1.1] mb-8"
          >
            {article.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-8 text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-8"
          >
            <span className="flex items-center gap-2">
              <Calendar size={12} className="text-neutral-300" /> {article.date}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap gap-2"
          >
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-mono tracking-wider text-neutral-400 uppercase bg-neutral-50 px-2 py-0.5 border border-neutral-100/60"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Navigation supérieure fine */}
        <nav className="py-8 max-w-4xl mx-auto flex justify-between items-center">
          <button
            onClick={() => navigate("/blog")}
            className="flex items-center gap-2 text-[10px] font-medium tracking-widest uppercase text-neutral-400 hover:text-blue-600 transition-colors duration-300 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
            Retour aux écrits
          </button>
          <button
            onClick={() =>
              share_link({
                title: article.title,
                desc: article.short_desc,
              })
            }
            className="flex items-center gap-2 text-[10px] font-medium tracking-widest uppercase text-neutral-400 hover:text-blue-600 transition-colors duration-300"
          >
            <Share2 size={14} />
            Partager
          </button>
        </nav>

        {/* Ligne de séparation architecturale */}
        <div className="max-w-4xl mx-auto border-t border-neutral-100 mt-5" />
      </header>



      {/* Contenu */}
      <main className="px-6 lg:px-24 pb-24">
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto prose prose-neutral prose-sm md:prose-base"
        >
          <MarkdownRenderer content={htmlContent} />
        </motion.article>
      </main>

      {/* Suite de lecture */}
      <footer className="py-24 bg-neutral-50/40 border-t border-neutral-100 px-6 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4 justify-center">
            <BookOpen size={14} className="text-neutral-300" />
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-neutral-400">
              À lire ensuite
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-light text-neutral-950 mb-4 tracking-tight uppercase text-center">
            Poursuivre la lecture <br className="hidden md:block" />
            <span className="font-serif italic text-neutral-400 normal-case">avec ces notes.</span>
          </h3>

          {/* Articles recommandés en flux éditorial */}
          <div className="divide-y divide-neutral-100 max-w-3xl mx-auto mt-14">
            {recentArticle.map((item, idx) => {
              const formattedIndex = String(idx + 1).padStart(2, "0");
              return (
                <article
                  key={item.slug}
                  onClick={() => navigate(`/blog/${item.slug}`)}
                  className="group/article cursor-pointer py-8 first:pt-0 last:pb-0 flex flex-col md:flex-row items-start gap-6 md:gap-10 transition-all duration-500 ease-in-out hover:bg-white px-2 -mx-2"
                >
                  <div className="flex md:flex-col items-center md:items-start justify-between w-full md:w-28 shrink-0 font-mono text-[10px] tracking-widest text-neutral-400">
                    <span className="text-neutral-400 group-hover/article:text-blue-600 font-medium transition-colors duration-500">
                      N° {formattedIndex}
                    </span>
                    <span className="flex items-center gap-1.5 md:mt-2">
                      <Calendar size={11} className="text-neutral-300" />
                      {item.date}
                    </span>
                  </div>

                  <div className="space-y-2 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="text-base font-medium text-neutral-950 uppercase tracking-wide group-hover/article:text-blue-600 transition-colors duration-500 leading-snug">
                        {item.title}
                      </h2>
                      <ArrowUpRight
                        size={16}
                        className="text-neutral-300 group-hover/article:text-blue-600 group-hover/article:translate-x-0.5 group-hover/article:-translate-y-0.5 transition-all duration-500 shrink-0"
                      />
                    </div>
                    <p className="text-neutral-500 text-xs font-light leading-relaxed max-w-2xl">
                      {item.short_desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="flex justify-center mt-14">
            <button
              onClick={() => navigate("/blog")}
              className="flex items-center gap-3 px-8 py-4 bg-neutral-950 text-white text-[10px] font-medium uppercase tracking-widest transition-all duration-300 hover:bg-blue-600"
            >
              Voir tous les écrits
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArticlePage;