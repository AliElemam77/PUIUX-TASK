"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ServicesCard from "@/components/common/Cards/ServicesCard/ServicesCard";
import Image from "next/image";
import { SlCalender } from "react-icons/sl";
import { GoArrowLeft } from "react-icons/go";

export default function LastNewsSwyper() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={2}
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="w-full h-[700px] "
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <SwiperSlide key={index} className="">
          <div className="w-full border-accent border">
            <div className="w-full h-[270px]">
              <Image
                src="/assets/1.png"
                alt="News Image"
                width={500}
                height={300}
                className="w-full h-full object-cover "
              />
            </div>
            <div className="p-7 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <SlCalender className="text-white/40 text-lg " />
                <span dir="ltr" className="text-white/50 text-lg">
                  13 May 2025
                </span>
              </div>
              <p className="text-3xl text-white">
                آل ملحم تدعم تكريم متفوقي أبناء جمعية الرياحين لرعاية الأيتام
                بالأحساء
              </p>
              <div className="flex items-center text-accent/80 gap-3">
                قراءة المزيد
                <span className="bg-accent p-2 text-white rounded-full ">
                  <GoArrowLeft />
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
