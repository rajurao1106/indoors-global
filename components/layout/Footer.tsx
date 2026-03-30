import React from "react";
import Link from "next/link";
import logo from "@/public/navbar/logo.jpg";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100 font-serif">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 text-gray-700">
        {/* Store Information */}
        <div>
          <h3 className="text-xl font-medium mb-6 text-black tracking-tight">
            Store Information
          </h3>
          <ul className="space-y-3 text-[15px] leading-relaxed">
            <li className="flex flex-col gap-2">
              <div className="w-20 h-20">
                <Image src={logo} alt="" />
              </div>
              Indoors Global
            </li>
            <li>99 XY, IN 12345, Beside the Sun point land.</li>
            <li>India</li>
            <li className="pt-2">
              Call us:{" "}
              <span className="font-sans text-gray-500">+91 123-456-789</span>
            </li>
            <li>
              Email us:{" "}
              <span className="font-sans text-gray-500 underline underline-offset-4">
                admin@example.com
              </span>
            </li>
          </ul>

          {/* Manual SVG Icons to avoid Lucide Export Errors */}
          <div className="flex gap-3 mt-8">
            <SocialIcon label="Facebook">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </SocialIcon>
            <SocialIcon label="Twitter">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </SocialIcon>
            <SocialIcon label="Instagram">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </SocialIcon>
            <SocialIcon label="Pinterest">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12c.2 2.5 1.8 3.5 3 3.5 1.6 0 2.8-1.1 2.8-2.6 0-1.7-1.3-3-3.2-3-2.1 0-3.6 1.4-3.6 3.4 0 1.2.5 2.2 1.4 2.6.2.1.3.1.4-.2l.2-.7c0-.2 0-.3-.1-.5-.4-.5-.6-1.2-.6-2 0-2 1.6-3.8 3.8-3.8 2.1 0 3.6 1.4 3.6 3.4 0 2.2-1.2 4.1-3 4.1-.6 0-1.2-.3-1.4-.7l-.4 1.5c-.2.7-.8 1.8-1.2 2.5" />
            </SocialIcon>
          </div>
        </div>

        {/* Find Product */}
        <div>
          <h3 className="text-xl font-medium mb-6 text-black tracking-tight">
            Find Product
          </h3>
          <ul className="space-y-3 text-[15px]">
            {[
              "Prices drop",
              "New products",
              "Best sellers",
              "Sitemap",
              "Stores",
              "Arts",
            ].map((item) => (
              <li
                key={item}
                className="hover:translate-x-1 transition-transform cursor-pointer hover:text-black"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Your Account */}
        <div>
          <h3 className="text-xl font-medium mb-6 text-black tracking-tight">
            Your Account
          </h3>
          <ul className="space-y-3 text-[15px]">
            {[
              "Order Tracking",
              "Sign in",
              "Create account",
              "Discount",
              "Wishlist",
              "Credit Slip",
            ].map((item) => (
              <li
                key={item}
                className="hover:translate-x-1 transition-transform cursor-pointer hover:text-black"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Our Company */}
        <div>
          <h3 className="text-xl font-medium mb-6 text-black tracking-tight">
            Our Company
          </h3>
          <ul className="space-y-3 text-[15px]">
            {[
              "Delivery",
              "Legal Notice",
              "Terms and conditions",
              "Secure Payment",
              "Contact Us",
              "About Us",
            ].map((item) => (
              <li
                key={item}
                className="hover:translate-x-1 transition-transform cursor-pointer hover:text-black"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[14px] text-gray-500">
          Copyright ©{" "}
          <span className="font-semibold italic">Indoors Global</span>. All
          Rights Reserved.
        </p>

        {/* Payment Methods */}
        {/* <div className="flex gap-3 grayscale opacity-60">
          <PaymentBadge name="VISA" color="text-blue-800" />
          <PaymentBadge name="PayPal" color="text-blue-600" />
          <PaymentBadge name="MasterCard" color="text-red-600" />
          <PaymentBadge name="Amex" color="text-cyan-700" />
        </div> */}
      </div>
    </footer>
  );
};

// Helper Components for Cleaner Code
const SocialIcon = ({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) => (
  <button
    aria-label={label}
    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  </button>
);

const PaymentBadge = ({ name, color }: { name: string; color: string }) => (
  <div
    className={`border border-gray-200 px-3 py-1 rounded bg-gray-50 text-[11px] font-sans font-extrabold uppercase tracking-widest ${color}`}
  >
    {name}
  </div>
);

export default Footer;
