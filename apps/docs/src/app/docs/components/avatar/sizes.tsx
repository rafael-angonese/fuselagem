import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Avatar, Text } from "fuselagem";
import React from "react";

const code = `import { Avatar } from "fuselagem";

export default function App() {
  return (
    <div className="flex items-center space-x-2">
      <Avatar size="xs" src={"https://github.com/rafael-angonese.png"} />
      <Avatar size="sm" src={"https://github.com/rafael-angonese.png"} />
      <Avatar size="md" src={"https://github.com/rafael-angonese.png"} />
      <Avatar size="lg" src={"https://github.com/rafael-angonese.png"} />
      <Avatar size="xl" src={"https://github.com/rafael-angonese.png"} />
    </div>
  )
}
`;

const AvatarSizes: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Sizes</Text>

      <div className="flex items-center space-x-2">
        <Avatar size="xs" src={"https://github.com/rafael-angonese.png"} />
        <Avatar size="sm" src={"https://github.com/rafael-angonese.png"} />
        <Avatar size="md" src={"https://github.com/rafael-angonese.png"} />
        <Avatar size="lg" src={"https://github.com/rafael-angonese.png"} />
        <Avatar size="xl" src={"https://github.com/rafael-angonese.png"} />
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default AvatarSizes;
