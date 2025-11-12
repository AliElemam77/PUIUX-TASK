import ServicesCard from '@/components/common/Cards/ServicesCard/ServicesCard';
import SectionButton from '@/components/common/SectionButton/SectionButton';
import SectionHeader from '@/components/common/SectionHeader/SectionHeader';
import Image from 'next/image';
import React from 'react'

export default function ServicesSection() {
  return (
    <div className="relative  bg-primary py-24">
      <div className="absolute top-0 right-0">
        <Image src="/assets/000.svg" alt="الملحم" width={250} height={250} />
      </div>
      <div className="absolute bottom-0 left-0">
        <Image
          src="/assets/0000.svg"
          alt="الملحم"
          width={250}
          height={250}
          className="object-contain"
        />
      </div>
      <div className="container  mx-auto w-full flex flex-col justify-center items-center gap-20">
        <div className="flex flex-col items-center ">
          <SectionHeader text="احصل على خدمتك" color="text-white" />
          {/* slider */}
          <div className="z-50 grid grid-cols-2 gap-5 items-center justify-center ">
            <ServicesCard />
            <ServicesCard />
          </div>
        </div>
        <SectionButton text="استكشف جميع الخدمات" />
      </div>
    </div>
  );
}
