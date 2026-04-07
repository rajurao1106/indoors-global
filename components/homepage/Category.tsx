"use client"; // Client component is necessary for click events and refs
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Images imports
import toiletry_kit from "@/public/homepage/toiletry-kit1.jpeg";
import childrens_kit from "@/public/homepage/childrens-kit1.jpeg";
import hand_towel_set from "@/public/homepage/hand-towel-set.jpeg";
import ricehusk_dinner_set from "@/public/homepage/ricehusk-dinner-set.jpeg";
import corporate_kit from "@/public/homepage/corporate-kit.jpeg";
import plantable_stationary_kit from "@/public/homepage/plantable-stationary-kit.jpeg";

const categories = [
  { 
    name: "Toiletry kit", 
    slug: "toiletry-kit",
    image: toiletry_kit, 
    description: "Eco-friendly essentials for a sustainable morning routine." 
  },
  { 
    name: "Children's kit", 
    slug: "children-kit",
    image: childrens_kit, 
    description: "Gentle and safe bamboo products for your little ones." 
  },
  { 
    name: "Corporate Kit", 
    slug: "corporate-kit",
    image: corporate_kit, 
    description: "Professional and sustainable gifting solutions." 
  },
   { 
    name: "Ricehusk Dinner Set", 
    slug: "dinner-set",
    image: ricehusk_dinner_set, 
    description: "Elegant, durable, and plastic-free dining experience." 
  },
  { 
    name: "Plantable Stationery kit", 
    slug: "stationery-kit",
    image: plantable_stationary_kit, 
    description: "Eco-friendly stationery that grows into plants after use." 
  },
  
  { 
    name: "Hand Towel Set", 
    slug: "towel-set",
    image: hand_towel_set, 
    description: "Ultra-soft, antibacterial bamboo fiber towels." 
  },
];

const Category = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scrolls by half the container width for a smooth feel
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 font-serif">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl text-gray-800 font-medium max-sm:text-2xl">
          Shop By Category
        </h2>

        <div className="flex gap-3">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll Left"
            className="p-2 rounded-full bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 transition-all shadow-sm active:scale-90"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll Right"
            className="p-2 rounded-full bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 transition-all shadow-sm active:scale-90"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* Main Slider Container */}
      <div className="border border-gray-100 rounded-2xl p-6 md:p-10 bg-white shadow-sm">
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
          style={{ 
            scrollbarWidth: "none", 
            msOverflowStyle: "none",
          }}
        >
          {categories.map((category, index) => (
            <Link 
              href={`/categories/${category.slug}`}
              key={index}
              className="flex-shrink-0 w-[260px] group cursor-pointer snap-start"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-xl bg-gray-50">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  placeholder="blur"
                  sizes="260px"
                  className=" group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Text Content */}
              <h3 className="text-lg text-gray-900 mb-1 font-semibold group-hover:text-green-800 transition-colors">
                {category.name}
              </h3>
              
              <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
                {category.description}
              </p>

              <span className="text-[13px] font-medium text-gray-400 underline underline-offset-4 group-hover:text-black transition-colors">
                View More
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;