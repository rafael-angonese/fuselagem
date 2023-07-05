import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Radio, Text } from "fuselagem";
import React from "react";

const code = `import { Radio } from "fuselagem";

export default function App() {
  return (
    <div className="flex space-x-2">
      <Radio name="default" />
      <Radio name="default" />
    </div>
  )
}
`;

const RadioDefault: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Default</Text>

      <div className="flex space-x-2">
        <Radio name="default" />
        <Radio name="default" />
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default RadioDefault;
