import fs from "fs";
import * as React from "react";

import { Render } from "@/components/component-preview/Render";
import { CodeDemo } from "@/components/docs";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
}

export function ComponentPreview({
  name,
  children,
  className,
  ...props
}: ComponentPreviewProps) {

  const filePath = `content/demos/${name}/usage.tsx`

  let content;

  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    console.error('deu erro')
    console.log(err)
  }


  return (
    <div className="grid grid-cols-12">

      <div className="col-span-12 lg:col-span-10 xl:col-span-8 lg:px-16 mt-10">
        <h1>Teste</h1>

        <Render name={name} />

        <CodeDemo title="Usage" showOpenInCodeSandbox={true} showPreview={false} files={{
          "/App.jsx": content
        }} />

      </div>
    </div>
  )
}
