import { SectionHeaderProps } from "@/types/props";
import Image from "next/image";

export default function SectionHeader({ text, color }: SectionHeaderProps) {
    return (
        <div className="flex gap-4 items-center my-4">
            <Image src="/assets/icons/HeaderShape.svg" alt="divider" width={50} height={10} className="mb-4" />
            <h2 className={`text-4xl font-semibold mb-6 ${color ? color : 'text-black'}`}>{text}</h2>
            <Image src="/assets/icons/HeaderShape.svg" alt="divider" width={50} height={10} className="mb-4" />
        </div>
    )
}
