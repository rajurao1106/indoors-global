import { ShieldCheck, Zap, RefreshCw, Clock } from 'lucide-react'; // Using Lucide for the icons

const features = [
  {
    title: "STRENGTH",
    icon: <Zap className="w-16 h-16 text-[#4CAF50]" strokeWidth={1.5} />,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    title: "RENEWABILITY",
    icon: <RefreshCw className="w-16 h-16 text-[#4CAF50]" strokeWidth={1.5} />,
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
  },
  {
    title: "SUSTAINABILITY",
    icon: <ShieldCheck className="w-16 h-16 text-[#4CAF50]" strokeWidth={1.5} />,
    description: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna."
  },
  {
    title: "LONG LIFE",
    icon: <Clock className="w-16 h-16 text-[#4CAF50]" strokeWidth={1.5} />,
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias."
  }
];

export default function Features() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Icon Container */}
            <div className="mb-6">
              {feature.icon}
            </div>
            
            {/* Title */}
            <h3 className="text-[#8B735B] text-2xl font-bold tracking-widest mb-4 uppercase">
              {feature.title}
            </h3>
            
            {/* Description */}
            <p className="text-[#666666] text-sm md:text-base leading-relaxed max-w-sm uppercase font-medium">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}