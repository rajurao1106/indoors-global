"use client"; // Client component zaroori hai kyunki hum click events use kar rahe hain
import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Images imports
import bamboo_essentials3 from "@/public/products/Bamboo Essentials/bamboo-essentials3.jpeg";
import bamboo_essentials1 from "@/public/products/Bamboo Essentials/bamboo-essentials1.jpeg";
import bamboo_essentials4 from "@/public/products/Bamboo Essentials/bamboo-essentials4.jpeg";
import bamboo_essentials7 from "@/public/products/Bamboo Essentials/bamboo-essentials7.jpeg";
import bamboo_essentials9 from "@/public/products/Bamboo Essentials/bamboo-essentials9.jpeg";

const categories = [
  { 
    name: "Bathroom Kit", 
    image: bamboo_essentials1, 
    description: "Eco-friendly essentials for a sustainable morning routine." 
  },
  { 
    name: "Children Kit", 
    image: bamboo_essentials4, 
    description: "Gentle and safe bamboo products for your little ones." 
  },
  { 
    name: "Towel Kit", 
    image: bamboo_essentials7, 
    description: "Ultra-soft, antibacterial bamboo fiber towels." 
  },
  { 
    name: "Self-Care Kit", 
    image: bamboo_essentials3, 
    description: "Pamper yourself with the goodness of pure nature." 
  },
  { 
    name: "Corporate Kit", 
    image: bamboo_essentials1, 
    description: "Professional and sustainable gifting solutions." 
  },
  { 
    name: "Dinner Set Kit", 
    image: bamboo_essentials4, 
    description: "Elegant, durable, and plastic-free dining experience." 
  },
  { 
    name: "Stationery Kit", 
    image: bamboo_essentials9, 
    description: "Sustainable tools for your creative ideas." 
  },
];

const Category = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

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
        <h2 className="text-3xl text-gray-800 font-medium max-lg:text-xl">
          Shop By Category
        </h2>

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

      <div className="border border-gray-100 rounded-lg p-6 md:p-10 bg-white">
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[260px] group cursor-pointer "
            >
              <div className="relative w-full aspect-square mb-3 overflow-hidden rounded-xl bg-gray-50">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h3 className="text-lg text-gray-800 mb-1 font-semibold">
                {category.name}
              </h3>
              
              {/* Description Section */}
              <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                {category.description}
              </p>

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