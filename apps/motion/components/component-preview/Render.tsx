"use client"
import React from 'react'
import { demos } from '@/content/demos/demos';

interface RenderProps {
    name: string
}

export const Render: React.FC<RenderProps> = ({ name }) => {
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
        <>
           {Preview} 
        </>
    )
}
