import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Badge, Text } from "fuselagem";
import React from "react";

const code = `import { Badge } from "fuselagem";

export default function App() {
  return (
    <div className="space-x-2">
      <Badge>Default</Badge>
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="error">Error</Badge>
      <Badge color="warning">Warning</Badge>
    </div>
  )
}
`;

const BadgeColors: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Colors</Text>

      <div className="space-x-2">
        <Badge>Default</Badge>
        <Badge color="primary">Primary</Badge>
        <Badge color="secondary">Secondary</Badge>
        <Badge color="success">Success</Badge>
        <Badge color="error">Error</Badge>
        <Badge color="warning">Warning</Badge>
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default BadgeColors;
