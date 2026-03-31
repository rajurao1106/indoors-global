import React from 'react';

// Image Imports
import bamboo_essentials3 from "@/public/products/Bamboo Essentials/bamboo-essentials3.jpeg"
import bamboo_essentials4 from "@/public/products/Bamboo Essentials/bamboo-essentials4.jpeg"
import bamboo_essentials5 from "@/public/products/Bamboo Essentials/bamboo-essentials5.jpeg"
import cane_baskets6 from "@/public/products/Cane Baskets/cane-baskets6.jpeg"
import cane_baskets9 from "@/public/products/Cane Baskets/cane-baskets9.jpeg"
import rice_husk1 from "@/public/products/Rice Husk/rice-husk1.jpeg"
import rice_husk2 from "@/public/products/Rice Husk/rice-husk2.jpeg"
import rice_husk3 from "@/public/products/Rice Husk/rice-husk3.jpeg"

// BATHROOM KIT products from word file [cite: 8, 14]
const products = [
  {
    id: 1,
    name: 'Bamboo Razor', // [cite: 9]
    description: 'Eco-friendly bamboo handle razor for a sustainable shave.',
    image: bamboo_essentials5,
  },
  {
    id: 2,
    name: 'Bamboo Tongue cleaner', // [cite: 10]
    description: 'Natural bamboo tongue cleaner for oral hygiene.',
    image: bamboo_essentials4,
  },
  {
    id: 3,
    name: 'Bamboo Toothbrush Big', // [cite: 11]
    description: 'Biodegradable soft bristle toothbrush.',
    image: bamboo_essentials4,
  },
  {
    id: 4,
    name: 'Bamboo Beard comb', // [cite: 12]
    description: 'Handcrafted grooming comb made from sustainable bamboo.',
    image: bamboo_essentials3,
  },
  {
    id: 5,
    name: 'White Jute Potli', // [cite: 13]
    description: 'Elegant white jute storage potli.',
    image: cane_baskets6,
  },
  {
    id: 6,
    name: 'Shampoo NW', // [cite: 18]
    description: 'Eco-conscious shampoo for your personal care.',
    image: rice_husk3,
  },
  {
    id: 7,
    name: 'Loofah', // [cite: 19]
    description: 'Natural ridge guard loofah for gentle exfoliation.',
    image: rice_husk1,
  },
  {
    id: 8,
    name: 'Bamboo cotton Earbuds', // [cite: 20]
    description: 'Biodegradable cotton swabs with bamboo sticks.',
    image: rice_husk2,
  },
  {
    id: 9,
    name: 'Lid Box small', // [cite: 21]
    description: 'Compact storage lid box for bathroom essentials.',
    image: cane_baskets9,
  }
];

export default function Bathroomkit() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
      {/* Header Section */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Bathroom Kit</h1>
        <p className="text-gray-500 italic">Eco-friendly Bathroom Essentials - Sustainable & Organic</p>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            {/* Image Container */}
            <div className="aspect-[4/5] overflow-hidden rounded-lg bg-gray-100 mb-4">
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