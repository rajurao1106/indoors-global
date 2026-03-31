import React from 'react';

// Image Imports
import bamboo_essentials1 from "@/public/products/Bamboo Essentials/bamboo-essentials1.jpeg"
import bamboo_essentials4 from "@/public/products/Bamboo Essentials/bamboo-essentials4.jpeg"
import bamboo_essentials7 from "@/public/products/Bamboo Essentials/bamboo-essentials7.jpeg"
import cane_baskets2 from "@/public/products/Cane Baskets/cane-baskets2.jpeg"
import cane_baskets5 from "@/public/products/Cane Baskets/cane-baskets5.jpeg"
import rice_husk4 from "@/public/products/Rice Husk/rice-husk4.jpeg"
import rice_husk7 from "@/public/products/Rice Husk/rice-husk7.jpeg"
import rice_husk8 from "@/public/products/Rice Husk/rice-husk8.jpeg"

// CHILDREN KIT products based on word file
const products = [
  {
    id: 1,
    name: 'Bamboo Bottle',
    description: 'Eco-friendly and durable bamboo bottle for kids.',
    image: bamboo_essentials1,
  },
  {
    id: 2,
    name: 'Snacks Plate Big',
    description: 'Safe and sustainable rice husk plate for snacks.',
    image: rice_husk7,
  },
  {
    id: 3,
    name: 'Shop Bowl',
    description: 'Natural rice husk bowl perfect for children.',
    image: rice_husk4,
  },
  {
    id: 4,
    name: 'Chai Cup',
    description: 'Small eco-friendly cup for milk or drinks.',
    image: rice_husk8,
  },
  {
    id: 5,
    name: 'White Jute Bag',
    description: 'Lightweight white jute bag for carrying toys or books.',
    image: cane_baskets2,
  },
  {
    id: 6,
    name: 'Cutlery Kit',
    description: 'Bamboo cutlery set designed for little hands.',
    image: bamboo_essentials7,
  },
  {
    id: 7,
    name: 'Thought brush small',
    description: 'Small bamboo toothbrush for kids oral care.',
    image: bamboo_essentials4,
  },
  {
    id: 8,
    name: 'Fruit Basket',
    description: 'Handcrafted cane basket for fresh fruits.',
    image: cane_baskets5,
  }
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