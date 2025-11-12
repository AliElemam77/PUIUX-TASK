import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-full items-center justify-center ">
      {/* Hero section */}
      <div className="w-full h-screen text-black bg-amber-400">sda</div>
      {/* تاريخنا  */}
      <div className="container mx-auto flex items-center justify-center gap-[50px] ">
        <div className="relative h-[551px] w-[551px]">
          <Image
            src="/assets/5.png"
            alt="الملحم"
            fill
            sizes="551px"
            className="absolute object-contain"
          />
        </div>
        <div className="content w-1/2 flex flex-col gap-9">
          <h1 className="text-[72px] text-primary ">
            التاريخ حاضر
            <br /> لنشكل المستقبل
          </h1>
          <p
            className="text-xl text-[#737D7C] "
            style={{
              wordSpacing: "5px",
            }}
          >
            تنتمي أسرة آل ملحم في الأحساء إلى قبيلة مطير نسبا وتحديدا من
            "العقفان" ويسمون (القنازعة) من الجغاوين وهو فرع من العبيات المشهور
            والمنتمي إلى واصل من بريه أحد الأقسام الرئيسية الثلاثة لقبيلة مطير.
          </p>
          <div className="goals flex gap-9">
            <div className="flex flex-col ">
              <div className=" flex gap-2 items-center">
                <div className="p-3 rounded-full bg-secondary">
                  <Image
                    src="/assets/goal.svg"
                    alt="الملحم"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>
                <span className="text-primary font-medium text-[28px]">
                  رؤيتنا
                </span>
              </div>
              <p className="text-[#737D7C] text-[18px]">
                أن نكون كياناً اقتصادياً وتنموياً مستداماً يساهم في تحقيق
                التنمية الشاملة والمستدامة في المملكة العربية السعودية.
              </p>
            </div>
            <div className="flex flex-col ">
              <div className=" flex gap-2 items-center">
                <div className="p-3 rounded-full bg-secondary">
                  <Image
                    src="/assets/message.svg"
                    alt="الملحم"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>
                <span className="text-primary font-medium text-[28px]">
                  رسالتنا
                </span>
              </div>
              <p className="text-[#737D7C] text-[18px]">
                أن نكون كياناً اقتصادياً وتنموياً مستداماً يساهم في تحقيق
                التنمية الشاملة والمستدامة في المملكة العربية السعودية.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="">dsads</div>
    </div>
  );
}
