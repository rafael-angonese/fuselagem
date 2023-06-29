import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { InputText, Text } from "fuselagem";
import React from "react";

const code = `import { InputText } from "fuselagem";

export default function App() {
  return (
    <>
      <InputText disabled placeholder="Disabled field" />
    </>
  )
}
`;

const InputTextDisabled: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Disabled</Text>

      <InputText disabled placeholder="Disabled field" />

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default InputTextDisabled;
