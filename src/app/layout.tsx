import type { Metadata } from "next";
import { Aref_Ruqaa_Ink, Reem_Kufi } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { BiNotification, BiUser } from "react-icons/bi";
import { PiCarThin } from "react-icons/pi";
import { BsBag } from "react-icons/bs";
import Navbar from "@/components/layout/Navbar/Navbar";

const arefRuqaaInk = Reem_Kufi({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const links = [
  { name: "الرئيسية", href: "#" },
  { name: "من نحن", href: "#" },
  { name: "اللوائح والاحكام", href: "#" },
  { name: "البرامج ", href: "#" },
  { name: "المركز الاعلامى", href: "#" },
  { name: "تواصل معنا", href: "#" },
];

const actions = [
  { icon: <BiUser />, href: "#" },
  { icon: <BsBag />, href: "#" },
  { icon: <BiNotification />, href: "#" },
];

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
      <body className={`${arefRuqaaInk.variable} antialiased flex flex-col`}>
       <Navbar  />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
