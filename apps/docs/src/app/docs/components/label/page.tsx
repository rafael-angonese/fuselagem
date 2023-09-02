import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import { Input } from "@/registry/ui/Input";
import { Label } from "@/registry/ui/Label";
import { Text } from "@/registry/ui/text";
import React from "react";

const FormLabelPage: React.FC = () => {
  return (
    <>
      <PageComponentLayout>
        <ComponentLayout>
          <Text variant="h1">Default</Text>

          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
        </ComponentLayout>

        <ComponentLayout>
          <Text variant="h1">Required</Text>

          <div>
            <Label required htmlFor="required">
              Name
            </Label>
            <Input id="required" placeholder="Enter your name" />
          </div>
        </ComponentLayout>

        <ComponentLayout>
          <Text variant="h1">Invalid</Text>

          <div>
            <Label required isInvalid htmlFor="is-invalid">
              Name
            </Label>
            <Input id="is-invalid" isInvalid placeholder="Enter your name" />
          </div>
        </ComponentLayout>
      </PageComponentLayout>
    </>
  );
};

export default FormLabelPage;
