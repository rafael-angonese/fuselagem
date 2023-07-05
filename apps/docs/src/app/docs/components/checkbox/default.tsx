import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Checkbox, Text } from "fuselagem";
import React from "react";

const code = `import { Checkbox } from "fuselagem";

export default function App() {
  return (
    <>
      <Checkbox defaultChecked />
    </>
  )
}
`;

const CheckboxDefault: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Default</Text>

      <Checkbox defaultChecked />

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default CheckboxDefault;
