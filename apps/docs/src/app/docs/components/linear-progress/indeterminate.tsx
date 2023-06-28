import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { LinearProgress, Text } from "fuselagem";
import React from "react";

const code = `import { LinearProgress } from "fuselagem";

export default function App() {
  return (
    <>
      <LinearProgress size="xs" indeterminate />
    </>
  )
}
`;

const LinearProgressIndeterminate: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Indeterminate</Text>

      <div>
        <LinearProgress size="xs" indeterminate />
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default LinearProgressIndeterminate;
