import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Badge, Text } from "fuselagem";
import React from "react";

const code = `import { Badge } from "fuselagem";

export default function App() {
  return (
    <>
      <Badge>Default</Badge>
    </>
  )
}
`;

const BadgeDefault: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Default</Text>

      <Badge>Default</Badge>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default BadgeDefault;
