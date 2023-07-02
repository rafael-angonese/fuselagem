import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Text, TextArea } from "fuselagem";
import React from "react";

const code = `import { TextArea } from "fuselagem";

export default function App() {
  return (
    <>
      <TextArea fullWidth placeholder="Enter your text" />
    </>
  )
}
`;

const TextAreaFull: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Full Width</Text>

      <TextArea fullWidth placeholder="Enter your text" />

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default TextAreaFull;
