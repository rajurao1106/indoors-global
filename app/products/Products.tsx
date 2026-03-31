"use client";

import { useState } from 'react';
import Image from 'next/image';
import { LayoutGrid, List } from 'lucide-react';
import Link from 'next/link';

// Imports (Inhe waise hi rehne diya hai jaisa aapne setup kiya tha)
import bamboo_essentials1 from "@/public/products/Bamboo Essentials/bamboo-essentials1.jpeg"
import bamboo_essentials2 from "@/public/products/Bamboo Essentials/bamboo-essentials2.jpeg"
import bamboo_essentials3 from "@/public/products/Bamboo Essentials/bamboo-essentials3.jpeg"
import bamboo_essentials4 from "@/public/products/Bamboo Essentials/bamboo-essentials4.jpeg"
import bamboo_essentials5 from "@/public/products/Bamboo Essentials/bamboo-essentials5.jpeg"
import bamboo_essentials6 from "@/public/products/Bamboo Essentials/bamboo-essentials6.jpeg"
import bamboo_essentials7 from "@/public/products/Bamboo Essentials/bamboo-essentials7.jpeg"
import bamboo_essentials8 from "@/public/products/Bamboo Essentials/bamboo-essentials8.jpeg"
import bamboo_essentials9 from "@/public/products/Bamboo Essentials/bamboo-essentials9.jpeg"

import cane_baskets1 from "@/public/products/Cane Baskets/cane-baskets1.jpeg"
import cane_baskets2 from "@/public/products/Cane Baskets/cane-baskets2.jpeg"
import cane_baskets3 from "@/public/products/Cane Baskets/cane-baskets3.jpeg"
import cane_baskets4 from "@/public/products/Cane Baskets/cane-baskets4.jpeg"
import cane_baskets5 from "@/public/products/Cane Baskets/cane-baskets5.jpeg"
import cane_baskets6 from "@/public/products/Cane Baskets/cane-baskets6.jpeg"
import cane_baskets7 from "@/public/products/Cane Baskets/cane-baskets7.jpeg"
import cane_baskets8 from "@/public/products/Cane Baskets/cane-baskets8.jpeg"
import cane_baskets9 from "@/public/products/Cane Baskets/cane-baskets9.jpeg"

import rice_husk1 from "@/public/products/Rice Husk/rice-husk1.jpeg"
import rice_husk2 from "@/public/products/Rice Husk/rice-husk2.jpeg"
import rice_husk3 from "@/public/products/Rice Husk/rice-husk3.jpeg"
import rice_husk4 from "@/public/products/Rice Husk/rice-husk4.jpeg"
import rice_husk5 from "@/public/products/Rice Husk/rice-husk5.jpeg"
import rice_husk6 from "@/public/products/Rice Husk/rice-husk6.jpeg"
import rice_husk7 from "@/public/products/Rice Husk/rice-husk7.jpeg"
import rice_husk8 from "@/public/products/Rice Husk/rice-husk8.jpeg"
import rice_husk9 from "@/public/products/Rice Husk/rice-husk9.jpeg"
// import rice_husk10 from "@/public/products/Rice Husk/rice-husk10.jpeg"
import rice_husk11 from "@/public/products/Rice Husk/rice-husk11.jpeg"
import rice_husk12 from "@/public/products/Rice Husk/rice-husk12.jpeg"
import rice_husk13 from "@/public/products/Rice Husk/rice-husk13.jpeg"

const productsData = [
// --- Bamboo Essentials (Corrected based on Image Visuals) ---
  { id: 1, name: "Bamboo Bottle", img: bamboo_essentials1, category: "Bamboo Essentials" },
  { id: 2, name: "Pocket Comb", img: bamboo_essentials2, category: "Bamboo Essentials" },
  { id: 3, name: "Beard Neem Comb", img: bamboo_essentials3, category: "Bamboo Essentials" },
  { id: 4, name: "Bamboo Toothbrush & Tongue Cleaner", img: bamboo_essentials4, category: "Bamboo Essentials" },
  { id: 5, name: "Bamboo Razor D", img: bamboo_essentials5, category: "Bamboo Essentials" },
  { id: 6, name: "Lice Neem Comb", img: bamboo_essentials6, category: "Bamboo Essentials" },
  { id: 7, name: "Bamboo Cutlery Kit", img: bamboo_essentials7, category: "Bamboo Essentials" },
  { id: 8, name: "Bamboo Sipper", img: bamboo_essentials8, category: "Bamboo Essentials" },
  { id: 9, name: "Bamboo Non-Terry Towel", img: bamboo_essentials9, category: "Bamboo Essentials" },

  // --- Cane Baskets (Matching Excel S.No) ---
  { id: 10, name: "Boat Bag", img: cane_baskets1, category: "Cane Baskets" },
  { id: 11, name: "Jaali Bag", img: cane_baskets2, category: "Cane Baskets" },
  { id: 12, name: "Beach Bag", img: cane_baskets3, category: "Cane Baskets" },
  { id: 13, name: "U Handle Clur", img: cane_baskets4, category: "Cane Baskets" },
  { id: 14, name: "Fruit Basket", img: cane_baskets5, category: "Cane Baskets" },
  { id: 15, name: "Hamper Bag", img: cane_baskets6, category: "Cane Baskets" },
  { id: 16, name: "Circle Hamper Bag", img: cane_baskets7, category: "Cane Baskets" },
  { id: 17, name: "Jaali Frut Rec Basket", img: cane_baskets8, category: "Cane Baskets" },
  { id: 18, name: "Colorfull Lidbox", img: cane_baskets9, category: "Cane Baskets" },

  // --- Rice Husk (Matching Excel S.No) ---
// --- Rice Husk (Corrected based on Image Visuals & Excel Data) ---
  { id: 19, name: "Riged guard Loofah", img: rice_husk1, category: "Rice Husk" },
  { id: 20, name: "Bamboo Ear Swabs", img: rice_husk2, category: "Rice Husk" },
  { id: 21, name: "Canister", img: rice_husk3, category: "Rice Husk" },
  { id: 22, name: "Soup Bowl", img: rice_husk4, category: "Rice Husk" },
  { id: 23, name: "Classic Mug", img: rice_husk5, category: "Rice Husk" },
  { id: 24, name: "Canister (Tall)", img: rice_husk6, category: "Rice Husk" },
  { id: 25, name: "Snack plate", img: rice_husk7, category: "Rice Husk" },
  { id: 26, name: "Cutting Chai Cup", img: rice_husk8, category: "Rice Husk" },
  { id: 27, name: "Dinner Set", img: rice_husk9, category: "Rice Husk" },
  // { id: 28, name: "Storage Basket", img: rice_husk10, category: "Rice Husk" },
  { id: 29, name: "Majestic Mug", img: rice_husk11, category: "Rice Husk" },
  { id: 30, name: "Retro Cup", img: rice_husk12, category: "Rice Husk" },
  { id: 31, name: "Deco planter", img: rice_husk13, category: "Rice Husk" },
];

const categories = ["All", "Rice Husk", "Bamboo Essentials", "Cane Baskets"];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState('grid');

  const filteredProducts = activeCategory === "All" 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-sans text-[#444]">
      
      <div className="mb-10 text-gray-600 leading-relaxed text-[15px] max-w-5xl">
        <p>
          Discover our sustainable collection crafted from natural materials. 
          From biodegradable Rice Husk kitchenware to handcrafted Cane Baskets and 
          eco-friendly Bamboo Essentials, we bring you products that are kind to the planet.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between border-t border-b border-gray-100 py-4 mb-8">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded transition-colors ${viewMode === 'grid' ? "bg-[#a3a393] text-white" : "border border-gray-200 text-gray-400 hover:bg-gray-50"}`}
          >
            <LayoutGrid size={18} />
          </button>
          
          <button 
            onClick={() => setViewMode('list')}
            className={`p-2 rounded transition-colors ${viewMode === 'list' ? "bg-[#a3a393] text-white" : "border border-gray-200 text-gray-400 hover:bg-gray-50"}`}
          >
            <List size={18} />
          </button>

          <span className="ml-4 text-sm text-gray-500 font-medium">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
          </span>
        </div>

        <div className="flex flex-wrap gap-3 mt-4 lg:mt-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-sm border rounded-full transition-colors ${
                activeCategory === cat ? "bg-[#a3a393] text-white border-[#a3a393]" : "bg-white hover:border-[#a3a393]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className={
        viewMode === 'grid' 
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" 
          : "flex flex-col gap-4"
      }>
        {filteredProducts.map((product) => {
          const slug = product.name.toLowerCase().replace(/ /g, '-');
          return (
          <Link href={`/products/${slug}`}
            key={product.id} 
            className={`group border border-gray-100 rounded-md p-4 bg-white hover:shadow-lg transition-all ${
              viewMode === 'list' ? "flex flex-row items-center gap-6" : "flex flex-col"
            }`}
          >
            <div className={`relative bg-gray-50 rounded shrink-0 overflow-hidden ${
              viewMode === 'list' ? "h-32 w-32" : "aspect-square mb-4"
            }`}>
              <Image 
                src={product.img} 
                alt={product.name} 
                fill 
                className=" group-hover:scale-110 transition-transform duration-300 object-cover" 
              />
            </div>

            <div className="flex flex-col flex-grow">
              <p className="text-[10px] text-[#a3a393] uppercase tracking-widest mb-1 font-bold">
                {product.category}
              </p>
              <h3 className={`font-medium text-gray-800 group-hover:text-amber-700 transition-colors ${
                viewMode === 'list' ? "text-lg" : "text-sm mb-2"
              }`}>
                {product.name}
              </h3>
              
              {viewMode === 'list' && (
                <p className="text-sm text-gray-500 mt-2 line-clamp-2 max-w-xl">
                  High-quality {product.name} made from eco-friendly materials, perfect for sustainable living.
                </p>
              )}
            </div>

            {viewMode === 'list' && (
              <button className="ml-auto px-6 py-2 bg-[#a3a393] text-white text-sm rounded hover:bg-[#8e8e7f] transition-colors">
                View Details
              </button>
            )}
          </Link>
        );
        })}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          No products found in this category.
        </div>
      )}
    </div>
  );
}