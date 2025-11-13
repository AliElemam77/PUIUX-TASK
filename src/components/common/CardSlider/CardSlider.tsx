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
        <div className="relative w-screen h-screen flex items-center justify-center bg-gray-100 mt-4 mx-auto ">
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
              {Array.from({ length: 10 }).map((_, index) => (
                    <div
                        key={index}
                        className="min-w-[300px] min-h-[200px] bg-accent rounded-lg  snap-center flex items-center justify-center text-white text-2xl font-bold"
                    >
                        Card {index + 1}
                    </div>
                ))}
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
