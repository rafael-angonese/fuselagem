import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { FormLabel, InputText, Text } from "fuselagem";
import React from "react";

const code = `import { FormLabel, InputText } from "fuselagem";

export default function App() {
  return (
    <>
      <FormLabel isInvalid required>Name</FormLabel>
      <InputText isInvalid placeholder="Enter your name" />
    </>
  )
}
`;

const FormLabelInvalid: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Invalid</Text>

      <div>
        <FormLabel isInvalid required>
          Name
        </FormLabel>
        <InputText isInvalid placeholder="Enter your name" />
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default FormLabelInvalid;
