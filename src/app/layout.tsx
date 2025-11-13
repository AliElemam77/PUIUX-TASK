import type { Metadata } from "next";
import { Reem_Kufi } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar/Navbar";

const arefRuqaaInk = Reem_Kufi({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "الملحم",
  description: "الملحم كيان ينمو",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${arefRuqaaInk.variable} antialiased flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
