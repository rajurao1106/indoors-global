import React from 'react';

const products = [
  {
    id: 1,
    name: 'Bamboo Furniture Set',
    description: 'Chairs, stools, and coffee tables.',
    image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Eco-Kitchenware',
    description: 'Bamboo cutlery, boards, and bowls.',
    image: 'https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Storage & Baskets',
    description: 'Woven tokri and laundry bins.',
    image: 'https://images.unsplash.com/photo-1591084728795-1149f32d9866?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Personal Care Essentials',
    description: 'Bamboo toothbrushes and combs.',
    image: 'https://images.unsplash.com/photo-1606103920295-9a091573f160?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Construction & Fencing',
    description: 'Bamboo ladders and plant poles.',
    image: 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Designer Bamboo Lamps',
    description: 'Handcrafted hanging lanterns.',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Bambooitems() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
      {/* Header Section */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Bamboo Essentials</h1>
        <p className="text-gray-500 italic">Baans ke Utpaad - Sustainable & Organic</p>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            {/* Image Container */}
            <div className="aspect-[4/5] overflow-hidden rounded-lg bg-gray-100 mb-4">
              <img
                src={product.image}
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