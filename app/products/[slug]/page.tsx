"use client";

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Heart } from 'lucide-react';

// --- IMAGE IMPORTS ---
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
import rice_husk11 from "@/public/products/Rice Husk/rice-husk11.jpeg"
import rice_husk12 from "@/public/products/Rice Husk/rice-husk12.jpeg"
import rice_husk13 from "@/public/products/Rice Husk/rice-husk13.jpeg"

import kits1 from "@/public/Indoor Global Kit/Toiletry kit1.jpg"
import kits2 from "@/public/Indoor Global Kit/Toiletry kit3.jpg"
import kits3 from "@/public/Indoor Global Kit/Toiletry kit4.jpg"
import kits4 from "@/public/Indoor Global Kit/Toiletry kit2.jpg"
import kits5 from "@/public/Indoor Global Kit/Hand Towel Set1.jpg"
import kits6 from "@/public/Indoor Global Kit/Plantable Stationery kit2.jpg"
import kits7 from "@/public/Indoor Global Kit/Corporate kit1.jpg"
import kits8 from "@/public/Indoor Global Kit/Plantable Stationery kit1.jpg"
import kits9 from "@/public/Indoor Global Kit/Plantable Stationery kit3.jpg"
import kits10 from "@/public/Indoor Global Kit/Children's kit1.jpg"
import kits11 from "@/public/Indoor Global Kit/Ricehusk Dinner Set2.jpg"
import kits12 from "@/public/Indoor Global Kit/Ricehusk Dinner Set1.jpg"
import kits13 from "@/public/Indoor Global Kit/Children's kit3.jpg"
import kits14 from "@/public/Indoor Global Kit/Children's kit2.jpg"
import kits15 from "@/public/Indoor Global Kit/Hand Towel Set2.jpg"
import kits16 from "@/public/Indoor Global Kit/Hand Towel Set3.jpg"
import kits17 from "@/public/Indoor Global Kit/Hand Towel Set4.jpg"
import kits18 from "@/public/Indoor Global Kit/Hand Towel Set5.jpg"

// --- UPDATED PRODUCTS DATA (Includes everything from Listing page) ---
const productsData = [
  // Bamboo Essentials
  { id: 1, name: "Bamboo Bottle 450ml", img: bamboo_essentials1, category: "Bamboo Essentials" },
  { id: 2, name: "Pocket Comb", img: bamboo_essentials2, category: "Bamboo Essentials" },
  { id: 3, name: "Lice Comb", img: bamboo_essentials3, category: "Bamboo Essentials" },
  { id: 4, name: "Bamboo Toothbrush", img: bamboo_essentials4, category: "Bamboo Essentials" },
  { id: 5, name: "Bamboo Razor D", img: bamboo_essentials5, category: "Bamboo Essentials" },
  { id: 6, name: "Beard Comb", img: bamboo_essentials6, category: "Bamboo Essentials" },
  { id: 7, name: "Bamboo Cutlery Kit", img: bamboo_essentials7, category: "Bamboo Essentials" },
  { id: 8, name: "Rice Husk Bottle", img: bamboo_essentials8, category: "Bamboo Essentials" },
  { id: 9, name: "Bamboo Non-Terry Towel", img: bamboo_essentials9, category: "Bamboo Essentials" },

  // Cane Baskets
  { id: 10, name: "Boat Bag", img: cane_baskets1, category: "Cane Baskets" },
  { id: 11, name: "Storage Lid Box", img: cane_baskets2, category: "Cane Baskets" },
  { id: 12, name: "Beach Bag", img: cane_baskets3, category: "Cane Baskets" },
  { id: 13, name: "Shelf Basket", img: cane_baskets4, category: "Cane Baskets" },
  { id: 14, name: "Fruit Basket", img: cane_baskets5, category: "Cane Baskets" },
  { id: 15, name: "Hamper Bag", img: cane_baskets6, category: "Cane Baskets" },
  { id: 16, name: "Tiffin Bag", img: cane_baskets7, category: "Cane Baskets" },
  { id: 17, name: "Designer Jaali Bag", img: cane_baskets8, category: "Cane Baskets" },
  { id: 18, name: "Designer Boat Bag", img: cane_baskets9, category: "Cane Baskets" },

  // Rice Husk
  { id: 19, name: "Riged guard Loofah", img: rice_husk1, category: "Rice Husk" },
  { id: 20, name: "Bamboo Ear Swabs", img: rice_husk2, category: "Rice Husk" },
  { id: 21, name: "Canister", img: rice_husk3, category: "Rice Husk" },
  { id: 22, name: "Soup Bowl", img: rice_husk4, category: "Rice Husk" },
  { id: 23, name: "Classic Mug", img: rice_husk5, category: "Rice Husk" },
  { id: 24, name: "Canister (Tall)", img: rice_husk6, category: "Rice Husk" },
  { id: 25, name: "Snack plate", img: rice_husk7, category: "Rice Husk" },
  { id: 26, name: "Chai Cup", img: rice_husk8, category: "Rice Husk" },
  { id: 27, name: "Dinner Set", img: rice_husk9, category: "Rice Husk" },
  { id: 29, name: "Retro Cup", img: rice_husk11, category: "Rice Husk" },
  { id: 30, name: "Fusion Cup", img: rice_husk12, category: "Rice Husk" },
  { id: 31, name: "Deco planter", img: rice_husk13, category: "Rice Husk" },

  // Eco Kits (Ye Listing page mein the lekin Detail page se miss ho gaye the)
  { id: 32, name: "Toiletry kit1", img: kits1, category: "Eco Kits" },
  { id: 33, name: "Toiletry kit3", img: kits2, category: "Eco Kits" },
  { id: 34, name: "Toiletry kit4", img: kits3, category: "Eco Kits" },
  { id: 35, name: "Toiletry kit2", img: kits4, category: "Eco Kits" },
  { id: 36, name: "Hand Towel Set1", img: kits5, category: "Eco Kits" },
  { id: 37, name: "Plantable Stationery kit2", img: kits6, category: "Eco Kits" },
  { id: 38, name: "Corporate kit1", img: kits7, category: "Eco Kits" },
  { id: 39, name: "Plantable Stationery kit1", img: kits8, category: "Eco Kits" },
  { id: 40, name: "Plantable Stationery kit3", img: kits9, category: "Eco Kits" },
  { id: 41, name: "Children's kit1", img: kits10, category: "Eco Kits" },
  { id: 42, name: "Ricehusk Dinner Set2", img: kits11, category: "Eco Kits" },
  { id: 43, name: "Ricehusk Dinner Set1", img: kits12, category: "Eco Kits" },
  { id: 44, name: "Children's kit3", img: kits13, category: "Eco Kits" },
  { id: 45, name: "Children's kit2", img: kits14, category: "Eco Kits" },
  { id: 46, name: "Hand Towel Set2", img: kits15, category: "Eco Kits" },
  { id: 47, name: "Hand Towel Set3", img: kits16, category: "Eco Kits" },
  { id: 48, name: "Hand Towel Set4", img: kits17, category: "Eco Kits" },
  { id: 49, name: "Hand Towel Set5", img: kits18, category: "Eco Kits" },
];

export default function ProductDetail() {
  const { slug } = useParams();

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
        <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
          <Image
            src={product.img}
            alt={product.name}
            fill
            priority
            className="object-cover"
          />
        </div>

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
            <Link href={"/contact"} className="flex-1 bg-[#a3a393] text-white px-8 py-4 rounded hover:bg-[#8e8e7f] transition-all flex items-center justify-center gap-2 font-medium">
              Contact for Inquiry
            </Link>
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