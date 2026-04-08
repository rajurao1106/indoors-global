import React from 'react';

// --- IMAGE IMPORTS ---
// Purane individual images hata diye gaye hain
// Ab sirf main Kit images use ho rahi hain jo image mein dikh rahi hain
import kits11 from "@/public/Indoor Global Kit/Ricehusk Dinner Set2.jpg"
import kits12 from "@/public/Indoor Global Kit/Ricehusk Dinner Set1.jpg"

// DINNER SET products based on Image Visuals
const products = [
  {
    id: 1,
    name: 'Ricehusk Dinner Set 1',
    description: 'Complete family dining set made from sustainable rice husk. Includes plates, bowls, and mugs in natural earth tones.',
    image: kits12,
  },
  {
    id: 2,
    name: 'Ricehusk Dinner Set 2',
    description: 'Premium pastel-themed dinner set featuring square plates and matching cutlery for a modern eco-friendly table.',
    image: kits11,
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12 max-w-4xl">
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