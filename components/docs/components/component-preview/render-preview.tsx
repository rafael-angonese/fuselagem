import { ComponentName, registry } from '@/components/registry/example';
import { Button, Spinner } from '@nextui-org/react';
import React, { Suspense } from 'react';

interface RenderPreviewProps {
  name: ComponentName
}

export const RenderPreview: React.FC<RenderPreviewProps> = ({ name }) => {
  const [key, setKey] = React.useState(0); // State to trigger re-render of preview

  const Preview = React.useMemo(() => {
    const Component = registry[name]?.component

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
    <div className='relative flex flex-col items-center justify-center' key={key}>
      <Button
        onClick={() => setKey((prev) => prev + 1)}
        className="absolute right-0 top-0 z-10 ml-4 flex items-center rounded-lg px-3 py-1"
        variant="ghost"
      >
        <Spinner className="mr-2 size-4 animate-spin" />
      </Button>
      <Suspense
        fallback={
          <div className="flex items-center text-sm text-muted-foreground">
            <Spinner className="mr-2 size-4 animate-spin" />
            Loading...
          </div>
        }
      >
        {Preview}
      </Suspense>
    </div>
  )
}
