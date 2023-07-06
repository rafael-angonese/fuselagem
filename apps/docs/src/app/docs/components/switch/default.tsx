import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Switch, Text } from "fuselagem";
import React from "react";

const code = `import { Switch } from "fuselagem";

export default function App() {
  return (
    <>
      <Switch defaultChecked />
    </>
  )
}
`;

const SwitchDefault: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Default</Text>

      <Switch defaultChecked />

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default SwitchDefault;
