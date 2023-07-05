import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Checkbox, Text } from "fuselagem";
import React from "react";

const code = `import { Checkbox } from "fuselagem";

export default function App() {
  return (
    <div className="flex space-x-2">
      <Checkbox defaultChecked rounded="full" />
      <Checkbox defaultChecked rounded="3xl" />
      <Checkbox defaultChecked rounded="2xl" />
      <Checkbox defaultChecked rounded="xl" />
      <Checkbox defaultChecked rounded="lg" />
      <Checkbox defaultChecked rounded="md" />
      <Checkbox defaultChecked rounded="rounded" />
      <Checkbox defaultChecked rounded="sm" />
      <Checkbox defaultChecked rounded="none" />
    </div>
  )
}
`;

const CheckboxRounded: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Rounded</Text>

      <div className="flex space-x-2">
        <Checkbox defaultChecked rounded="full" />
        <Checkbox defaultChecked rounded="3xl" />
        <Checkbox defaultChecked rounded="2xl" />
        <Checkbox defaultChecked rounded="xl" />
        <Checkbox defaultChecked rounded="lg" />
        <Checkbox defaultChecked rounded="md" />
        <Checkbox defaultChecked rounded="rounded" />
        <Checkbox defaultChecked rounded="sm" />
        <Checkbox defaultChecked rounded="none" />
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default CheckboxRounded;
