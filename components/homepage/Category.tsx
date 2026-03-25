"use client"; // Client component zaroori hai kyunki hum click events use kar rahe hain
import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/public/homepage/hero1.png"

const categories = [
  { name: "Home Decor", image: hero1 },
  { name: "Mirror Art", image: hero1 },
  { name: "Decorative Mirrors", image: hero1 },
  { name: "Decorative Items", image: hero1 },
  { name: "Vase Collection", image: hero1 },
  { name: "Ekaani", image: hero1 },
  { name: "Decorative Trays", image: hero1 },
  { name: "Torans", image: hero1 },

];

const Category = () => {
  // 1. Ref create karein scroll container ke liye
  const scrollRef = useRef<HTMLDivElement>(null);

  // 2. Scroll function likhein
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-8 py-16 font-serif">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl text-gray-800 font-medium max-lg:text-xl">Shop By Category</h2>

        {/* 3. Buttons mein onClick add karein */}
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-white border border-gray-200 text-gray-400 hover:bg-gray-100 transition-colors shadow-sm active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-white border border-gray-200 text-gray-400 hover:bg-gray-100 transition-colors shadow-sm active:scale-95"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* 4. Ref ko yahan attach karein aur overflow-x-auto use karein */}
      <div className="border border-gray-100 rounded-lg p-6 md:p-10 bg-white">
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[240px] flex flex-col items-center group cursor-pointer snap-start"
            >
              <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-xl bg-gray-50">
                {/* Image placeholder agar real image nahi hai toh */}
                <div className="absolute inset-0 bg-gray-200 animate-pulse group-hover:hidden" />
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h3 className="text-lg text-gray-800 mb-1 font-semibold text-center">
                {category.name}
              </h3>
              <button className="text-[13px] text-gray-400 underline underline-offset-4 hover:text-black transition-colors">
                View More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
