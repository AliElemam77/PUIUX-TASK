import Image from "next/image";
import React from "react";

export default function GoalsSection() {
  return (
    <div className="container mx-auto flex items-end justify-center gap-[50px] pb-24">
      <div className="relative h-[598px] w-[551px]">
        <Image
          src="/assets/5.png"
          alt="الملحم"
          fill
          sizes="551px"
          className="absolute object-contain"
        />
      </div>

      <div className="content w-1/2 flex flex-col gap-9">
        <h1 className="text-[62px] text-primary">
          التاريخ حاضر
          <br /> لنشكل المستقبل
        </h1>

        <p className="text-xl text-[#737D7C]" style={{ wordSpacing: "5px" }}>
          تنتمي أسرة آل ملحم في الأحساء إلى قبيلة مطير نسبا وتحديدا من "العقفان"
          ويسمون (القنازعة) من الجغاوين وهو فرع من العبيات المشهور والمنتمي إلى
          واصل من بريه أحد الأقسام الرئيسية الثلاثة لقبيلة مطير.
        </p>

        <div className="flex flex-col items-start gap-9">
          <div className="goals flex gap-9 ">
            <div className="flex gap-2 items-start flex-1">
              <div className="p-3 rounded-full bg-secondary">
                <Image
                  src="/assets/goal.svg"
                  alt="الملحم"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <div className="text-[#737D7C] text-[16px] ">
                <p className="text-primary font-medium text-[28px]">رؤيتنا</p>
                أن نكون كياناً اقتصادياً وتنموياً مستداماً يساهم في تحقيق
                التنمية الشاملة والمستدامة في المملكة العربية السعودية.
              </div>
            </div>
            <div className="flex gap-2 items-start flex-1 ">
              <div className="p-3 rounded-full bg-secondary">
                <Image
                  src="/assets/message.svg"
                  alt="الملحم"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <div className="text-[#737D7C] text-[16px] ">
                <p className="text-primary font-medium text-[28px]">رسالتنا</p>
                إدارة شؤون مجلس الأسرة العامة والاجتماعية لتوثيق روابط التواصل
                والمحبة بين أفرادها .
              </div>
            </div>
          </div>

          <div className="text-[18px] p-3 border-2 w-40 text-center text-accent">
            المزيد
          </div>
        </div>
      </div>
    </div>
  );
}
