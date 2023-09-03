import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import { Button } from "@/registry/ui/Button";
import { Tooltip } from "@/registry/ui/Tooltip";
import { Text } from "@/registry/ui/text";
import React from "react";

const TooltipPage: React.FC = () => {
  return (
    <>
      <PageComponentLayout>
        <ComponentLayout>
          <Text variant="h1">Default</Text>

          <Tooltip content="Default Tooltip content">
            <Button>Default</Button>
          </Tooltip>
        </ComponentLayout>

        <ComponentLayout>
          <Text variant="h1">Position</Text>

          <div className="flex space-x-2">
            <Tooltip side="top" content="My tooltip message">
              <Button>top</Button>
            </Tooltip>

            <Tooltip side="bottom" content="My tooltip message">
              <Button>bottom</Button>
            </Tooltip>

            <Tooltip side="left" content="My tooltip message">
              <Button>left</Button>
            </Tooltip>

            <Tooltip side="right" content="My tooltip message">
              <Button>right</Button>
            </Tooltip>
          </div>
        </ComponentLayout>
      </PageComponentLayout>
    </>
  );
};

export default TooltipPage;
