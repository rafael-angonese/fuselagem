import "fuselagem/styles.css";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const font = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Fuselagem UI",
  description: "Fuselagem UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={font.className}>
      <body className="bg-black text-zinc-300">
        <header className="border-b p-2 border-zinc-300 sticky top-0 left-0 right-0 z-10 bg-black">
          <nav className="container mx-auto flex justify-between items-center">
            <Link
              href={"/"}
              className="font-extrabold text-transparent sm:text-2xl text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            >
              FuselagemUI
            </Link>
            <div className="text-base flex gap-8">
              <Link href={"/docs"}>Docs</Link>
              <Link href={"/docs/components"}>Components</Link>
            </div>
            <div className="text-base flex gap-2">
              <span>Github</span>
              <span>Theme</span>
            </div>
          </nav>
        </header>
        <div className="container mx-auto mt-14">{children}</div>
      </body>
    </html>
  );
}
