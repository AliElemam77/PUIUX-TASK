"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiNotification, BiUser } from "react-icons/bi";
import { BsBag } from "react-icons/bs";

const links = [
  { name: "الرئيسية", href: "/" },
  { name: "من نحن", href: "/about" },
  { name: "اللوائح والأحكام", href: "/rules" },
  { name: "البرامج", href: "/programs" },
  { name: "المركز الإعلامي", href: "/media" },
  { name: "تواصل معنا", href: "/contact" },
];

const actions = [
  { icon: <BiUser />, href: "#" },
  { icon: <BsBag />, href: "#" },
  { icon: <BiNotification />, href: "#" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-linear-to-b from-black/99  fixed top-0 right-0 z-50 w-full h-[140px] py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* 🟢 Logo */}
        <div className="logo">
          <Image
            width={128}
            height={64}
            src="/assets/logo/logo.svg"
            alt="Almalham Logo"
            className="h-16"
          />
        </div>

        {/* 🔵 Links */}
        <ul className="links flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`relative text-lg font-medium transition-all duration-300 ${
                    isActive
                      ? "text-accent "
                      : "text-white hover:text-accent"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* 🔴 Actions */}
        <ul className="actions flex items-center gap-4">
          {actions.map((action, index) => (
            <li
              key={index}
              className="text-white text-2xl hover:text-accent transition-colors cursor-pointer"
            >
              {action.icon}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
