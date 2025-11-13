import SectionButton from '@/components/common/SectionButton/SectionButton'
import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
        <section className="relative w-full h-screen flex text-white overflow-x-hidden-hidden">
        <Image
          src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSykbQdDXlL3eAivdfjIBox6GxBbCs51zHqJKVTpDKI7pUEcLjatT5QRdHbluZpnN2YNCCf5jE5Y0sQeFUgddvTBRc2x3JfiIe73M4SppUkNVpDtMMlit1OFtq5kdXbEeTxlztTahA=s1360-w1360-h1020-rw"
          alt="Hero Image"
          fill
          priority
          className="object-cover object-center z-0"
        />

        <div className="absolute inset-0 bg-black/60  z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-primary to-primary opacity-30 z-10" />

        <div className="flex gap-4 items-start flex-col z-50 absolute top-1/3 right-17 mx-auto container">
          <h1 className="text-7xl">أسرة ال ملحم</h1>
          <p className="w-1/2 text-2xl text-[#B8C9C7]">
            تنتمي أسرة آل ملحم في الأحساء إلى قبيلة مطير نسبا وتحديدا من
            &quot;العقفان&quot; ويسمون (القنازعة) من الجغاوين وهو فرع من العبيات
            المشهور والمنتمي إلى واصل من بريه أحد الأقسام الرئيسية الثلاثة
            لقبيلة مطير.
          </p>
          <div className="flex items-center gap-5">
            <button className="text-white border py-4 px-9  bg-accent transition duration-75">
              تطوع معنا
            </button>
            <SectionButton text="اطلب خدمتك" />
          </div>
        </div>
        <Image
          src="/assets/gggg.svg"
          alt="Hero Image"
          width={800}
          height={400}
          className="object-cover absolute  -bottom-27 -left-90 z-20"
        />
        <Image
          src="/assets/89.svg"
          alt="Hero Image"
          width={1526}
          height={200}
          className="object-cover absolute -bottom-50 right-0 z-20"
        />
      </section>
  )
}
