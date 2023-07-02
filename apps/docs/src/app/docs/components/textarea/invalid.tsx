import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Text, TextArea } from "fuselagem";
import React from "react";

const code = `import { TextArea } from "fuselagem";

export default function App() {
  return (
    <>
      <TextArea isInvalid placeholder="Invalid field" />
    </>
  )
}
`;

const TextAreaInvalid: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Invalid</Text>

      <TextArea isInvalid placeholder="Invalid field" />

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default TextAreaInvalid;
