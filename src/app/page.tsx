import SectionButton from "@/components/common/SectionButton/SectionButton";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import GoalsSection from "@/components/pageComponents/Home/GoalsSection/GoalsSection";
import ServicesSection from "@/components/pageComponents/Home/ServicesSection/ServicesSection";
import LastNewsSection from "@/components/pageComponents/Home/LastNewsSection/LastNewsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      {/* 🌟 Hero section */}
      <section className="relative w-full h-screen flex  text-white overflow-hidden">
        {/* الخلفية */}
        <Image
          src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSykbQdDXlL3eAivdfjIBox6GxBbCs51zHqJKVTpDKI7pUEcLjatT5QRdHbluZpnN2YNCCf5jE5Y0sQeFUgddvTBRc2x3JfiIe73M4SppUkNVpDtMMlit1OFtq5kdXbEeTxlztTahA=s1360-w1360-h1020-rw"
          alt="Hero Image"
          fill
          priority
          className="object-cover object-center z-0"
        />

        {/* طبقة تظليل */}
        <div className="absolute inset-0 bg-[#2F534E]/50  z-10" />
        <div className="absolute inset-0 bg-black/65  z-10" />

        {/* المحتوى */}
        <div className="flex gap-4 items-start flex-col z-50 absolute top-1/3 right-17 mx-auto container">
          <h1 className="text-7xl">أسرة ال ملحم</h1>
          <p className="w-1/2 text-2xl text-[#B8C9C7]">
            تنتمي أسرة آل ملحم في الأحساء إلى قبيلة مطير نسبا وتحديدا من
            "العقفان" ويسمون (القنازعة) من الجغاوين وهو فرع من العبيات المشهور
            والمنتمي إلى واصل من بريه أحد الأقسام الرئيسية الثلاثة لقبيلة مطير.
          </p>
          <div className="flex items-center gap-5">
            <button className="text-white border py-4 px-9  bg-accent transition duration-75">
              تطوع معنا
            </button>
            <SectionButton text="اطلب خدمتك" />
          </div>
        </div>
      </section>
      <div className="relative w-[1000px] h-[100px]">
        <Image
          src="/assets/89.svg"
          alt="الملحم"
          fill
          className="object-contain absolute  z-20"
        />
      </div>

      {/* 🎯 الأقسام التالية */}
      <GoalsSection />
      <ServicesSection />
      <LastNewsSection />
    </div>
  );
}
