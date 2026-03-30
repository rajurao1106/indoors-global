import Image from 'next/image';
import bamboo from "@/public/about/bamboo2.jpg"

export default function Quote() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-20 px-6">
      {/* --- BACKGROUND IMAGE --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bamboo}// Path to your background image
          alt="Bamboo Forest Background"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle dark overlay to help the white box pop */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* --- CENTERED CONTENT CARD --- */}
      <div className="relative z-10 w-full max-w-4xl bg-white/95 backdrop-blur-sm p-8 md:p-16 shadow-2xl text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-light tracking-[0.2em] text-gray-900 mb-10 uppercase">
          Lorem Ipsum Dolor
        </h2>

        {/* Text Content */}
        <div className="space-y-8 text-gray-700 leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
            ea commodo consequat. 
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum 
            sit amet consectetur adipiscing.
          </p>
        </div>
      </div>

    
    </section>
  );
}