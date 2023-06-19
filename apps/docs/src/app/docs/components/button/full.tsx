import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Button, Text } from "fuselagem";
import React from "react";

const code = `import { Button } from "fuselagem";

export default function App() {
  return (
    <>
      <Button fullWidth>Full Width</Button>
    </>
  )
}
`;

const ButtonFull: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Full Width</Text>

      <Button fullWidth>Full Width</Button>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default ButtonFull;
