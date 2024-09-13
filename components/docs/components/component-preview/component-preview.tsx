import * as React from "react";

import { BgGridContainer } from "@/components/bg-grid-container";
import { ComponentName } from "@/components/registry/example";
import { Tab, Tabs } from "@nextui-org/react";
// import RenderCode from "./render-code";
import { RenderPreview } from "./render-preview";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: ComponentName
}

export function ComponentPreview({
  name,
  className,
  ...props
}: ComponentPreviewProps) {

  return (
    <div className="flex flex-col gap-2">
      <Tabs
        disableAnimation
        aria-label="Code demo tabs"
        classNames={{
          panel: "pt-0",
        }}
        variant="underlined"
      >
        <Tab key="preview" title="Preview">
          <BgGridContainer className={className}>
            <RenderPreview name={name} />
          </BgGridContainer>
        </Tab>
        <Tab key="code" title="Code">
          {/* <RenderCode name={name} /> */}
        </Tab>
      </Tabs>
    </div>
  )
}
