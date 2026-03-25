import React from 'react';
import Image from 'next/image';
import about from "@/public/homepage/about.jpg"

const About = () => {
  return (
    <section className="flex flex-col md:flex-row min-h-[600px] w-full">
      {/* Left Column: Image */}
      <div className="relative w-full md:w-1/2 h-[400px] md:h-auto">
        <Image
          src={about}// Replace with your image path
          alt="Embroidery art meets needle and thread"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Column: Content */}
      <div className="w-full md:w-1/2 bg-[#ece3d9] flex flex-col justify-center px-8 md:px-16 py-16 font-serif">
        <div className="max-w-xl">
          <span className="text-[12px] tracking-[0.2em] text-gray-500 uppercase block mb-4 font-sans">
            Welcome!
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#8d6e6e] leading-tight mb-8">
            Embroidery is where <br />
            <span className="italic font-light">art</span> meets needle <br />
            and thread
          </h2>

          <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed mb-10 font-sans max-w-md">
            Embroidery is more than just a hobby; its a way of expressing 
            yourself and connecting with others. Join our community today and 
            lets stitch together!
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#a68686] text-white px-10 py-3 text-sm tracking-widest uppercase font-sans hover:bg-[#967676] transition-colors">
              Shop
            </button>
            <button className="bg-[#a89d83] text-white px-8 py-3 text-sm tracking-widest uppercase font-sans hover:bg-[#968b72] transition-colors">
              The Little Studio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;