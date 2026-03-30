"use client";

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart, Heart } from 'lucide-react';

// Data ko ek separate file se import karna best practice hai, 
// par abhi ke liye main wahi array use kar raha hoon.
import product1 from "@/public/homepage/feature3.jpg";
import product2 from "@/public/homepage/feature2.jpg";
import product3 from "@/public/homepage/feature1.jpg";

const productsData = [
  { id: 1, name: "Lorem Ipsum Decorative Cushion", img: product1, category: "Rice Husk", price: "$25.00" },
  { id: 2, name: "Consectetur Nantucket Round Basket", img: product3, category: "Cane Baskets", price: "$45.00" },
  { id: 3, name: "Adipiscing Children Water Cup", img: product2, category: "Bamboo Essentials", price: "$12.00" },
  // ... baaki products
];

export default function ProductDetail() {
  const { slug } = useParams();

  // Slug se product find karne ki logic
  const product = productsData.find(
    (p) => p.name.toLowerCase().replace(/ /g, '-') === slug
  );

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <Link href="/products" className="text-blue-500 mt-4 underline">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 font-sans text-[#444]">
      <Link href="/products" className="flex items-center gap-2 text-sm text-gray-500 mb-8 hover:text-black">
        <ArrowLeft size={16} /> Back to Collection
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
          <Image
            src={product.img}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <p className="text-[#a3a393] uppercase tracking-[0.2em] text-xs font-bold mb-2">
            {product.category}
          </p>
          <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
            {product.name}
          </h1>
          <p className="text-xl text-gray-800">
            {/* {product.price || "$20.00"} */}
            14 X 21cm 
            </p>
           <p className="text-xl text-gray-800 mb-2">
            {/* {product.price || "$20.00"} */}
            Mint Green ,Royal Blue, Maroon

            </p>
          <div className="border-t border-b border-gray-100 py-6 mb-8 text-gray-600 leading-relaxed">
            <p>
              This {product.name.toLowerCase()} is handcrafted with sustainable materials. 
              Perfect for modern homes that value both aesthetics and eco-friendly living. 
              Each piece is unique and tells a story of craftsmanship.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="flex-1 bg-[#a3a393] text-white px-8 py-4 rounded hover:bg-[#8e8e7f] transition-all flex items-center justify-center gap-2 font-medium">
              {/* <ShoppingCart size={20} /> Add to Cart */}
              Contact Us
            </button>
            <button className="p-4 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
              <Heart size={20} className="text-gray-400" />
            </button>
          </div>
{/* 
          <div className="mt-8 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              <span className="font-bold text-gray-800">SKU:</span> PROD-00{product.id}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              <span className="font-bold text-gray-800">Shipping:</span> Free delivery on orders over $100
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}