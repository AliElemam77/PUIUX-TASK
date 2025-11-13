"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ServicesCard from "@/components/common/Cards/ServicesCard/ServicesCard";

export default function ServicesSwyper() {
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
        1024: { slidesPerView: 2 },
      }}
      className="w-full h-[700px] "
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <SwiperSlide key={index} className="">
          <div className="flex justify-center">
            <ServicesCard />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
