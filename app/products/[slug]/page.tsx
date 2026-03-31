"use client";

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Heart } from 'lucide-react';

// Import all product images (Ensure these paths match your actual structure)
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
import rice_husk10 from "@/public/products/Rice Husk/rice-husk10.jpeg"
import rice_husk11 from "@/public/products/Rice Husk/rice-husk11.jpeg"
import rice_husk12 from "@/public/products/Rice Husk/rice-husk12.jpeg"
import rice_husk13 from "@/public/products/Rice Husk/rice-husk13.jpeg"

const productsData = [
  { id: 1, name: "Bamboo Bottle", img: bamboo_essentials1, category: "Bamboo Essentials" },
  { id: 2, name: "Pocket Comb", img: bamboo_essentials2, category: "Bamboo Essentials" },
  { id: 3, name: "Beard Neem Comb", img: bamboo_essentials3, category: "Bamboo Essentials" },
  { id: 4, name: "Bamboo Toothbrush & Tongue Cleaner", img: bamboo_essentials4, category: "Bamboo Essentials" },
  { id: 5, name: "Bamboo Razor D", img: bamboo_essentials5, category: "Bamboo Essentials" },
  { id: 6, name: "Lice Neem Comb", img: bamboo_essentials6, category: "Bamboo Essentials" },
  { id: 7, name: "Bamboo Cutlery Kit", img: bamboo_essentials7, category: "Bamboo Essentials" },
  { id: 8, name: "Bamboo Sipper", img: bamboo_essentials8, category: "Bamboo Essentials" },
  { id: 9, name: "Bamboo Non-Terry Towel", img: bamboo_essentials9, category: "Bamboo Essentials" },
  { id: 10, name: "Boat Bag", img: cane_baskets1, category: "Cane Baskets" },
  { id: 11, name: "Jaali Bag", img: cane_baskets2, category: "Cane Baskets" },
  { id: 12, name: "Beach Bag", img: cane_baskets3, category: "Cane Baskets" },
  { id: 13, name: "U Handle Clur", img: cane_baskets4, category: "Cane Baskets" },
  { id: 14, name: "Fruit Basket", img: cane_baskets5, category: "Cane Baskets" },
  { id: 15, name: "Hamper Bag", img: cane_baskets6, category: "Cane Baskets" },
  { id: 16, name: "Circle Hamper Bag", img: cane_baskets7, category: "Cane Baskets" },
  { id: 17, name: "Jaali Frut Rec Basket", img: cane_baskets8, category: "Cane Baskets" },
  { id: 18, name: "Colorfull Lidbox", img: cane_baskets9, category: "Cane Baskets" },
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

export default function ProductDetail() {
  const { slug } = useParams();

  // THE FIX: This finding logic now matches the generator logic perfectly
  const product = productsData.find((p) => {
    const generatedSlug = p.name
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') 
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
    return generatedSlug === slug;
  });

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <p className="text-gray-500 mt-2">Looking for: {slug}</p>
        <Link href="/products" className="text-[#a3a393] mt-4 underline font-medium">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 pt-24 font-sans text-[#444]">
      <Link href="/products" className="flex items-center gap-2 text-sm text-gray-500 mb-8 hover:text-black transition-colors w-fit">
        <ArrowLeft size={16} /> Back to Collection
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Product Image */}
        <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
          <Image
            src={product.img}
            alt={product.name}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <p className="text-[#a3a393] uppercase tracking-[0.2em] text-xs font-bold mb-3">
            {product.category}
          </p>
          <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
            {product.name}
          </h1>
          
          <div className="space-y-1 mb-8">
             <p className="text-lg text-gray-700 font-medium italic">Standard Size Available</p>
             <p className="text-gray-600">Multiple Color variants available on request</p>
          </div>

          <div className="border-t border-b border-gray-100 py-8 mb-8 text-gray-600 leading-relaxed">
            <p>
              This {product.name.toLowerCase()} is handcrafted with sustainable materials. 
              Perfect for modern homes that value both aesthetics and eco-friendly living. 
              Each piece is unique, durable, and tells a story of ethical craftsmanship.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="flex-1 bg-[#a3a393]  text-white px-8 py-4 rounded hover:bg-[#7cb140] transition-all flex items-center justify-center gap-2 font-medium">
              Contact for Inquiry
            </button>
            <button className="p-4 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
              <Heart size={20} className="text-gray-400" />
            </button>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-50">
             <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Sustainability Note:</span>
             <p className="text-sm text-gray-500 mt-2">
               Made with 100% biodegradable or recyclable materials. No harsh chemicals used in the manufacturing process.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}