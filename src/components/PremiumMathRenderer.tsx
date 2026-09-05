"use client";

import React, { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

interface PremiumMathRendererProps {
  content: string;
  isDark?: boolean;
  className?: string;
}

/**
 * Intelligent LaTeX Preprocessor
 * Ensures that any bare LaTeX math (e.g. \frac{AD}{DB} = \frac{AE}{EC})
 * that lacks $ delimiters is automatically detected and wrapped in $ ... $
 * so rehype-katex renders it flawlessly.
 */
function preprocessMathContent(raw: string): string {
  if (!raw || typeof raw !== 'string') return '';
  // Clean literal "\\n" character strings into real newlines (guarding LaTeX commands like \\neq, \\nu)
  let text = raw.replace(/\\n(?![a-zA-Z])/g, '\n').trim();

  // In markdown, single newlines don't break lines unless followed by two spaces.
  // Add two spaces before newlines so multi-line steps and equations preserve their line breaks.
  text = text.replace(/([^\n])\n([^\n])/g, '$1  \n$2');

  // 1. If text is already completely wrapped in $...$ or $$...$$
  if (/^\$\$[\s\S]*\$\$$/.test(text) || (/^\$[^\$]+\$$/.test(text) && !text.slice(1, -1).includes('$'))) {
    return text;
  }

  // 2. If the entire text has no $ and is clearly a formula or equation containing LaTeX commands:
  // e.g., "\frac{AD}{DB} = \frac{AE}{EC}" or "\angle PTQ = 2 \angle OPQ"
  if (!text.includes('$')) {
    const hasMathCommands = /\\[a-zA-Z]+/.test(text);
    if (hasMathCommands) {
      // Check if it's mostly formula rather than a regular English sentence
      // Sentences have 4+ normal lowercase english words
      const words = text.replace(/\\[a-zA-Z]+(\{[^}]*\})?/g, '').trim().split(/\s+/).filter(w => /^[a-zA-Z]{4,}$/.test(w));
      if (words.length <= 2) {
        // Pure formula/equation
        return `$${text}$`;
      }
    }
  }

  // 3. For mixed text, split by existing math delimiters so we only process non-math text
  const parts = text.split(/(\$\$[\s\S]*?\$\$|\$[^\$\n]+?\$)/g);
  const processedParts = parts.map(part => {
    if (part.startsWith('$')) {
      // Already a math block - keep exactly as is
      return part;
    }
    // Non-math block: replace bare LaTeX expressions like \frac{...}{...} or \sqrt{...} with $...$
    return part.replace(/(\\frac\{[^{}]+\}\{[^{}]+\})/g, '$$$1$$')
               .replace(/(\\sqrt(?:\[[0-9]+\])?\{[^{}]+\})/g, '$$$1$$');
  });

  return processedParts.join('');
}

const PremiumMathRenderer = React.memo(function PremiumMathRenderer({ content, isDark = true, className = "" }: PremiumMathRendererProps) {
  const processedContent = useMemo(() => preprocessMathContent(content), [content]);

  return (
    <div className={`math-renderer font-sans leading-relaxed ${isDark ? "text-slate-100" : "text-slate-900"} ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          h3: ({ node, ...props }) => (
            <h3 className={`font-bold mt-4 mb-2 tracking-wider uppercase text-xs sm:text-sm border-b pb-1 flex items-center gap-2 ${
              isDark ? "text-emerald-400 border-emerald-500/20" : "text-emerald-800 border-emerald-500/30"
            }`} {...props} />
          ),
          h4: ({ node, ...props }) => (
            <h4 className={`font-bold mt-2 mb-1 text-xs tracking-wide ${
              isDark ? "text-amber-400" : "text-amber-800"
            }`} {...props} />
          ),
          p: ({ node, ...props }) => {
            return <p className={`leading-relaxed my-1.5 text-inherit ${isDark ? "text-slate-200" : "text-slate-900"}`} {...props} />;
          },
          strong: ({ node, ...props }) => (
            <strong className={`font-bold ${isDark ? "text-white" : "text-slate-950 font-black"}`} {...props} />
          ),
          em: ({ node, ...props }) => (
            <em className={`italic ${isDark ? "text-slate-300" : "text-slate-800"}`} {...props} />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote className={`border-l-4 p-3.5 rounded-r-xl my-3 text-xs sm:text-sm font-medium italic ${
              isDark 
                ? "border-emerald-500/50 bg-emerald-950/20 text-emerald-200" 
                : "border-emerald-600 bg-emerald-50 text-emerald-950 shadow-xs"
            }`} {...props} />
          ),
          div: ({ node, className: divClassName, ...props }) => {
            if (divClassName?.includes('math-display')) {
              return (
                <div className={`overflow-x-auto py-2 my-2 flex justify-center items-center text-inherit ${
                  isDark ? "text-slate-100" : "text-slate-900"
                }`}>
                  <div className={divClassName} {...props} />
                </div>
              );
            }
            return <div className={divClassName} {...props} />;
          },
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
});

export default PremiumMathRenderer;
