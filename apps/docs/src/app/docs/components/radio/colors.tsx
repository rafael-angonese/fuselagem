import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Radio, Text } from "fuselagem";
import React from "react";

const code = `import { Radio } from "fuselagem";

export default function App() {
  return (
    <div className="flex space-x-2">
      <Radio name="colors" color="primary" />
      <Radio name="colors" color="secondary" />
      <Radio name="colors" color="success" />
      <Radio name="colors" color="warning" />
      <Radio name="colors" color="error" />
    </div>
  )
}
`;

const RadioColors: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Colors</Text>

      <div className="flex space-x-2">
        <Radio name="colors" color="primary" />
        <Radio name="colors" color="secondary" />
        <Radio name="colors" color="success" />
        <Radio name="colors" color="warning" />
        <Radio name="colors" color="error" />
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default RadioColors;
