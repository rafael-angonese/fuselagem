import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { LinearProgress, Text } from "fuselagem";
import React from "react";

const code = `import { LinearProgress } from "fuselagem";

export default function App() {
  return (
    <div className="space-y-4">
      <LinearProgress size="xl" percentage={15}>
        15%
      </LinearProgress>
      <LinearProgress size="xl" percentage={35}>
        35%
      </LinearProgress>
      <LinearProgress size="xl" percentage={55}>
        55%
      </LinearProgress>
      <LinearProgress size="xl" percentage={75}>
        75%
      </LinearProgress>
    </div>
  )
}
`;

const LinearProgressPercentage: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Percentage</Text>

      <div className="space-y-4">
        <LinearProgress size="xl" percentage={15}>
          15%
        </LinearProgress>
        <LinearProgress size="xl" percentage={35}>
          35%
        </LinearProgress>
        <LinearProgress size="xl" percentage={55}>
          55%
        </LinearProgress>
        <LinearProgress size="xl" percentage={75}>
          75%
        </LinearProgress>
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default LinearProgressPercentage;
