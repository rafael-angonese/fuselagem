import CopyButton from "@/components/CodePreview/CopyButton";
import { CopySimple } from "@phosphor-icons/react";
import { JetBrains_Mono } from "next/font/google";
import shiki, { getHighlighter } from "shiki";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

interface CodePreviewProps {
  code: string;
}

const CodePreview: React.FC<CodePreviewProps> = async ({ code }) => {
  const highlighter = await getHighlighter({
    theme: "dracula-soft",
  });

  const tokens = highlighter.codeToThemedTokens(code, "jsx");

  const html = shiki.renderToHtml(tokens, {
    fg: highlighter.getForegroundColor("dracula-soft"),
    bg: highlighter.getBackgroundColor("dracula-soft"),
    elements: {
      pre({ className, style, children }) {
        return `<pre class="${className} rounded-lg p-2 py-6 max-h-96 overflow-y-scroll" style="${style}">${children}</pre>`;
      },

      code({ className, style, children }) {
        return `<code class="${className}" style="${style}" >${children}</code>`;
      },

      line({ className, style, children }) {
        return `<span class="${className}" style="${style}" >${children}</span>`;
      },

      token({ style, children }) {
        return `<span style="${style}">${children}</span>`;
      },
    },
  });

  return (
    <div className="relative">
      <CopyButton code={code} />
      <div
        id="shiki-code"
        style={jetBrainsMono.style}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default CodePreview;
