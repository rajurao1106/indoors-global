"use client"; // Client component is necessary for click events and refs
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
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
    slug: "bathroom-kit",
    image: bamboo_essentials1, 
    description: "Eco-friendly essentials for a sustainable morning routine." 
  },
  { 
    name: "Children Kit", 
    slug: "children-kit",
    image: bamboo_essentials4, 
    description: "Gentle and safe bamboo products for your little ones." 
  },
  { 
    name: "Towel Kit", 
    slug: "towel-kit",
    image: bamboo_essentials7, 
    description: "Ultra-soft, antibacterial bamboo fiber towels." 
  },
  { 
    name: "Self-Care Kit", 
    slug: "self-care-kit",
    image: bamboo_essentials3, 
    description: "Pamper yourself with the goodness of pure nature." 
  },
  { 
    name: "Corporate Kit", 
    slug: "corporate-kit",
    image: bamboo_essentials1, 
    description: "Professional and sustainable gifting solutions." 
  },
  { 
    name: "Dinner Set Kit", 
    slug: "dinner-set-kit",
    image: bamboo_essentials4, 
    description: "Elegant, durable, and plastic-free dining experience." 
  },
  { 
    name: "Stationery Kit", 
    slug: "stationery-kit",
    image: bamboo_essentials9, 
    description: "Sustainable tools for your creative ideas." 
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
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
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