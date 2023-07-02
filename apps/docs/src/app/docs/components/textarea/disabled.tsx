import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { TextArea, Text } from "fuselagem";
import React from "react";

const code = `import { TextArea } from "fuselagem";

export default function App() {
  return (
    <>
      <TextArea disabled placeholder="Disabled field" />
    </>
  )
}
`;

const TextAreaDisabled: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Disabled</Text>

      <TextArea disabled placeholder="Disabled field" />

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default TextAreaDisabled;
