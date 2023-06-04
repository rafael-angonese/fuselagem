import "fuselagem/styles.css";
import { JetBrains_Mono } from "next/font/google";
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
      <body className="bg-gray-800 text-white">{children}</body>
    </html>
  );
}
