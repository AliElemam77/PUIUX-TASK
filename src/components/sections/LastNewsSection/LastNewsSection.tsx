import CardSlider from "@/components/common/CardSlider/CardSlider";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import Image from "next/image";

export default function LastNewsSection() {
    return (
        <div className="container mx-auto py-14 lg:py-24 bg-primary border-accent relative overflow-hidden">
            <div>
                <SectionHeader text="آخر الأخبار" color="text-white" />
            </div>
            <div className="absolute top-0 start-0 scale-105 opacity-10">
                <div className="relative w-20 h-20 lg:w-60 lg:h-60">
                    <Image src="/assets/icons/HeaderShape.svg" alt="divider" fill className="mb-4 object-contain" />
                </div>
            </div>
            <div className="absolute bottom-0 end-0 scale-105 opacity-10">
                <div className="relative w-20 h-20 lg:w-60 lg:h-60">
                    <Image src="/assets/icons/HeaderShape.svg" alt="divider" fill className="mb-4 object-contain" />
                </div>
            </div>
            <div className="mt-14 lg:mt-24">
                <CardSlider />
            </div>
        </div>
    )
}
