"use client";

import { Skeleton, Tab, Tabs } from "@nextui-org/react";
import { useInView } from "framer-motion";
import dynamic from "next/dynamic";
import React, { useCallback, useMemo, useRef } from "react";

import { useCodeDemo, UseCodeDemoProps } from "./use-code-demo";
import WindowResizer, { WindowResizerProps } from "./window-resizer";

import { BgGridContainer } from "@/components/bg-grid-container";
import { GradientBoxProps } from "@/components/gradient-box";
import { Code } from "@/components/mdx-components";

const DynamicReactLiveDemo = dynamic(
  () => import("./react-live-demo").then((m) => m.ReactLiveDemo),
  {
    ssr: false,
    // eslint-disable-next-line react/display-name
    loading: () => <Skeleton className="w-full h-24 rounded-xl" />,
  },
);

const DynamicSandpack = dynamic(() => import("../../../sandpack").then((m) => m.Sandpack), {
  ssr: false,
  // eslint-disable-next-line react/display-name
  loading: () => <Skeleton className="w-full h-32 rounded-xl" />,
});

interface CodeDemoProps extends UseCodeDemoProps, WindowResizerProps {
  title?: string;
  asIframe?: boolean;
  showSandpackPreview?: boolean;
  initialEditorOpen?: boolean;
  enableResize?: boolean;
  showPreview?: boolean;
  hideWindowActions?: boolean;
  showOpenInCodeSandbox?: boolean;
  isPreviewCentered?: boolean;
  resizeEnabled?: boolean;
  typescriptStrict?: boolean;
  displayMode?: "always" | "visible";
  isGradientBox?: boolean;
  gradientColor?: GradientBoxProps["color"];
  previewHeight?: string | number;
  overflow?: "auto" | "visible" | "hidden";
  className?: string;
  codeString?: string;
}

export const CodeDemoMotion: React.FC<CodeDemoProps> = ({
  files = {},
  title,
  showEditor = true,
  showPreview = true,
  asIframe = false,
  showTabs = true,
  resizeEnabled = true,
  hideWindowActions = false,
  showSandpackPreview = false,
  isPreviewCentered = false,
  // when false .js files will be used
  typescriptStrict = false,
  showOpenInCodeSandbox,
  isGradientBox = false,
  previewHeight = "auto",
  overflow = "visible",
  displayMode = "always",
  gradientColor,
  highlightedLines,
  iframeInitialWidth,
  iframeSrc,
  className,
  children,
  codeString = '',
}) => {
  const ref = useRef(null);
  
  return (
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
            {children}
          </BgGridContainer>
        </Tab>
        {/* <Tab key="code" title="Code">
          {editorContent}
        </Tab> */}
         <Tab key="code" title="Code">
          <Code className="jsx">
            {codeString}
          </Code>
        </Tab>
      </Tabs>
    </div>
  );
};
