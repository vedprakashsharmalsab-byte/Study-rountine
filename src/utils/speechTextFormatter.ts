/**
 * Speech Text Formatter
 * Preprocesses Markdown, LaTeX, and Hinglish study material into
 * smooth, human-like natural spoken sentences for Web Speech Synthesis.
 */

export function cleanTextForSpeech(raw: string): string {
  if (!raw) return "";

  let text = raw;

  // 1. Remove code blocks
  text = text.replace(/```[\s\S]*?```/g, " ");
  text = text.replace(/`([^`]+)`/g, "$1");

  // 2. Remove HTML tags
  text = text.replace(/<[^>]*>/g, " ");

  // 3. Convert educational emojis into natural spoken cues
  text = text.replace(/💡|🌟/g, " Important note: ");
  text = text.replace(/⚠️|🚨/g, " Warning: ");
  text = text.replace(/🔥/g, " Highly tested: ");
  text = text.replace(/🎯/g, " Key takeaway: ");
  text = text.replace(/🚗|📱|🔬/g, " Example: ");
  text = text.replace(/[\u{1F300}-\u{1F9FF}]/gu, " ");

  // 4. Clean LaTeX Math & Equations
  // Handle relative refractive index notation like ^{1}n_2 or ^{w}n_g
  text = text.replace(/\^\{1\}n_2/g, " refractive index of medium 2 with respect to 1 ");
  text = text.replace(/\^\{2\}n_1/g, " refractive index of medium 1 with respect to 2 ");
  text = text.replace(/\^\{w\}n_g/g, " refractive index of glass with respect to water ");
  text = text.replace(/\^\{a\}n_g/g, " refractive index of glass with respect to air ");

  // Fractions: recursively convert \frac{A}{B} -> A upon B
  while (/\\frac\{([^{}]+)\}\{([^{}]+)\}/.test(text)) {
    text = text.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, " $1 upon $2 ");
  }

  // Trigonometry
  text = text.replace(/\\sin\s*([a-zA-Z0-9]+)/g, " sine of $1 ");
  text = text.replace(/\\cos\s*([a-zA-Z0-9]+)/g, " cosine of $1 ");
  text = text.replace(/\\tan\s*([a-zA-Z0-9]+)/g, " tangent of $1 ");

  // Common physics/math symbols
  text = text.replace(/\\angle\s*([a-zA-Z0-9]+)/g, " angle $1 ");
  text = text.replace(/\\approx/g, " approximately ");
  text = text.replace(/\\propto/g, " is proportional to ");
  text = text.replace(/\\times/g, " into ");
  text = text.replace(/\\cdot/g, " into ");
  text = text.replace(/\\implies/g, ", which means that, ");
  text = text.replace(/\\iff/g, " if and only if ");
  text = text.replace(/\\to/g, " to ");
  text = text.replace(/\\pm/g, " plus or minus ");
  text = text.replace(/\\le/g, " less than or equal to ");
  text = text.replace(/\\ge/g, " greater than or equal to ");
  text = text.replace(/\\ne/g, " not equal to ");
  text = text.replace(/\\ll/g, " much less than ");
  text = text.replace(/\\gg/g, " much greater than ");
  text = text.replace(/\\parallel/g, " parallel to ");
  text = text.replace(/\\infty/g, " infinity ");
  text = text.replace(/\\Delta/g, " delta ");
  text = text.replace(/\\lambda/g, " lambda ");
  text = text.replace(/\\mu/g, " micro ");
  text = text.replace(/\\theta/g, " theta ");
  text = text.replace(/\\pi/g, " pi ");
  text = text.replace(/\\sqrt\{([^{}]+)\}/g, " square root of $1 ");

  // Powers and degrees
  text = text.replace(/\^\{\\circ\}|\^\\circ/g, " degrees ");
  text = text.replace(/\^2/g, " squared ");
  text = text.replace(/\^3/g, " cubed ");
  text = text.replace(/\^4/g, " to the power 4 ");
  text = text.replace(/\^8/g, " to the power 8 ");
  text = text.replace(/\^\{-1\}/g, " inverse ");
  text = text.replace(/\^\{([^{}]+)\}/g, " to the power $1 ");

  // Subscripts like F_1, F_2, 2F_1, n_1, n_2, v_1, v_2
  text = text.replace(/([a-zA-Z0-9]+)_\{([^{}]+)\}/g, "$1 $2");
  text = text.replace(/([a-zA-Z0-9]+)_([a-zA-Z0-9]+)/g, "$1 $2");

  // LaTeX wrapper tags \text{...}, \mathbf{...}, etc.
  text = text.replace(/\\text\{([^{}]+)\}/g, " $1 ");
  text = text.replace(/\\mathbf\{([^{}]+)\}/g, " $1 ");
  text = text.replace(/\\mathit\{([^{}]+)\}/g, " $1 ");
  text = text.replace(/\\mathrm\{([^{}]+)\}/g, " $1 ");

  // Strip remaining $ delimiters
  text = text.replace(/\$\$([\s\S]*?)\$\$/g, ", equation: $1, ");
  text = text.replace(/\$([^$]+)\$/g, " $1 ");
  text = text.replace(/\\/g, " ");

  // 5. Clean Markdown Structural Tags
  // Remove blockquote >
  text = text.replace(/^[ \t]*>[ \t]*/gm, " ");

  // Headers: ### Topic -> Topic.
  text = text.replace(/^[ \t]*#{1,6}[ \t]*/gm, ". ");

  // Remove bold / italic markers
  text = text.replace(/\*\*([^*]+)\*\*/g, "$1");
  text = text.replace(/\*([^*]+)\*/g, "$1");
  text = text.replace(/__([^_]+)__/g, "$1");
  text = text.replace(/_([^_]+)_/g, "$1");

  // Tables: convert table rows into spoken text
  text = text.replace(/^[ \t]*\|[-:\s|]+\|[ \t]*$/gm, " "); // separator row
  text = text.replace(/\|/g, ", ");

  // Bullet points and lists
  text = text.replace(/^[ \t]*[-*+][ \t]+/gm, ". ");
  text = text.replace(/^[ \t]*\d+\.[ \t]+/gm, ". ");

  // Horizontal rules
  text = text.replace(/^[ \t]*[-*_]{3,}[ \t]*$/gm, ". ");

  // 6. Natural Speech Rhythm & Spacing
  // Replace multiple periods/commas/spaces
  text = text.replace(/\.{2,}/g, ".");
  text = text.replace(/,{2,}/g, ",");
  text = text.replace(/\s+/g, " ");

  // Clean edges
  return text.trim();
}

/**
 * Splits text into natural sentence chunks of ~150-200 characters.
 * This prevents the notorious Chrome Web Speech API 15-second cutoff bug
 * and allows smooth, continuous, pause-able playback!
 */
export function chunkTextForSpeech(text: string, maxChunkLength = 180): string[] {
  if (!text) return [];

  const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];
  const chunks: string[] = [];
  let currentChunk = "";

  for (const sentence of sentences) {
    const trimmed = sentence.trim();
    if (!trimmed) continue;

    if ((currentChunk + " " + trimmed).length <= maxChunkLength) {
      currentChunk = currentChunk ? `${currentChunk} ${trimmed}` : trimmed;
    } else {
      if (currentChunk) {
        chunks.push(currentChunk);
      }
      // If a single sentence exceeds maxChunkLength, split by commas or semicolons
      if (trimmed.length > maxChunkLength) {
        const subParts = trimmed.split(/([,;:]+)/);
        let subChunk = "";
        for (const part of subParts) {
          if ((subChunk + part).length <= maxChunkLength) {
            subChunk += part;
          } else {
            if (subChunk.trim()) chunks.push(subChunk.trim());
            subChunk = part;
          }
        }
        currentChunk = subChunk.trim();
      } else {
        currentChunk = trimmed;
      }
    }
  }

  if (currentChunk.trim()) {
    chunks.push(currentChunk.trim());
  }

  return chunks;
}
