import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Radio, Text } from "fuselagem";
import React from "react";

const code = `import { Radio } from "fuselagem";

export default function App() {
  return (
    <div className="flex space-x-2">
      <Radio rounded="full" />
      <Radio rounded="3xl" />
      <Radio rounded="2xl" />
      <Radio rounded="xl" />
      <Radio rounded="lg" />
      <Radio rounded="md" />
      <Radio rounded="rounded" />
      <Radio rounded="sm" />
      <Radio rounded="none" />
    </div>
  )
}
`;

const RadioRounded: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Rounded</Text>

      <div className="flex space-x-2">
        <Radio name="rounded" rounded="full" />
        <Radio name="rounded" rounded="3xl" />
        <Radio name="rounded" rounded="2xl" />
        <Radio name="rounded" rounded="xl" />
        <Radio name="rounded" rounded="lg" />
        <Radio name="rounded" rounded="md" />
        <Radio name="rounded" rounded="rounded" />
        <Radio name="rounded" rounded="sm" />
        <Radio name="rounded" rounded="none" />
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default RadioRounded;
