import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Button, Text } from "fuselagem";
import React from "react";

const code = `import { Avatar } from "fuselagem";`;

const AvatarImport: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Import</Text>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default AvatarImport;