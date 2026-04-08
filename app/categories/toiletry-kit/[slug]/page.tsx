"use client";

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Heart, Sparkles, CheckCircle } from 'lucide-react';

// --- IMAGE IMPORTS ---
import kits1 from "@/public/Indoor Global Kit/Toiletry kit1.jpg"
import kits2 from "@/public/Indoor Global Kit/Toiletry kit3.jpg"
import kits3 from "@/public/Indoor Global Kit/Toiletry kit4.jpg"
import kits4 from "@/public/Indoor Global Kit/Toiletry kit2.jpg"

const productsData = [
  { id: 32, name: "Toiletry kit1", description: "Complete eco-friendly toiletry set with jute pouch.", img: kits1, category: "Toiletry Kit" },
  { id: 33, name: "Toiletry kit3", description: "Essential bamboo grooming items in a travel-friendly kit.", img: kits2, category: "Toiletry Kit" },
  { id: 34, name: "Toiletry kit4", description: "Premium bathroom essentials kit with organic loofah.", img: kits3, category: "Toiletry Kit" },
  { id: 35, name: "Toiletry kit2", description: "Handcrafted storage basket with personal care bamboo products.", img: kits4, category: "Toiletry Kit" }
];

export default function ToiletryDetail() {
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
        <h1 className="text-2xl font-bold">Kit Not Found</h1>
        <Link href="/categories/toiletry-kit" className="text-[#a3a393] mt-4 underline font-medium">
          Back to Toiletry Kits
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 pt-24 font-sans text-[#444]">
      <Link href="/categories/toiletry-kit" className="flex items-center gap-2 text-sm text-gray-500 mb-8 hover:text-black transition-colors w-fit">
        <ArrowLeft size={16} /> Back to Collection
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
          <Image src={product.img} alt={product.name} fill priority className="object-cover" />
        </div>

        <div className="flex flex-col">
          <p className="text-[#a3a393] uppercase tracking-[0.2em] text-xs font-bold mb-3">{product.category}</p>
          <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">{product.name}</h1>
          
          <div className="flex items-center gap-2 text-[#a3a393] mb-6 font-medium italic">
            <Sparkles size={18} /> Travel-friendly & Plastic-free
          </div>

          <div className="border-t border-b border-gray-100 py-8 mb-8 text-gray-600 leading-relaxed">
            <p>{product.description}</p>
            <p className="mt-4">
              Our {product.name.toLowerCase()} is curated for those who dont want to compromise on their sustainability values while traveling. Every item is plastic-free, compostable, and made from premium bamboo or jute.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="flex-1 bg-[#a3a393] text-white px-8 py-4 rounded hover:bg-[#8e8e7f] transition-all flex items-center justify-center gap-2 font-medium">
              Inquire for Bulk Orders
            </Link>
            <button className="p-4 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
              <Heart size={20} className="text-gray-400" />
            </button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 border-t border-gray-50 pt-6">
             <div className="flex items-center gap-2 text-xs text-gray-500 uppercase font-bold">
                <CheckCircle size={16} className="text-green-600" /> 100% Organic
             </div>
             <div className="flex items-center gap-2 text-xs text-gray-500 uppercase font-bold">
                <CheckCircle size={16} className="text-green-600" /> Travel Approved
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}