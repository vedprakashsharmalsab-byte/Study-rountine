"use client";

import React, { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

interface PremiumMathRendererProps {
  content: string;
  isDark?: boolean;
  className?: string;
  inline?: boolean;
}

const MATH_INDICATORS = /[\$\\\{\}\^_\=\+\-\*\/]/;

/**
 * Intelligent LaTeX Preprocessor
 * Ensures that LaTeX math blocks are cleanly preserved,
 * while plain markdown newlines are preserved only outside math delimiters.
 */
function preprocessMathContent(raw: string): string {
  if (!raw || typeof raw !== 'string') return '';
  
  // Clean literal "\n" strings into real newlines
  let text = raw.replace(/\\n(?![a-zA-Z])/g, '\n').trim();

  // 1. If text is entirely wrapped in $$...$$ or single $...$
  if (/^\$\$[\s\S]*\$\$$/.test(text) || (/^\$[^\$]+\$$/.test(text) && !text.slice(1, -1).includes('$'))) {
    return text;
  }

  // 2. If text contains no $ at all, check if it's a naked LaTeX formula
  if (!text.includes('$')) {
    const hasMathCommands = /\\[a-zA-Z]+/.test(text);
    if (hasMathCommands) {
      const words = text.replace(/\\[a-zA-Z]+(\{[^}]*\})?/g, '').trim().split(/\s+/).filter(w => /^[a-zA-Z]{4,}$/.test(w));
      if (words.length <= 2) {
        return `$${text}$`;
      }
    }
  }

  // 3. For mixed text, split by math delimiters ($$...$$ or $...$)
  const tokens = text.split(/(\$\$[\s\S]*?\$\$|\$[^\$]+?\$)/g);
  const processedTokens = tokens.map(token => {
    // If it's a math block, preserve it as-is
    if (token.startsWith('$')) {
      return token;
    }
    // Auto-wrap bare \frac and \sqrt in non-math blocks
    let nonMath = token.replace(/(\\frac\{[^{}]+\}\{[^{}]+\})/g, '$$$1$$')
                       .replace(/(\\sqrt(?:\[[0-9]+\])?\{[^{}]+\})/g, '$$$1$$');
    // Preserve markdown newlines only in non-math text
    nonMath = nonMath.replace(/([^\n])\n([^\n])/g, '$1  \n$2');
    return nonMath;
  });

  return processedTokens.join('');
}

const PremiumMathRenderer = React.memo(function PremiumMathRenderer({
  content,
  isDark = true,
  className = "",
  inline = false
}: PremiumMathRendererProps) {
  // Fast path: if string has no math indicators or markdown symbols, render directly
  const hasSpecialChars = useMemo(() => {
    if (!content) return false;
    return MATH_INDICATORS.test(content) || content.includes('\n') || content.includes('#') || content.includes('*');
  }, [content]);

  const processedContent = useMemo(() => {
    if (!hasSpecialChars) return content;
    return preprocessMathContent(content);
  }, [content, hasSpecialChars]);

  const Container = inline ? 'span' : 'div';

  if (!hasSpecialChars) {
    return (
      <Container className={`math-renderer ${inline ? 'math-renderer-inline inline' : 'font-sans leading-relaxed block'} ${isDark ? "text-slate-100" : "text-slate-900"} ${className}`}>
        {content}
      </Container>
    );
  }

  return (
    <Container className={`math-renderer ${inline ? 'math-renderer-inline inline' : 'font-sans leading-relaxed block'} ${isDark ? "text-slate-100" : "text-slate-900"} ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
        components={{
          h3: ({ node, ...props }) => (
            <h3 className={`font-bold mt-4 mb-2 tracking-wider uppercase text-sm sm:text-base border-b pb-1 flex items-center gap-2 ${
              isDark ? "text-emerald-400 border-emerald-500/20" : "text-emerald-800 border-emerald-500/30"
            }`} {...props} />
          ),
          h4: ({ node, ...props }) => (
            <h4 className={`font-bold mt-2 mb-1 text-sm tracking-wide ${
              isDark ? "text-amber-400" : "text-amber-800"
            }`} {...props} />
          ),
          p: ({ node, ...props }) => {
            if (inline) {
              return <span className="inline text-inherit" {...props} />;
            }
            return <p className={`leading-relaxed my-1.5 text-inherit ${isDark ? "text-slate-200" : "text-slate-900"}`} {...props} />;
          },
          strong: ({ node, ...props }) => (
            <strong className={`font-black ${isDark ? "text-white" : "text-slate-950"}`} {...props} />
          ),
          em: ({ node, ...props }) => (
            <em className={`italic ${isDark ? "text-slate-300" : "text-slate-800"}`} {...props} />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote className={`border-l-4 p-3.5 rounded-r-xl my-3 text-sm font-medium italic ${
              isDark
                ? "border-emerald-500/50 bg-emerald-950/20 text-emerald-200"
                : "border-emerald-600 bg-emerald-50 text-emerald-950 shadow-xs"
            }`} {...props} />
          ),
          // ── Beautiful styled tables ──────────────────────────────────────────
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-4 rounded-2xl border border-white/10 shadow-lg">
              <table className="w-full text-xs sm:text-sm border-collapse" {...props} />
            </div>
          ),
          thead: ({ node, ...props }) => (
            <thead className={isDark ? "bg-teal-500/20" : "bg-teal-50"} {...props} />
          ),
          tbody: ({ node, ...props }) => (
            <tbody {...props} />
          ),
          tr: ({ node, ...props }) => (
            <tr
              className={`border-b transition-colors last:border-0 ${
                isDark
                  ? "border-white/8 even:bg-white/[0.025] hover:bg-teal-500/10"
                  : "border-slate-200 even:bg-slate-50/70 hover:bg-teal-50/80"
              }`}
              {...props}
            />
          ),
          th: ({ node, ...props }) => (
            <th
              className={`px-4 py-3 text-left font-black text-xs uppercase tracking-widest whitespace-nowrap ${
                isDark ? "text-teal-300" : "text-teal-800"
              }`}
              {...props}
            />
          ),
          td: ({ node, ...props }) => (
            <td
              className={`px-4 py-3 leading-relaxed align-top ${
                isDark ? "text-slate-200" : "text-slate-800"
              }`}
              {...props}
            />
          ),
          // ── Lists with proper spacing ────────────────────────────────────────
          ul: ({ node, ...props }) => (
            <ul className="my-2 space-y-1.5 pl-1" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="my-2 space-y-1.5 pl-1 list-decimal list-inside" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li
              className={`flex items-start gap-2 leading-relaxed text-sm ${
                isDark ? "text-slate-200" : "text-slate-800"
              }`}
              {...props}
            />
          ),
          // ── Inline code ──────────────────────────────────────────────────────
          code: ({ node, className: codeClassName, children, ...props }) => {
            const isBlock = codeClassName?.includes('language-');
            if (isBlock) {
              return (
                <pre className={`my-3 p-4 rounded-xl overflow-x-auto text-xs font-mono ${
                  isDark ? "bg-black/50 text-emerald-300 border border-white/10" : "bg-slate-100 text-slate-900 border border-slate-200"
                }`}>
                  <code {...props}>{children}</code>
                </pre>
              );
            }
            return (
              <code
                className={`px-1.5 py-0.5 rounded-md text-xs font-mono font-bold ${
                  isDark ? "bg-white/10 text-amber-300" : "bg-slate-100 text-amber-700"
                }`}
                {...props}
              >{children}</code>
            );
          },
          div: ({ node, className: divClassName, ...props }) => {
            if (divClassName?.includes('math-display')) {
              return (
                <div className={`overflow-x-auto py-2.5 my-2.5 flex justify-center items-center min-h-[2.5em] text-inherit ${
                  isDark ? "text-slate-100" : "text-slate-900"
                }`}>
                  <div className={`${divClassName} max-w-full`} style={{ lineHeight: '1.6', overflowY: 'visible' }} {...props} />
                </div>
              );
            }
            return <div className={divClassName} {...props} />;
          },
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </Container>
  );
});

export default PremiumMathRenderer;
