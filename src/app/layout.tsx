import type { Metadata } from "next";
import { Aref_Ruqaa_Ink, Reem_Kufi } from "next/font/google";
import "./globals.css";

const arefRuqaaInk = Reem_Kufi({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["500", "400", "700"],
});

export const metadata: Metadata = {
  title: "الملحم",
  description: "الملحم كيان ينمو",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${arefRuqaaInk.variable} antialiased`}>{children}</body>
    </html>
  );
}
