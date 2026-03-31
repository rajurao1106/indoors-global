import React from 'react';

// Image Imports
import bamboo_essentials1 from "@/public/products/Bamboo Essentials/bamboo-essentials1.jpeg"
import bamboo_essentials7 from "@/public/products/Bamboo Essentials/bamboo-essentials7.jpeg"
import cane_baskets1 from "@/public/products/Cane Baskets/cane-baskets1.jpeg"
import rice_husk5 from "@/public/products/Rice Husk/rice-husk5.jpeg"
import rice_husk7 from "@/public/products/Rice Husk/rice-husk7.jpeg"
import rice_husk9 from "@/public/products/Rice Husk/rice-husk9.jpeg"

// SELF - CARE KIT products based on word file [cite: 1]
const products = [
  {
    id: 1,
    name: 'Bamboo Bottle', // [cite: 2]
    description: 'Eco-friendly and reusable bamboo water bottle.',
    image: bamboo_essentials1,
  },
  {
    id: 2,
    name: 'Dinner Plate', // [cite: 3]
    description: 'Durable and sustainable rice husk dinner plate.',
    image: rice_husk9,
  },
  {
    id: 3,
    name: 'Ricehusk Spoon', // [cite: 4]
    description: 'Natural rice husk spoon, a great alternative to plastic.',
    image: bamboo_essentials7,
  },
  {
    id: 4,
    name: 'Ricehusk Coaster', // [cite: 5]
    description: 'Protective and eco-friendly coasters for your drinks.',
    image: rice_husk7,
  },
  {
    id: 5,
    name: 'Comfy cup', // [cite: 6]
    description: 'Sustainable and comfortable cup for daily beverages.',
    image: rice_husk5,
  },
  {
    id: 6,
    name: 'Jute Bag', // [cite: 7]
    description: 'Biodegradable jute bag for eco-conscious shopping.',
    image: cane_baskets1,
  }
];

export default function Selfcarekit() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
      {/* Header Section */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Self-Care Kit</h1>
        <p className="text-gray-500 italic">Sustainable Essentials for Your Personal Wellness</p>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            {/* Image Container */}
            <div className="aspect-[4/5] overflow-hidden rounded-lg bg-gray-100 mb-4">
              <img
                src={product.image.src }
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