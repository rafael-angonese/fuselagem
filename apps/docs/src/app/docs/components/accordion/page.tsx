"use client";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import { Accordion } from "@/registry/ui/Accordion";
import { Text } from "@/registry/ui/text";
import React from "react";

const TooltipPage: React.FC = () => {
  return (
    <>
      <PageComponentLayout>
        <ComponentLayout>
          <Text variant="h1">Accordion</Text>

          <div className="">
            <Accordion.Root type="multiple">
              <Accordion.Item value="item-1">
                <Accordion.Header>
                  <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="item-2">
                <Accordion.Header>
                  <Accordion.Trigger>Is it styled?</Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="item-3">
                <Accordion.Header>
                  <Accordion.Trigger>Is it animated?</Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>
        </ComponentLayout>
      </PageComponentLayout>
    </>
  );
};

export default TooltipPage;
