import { SectionHeaderProps } from "@/types/props";
import Image from "next/image";

export default function SectionHeader({ text, color }: SectionHeaderProps) {
    return (
        <div className="flex gap-4 items-center my-4">
            <div className="relative w-12 h-12 lg:w-16 lg:h-16">
                <Image src="/assets/icons/HeaderShape.svg" alt="divider" fill className="mb-4 object-contain" />
            </div>
            <div>
                <h2 className={`text-4xl lg:text-7xl font-semibold mb-6 ${color ? color : 'text-black'}`}>{text}</h2>
            </div>
            <div className="relative w-12 h-12 lg:w-16 lg:h-16">
                <Image src="/assets/icons/HeaderShape.svg" alt="divider" fill className="mb-4 object-contain" />
            </div>
        </div>
    )
}
