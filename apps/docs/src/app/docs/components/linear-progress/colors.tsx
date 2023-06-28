import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { LinearProgress, Text } from "fuselagem";
import React from "react";

const code = `import { LinearProgress } from "fuselagem";

export default function App() {
  return (
    <div className="space-y-4">
      <LinearProgress percentage={50} color="primary" />
      <LinearProgress percentage={30} color="secondary" />
      <LinearProgress percentage={70} color="success" />
      <LinearProgress percentage={90} color="warning" />
      <LinearProgress percentage={10} color="error" />
    </div> 
  )
}
`;

const LinearProgressColors: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Colors</Text>

      <div className="space-y-4">
        <LinearProgress percentage={50} color="primary" />
        <LinearProgress percentage={30} color="secondary" />
        <LinearProgress percentage={70} color="success" />
        <LinearProgress percentage={90} color="warning" />
        <LinearProgress percentage={10} color="error" />
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default LinearProgressColors;
