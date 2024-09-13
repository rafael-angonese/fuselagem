import * as React from "react";

import { BgGridContainer } from "@/components/bg-grid-container";
import { ComponentName } from "@/components/registry/example";
import { Tab, Tabs } from "@nextui-org/react";
import { RenderPreview } from "./render-preview";
import { Code } from "@/components/mdx-components/mdx-components";
interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: ComponentName
}

export function ComponentPreview({
  name,
  className,
  children,
  ...props
}: ComponentPreviewProps) {
  const ref = React.useRef(null);

  const Codes = React.Children.toArray(children) as React.ReactElement[];
  const firstChild = Codes[0]; // first child
  const codeString = firstChild.props.children

  return (
    <>
      <div ref={ref} className="flex flex-col gap-2">
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
            <Code className="jsx">
              {codeString}
            </Code>
          </Tab>
        </Tabs>
      </div>
    </>
  )
}
