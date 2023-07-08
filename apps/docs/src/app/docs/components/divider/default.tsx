import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Divider, Text } from "fuselagem";
import React from "react";

const code = `import { Divider } from "fuselagem";

export default function App() {
  return (
    <>
      <Divider />
    </>
  )
}
`;

const DividerDefault: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Default</Text>

      <div>
        <Divider />
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default DividerDefault;
