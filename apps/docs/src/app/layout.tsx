import Header from "@/components/Header/Header";
import "fuselagem/styles.css";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";

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
    <html lang="pt-BR" className={font.className} suppressHydrationWarning>
      <body>
        <Providers>
          <>
            <Header />
            <div className="container mx-auto mt-14">{children}</div>
          </>
        </Providers>
      </body>
    </html>
  );
}
