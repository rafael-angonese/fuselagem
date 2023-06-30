import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { FormLabel, InputText, Text } from "fuselagem";
import React from "react";

const code = `import { FormLabel, InputText } from "fuselagem";

export default function App() {
  return (
    <>
      <FormLabel>Name</FormLabel>
      <InputText placeholder="Enter your name" />
    </>
  )
}
`;

const FormLabelDefault: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Default</Text>

      <div>
        <FormLabel>Name</FormLabel>
        <InputText placeholder="Enter your name" />
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default FormLabelDefault;
