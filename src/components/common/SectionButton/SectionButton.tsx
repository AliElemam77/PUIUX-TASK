import { SectionButtonProps } from "@/types/props";
import Link from "next/link";
import React from "react";

export default function SectionButton({ text }: SectionButtonProps) {
  return (
    <Link href={""} className="text-accent border py-4 px-9 hover:text-white hover:bg-accent transition duration-75">
      {text}
    </Link>
  );
}
