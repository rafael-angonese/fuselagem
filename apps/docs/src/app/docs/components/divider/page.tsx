import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import { Divider } from "@/registry/ui/Divider";
import { Text } from "@/registry/ui/text";
import React from "react";

const TooltipPage: React.FC = () => {
  return (
    <>
      <PageComponentLayout>
        <ComponentLayout>
          <Text variant="h1">Orientation</Text>

          <div className="space-y-10">
            <div className="space-y-1">
              <p className="text-small">Horizontal</p>
              <Divider orientation="horizontal" />
              <p className="text-small">Horizontal</p>
            </div>

            <div className="flex space-x-4 h-56">
              <div>Vertical</div>
              <Divider orientation="vertical" />
              <div>Vertical</div>
            </div>
          </div>
        </ComponentLayout>

        <ComponentLayout>
          <Text variant="h1">Colors</Text>

          <div className="space-y-2">
            <div>
              <p>Primary.</p>
              <Divider color="primary" />
            </div>

            <div>
              <p>Secondary.</p>
              <Divider color="secondary" />
            </div>

            <div>
              <p>Success.</p>
              <Divider color="success" />
            </div>

            <div>
              <p>Warning.</p>
              <Divider color="warning" />
            </div>

            <div>
              <p>Error.</p>
              <Divider color="error" />
            </div>
          </div>
        </ComponentLayout>
      </PageComponentLayout>
    </>
  );
};

export default TooltipPage;
