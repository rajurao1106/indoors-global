import React from 'react';

const decorProducts = [
  {
    id: 1,
    name: 'Artistic Wall Decor',
    description: 'Paintings, metal wall art, and decorative mirrors.',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Designer Lighting & Lamps',
    description: 'Table lamps, lanterns, and ambient fairy lights.',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Tabletop Accents',
    description: 'Handcrafted vases, figurines, and candle holders.',
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Luxury Home Textiles',
    description: 'Embroidered cushions, rugs, and premium curtains.',
    image: 'https://images.unsplash.com/photo-1583847268500-264663a8a972?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Indoor Greenery & Pots',
    description: 'Ceramic planters and artificial succulents.',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Premium Timepieces',
    description: 'Modern and vintage style wall clocks.',
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?q=80&w=800&auto=format&fit=crop',
  },
];

export default function HomeDecorCategory() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 bg-[#fafafa]">
      {/* Category Header */}
      <div className="mb-16 border-l-4 border-black pl-6">
        <h1 className="text-4xl font-serif font-medium text-gray-900">Rice Husk</h1>
        <p className="text-gray-500 mt-2 text-lg tracking-wide uppercase">Sajawat ka Saaman</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
        {decorProducts.map((item) => (
          <div key={item.id} className="group flex flex-col items-start">
            {/* Image Container with smooth rounded corners */}
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg bg-gray-200 shadow-sm transition-all duration-500 group-hover:shadow-xl">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Optional: Overlay gradient for a premium feel */}
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            
            {/* Product Info */}
            <div className="mt-6 w-full">
              <h3 className="text-xl font-bold text-gray-850 tracking-tight group-hover:text-amber-900 transition-colors">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 mt-2 font-light leading-relaxed">
                {item.description}
              </p>
              <button className="text-xs font-semibold text-gray-400 mt-2 uppercase tracking-wider group-hover:text-black transition-colors">
              View details
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}