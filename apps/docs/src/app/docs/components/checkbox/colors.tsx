import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Checkbox, Text } from "fuselagem";
import React from "react";

const code = `import { Checkbox } from "fuselagem";

export default function App() {
  return (
    <div className="space-x-2">
      <Checkbox defaultChecked color="primary" />
      <Checkbox defaultChecked color="secondary" />
      <Checkbox defaultChecked color="success" />
      <Checkbox defaultChecked color="warning" />
      <Checkbox defaultChecked color="error" />
    </div>
  )
}
`;

const CheckboxColors: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Colors</Text>

      <div className="space-x-2">
        <Checkbox defaultChecked color="primary" />
        <Checkbox defaultChecked color="secondary" />
        <Checkbox defaultChecked color="success" />
        <Checkbox defaultChecked color="warning" />
        <Checkbox defaultChecked color="error" />
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default CheckboxColors;
