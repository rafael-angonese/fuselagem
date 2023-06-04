import Link from "next/link";
import React, { ReactNode } from "react";

interface DocsLayoutProps {
  children: ReactNode;
}

const DocsLayout: React.FC<DocsLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="p-8 ">
        <div className="flex gap-4">
          <Link href={"/docs/components/button"}>Button</Link>
          <Link href={"/docs/components/text"}>Text</Link>
        </div>

        {children}
      </div>
    </>
  );
};

export default DocsLayout;
