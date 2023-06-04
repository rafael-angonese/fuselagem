import "fuselagem/styles.css";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
        <header className="flex justify-evenly border-b p-2 border-zinc-300 items-center">
          <Link href={"/"} className="text-4xl font-bold">
            Fuselagem
          </Link>
          <div className="text-base flex gap-8">
            <Link href={"/docs"}>Docs</Link>
            <Link href={"/docs/components"}>Components</Link>
          </div>
          <div className="text-base flex gap-2">
            <span>Github</span>
            <span>Theme</span>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
