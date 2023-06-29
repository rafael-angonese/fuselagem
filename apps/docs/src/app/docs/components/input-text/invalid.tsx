import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { InputText, Text } from "fuselagem";
import React from "react";

const code = `import { InputText } from "fuselagem";

export default function App() {
  return (
    <>
      <InputText isInvalid placeholder="Invalid field" />
    </>
  )
}
`;

const InputTextInvalid: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Invalid</Text>

      <InputText isInvalid placeholder="Invalid field" />

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default InputTextInvalid;
