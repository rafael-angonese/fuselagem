import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { FormLabel, InputText, Text } from "fuselagem";
import React from "react";

const code = `import { FormLabel, InputText } from "fuselagem";

export default function App() {
  return (
    <>
      <FormLabel required>Name</FormLabel>
      <InputText placeholder="Enter your name" />
    </>
  )
}
`;

const FormLabelRequired: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Required</Text>

      <div>
        <FormLabel required>Name</FormLabel>
        <InputText placeholder="Enter your name" />
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default FormLabelRequired;
