import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search, 
  Calendar, 
  Layers,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import BlogController from "@/utils/article_controllers";

// Interface pour nos articles
interface Article {
  title: string;
  tags: string[];
  short_desc: string;
  slug: string;
  content_path: string;
  date: string;
}

const articles: Article[] = BlogController.getAllArticles();

export const Blog: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section className="min-h-screen bg-[#f8fafc] py-32 px-6 font-sans relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Page Header */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-blue-600 font-mono text-[10px] tracking-[0.3em] uppercase mb-4"
          >
            <div className="w-8 h-[1px] bg-blue-600" />
            Knowledge_Base_Access
          </motion.div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter"
            >
              INSIGHTS <span className="text-blue-600">&</span> LOGS.
            </motion.h1>
            
            {/* Search Bar Terminal Style */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-full md:w-80"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="RECHERCHER_DATA..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-6 text-xs font-mono focus:outline-none focus:border-blue-500/50 shadow-sm transition-all"
              />
            </motion.div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, idx) => (
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
                <span className="text-[10px] font-mono font-bold text-blue-600">ID: 0{idx + 1}</span>
                <ArrowUpRight size={20} className="text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-4 text-[10px] font-mono text-slate-400 mb-6 uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><Calendar size={12} /> {article.date}</span>
              </div>

              <h2 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                {article.title}
              </h2>

              <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3 font-light">
                {article.short_desc}
              </p>

              {/* Tags Section */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {article.tags.map(tag => (
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

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-40 text-center"
          >
            <Layers className="mx-auto text-slate-200 mb-6" size={64} />
            <h3 className="text-xl font-bold text-slate-900">AUCUN_RÉSULTAT_TROUVÉ</h3>
            <p className="text-slate-400 text-sm font-mono mt-2">La requête "{searchTerm}" n'a retourné aucune correspondance dans le noyau.</p>
          </motion.div>
        )}

        {/* Footer Metrics */}
        <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500" /> Database_Connected</span>
            <span>Articles_Total: {articles.length}</span>
          </div>
          <div className="flex items-center gap-2 italic">
            <Sparkles size={12} className="text-blue-400" />
            Synthesized_by_Pavel.AI
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;