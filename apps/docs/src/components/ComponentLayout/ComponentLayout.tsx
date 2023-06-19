import React, { ReactNode } from 'react';

interface ComponentLayoutProps {
    children: ReactNode;
}

const ComponentLayout: React.FC<ComponentLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-4">
        {children}
    </div>
  )
}

export default ComponentLayout;