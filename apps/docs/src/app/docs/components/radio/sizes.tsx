import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Radio, Text } from "fuselagem";
import React from "react";

const code = `import { Radio } from "fuselagem";

export default function App() {
  return (
    <div className="flex space-x-2">
      <Radio name="sizes" size="xs" />
      <Radio name="sizes" size="sm" />
      <Radio name="sizes" size="md" />
      <Radio name="sizes" size="lg" />
      <Radio name="sizes" size="xl" />
    </div>
  )
}
`;

const RadioSizes: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Sizes</Text>

      <div className="flex space-x-2">
        <Radio name="sizes" size="xs" />
        <Radio name="sizes" size="sm" />
        <Radio name="sizes" size="md" />
        <Radio name="sizes" size="lg" />
        <Radio name="sizes" size="xl" />
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default RadioSizes;
