"use client";

import { useState } from 'react';
import Image from 'next/image';
import { LayoutGrid, List } from 'lucide-react';
import product1 from "@/public/homepage/feature3.jpg"
import product2 from "@/public/homepage/feature2.jpg"
import product3 from "@/public/homepage/feature1.jpg"
import Link from 'next/link';

const productsData = [
    { id: 1, name: "Lorem Ipsum Decorative Cushion", img: product1, category: "Rice Husk" },
    { id: 2, name: "Consectetur Nantucket Round Basket", img: product3, category: "Cane Baskets" },
    { id: 3, name: "Adipiscing Children Water Cup", img: product2, category: "Bamboo Essentials" },
    { id: 4, name: "Latest Elit Decorative Object", img: product1, category: "Rice Husk" },
    { id: 5, name: "Lorem Ipsum Decorative Cushion", img: product1, category: "Rice Husk" },
    { id: 6, name: "Consectetur Nantucket Round Basket", img: product3, category: "Cane Baskets" },
    { id: 7, name: "Adipiscing Children Water Cup", img: product2, category: "Bamboo Essentials" },
    { id: 8, name: "Latest Elit Decorative Object", img: product1, category: "Rice Husk" },
    { id: 9, name: "Lorem Ipsum Decorative Cushion", img: product1, category: "Rice Husk" },
    { id: 10, name: "Consectetur Nantucket Round Basket", img: product3, category: "Cane Baskets" },
    { id: 11, name: "Adipiscing Children Water Cup", img: product2, category: "Bamboo Essentials" },
    { id: 12, name: "Latest Elit Decorative Object", img: product1, category: "Rice Husk" },
];

const categories = ["All", "Rice Husk", "Bamboo Essentials", "Cane Baskets"];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Filter Logic
  const filteredProducts = activeCategory === "All" 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-sans text-[#444]">
      
      {/* --- CATEGORY DESCRIPTION --- */}
      <div className="mb-10 text-gray-600 leading-relaxed text-[15px] max-w-5xl">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      {/* --- TOOLBAR --- */}
      <div className="flex flex-wrap items-center justify-between border-t border-b border-gray-100 py-4 mb-8">
        <div className="flex items-center gap-2">
          {/* Grid Toggle Button */}
          <button 
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded transition-colors ${viewMode === 'grid' ? "bg-[#a3a393] text-white" : "border border-gray-200 text-gray-400 hover:bg-gray-50"}`}
          >
            <LayoutGrid size={18} />
          </button>
          
          {/* List/Row Toggle Button */}
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

        {/* --- CATEGORY BUTTONS --- */}
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

      {/* --- PRODUCT DISPLAY --- */}
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
            {/* Image Container */}
            <div className={`relative bg-gray-50 rounded shrink-0 overflow-hidden ${
              viewMode === 'list' ? "h-32 w-32" : "aspect-square mb-4"
            }`}>
              <Image 
                src={product.img} 
                alt={product.name} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-300" 
              />
            </div>

            {/* Content Container */}
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
                  This is a brief description of the {product.name.toLowerCase()} used only in list view to provide more details to the customer.
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