import Image from "next/image";
import about from "@/public/about/about2.jpg"

export default function OurMission() {
  return (
    <section className="flex flex-col md:flex-row min-h-[600px] w-full bg-white font-sans overflow-hidden">
      {/* --- LEFT SIDE: IMAGE CONTAINER --- */}
      <div className="relative w-full md:w-1/2 bg-[#F7F7F7] flex items-center justify-center min-h-[400px]">
        {/* Main Background Image */}
        <div className="relative w-full h-full">
          <Image
            src={about} // Ensure your image is in /public
            alt="Product Showcase"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* --- RIGHT SIDE: CONTENT CONTAINER --- */}
      <div className="w-full md:w-1/2 bg-[#e8d7c7] text-white p-10 md:p-24 flex flex-col justify-center">
        <div className="max-w-lg animate-fadeIn">
          {/* Subheading */}
          <span className="text-[11px] uppercase tracking-[0.3em] text-black font-medium mb-4 block">
            LOREM IPSUM BRAND
          </span>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-10 leading-tight">
           Eco-Friendly Products for a Better Tomorrow
          </h2>

          {/* Paragraphs with Lorem Text */}
          <div className="space-y-6 text-black text-sm md:text-base leading-relaxed font-light">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p>
              Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.
              Nullam varius, turpis et commodo pharetra, est eros bibendum elit,
              nec luctus magna felis sollicitudin mauris.
            </p>
          </div>

          {/* Action Link */}
          <div className="mt-12">
          <button className="bg-[#5D4037] hover:bg-[#8e8e7e] text-white px-10 py-3 text-sm tracking-widest uppercase font-sans hover:bg-[#967676] transition-colors">
              Shop
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
