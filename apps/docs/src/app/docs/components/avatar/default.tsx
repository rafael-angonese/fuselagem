import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Avatar, Text } from "fuselagem";
import React from "react";

const code = `import { Avatar } from "fuselagem";

export default function App() {
  return (
    <div className="flex space-x-2">
      <Avatar src={"https://github.com/rafael-angonese.png"} />
      <Avatar name="Fuselagem UI" />
    </div>
  )
}
`;

const AvatarDefault: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Default</Text>

      <div className="flex space-x-2">
        <Avatar src={"https://github.com/rafael-angonese.png"} />
        <Avatar name="Fuselagem UI" />
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default AvatarDefault;
