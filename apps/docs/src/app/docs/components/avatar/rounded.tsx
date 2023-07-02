import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Avatar, Text } from "fuselagem";
import React from "react";

const code = `import { Avatar } from "fuselagem";

export default function App() {
  return (
    <div className="flex space-x-2">
      <Avatar rounded="full" src={"https://github.com/rafael-angonese.png"} />
      <Avatar rounded="3xl" src={"https://github.com/rafael-angonese.png"} />
      <Avatar rounded="2xl" src={"https://github.com/rafael-angonese.png"} />
      <Avatar rounded="xl" src={"https://github.com/rafael-angonese.png"} />
      <Avatar rounded="lg" src={"https://github.com/rafael-angonese.png"} />
      <Avatar rounded="md" src={"https://github.com/rafael-angonese.png"} />
      <Avatar rounded="rounded" src={"https://github.com/rafael-angonese.png"} />
      <Avatar rounded="sm" src={"https://github.com/rafael-angonese.png"} />
      <Avatar rounded="none" src={"https://github.com/rafael-angonese.png"} />
    </div>
  )
}
`;

const AvatarRounded: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Rounded</Text>

      <div className="flex space-x-2">
        <Avatar rounded="full" src={"https://github.com/rafael-angonese.png"} />
        <Avatar rounded="3xl" src={"https://github.com/rafael-angonese.png"} />
        <Avatar rounded="2xl" src={"https://github.com/rafael-angonese.png"} />
        <Avatar rounded="xl" src={"https://github.com/rafael-angonese.png"} />
        <Avatar rounded="lg" src={"https://github.com/rafael-angonese.png"} />
        <Avatar rounded="md" src={"https://github.com/rafael-angonese.png"} />
        <Avatar
          rounded="rounded"
          src={"https://github.com/rafael-angonese.png"}
        />
        <Avatar rounded="sm" src={"https://github.com/rafael-angonese.png"} />
        <Avatar rounded="none" src={"https://github.com/rafael-angonese.png"} />
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default AvatarRounded;
