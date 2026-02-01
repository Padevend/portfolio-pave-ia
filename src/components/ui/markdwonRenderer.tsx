import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import { motion } from "framer-motion";
import {
  ExternalLink, 
  Hash,
  Layers,
  Info,
  CheckCircle2
} from "lucide-react";

// Note: Dans un environnement réel, assurez-vous que les CSS KaTeX et Highlight.js sont importés.
// Ici, nous supposons qu'ils sont disponibles via le layout principal.

const MarkdownComponents: Record<string, React.FC<any>> = {
  // ── Headings (H1 à H4) ───────────────────────────────────────────────────
  h1: ({ children }) => (
    <motion.h1 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="mt-16 mb-8 text-3xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase leading-tight group relative"
    >
      <span className="absolute -left-8 top-0 text-blue-600/10 font-mono text-4xl hidden md:block">
        &lt;01&gt;
      </span>
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
        {children}
      </span>
      <div className="h-1 w-20 bg-blue-600 mt-4 rounded-full" />
    </motion.h1>
  ),

  h2: ({ children }) => (
    <motion.h2 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12 mb-6 flex items-center gap-4 group"
    >
      <div className="flex flex-col items-center">
        <div className="w-1.5 h-6 bg-blue-600 rounded-full shadow-[0_0_12px_rgba(37,99,235,0.6)]" />
      </div>
      <span className="text-xl md:text-2xl font-black text-slate-800 tracking-tighter uppercase">
        {children}
      </span>
    </motion.h2>
  ),

  h3: ({ children }) => (
    <h3 className="mt-10 mb-4 flex items-center gap-3">
      <div className="p-1.5 bg-blue-50 rounded-lg">
        <Hash size={16} className="text-blue-600" />
      </div>
      <span className="text-lg font-bold text-slate-800 tracking-tight uppercase border-b-2 border-blue-100">
        {children}
      </span>
    </h3>
  ),

  // ── Paragraphe ───────────────────────────────────────────────────────────
  p: ({ children }) => (
    <p className="my-6 text-base md:text-[17px] text-slate-600 leading-[1.8] font-normal selection:bg-blue-100">
      {children}
    </p>
  ),

  // ── Liens ────────────────────────────────────────────────────────────────
  a: ({ href, children, ...props }) => {
    const isExternal = href?.startsWith("http");
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="inline-flex items-center gap-1 text-blue-600 font-bold border-b-2 border-blue-200 
                   hover:border-blue-600 hover:text-blue-800 transition-all duration-300"
        {...props}
      >
        {children}
        {isExternal && <ExternalLink size={14} className="opacity-50" />}
      </a>
    );
  },

  // ── Code Inline ──────────────────────────────────────────────────────────
  code: ({ children, className, ...props }) => {
    const isBlock = className?.includes("language-");
    if (isBlock) return <code className={className} {...props}>{children}</code>;

    return (
      <code className="relative inline-block px-1.5 py-0.5 font-mono text-[0.9em] font-bold 
                       text-blue-700 bg-blue-50/80 border border-blue-100 rounded-md">
        {children}
      </code>
    );
  },

  
  // ── Blockquote (Insight Panel) ───────────────────────────────────────────
  blockquote: ({ children }) => (
    <div className="my-8 relative p-6 bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
      <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600" />
      <div className="flex gap-4">
        <Info className="text-blue-600 shrink-0" size={24} />
        <div className="text-slate-600 italic font-medium leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  ),

  // ── Listes ───────────────────────────────────────────────────────────────
  ul: ({ children }) => (
    <ul className="my-6 space-y-4 ml-2">{children}</ul>
  ),

  li: ({ children }) => (
    <li className="flex items-start gap-4 text-slate-600 group">
      <div className="mt-1.5 shrink-0">
        <CheckCircle2 size={18} className="text-blue-500/40 group-hover:text-blue-600 transition-colors" />
      </div>
      <span className="text-[16px] leading-relaxed group-hover:text-slate-900 transition-colors">{children}</span>
    </li>
  ),

  // ── Table ────────────────────────────────────────────────────────────────
  table: ({ children }) => (
    <div className="my-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xl">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),

  th: ({ children }) => (
    <th className="px-6 py-4 text-left font-black text-[11px] text-white bg-slate-900 uppercase tracking-widest font-mono">
      {children}
    </th>
  ),

  td: ({ children }) => (
    <td className="px-6 py-4 text-slate-600 font-mono border-b border-slate-50">
      {children}
    </td>
  ),

  // ── Séparateur ───────────────────────────────────────────────────────────
  hr: () => (
    <div className="my-16 flex items-center gap-4 opacity-30">
      <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-blue-600" />
      <Layers size={14} className="text-blue-600" />
      <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-blue-600" />
    </div>
  ),

  // ── Typographie ──────────────────────────────────────────────────────────
  strong: ({ children }) => (
    <strong className="font-black text-slate-900 bg-blue-50 px-0.5">{children}</strong>
  ),

  // ── Image ────────────────────────────────────────────────────────────────
  img: ({ src, alt }) => (
    <figure className="my-12">
      <div className="relative group overflow-hidden rounded-3xl border border-slate-200 shadow-2xl bg-slate-50">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      {alt && (
        <figcaption className="mt-4 text-center font-mono text-[10px] text-slate-400 uppercase tracking-widest italic">
          // Image_Ref: {alt}
        </figcaption>
      )}
    </figure>
  ),
};

export default function MarkdownRenderer({ content }: {content: string}) {
  return (
    <div className="markdown-container selection:bg-blue-600 selection:text-white">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeHighlight]}
        components={MarkdownComponents}
      >
        {content}
      </ReactMarkdown>
      
      {/* Styles globaux pour KaTeX et Highlight.js injectés via Tailwind */}
      <style dangerouslySetInnerHTML={{ __html: `
        .markdown-container .hljs { background: transparent; padding: 0; }
        .markdown-container .katex-display { margin: 2em 0; overflow-x: auto; overflow-y: hidden; padding: 10px 0; }
        .markdown-container .katex { font-size: 1.1em; color: #1e293b; }
      `}} />
    </div>
  );
}