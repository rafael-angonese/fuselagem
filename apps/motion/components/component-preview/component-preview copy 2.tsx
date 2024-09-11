import fs from "fs";
import * as React from "react";

// import { demos } from '@/content/demos/demos';

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

 console.log('-------------------')
 console.log(filePath)
 console.log('-------------------')

  // const absolutePath = path.join(process.cwd(), filePath);
  let content;

  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    console.error('deu erro')
    console.log(err)
  }



  const Preview = React.useMemo(() => {
    const Component = demos[name]?.usage

    if (!Component) {
      return (
        <p className="text-sm text-muted-foreground">
          Component{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {name}
          </code>{" "}
          not found in registry.
        </p>
      )
    }

    return <Component />
  }, [name])


  return (
    <div
      {...props}
    >
      <h1>Teste</h1>

      {/* {Preview} */}

      {content}

    </div>
  )
}
