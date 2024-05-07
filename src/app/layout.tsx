import AOSProvider from "@/components/aos/AOSProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "노현진's Portfolio",
  description: "HyunJinNo's web portfolio",
  icons: { icon: "/icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AOSProvider>
          {/* <Header /> */}
          {children}
        </AOSProvider>
      </body>
    </html>
  );
}
