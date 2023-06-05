import Sidebar from "@/components/Sidebar/Sidebar";
import React, { ReactNode } from "react";

interface DocsLayoutProps {
  children: ReactNode;
}

const DocsLayout: React.FC<DocsLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="flex">
        <Sidebar />

        <main className="flex-1 px-8 pb-8 overflow-auto">{children}</main>
      </div>
    </>
  );
};

export default DocsLayout;
