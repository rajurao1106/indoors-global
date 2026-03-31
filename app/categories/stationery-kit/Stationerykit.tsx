import React from 'react';

// Image Imports
import bamboo_essentials4 from "@/public/products/Bamboo Essentials/bamboo-essentials4.jpeg"
import rice_husk3 from "@/public/products/Rice Husk/rice-husk3.jpeg"

// STATIONERY KIT products based on word file
const products = [
  {
    id: 1,
    name: 'Seed Diary',
    description: 'Eco-friendly diary with plantable seed paper cover.',
    image: rice_husk3,
  },
  {
    id: 2,
    name: 'Seed Pen',
    description: 'Sustainable writing pen containing seeds to plant after use.',
    image: bamboo_essentials4,
  },
  {
    id: 3,
    name: 'Seed Pencil',
    description: 'Biodegradable pencil that grows into a plant.',
    image: bamboo_essentials4,
  }
];

export default function Stationerykit() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
      {/* Header Section */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Stationery Kit</h1>
        <p className="text-gray-500 italic">Sustainable Writing Essentials - Grow Your Ideas</p>
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