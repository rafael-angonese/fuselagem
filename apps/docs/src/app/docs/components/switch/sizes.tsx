import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Switch, Text } from "fuselagem";
import React from "react";

const code = `import { Switch } from "fuselagem";

export default function App() {
  return (
    <div className="flex space-x-2">
      <Switch defaultChecked size="xs" />
      <Switch defaultChecked size="sm" />
      <Switch defaultChecked size="md" />
      <Switch defaultChecked size="lg" />
      <Switch defaultChecked size="xl" />
    </div>
  )
}
`;

const SwitchSizes: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Sizes</Text>

      <div className="flex space-x-2">
        <Switch defaultChecked size="xs" />
        <Switch defaultChecked size="sm" />
        <Switch defaultChecked size="md" />
        <Switch defaultChecked size="lg" />
        <Switch defaultChecked size="xl" />
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default SwitchSizes;
