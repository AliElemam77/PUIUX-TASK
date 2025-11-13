import CardSlider from "@/components/common/CardSlider/CardSlider";
import SectionButton from "@/components/common/SectionButton/SectionButton";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import Image from "next/image";
import ServicesSwyper from "./ServicesSwyper";

export default function LastNewsSection() {
  return (
    <div className="py-14 lg:py-24 bg-primary border-accent relative overflow-hidden">
      <div className="absolute top-0 start-0 scale-105 ">
        <div className="relative w-20 h-20 lg:w-60 lg:h-60">
          <Image
            src="/assets/000.svg"
            alt="divider"
            fill
            className="mb-4 object-contain"
          />
        </div>
      </div>
      <div className="absolute bottom-0 end-0 scale-105 ">
        <div className="relative w-20 h-20 lg:w-60 lg:h-60">
          <Image
            src="/assets/0000.svg"
            alt="divider"
            fill
            className="mb-4 object-contain"
          />
        </div>
      </div>
      {/* المحتوى */}
      <div className="container mx-auto w-full flex flex-col justify-center items-center gap-20 relative z-10">
        <div className="flex flex-col items-center gap-10 w-full">
          <SectionHeader text="احصل على خدمتك" color="text-white" />
          <ServicesSwyper />
        </div>

        <SectionButton text="استكشف جميع الخدمات" />
      </div>
    </div>
  );
}
