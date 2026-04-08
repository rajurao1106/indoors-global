import React from 'react';

// --- IMAGE IMPORTS ---
// Individual items for Corporate Kit

// Visual Kit import from "Indoor Global Kit" list
import kits7 from "@/public/Indoor Global Kit/Corporate kit1.jpg"

// CORPORATE KIT products based on visuals and word file
const products = [
  {
    id: 1,
    name: 'Corporate kit 1',
    description: 'Complete premium gifting hamper including a notebook, rice husk mug, and sustainable accessories.',
    image: kits7,
  },
];

export default function Corporatekit() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
      {/* Header Section */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Corporate Kit</h1>
        <p className="text-gray-500 italic">Eco-friendly Gifting & Office Essentials - Sustainable & Organic</p>
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
            <button className="text-xs font-semibold text-[#a3a393] mt-2 uppercase tracking-wider group-hover:text-black transition-colors">
              View details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}