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

const InputTextVariants: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Variants</Text>

      <InputText variant="outlined" placeholder="Enter your text" />
      <InputText variant="outlined" placeholder=" "  />

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default InputTextVariants;
