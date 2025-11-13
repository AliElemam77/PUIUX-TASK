import SectionButton from "@/components/common/SectionButton/SectionButton";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import ContactSections from "@/components/pageComponents/Home/ContactSections/ContactSection";
import GoalsSection from "@/components/pageComponents/Home/GoalsSection/GoalsSection";
import PartnerSections from "@/components/pageComponents/Home/PartnersSection/PartnerSections";
import LastNewsSection from "@/components/sections/LastNewsSection/LastNewsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-full items-center justify-center ">
      {/* Hero section */}

      <div className="w-full h-screen text-black bg-amber-400">sda</div>
      {/* goals  */}
      <GoalsSection />
      <div className="relative bg-primary w-full flex flex-col justify-center items-center py-24">
        <SectionHeader text="احصل على خدمتك" color="text-white" />
        <div className="absolute top-0 right-0">
          <Image
            src="/assets/000.svg"
            alt="الملحم"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
        <SectionButton text="استكشف جميع الخدمات" />
      </div>
      {/* Last news section */}
      <LastNewsSection />

      <PartnerSections />
    <ContactSections />
    </div>
  );
}
