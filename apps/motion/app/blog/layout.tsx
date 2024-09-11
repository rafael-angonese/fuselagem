import { LayoutBackground } from "@/components/layout/layout-background";
import {ScriptProviders} from "@/components/scripts/script-providers";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({children}: DocsLayoutProps) {
  return (
    <>
      <main className="relative container mx-auto max-w-7xl z-10 px-6 min-h-[calc(100vh_-_64px_-_108px)] mb-12 flex-grow">
        {children}
      </main>

      <LayoutBackground />
      <ScriptProviders />
    </>
  );
}
