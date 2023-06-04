import Link from "next/link";
import React, { ReactNode } from "react";

interface DocsLayoutProps {
  children: ReactNode;
}

const DocsLayout: React.FC<DocsLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="p-8">
        <Link href={"/docs/components/button"}>Button</Link>

        {children}
      </div>
    </>
  );
};

export default DocsLayout;
