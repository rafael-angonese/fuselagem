import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Divider, Text } from "fuselagem";
import React from "react";

const code = `import { Divider } from "fuselagem";

export default function App() {
  return (
    <div className="space-y-10">
      <div className="space-y-1">
        <p className="text-small">Horizontal</p>
        <Divider orientation="horizontal" />
        <p className="text-small">Horizontal</p>
      </div>

      <div className="flex space-x-4 h-56">
        <div>Vertical</div>
        <Divider orientation="vertical" />
        <div>Vertical</div>
      </div>
    </div>
  )
}
`;

const DividerOrientation: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Orientation</Text>

      <div className="space-y-10">
        <div className="space-y-1">
          <p className="text-small">Horizontal</p>
          <Divider orientation="horizontal" />
          <p className="text-small">Horizontal</p>
        </div>

        <div className="flex space-x-4 h-56">
          <div>Vertical</div>
          <Divider orientation="vertical" />
          <div>Vertical</div>
        </div>
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default DividerOrientation;
