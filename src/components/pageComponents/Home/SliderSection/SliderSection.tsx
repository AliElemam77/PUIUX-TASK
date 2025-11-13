import SectionHeader from '@/components/common/SectionHeader/SectionHeader'
import Image from 'next/image'
import React from 'react'
import { FaAngleLeft } from 'react-icons/fa';
const data = [
  "احصل على خدمتك",
  "احصل على خدمتك",
  "احصل على خدمتك",
  "احصل على خدمتك",
  "احصل على خدمتك",
  "احصل على خدمتك",
  "احصل على خدمتك",
  "احصل على خدمتك",
  "احصل على خدمتك",
];
export default function SliderSection() {
  return (
     <div className="py-24 flex flex-col items-center justify-center gap-7">
        <SectionHeader text="احصل على خدمتك" color="text-primary" />

        <div className="container bg-accent/15 mx-auto grid grid-cols-5 items-center justify-center p-20">


          <div className="slider flex flex-col gap-5 items-center justify-center  overflow-y-auto col-span-3  ">
            {data.map((item, index) => (
              <div key={index} className="slider-item text-accent flex items-center gap-3">
               <p className=" text-4xl">{index + 1}</p> - <p className="text-primary text-3xl font-medium">{item}</p>
              </div>
            ))}
          </div>
          
          <div className="content flex flex-col items-center justify-center col-span-2">
            <Image
              src="/assets/tat.svg"
              alt="divider"
              width={100}
              height={100}
              className="mb-4 object-contain"
            />
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-xl text-center w-1/2 text-gray-400 ">
                برنامج التطوع في صندوق صلة ورحم - أسرة آل ملحم يهدف إلى تفعيل
                دور أفراد الأسرة من فئة الشباب او المختصين في العمل التطوعي من
                خلال المشاركة الفعالة في البرامج والفعاليات والأنشطة والمناسبات
                المختلفة.وتتنوع أعمال التطوع في هذه البرامج .
              </p>
              <button className="text-accent  py-4 px-9  flex items-center gap-1">
                قراءة المزيد
                <span className="p-2 text-white rounded-full bg-accent">
                  <FaAngleLeft />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}
