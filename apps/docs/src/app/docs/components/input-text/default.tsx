import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { InputText, Text } from "fuselagem";
import React from "react";

const code = `import { InputText } from "fuselagem";

export default function App() {
  return (
    <>
      <InputText placeholder="Enter your text" />
    </>
  )
}
`;

const InputTextDefault: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Default</Text>

      <InputText placeholder="Enter your text" />

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default InputTextDefault;
