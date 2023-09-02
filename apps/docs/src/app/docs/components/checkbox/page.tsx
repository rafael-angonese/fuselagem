import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import { Checkbox } from "@/registry/ui/Checkbox";
import { Text } from "@/registry/ui/text";
import React from "react";

const CheckboxPage: React.FC = () => {
  return (
    <>
      <PageComponentLayout>
        <ComponentLayout>
          <Text variant="h1">Default</Text>

          <Checkbox id="terms" />
        </ComponentLayout>

        <ComponentLayout>
          <Text variant="h1">Colors</Text>

          <div className="flex gap-4">
            <Checkbox defaultChecked color="primary" />
            <Checkbox defaultChecked color="secondary" />
            <Checkbox defaultChecked color="success" />
            <Checkbox defaultChecked color="warning" />
            <Checkbox defaultChecked color="error" />
          </div>
        </ComponentLayout>

        <ComponentLayout>
          <Text variant="h1">Sizes</Text>

          <div className="flex gap-4">
            <Checkbox defaultChecked size="xs" />
            <Checkbox defaultChecked size="sm" />
            <Checkbox defaultChecked size="md" />
            <Checkbox defaultChecked size="lg" />
            <Checkbox defaultChecked size="xl" />
          </div>
        </ComponentLayout>

        <ComponentLayout>
          <Text variant="h1">Rounded</Text>

          <div className="flex gap-4">
            <Checkbox defaultChecked rounded="full" />
            <Checkbox defaultChecked rounded="3xl" />
            <Checkbox defaultChecked rounded="2xl" />
            <Checkbox defaultChecked rounded="xl" />
            <Checkbox defaultChecked rounded="lg" />
            <Checkbox defaultChecked rounded="md" />
            <Checkbox defaultChecked rounded="rounded" />
            <Checkbox defaultChecked rounded="sm" />
            <Checkbox defaultChecked rounded="none" />
          </div>
        </ComponentLayout>
      </PageComponentLayout>
    </>
  );
};

export default CheckboxPage;
