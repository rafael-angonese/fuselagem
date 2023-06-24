import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Badge, Text } from "fuselagem";
import React from "react";

const code = `import { Badge } from "fuselagem";

export default function App() {
  return (
    <div className="space-x-2">
      <Badge size="xs">Extra Small</Badge>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
      <Badge size="xl">Extra Large</Badge>
    </div>
  )
}
`;

const BadgeSizes: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Sizes</Text>

      <div className="space-x-2">
        <Badge size="xs">Extra Small</Badge>
        <Badge size="sm">Small</Badge>
        <Badge size="md">Medium</Badge>
        <Badge size="lg">Large</Badge>
        <Badge size="xl">Extra Large</Badge>
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default BadgeSizes;
