"use client";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import { Button } from "@/registry/ui/Button";
import { Collapse } from "@/registry/ui/Collapse";
import { Text } from "@/registry/ui/text";
import { ChevronsUpDown } from "lucide-react";
import React from "react";

const CollapsePage: React.FC = () => {
  return (
    <>
      <PageComponentLayout>
        <ComponentLayout>
          <Text variant="h1">Collapse</Text>

          <div className="">
            <Collapse.Root className=" space-y-2">
              <Collapse.Trigger asChild>
                <Button variant="outlined" color="primary">
                  Click to expand
                  <ChevronsUpDown className="h-4 w-4" />
                </Button>
              </Collapse.Trigger>

              <Collapse.Content className="space-y-2">
                <div className="flex gap-2">
                  <Button variant="outlined" color="primary">
                    Expanded buttons
                  </Button>
                  <Button variant="outlined" color="primary">
                    Expanded buttons
                  </Button>
                  <Button variant="outlined" color="primary">
                    Expanded buttons
                  </Button>
                </div>
              </Collapse.Content>
            </Collapse.Root>
          </div>
        </ComponentLayout>
      </PageComponentLayout>
    </>
  );
};

export default CollapsePage;
