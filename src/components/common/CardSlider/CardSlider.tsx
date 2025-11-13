"use client";
import { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function CardSlider() {
    const scrollRef = useRef<HTMLInputElement>(null);
    const [isAtStart, setIsAtStart] = useState(false);
    const [isAtEnd, setIsAtEnd] = useState(true);
    const scroll = (direction: string) => {
        if (!scrollRef.current) return;
        const { scrollLeft, clientWidth } = scrollRef.current;

        const scrollAmount = clientWidth * 0.9;
        scrollRef.current.scrollTo({
            left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
            behavior: "smooth",
        });
        setIsAtStart(scrollRef.current.scrollLeft === 0);
        setIsAtEnd(
            scrollRef.current.scrollWidth - scrollRef.current.clientWidth ===
            scrollRef.current.scrollLeft
        );
    };

    return (
        <div className="relative w-screen h-screen flex items-center justify-center bg-gray-100 mt-4 mx-auto max-w-2xl">
            <button
                disabled={isAtStart}
                onClick={() => scroll("left")}
                className="absolute right-full z-10 p-2 text-base bg-black/60 text-white hover:bg-black"
            >
                <FaArrowLeft />
            </button>

            <div
                ref={scrollRef}
                className="overflow-x-auto [&::-webkit-scrollbar]:h-1
            [&::-webkit-scrollbar]:w-5
  [&::-webkit-scrollbar-thumb]:bg-secondary
  [&::-webkit-scrollbar-track]:bg-accent/10 bg-primary  w-screen  snap-x snap-mandatory flex gap-10 py-10">
                <section className="h-screen w-[400px] snap-center bg-blue-200 shrink-0 grow flex items-center justify-center text-3xl">
                    Section 1
                </section>
                <section className="h-screen w-[400px] snap-center bg-green-200 shrink-0 grow flex items-center justify-center text-3xl">
                    Section 2
                </section>
                <section className="h-screen w-[400px] snap-center shrink-0 grow bg-red-200 flex items-center justify-center text-3xl">
                    Section 3
                </section>
            </div>

            <button
                onClick={() => scroll("right")}
                disabled={isAtEnd}
                className="absolute left-full text-base z-10 p-2 bg-black/60 text-white  hover:bg-black"
            >
                <FaArrowRight />
            </button>
        </div>
    );
}
