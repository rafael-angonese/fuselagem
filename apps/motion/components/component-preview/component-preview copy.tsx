import { CodeDemo } from "@/components/docs";
import fs from "fs";
import * as React from "react";

import { demos } from '@/content/demos/demos';

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

    <main className="relative container mx-auto max-w-7xl z-10 px-6 min-h-[calc(100vh_-_64px_-_108px)] mb-12 flex-grow">
      <div className="grid grid-cols-12">
        <div className="hidden overflow-visible relative z-10 lg:block lg:col-span-2 mt-8 pr-4">
        </div>
        <div className="col-span-12 lg:col-span-10 xl:col-span-8 lg:px-16 mt-10">
          {/* {Preview} */}

          <CodeDemo title="Usage" showPreview={false} files={{
            "/App.jsx": content
          }} />
        </div>
      </div>
    </main>
  )
}
