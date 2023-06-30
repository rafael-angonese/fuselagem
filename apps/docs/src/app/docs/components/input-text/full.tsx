import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { InputText, Text } from "fuselagem";
import React from "react";

const code = `import { InputText } from "fuselagem";

export default function App() {
  return (
    <>
      <InputText fullWidth placeholder="Enter your text" />
    </>
  )
}
`;

const InputTextFull: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Full Width</Text>

      <InputText fullWidth placeholder="Enter your text" />

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default InputTextFull;
