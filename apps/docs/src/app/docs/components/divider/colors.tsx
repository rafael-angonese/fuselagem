import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Divider, Text } from "fuselagem";
import React from "react";

const code = `import { Divider } from "fuselagem";

export default function App() {
  return (
    <div className="space-y-2">
      <div>
        <p>Primary.</p>
        <Divider color="primary" />
      </div>

      <div>
        <p>Secondary.</p>
        <Divider color="secondary" />
      </div>

      <div>
        <p>Success.</p>
        <Divider color="success" />
      </div>

      <div>
        <p>Warning.</p>
        <Divider color="warning" />
      </div>

      <div>
        <p>Error.</p>
        <Divider color="error" />
      </div>
    </div>
  )
}
`;

const DividerColors: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Colors</Text>

      <div className="space-y-2">
        <div>
          <p>Primary.</p>
          <Divider color="primary" />
        </div>

        <div>
          <p>Secondary.</p>
          <Divider color="secondary" />
        </div>

        <div>
          <p>Success.</p>
          <Divider color="success" />
        </div>

        <div>
          <p>Warning.</p>
          <Divider color="warning" />
        </div>

        <div>
          <p>Error.</p>
          <Divider color="error" />
        </div>
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default DividerColors;
