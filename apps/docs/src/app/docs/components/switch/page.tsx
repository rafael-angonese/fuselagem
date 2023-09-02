import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import { Switch } from "@/registry/ui/Switch";
import { Text } from "@/registry/ui/text";
import React from "react";

const CheckboxPage: React.FC = () => {
  return (
    <>
      <PageComponentLayout>
        <ComponentLayout>
          <Text variant="h1">Default</Text>

          <Switch defaultChecked />
        </ComponentLayout>

        <ComponentLayout>
          <Text variant="h1">Colors</Text>

          <div className="flex space-x-2">
            <Switch defaultChecked color="primary" />
            <Switch defaultChecked color="secondary" />
            <Switch defaultChecked color="success" />
            <Switch defaultChecked color="warning" />
            <Switch defaultChecked color="error" />
          </div>
        </ComponentLayout>

        <ComponentLayout>
          <Text variant="h1">Sizes</Text>

          <div className="flex gap-4">
            <Switch defaultChecked size="xs" />
            <Switch defaultChecked size="sm" />
            <Switch defaultChecked size="md" />
            <Switch defaultChecked size="lg" />
            <Switch defaultChecked size="xl" />
          </div>
        </ComponentLayout>
      </PageComponentLayout>
    </>
  );
};

export default CheckboxPage;
