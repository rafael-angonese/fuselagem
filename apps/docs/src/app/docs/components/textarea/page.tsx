import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import { Textarea } from "@/registry/ui/Textarea";
import { Text } from "@/registry/ui/text";
import React from "react";

const TextPage: React.FC = () => {
  return (
    <>
      <PageComponentLayout>
        <ComponentLayout>
          <Text variant="h1">Default</Text>

          <Textarea placeholder="Enter your text" />
        </ComponentLayout>

        <ComponentLayout>
          <Text variant="h1">Disabled</Text>

          <Textarea disabled placeholder="Disabled field" />
        </ComponentLayout>

        <ComponentLayout>
          <Text variant="h1">Invalid</Text>

          <Textarea isInvalid placeholder="Invalid field" />
        </ComponentLayout>
      </PageComponentLayout>
    </>
  );
};

export default TextPage;
