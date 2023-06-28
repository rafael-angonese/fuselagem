import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { LinearProgress, Text } from "fuselagem";
import React from "react";

const code = `import { LinearProgress } from "fuselagem";

export default function App() {
  return (
    <div className="space-y-4">
      <LinearProgress percentage={30} size="xs" />
      <LinearProgress percentage={32} size="sm" />
      <LinearProgress percentage={34} size="md" />
      <LinearProgress percentage={36} size="lg" />
      <LinearProgress percentage={38} size="xl" />
    </div>
  )
}
`;

const LinearProgressSizes: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Sizes</Text>

      <div className="space-y-4">
        <LinearProgress percentage={30} size="xs" />
        <LinearProgress percentage={32} size="sm" />
        <LinearProgress percentage={34} size="md" />
        <LinearProgress percentage={36} size="lg" />
        <LinearProgress percentage={38} size="xl" />
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default LinearProgressSizes;
