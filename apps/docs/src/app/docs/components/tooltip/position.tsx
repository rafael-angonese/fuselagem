import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Button, Text, Tooltip } from "fuselagem";
import React from "react";

const code = `import { Tooltip } from "fuselagem";

export default function App() {
  return (
    <div className="flex space-x-2">
      <Tooltip position="top" title="My tooltip message">
        <Button>top</Button>
      </Tooltip>

      <Tooltip position="bottom" title="My tooltip message">
        <Button>bottom</Button>
      </Tooltip>

      <Tooltip position="left" title="My tooltip message">
        <Button>left</Button>
      </Tooltip>

      <Tooltip position="right" title="My tooltip message">
        <Button>right</Button>
      </Tooltip>
    </div>
  )
}
`;

const TooltipPosition: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Position</Text>

      <div className="flex space-x-2">
        <Tooltip position="top" title="My tooltip message">
          <Button>top</Button>
        </Tooltip>

        <Tooltip position="bottom" title="My tooltip message">
          <Button>bottom</Button>
        </Tooltip>

        <Tooltip position="left" title="My tooltip message">
          <Button>left</Button>
        </Tooltip>

        <Tooltip position="right" title="My tooltip message">
          <Button>right</Button>
        </Tooltip>
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default TooltipPosition;
