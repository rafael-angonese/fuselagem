import CopyButton from "@/components/CodePreview/CopyButton";
import { Code } from "bright";

interface CodePreviewProps {
  code: string;
}

const CodePreview: React.FC<CodePreviewProps> = ({ code }) => {
  return (
    <div className="relative">
      <CopyButton code={code} />
      <Code
        lineNumbers
        codeClassName="max-h-96 overflow-y-auto"
        // title="testes"
        theme="dracula-soft"
        lang="jsx"
      >
        {code}
      </Code>
    </div>
  );
};

export default CodePreview;
