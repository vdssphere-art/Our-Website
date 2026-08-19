import React from "react";
import { Heading, Subheading } from "../ui/Typography";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden border-b border-gray-800/40">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/60 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          VDS_SPHERE Freelance Digital Agency
        </div>

        {/* Global Primary Heading */}
        <Heading level={1} size="xl" gradient className="mb-6">
          Architecting High-Performance Web & Mobile Solutions
        </Heading>

        {/* Global Subheading */}
        <Subheading className="max-w-2xl mx-auto mb-10 text-gray-300">
          We are a team of expert freelance engineers and designers delivering
          tailor-made digital products, high-scalability backend APIs, and modern frontends.
        </Subheading>

        {/* Call To Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-base font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 active:scale-95"
          >
            Start a Project
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-base font-semibold text-gray-300 bg-gray-900 hover:bg-gray-800 border border-gray-700 transition-all active:scale-95"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};
