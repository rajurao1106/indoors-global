import React from 'react';

// Image Imports (Previous setup ke hisaab se)
import kits1 from "@/public/Indoor Global Kit/Toiletry kit1.jpg"
import kits2 from "@/public/Indoor Global Kit/Toiletry kit3.jpg"
import kits3 from "@/public/Indoor Global Kit/Toiletry kit4.jpg"
import kits4 from "@/public/Indoor Global Kit/Toiletry kit2.jpg"

// Filtered TOILETRY KIT products only
const toiletryProducts = [
  {
    id: 1,
    name: 'Toiletry kit1',
    description: 'Complete eco-friendly toiletry set with jute pouch.',
    image: kits1,
  },
  {
    id: 2,
    name: 'Toiletry kit3',
    description: 'Essential bamboo grooming items in a travel-friendly kit.',
    image: kits2,
  },
  {
    id: 3,
    name: 'Toiletry kit4',
    description: 'Premium bathroom essentials kit with organic loofah.',
    image: kits3,
  },
  {
    id: 4,
    name: 'Toiletry kit2',
    description: 'Handcrafted storage basket with personal care bamboo products.',
    image: kits4,
  }
];

export default function ToiletryKit() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
      {/* Header Section */}
      <header className="mb-12 border-b border-gray-100 pb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Toiletry Kits</h1>
        <p className="text-gray-500 italic">Curated Personal Care - Sustainable & Organic</p>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {toiletryProducts.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            {/* Image Container */}
            <div className="aspect-[4/5] overflow-hidden rounded-lg bg-gray-50 mb-4 border border-gray-100">
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
            <button className="text-xs font-semibold text-[#a3a393] mt-3 uppercase tracking-wider group-hover:text-black transition-colors">
              View details
            </button>
          </div>
        ))}
      </div>
      
      {/* Footer Note */}
      <div className="mt-16 p-6 bg-gray-50 rounded-lg text-center">
        <p className="text-gray-500 text-sm">
          Looking for custom corporate gifting kits? <span className="text-black font-medium cursor-pointer underline">Contact us</span>
        </p>
      </div>
    </div>
  );
}