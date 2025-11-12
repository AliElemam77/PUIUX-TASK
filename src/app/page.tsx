
import SectionButton from "@/components/common/SectionButton/SectionButton";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import GoalsSection from "@/components/pageComponents/Home/GoalsSection/GoalsSection";
import ServicesSection from "@/components/pageComponents/Home/ServicesSection/ServicesSection";
import LastNewsSection from "@/components/sections/LastNewsSection/LastNewsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-full  ">
      {/* Hero section */}

      <div className="w-full h-screen text-black bg-amber-400">sda</div>
      {/* goals  */}
      <GoalsSection />
      {/* services */}
      <ServicesSection />

     
      {/* Last news section */}
      <LastNewsSection />
      <div className="">dsads</div>
    </div>
  );
}
