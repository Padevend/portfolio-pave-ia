import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import { motion } from "framer-motion";
import { ExternalLink, Hash, Circle } from "lucide-react";

// Note : dans un environnement réel, assurez-vous que les CSS KaTeX et Highlight.js
// sont importés, disponibles via le layout principal.

const MarkdownComponents: Record<string, React.FC<any>> = {
  // ── Titres (H1 à H4) ─────────────────────────────────────────────────────
  h1: ({ children }) => (
    <motion.h1
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16 mb-8 text-3xl md:text-4xl font-light text-neutral-950 tracking-tight uppercase leading-tight"
    >
      {children}
      <div className="h-[2px] w-12 bg-blue-600 mt-5" />
    </motion.h1>
  ),

  h2: ({ children }) => (
    <motion.h2
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-14 mb-6 flex items-center gap-3"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
      <span className="text-xl md:text-2xl font-light text-neutral-950 tracking-tight uppercase">
        {children}
      </span>
    </motion.h2>
  ),

  h3: ({ children }) => (
    <h3 className="mt-10 mb-4 flex items-center gap-2.5">
      <Hash size={13} className="text-neutral-300 shrink-0" />
      <span className="text-base font-medium text-neutral-800 tracking-wide uppercase">
        {children}
      </span>
    </h3>
  ),

  h4: ({ children }) => (
    <h4 className="mt-8 mb-3 text-[13px] font-medium text-neutral-600 tracking-widest uppercase">
      {children}
    </h4>
  ),

  // ── Paragraphe ───────────────────────────────────────────────────────────
  p: ({ children }) => (
    <p className="my-6 text-[15px] md:text-base text-neutral-600 leading-[1.85] font-light selection:bg-blue-100">
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
        className="inline-flex items-center gap-1 text-neutral-950 font-medium border-b border-neutral-300
                   hover:border-blue-600 hover:text-blue-600 transition-colors duration-300"
        {...props}
      >
        {children}
        {isExternal && <ExternalLink size={12} className="opacity-40" />}
      </a>
    );
  },

  // ── Code inline ──────────────────────────────────────────────────────────
  code: ({ children, className, ...props }) => {
    const isBlock = className?.includes("language-");
    if (isBlock)
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );

    return (
      <code className="px-1.5 py-0.5 font-mono text-[0.85em] text-blue-700 bg-neutral-50 border border-neutral-200/70">
        {children}
      </code>
    );
  },

  // ── Bloc de code ─────────────────────────────────────────────────────────
  pre: ({ children }) => (
    <div className="my-8 relative">
      <div className="absolute top-0 left-0 right-0 h-8 flex items-center px-4 border-b border-neutral-800/60">
        <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase">
          Extrait de code
        </span>
      </div>
      <pre className="!mt-0 bg-neutral-950 text-neutral-100 rounded-none border border-neutral-900 pt-12 pb-5 px-5 overflow-x-auto text-[13px] leading-relaxed">
        {children}
      </pre>
    </div>
  ),

  // ── Citation (encart d'observation) ─────────────────────────────────────
  blockquote: ({ children }) => (
    <div className="my-8 relative pl-6 border-l-2 border-blue-600">
      <div className="text-neutral-500 font-light italic leading-relaxed [&>p]:my-0">
        {children}
      </div>
    </div>
  ),

  // ── Listes ───────────────────────────────────────────────────────────────
  ul: ({ children }) => <ul className="my-6 space-y-3 ml-1">{children}</ul>,

  ol: ({ children }) => (
    <ol className="my-6 space-y-3 ml-1 list-decimal marker:text-blue-600 marker:font-medium pl-4">
      {children}
    </ol>
  ),

  li: ({ children }) => (
    <li className="flex items-start gap-3 text-neutral-600 group">
      <Circle
        size={5}
        className="mt-2.5 shrink-0 fill-neutral-300 text-neutral-300 group-hover:fill-blue-600 group-hover:text-blue-600 transition-colors"
      />
      <span className="text-[15px] font-light leading-relaxed group-hover:text-neutral-900 transition-colors">
        {children}
      </span>
    </li>
  ),

  // ── Table ────────────────────────────────────────────────────────────────
  table: ({ children }) => (
    <div className="my-8 overflow-x-auto border border-neutral-200">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),

  th: ({ children }) => (
    <th className="px-5 py-3.5 text-left font-medium text-[10px] text-neutral-950 bg-neutral-50 uppercase tracking-widest border-b border-neutral-200">
      {children}
    </th>
  ),

  td: ({ children }) => (
    <td className="px-5 py-3.5 text-neutral-600 font-light border-b border-neutral-100 text-[13px]">
      {children}
    </td>
  ),

  // ── Séparateur ───────────────────────────────────────────────────────────
  hr: () => (
    <div className="my-16 flex items-center gap-3">
      <div className="h-px flex-grow bg-neutral-100" />
      <span className="h-1 w-1 rounded-full bg-blue-600" />
      <div className="h-px flex-grow bg-neutral-100" />
    </div>
  ),

  // ── Typographie ──────────────────────────────────────────────────────────
  strong: ({ children }) => (
    <strong className="font-medium text-neutral-950">{children}</strong>
  ),

  em: ({ children }) => (
    <em className="font-serif italic text-neutral-700">{children}</em>
  ),

  // ── Image ────────────────────────────────────────────────────────────────
  img: ({ src, alt }) => (
    <figure className="my-12">
      <div className="relative overflow-hidden border border-neutral-200 bg-neutral-50 p-2">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover"
        />
      </div>
      {alt && (
        <figcaption className="mt-3 text-center font-mono text-[9px] text-neutral-400 uppercase tracking-widest">
          {alt}
        </figcaption>
      )}
    </figure>
  ),
};

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="markdown-container selection:bg-blue-600 selection:text-white">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeHighlight]}
        components={MarkdownComponents}
      >
        {content}
      </ReactMarkdown>

      {/* Styles globaux pour KaTeX et Highlight.js */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .markdown-container .hljs { background: transparent; padding: 0; }
        .markdown-container .katex-display { margin: 2em 0; overflow-x: auto; overflow-y: hidden; padding: 10px 0; }
        .markdown-container .katex { font-size: 1.05em; color: #171717; }
      `,
        }}
      />
    </div>
  );
}