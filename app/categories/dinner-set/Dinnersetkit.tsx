import React from 'react';

// Image Imports
import bamboo_essentials7 from "@/public/products/Bamboo Essentials/bamboo-essentials7.jpeg"
import bamboo_essentials8 from "@/public/products/Bamboo Essentials/bamboo-essentials8.jpeg"
import rice_husk4 from "@/public/products/Rice Husk/rice-husk4.jpeg"
import rice_husk7 from "@/public/products/Rice Husk/rice-husk7.jpeg"
import rice_husk9 from "@/public/products/Rice Husk/rice-husk9.jpeg"

// DINNER SET KIT products based on word file
const products = [
  {
    id: 1,
    name: 'Dinner Plate - 6',
    description: 'Set of 6 premium sustainable dinner plates made from rice husk.',
    image: rice_husk9,
  },
  {
    id: 2,
    name: 'Snack Plate Big - 6',
    description: 'Set of 6 large eco-friendly plates for snacks and starters.',
    image: rice_husk7,
  },
  {
    id: 3,
    name: 'Curry Bowl - 6',
    description: 'Set of 6 durable rice husk bowls for serving curries and soups.',
    image: rice_husk4,
  },
  {
    id: 4,
    name: 'Ricehusk Spoon - 6',
    description: 'Set of 6 eco-conscious spoons made from natural fibers.',
    image: bamboo_essentials7,
  },
  {
    id: 5,
    name: 'Ricehusk Glass – 6',
    description: 'Set of 6 stylish and sustainable glasses for your dining table.',
    image: bamboo_essentials8,
  }
];

export default function Dinnersetkit() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
      {/* Header Section */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dinner Set Kit</h1>
        <p className="text-gray-500 italic">Elegant & Sustainable Dining - 100% Organic Rice Husk</p>
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