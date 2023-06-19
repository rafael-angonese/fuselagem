import React, { ReactNode } from 'react';

interface PageComponentLayoutProps {
    children: ReactNode;
}

const PageComponentLayout: React.FC<PageComponentLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-12">
        {children}
    </div>
  )
}

export default PageComponentLayout;