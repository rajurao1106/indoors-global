import About from "@/components/homepage/About";
import Blog from "@/components/homepage/Blog";
import Category from "@/components/homepage/Category";
import CTA from "@/components/homepage/CTA";
import Features from "@/components/homepage/Features";
import Hero from "@/components/homepage/Hero";
import React from "react";

export default function page() {
  return (
    <div className="pt-[4rem]">
      <Hero />
      <Category />
      <About />
      <Features />
      <Blog />
      <CTA />
    </div>
  );
}
