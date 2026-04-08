import React from 'react';

// --- IMAGE IMPORTS ---
// Individual items for Children Kit

// Visual Kit imports from "Indoor Global Kit" list
import kits10 from "@/public/Indoor Global Kit/Children's kit1.jpg"
import kits13 from "@/public/Indoor Global Kit/Children's kit3.jpg"
import kits14 from "@/public/Indoor Global Kit/Children's kit2.jpg"

// CHILDREN KIT products based on visuals and word file
const products = [
  {
    id: 1,
    name: "Children's kit 1",
    description: 'Eco-friendly mealtime set with a bamboo cup and handcrafted cane basket.',
    image: kits10,
  },
  {
    id: 2,
    name: "Children's kit 2",
    description: 'Sustainable dining kit with a pastel bowl, spoon, and bamboo bottle in a jute bag.',
    image: kits14,
  },
  {
    id: 3,
    name: "Children's kit 3",
    description: 'Premium kids adventure kit featuring a durable plate, bottle, and carrying bag.',
    image: kits13,
  },
];

export default function Childrenkit() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
      {/* Header Section */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Children Kit</h1>
        <p className="text-gray-500 italic">Sustainable & Safe Products for Kids</p>
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