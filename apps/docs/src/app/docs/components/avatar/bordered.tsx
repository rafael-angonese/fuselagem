import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Avatar, Text } from "fuselagem";
import React from "react";

const code = `import { Avatar } from "fuselagem";

export default function App() {
  return (
    <div className="flex space-x-2">
      <Avatar color="primary" src={"https://github.com/rafael-angonese.png"} />
      <Avatar color="primary" src={"https://github.com/rafael-angonese.png"} />
      <Avatar color="primary" src={"https://github.com/rafael-angonese.png"} />
      <Avatar color="primary" src={"https://github.com/rafael-angonese.png"} />
      <Avatar color="primary" src={"https://github.com/rafael-angonese.png"} />
      <Avatar color="primary" src={"https://github.com/rafael-angonese.png"} />
      <Avatar color="primary" src={"https://github.com/rafael-angonese.png"} />
      <Avatar color="primary" src={"https://github.com/rafael-angonese.png"} />
      <Avatar color="primary" src={"https://github.com/rafael-angonese.png"} />
    </div>
  )
}
`;

const AvatarBordered: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Bordered</Text>

      <div className="flex space-x-4">
        <Avatar isBordered src={"https://github.com/rafael-angonese.png"} />
        <Avatar
          isBordered
          color="secondary"
          src={"https://github.com/rafael-angonese.png"}
        />
        <Avatar
          isBordered
          color="success"
          src={"https://github.com/rafael-angonese.png"}
        />
        <Avatar
          isBordered
          color="warning"
          src={"https://github.com/rafael-angonese.png"}
        />
        <Avatar
          isBordered
          color="error"
          src={"https://github.com/rafael-angonese.png"}
        />
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default AvatarBordered;
