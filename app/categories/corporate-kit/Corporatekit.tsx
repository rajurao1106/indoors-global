import React from 'react';

// Image Imports
import bamboo_essentials4 from "@/public/products/Bamboo Essentials/bamboo-essentials4.jpeg"
import bamboo_essentials9 from "@/public/products/Bamboo Essentials/bamboo-essentials9.jpeg"
import bamboo_essentials7 from "@/public/products/Bamboo Essentials/bamboo-essentials7.jpeg"
import rice_husk3 from "@/public/products/Rice Husk/rice-husk3.jpeg"
import rice_husk7 from "@/public/products/Rice Husk/rice-husk7.jpeg"
import rice_husk8 from "@/public/products/Rice Husk/rice-husk8.jpeg"
import rice_husk10 from "@/public/products/Rice Husk/rice-husk10.jpeg"
import rice_husk12 from "@/public/products/Rice Husk/rice-husk12.jpeg"

// CORPORATE KIT products based on word file
const products = [
  {
    id: 1,
    name: 'Retro Cup',
    description: 'Classic rice husk retro cup for a sustainable office desk.',
    image: rice_husk12,
  },
  {
    id: 2,
    name: 'Face Towel / Bamboo Hand Towel',
    description: 'Soft and eco-friendly bamboo fiber towel.',
    image: bamboo_essentials9,
  },
  {
    id: 3,
    name: 'Seed Diary',
    description: 'Eco-conscious diary with plantable seed paper.',
    image: rice_husk3, // Based on stationary/canister placeholder
  },
  {
    id: 4,
    name: 'Seed Pen & Pencil Set',
    description: 'Sustainable writing tools that can be planted after use.',
    image: bamboo_essentials4,
  },
  {
    id: 5,
    name: 'Big Box / Hamper Box',
    description: 'Sustainable storage box for corporate gifting.',
    image: rice_husk10,
  },
  {
    id: 6,
    name: 'Chai Cup Set',
    description: 'Pair of elegant rice husk cups for tea/coffee.',
    image: rice_husk8,
  },
  {
    id: 7,
    name: 'Coaster Set',
    description: 'Eco-friendly rice husk coasters for office tables.',
    image: rice_husk7, // Based on snack plate/coaster placeholder
  },
  {
    id: 8,
    name: 'Snack Plate',
    description: 'Durable and organic rice husk plate for office snacks.',
    image: rice_husk7,
  },
  {
    id: 9,
    name: 'Ricehusk Spoon',
    description: 'Eco-friendly spoon made from natural rice husk.',
    image: bamboo_essentials7,
  }
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