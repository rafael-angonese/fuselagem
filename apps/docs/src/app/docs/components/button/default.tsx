import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Button, Text } from "fuselagem";
import React from "react";

const code = `import { Button } from "fuselagem";

export default function App() {
  return (
    <>
      <Button>Default</Button>
    </>
  )
}
`;

const ButtonDefault: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Default</Text>

      <Button>Default</Button>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default ButtonDefault;
