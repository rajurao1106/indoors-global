import React from 'react';

// --- IMAGE IMPORTS ---
// Existing category imports
import bamboo_essentials9 from "@/public/products/Bamboo Essentials/bamboo-essentials9.jpeg"
import cane_baskets5 from "@/public/products/Cane Baskets/cane-baskets5.jpeg"

// New imports from "Indoor Global Kit" to match the visual image
import kits5 from "@/public/Indoor Global Kit/Hand Towel Set1.jpg"
import kits15 from "@/public/Indoor Global Kit/Hand Towel Set2.jpg"
import kits16 from "@/public/Indoor Global Kit/Hand Towel Set3.jpg"
import kits17 from "@/public/Indoor Global Kit/Hand Towel Set4.jpg"
import kits18 from "@/public/Indoor Global Kit/Hand Towel Set5.jpg"

// TOWEL KIT products based on Visual Data & Imports
const products = [
  {
    id: 1,
    name: 'Hand Towel Set 1',
    description: 'Premium towel set with a decorative star detail in a jute basket.',
    image: kits5,
  },
  {
    id: 2,
    name: 'Hand Towel Set 2',
    description: 'Deep blue ultra-soft absorbent towel for daily use.',
    image: kits15,
  },
  {
    id: 3,
    name: 'Hand Towel Set 3',
    description: 'Bright red soft-touch towel made from organic fibers.',
    image: kits16,
  },
  {
    id: 4,
    name: 'Hand Towel Set 4',
    description: 'Double set of plush red hand towels.',
    image: kits17,
  },
  {
    id: 5,
    name: 'Hand Towel Set 5',
    description: 'Light teal fresh bamboo-blend hand towel.',
    image: kits18,
  },
 
];

export default function Towelkit() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
      {/* Header Section */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Towel Kit</h1>
        <p className="text-gray-500 italic">Organic Comfort - Sustainable Bamboo Linens</p>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            {/* Image Container */}
            <div className="aspect-[4/5] overflow-hidden rounded-lg bg-gray-100 mb-4 border border-gray-100">
              <img
                src={product.image.src}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            {/* Text Content */}
            <h3 className="text-lg font-bold text-gray-900 leading-tight">
              {product.name}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {product.description}
            </p>
            <button className="text-xs font-semibold text-gray-400 mt-2 uppercase tracking-wider group-hover:text-black transition-colors">
              View details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}