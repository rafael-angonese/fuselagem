import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Button, Text, Tooltip } from "fuselagem";
import React from "react";

const code = `import { Tooltip } from "fuselagem";

export default function App() {
  return (
    <>
      <Tooltip title="My tooltip message">
        <Button>Hover me</Button>
      </Tooltip>
    </>
  )
}
`;

const TooltipDefault: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Default</Text>

      <div>
        <Tooltip title="My tooltip message">
          <Button>Hover me</Button>
        </Tooltip>
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default TooltipDefault;
