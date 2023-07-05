import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Checkbox, Text } from "fuselagem";
import React from "react";

const code = `import { Checkbox } from "fuselagem";

export default function App() {
  return (
    <div className="space-x-2">
      <Checkbox defaultChecked size="xs" />
      <Checkbox defaultChecked size="sm" />
      <Checkbox defaultChecked size="md" />
      <Checkbox defaultChecked size="lg" />
      <Checkbox defaultChecked size="xl" />
    </div>
  )
}
`;

const CheckboxSizes: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Sizes</Text>

      <div className="space-x-2">
        <Checkbox defaultChecked size="xs" />
        <Checkbox defaultChecked size="sm" />
        <Checkbox defaultChecked size="md" />
        <Checkbox defaultChecked size="lg" />
        <Checkbox defaultChecked size="xl" />
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default CheckboxSizes;
