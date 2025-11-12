import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import LastNewsSection from "@/components/sections/LastNewsSection/LastNewsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-full items-center justify-center text-9xl">
      {/* Hero section */}

      <div className="w-full h-screen text-black bg-amber-400">sda</div>
      <div className="container mx-auto flex items-center justify-center">
        <div className="relative h-[551px] w-[551px]">
          <Image
            src="/assets/5.png"
            alt="الملحم"
            fill
            sizes="551px"
            className="absolute object-contain"
          />
        </div>
        <div className="content w-1/2 flex flex-col gap-9">
          <h1 className="text-[72px] ">
            التاريخ حاضر
            <br /> لنشكل المستقبل
          </h1>
          <p className="text-xl text-gray-400 font-extralight">
            تنتمي أسرة آل ملحم في الأحساء إلى قبيلة مطير نسبا وتحديدا من
            العقفان ويسمون (القنازعة) من الجغاوين وهو فرع من العبيات المشهور
            والمنتمي إلى واصل من بريه أحد الأقسام الرئيسية الثلاثة لقبيلة مطير.
          </p>
          <div className="goals flex"></div>
        </div>
      </div>
      {/* Last news section */}
      <LastNewsSection />
      <div className="">dsads</div>
    </div>
  );
}
