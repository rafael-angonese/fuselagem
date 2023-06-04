import React, { ReactNode } from "react";

interface DocsLayoutProps {
  children: ReactNode;
}

const DocsLayout: React.FC<DocsLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="p-8">
        <h1>Docs layout</h1>

        {children}
      </div>
    </>
  );
};

export default DocsLayout;
