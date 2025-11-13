import GoalsSection from "@/components/pageComponents/Home/GoalsSection/GoalsSection";
import ContactSections from "@/components/pageComponents/Home/ContactSections/ContactSection";
import ServicesSection from "@/components/pageComponents/Home/ServicesSection/ServicesSection";
import LastNewsSection from "@/components/pageComponents/Home/LastNewsSection/LastNewsSection";
import PartnerSections from "@/components/pageComponents/Home/PartnersSection/PartnerSections";
import HeroSection from "@/components/pageComponents/Home/HeroSection/HeroSection";
import SliderSection from "@/components/pageComponents/Home/SliderSection/SliderSection";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <HeroSection />
      <GoalsSection />
      <SliderSection />
      <ServicesSection />
      <LastNewsSection />
      <PartnerSections />
      <ContactSections />
    </div>
  );
}
