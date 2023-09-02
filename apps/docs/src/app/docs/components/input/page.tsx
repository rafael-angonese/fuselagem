import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import { Input } from "@/registry/ui/Input";
import { Text } from "@/registry/ui/text";
import React from "react";

const TextPage: React.FC = () => {
  return (
    <>
      <PageComponentLayout>
        <ComponentLayout>
          <Text variant="h1">Default</Text>

          <Input placeholder="Enter your text" />
        </ComponentLayout>

        <ComponentLayout>
          <Text variant="h1">Disabled</Text>

          <Input disabled placeholder="Disabled field" />
        </ComponentLayout>

        <ComponentLayout>
          <Text variant="h1">Invalid</Text>

          <Input isInvalid placeholder="Invalid field" />
        </ComponentLayout>
      </PageComponentLayout>
    </>
  );
};

export default TextPage;
