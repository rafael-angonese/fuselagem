import Header from "@/components/Header/Header";
import "fuselagem/styles.css";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const font = JetBrains_Mono({
  subsets: ["latin"],
});

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
      <body className="bg-white dark:bg-black text-black dark:text-zinc-300">
        <Header />
        <div className="container mx-auto mt-14">{children}</div>
      </body>
    </html>
  );
}
