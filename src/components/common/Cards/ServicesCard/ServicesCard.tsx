import Image from "next/image";
import React from "react";

export default function ServicesCard() {
  return (
    <div className="w-[555px] border border-accent h-fit bg-primary">
      <div className="relative h-[393px] w-full ">
        <Image
          src="/assets/3.png"
          alt="service"
          fill
          sizes="555px"
          className="absolute object-cover"
        />
      </div>
      <div className="flex flex-col gap-7 p-7">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl text-[#D4EBE8]">يكتب هنا اسم الخدمة </h1>
          <p className="text-[#D4EBE8] text-2xl flex items-center gap-1">
            65000
            <Image
              src={"/assets/logo/currancy.svg"}
              alt="currency"
              width={20}
              height={20}
              className="inline-block mr-1"
            />
          </p>
        </div>
        <p className="text-[#B8C9C7] text-sm " style={{ wordSpacing: "3px" }}>
          الارتقاء بمكانة الأسرة إلى مستوى رفيع يُشار إليه بالبنان في كل محفل
          ومكان.
        </p>
        <button className="text-white bg-accent text-xs p-4">
          اطلب الخدمة الان
        </button>
      </div>
    </div>
  );
}
