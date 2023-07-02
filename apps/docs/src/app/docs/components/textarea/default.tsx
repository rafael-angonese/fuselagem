import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { TextArea, Text } from "fuselagem";
import React from "react";

const code = `import { TextArea } from "fuselagem";

export default function App() {
  return (
    <>
      <TextArea placeholder="Enter your text" />
    </>
  )
}
`;

const TextAreaDefault: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Default</Text>

      <TextArea placeholder="Enter your text" />

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default TextAreaDefault;
