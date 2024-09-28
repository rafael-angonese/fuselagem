import * as React from "react";

import { BgGridContainer } from "@/components/bg-grid-container";
import { Code } from "@/components/mdx-components/mdx-components";
import { Tab, Tabs } from "@nextui-org/react";
import { RenderPreview } from "./render-preview";
import { ComponentName } from "@/components/registry/registry";
interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: ComponentName
  showPreview?: boolean;
}

export function ComponentPreview({
  name,
  className,
  children,
  showPreview = true,
  ...props
}: ComponentPreviewProps) {
  const ref = React.useRef(null);

  const Codes = React.Children.toArray(children) as React.ReactElement[];
  const firstChild = Codes[0]; // first child
  const codeString = firstChild.props.children

  const shouldRenderTabs = React.useMemo(() => {
    if (!showPreview) return false;

    return true;
  }, [showPreview]);

  return (
    <>
      <div ref={ref} className="flex flex-col gap-2">
      {shouldRenderTabs ? (
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
          <BgGridContainer className={className}>
            <Code className="jsx">
              {codeString}
            </Code>
            </BgGridContainer>
          </Tab>
        </Tabs>
         ) : (
          <>
          <BgGridContainer className={className}>
            <Code className="jsx">
              {codeString}
            </Code>
          </BgGridContainer>
          </>
        )}
      </div>
    </>
  )
}
