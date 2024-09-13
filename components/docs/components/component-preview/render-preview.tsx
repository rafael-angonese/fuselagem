import { ComponentName, example } from '@/components/registry/example';
import React from 'react';

interface RenderPreviewProps {
    name: ComponentName
}

export const RenderPreview: React.FC<RenderPreviewProps> = ({ name }) => {
    const Preview = React.useMemo(() => {
        const Component = example[name]?.component
    
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
        <>
           {Preview} 
        </>
    )
}
