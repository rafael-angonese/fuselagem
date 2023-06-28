import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { LinearProgress, Text } from "fuselagem";
import React from "react";

const code = `import { LinearProgress } from "fuselagem";

export default function App() {
  return (
    <>
      <LinearProgress />
    </>
  )
}
`;

const LinearProgressDefault: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Default</Text>

      <div>
        <LinearProgress />
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default LinearProgressDefault;
