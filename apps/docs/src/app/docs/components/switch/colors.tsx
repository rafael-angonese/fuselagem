import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Switch, Text } from "fuselagem";
import React from "react";

const code = `import { Switch } from "fuselagem";

export default function App() {
  return (
    <div className="flex space-x-2">
      <Switch defaultChecked color="primary" />
      <Switch defaultChecked color="secondary" />
      <Switch defaultChecked color="success" />
      <Switch defaultChecked color="warning" />
      <Switch defaultChecked color="error" />
    </div>
  )
}
`;

const SwitchColors: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Colors</Text>

      <div className="flex space-x-2">
        <Switch defaultChecked color="primary" />
        <Switch defaultChecked color="secondary" />
        <Switch defaultChecked color="success" />
        <Switch defaultChecked color="warning" />
        <Switch defaultChecked color="error" />
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default SwitchColors;
