"use client";

import React, { useState } from "react";

interface ServiceItem {
  id: string;
  title: string;
  displayTitle: string;
  subtitle: string;
  image: string;
  tint: string;
}

const services: ServiceItem[] = [
  {
    id: "website-development",
    title: "WEBSITE DEVELOPMENT",
    displayTitle: "Website Development",
    subtitle: "High-converting Next.js & React web applications.",
    image: "/images/services/website_development.png",
    tint: "bg-blue-950/70",
  },
  {
    id: "app-development",
    title: "APP DEVELOPMENT",
    displayTitle: "App Development",
    subtitle: "Native iOS & Android mobile app engineering.",
    image: "/images/services/app_development.png",
    tint: "bg-slate-950/70",
  },
  {
    id: "digital-marketing",
    title: "DIGITAL MARKETING",
    displayTitle: "Digital Marketing",
    subtitle: "Targeted growth campaigns & ROI optimization.",
    image: "/images/services/digital_marketing.png",
    tint: "bg-purple-950/70",
  },
  {
    id: "seo-optimization",
    title: "SEO OPTIMIZATION",
    displayTitle: "SEO Optimization",
    subtitle: "Dominate search engine rankings & organic traffic.",
    image: "/images/services/seo_optimization.png",
    tint: "bg-emerald-950/70",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX & PRODUCT DESIGN",
    displayTitle: "UI/UX & Product Design",
    subtitle: "Crafting modern, interactive Figma design prototypes.",
    image: "/images/services/ui_ux_design.png",
    tint: "bg-teal-950/70",
  },
];

export const ServicesSection: React.FC = () => {
  const gridServices = services.slice(0, 4);
  const featuredService = services[4];

  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-100 text-slate-900 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col max-w-3xl mb-10 text-center items-center mx-auto">
          <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-100 border border-blue-200 rounded-full mb-3 shadow-sm">
            Services Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-3">
            End-to-End Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal">
            Normal images when idle — hover over any card to reveal title and project details.
          </p>
        </div>

        {/* Asymmetric 5-Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* LEFT 2x2 GRID (4 Cards) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gridServices.map((service) => {
              const isHovered = activeHoverId === service.id;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveHoverId(service.id)}
                  onMouseLeave={() => setActiveHoverId(null)}
                  className="group relative h-[280px] sm:h-[300px] rounded-xl overflow-hidden shadow-md border border-slate-200 bg-slate-200 cursor-pointer transition-all duration-300 hover:shadow-xl"
                >
                  {/* Clean Normal Image */}
                  <img
                    src={service.image}
                    alt={service.displayTitle}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* HOVER OVERLAY (Translucent tint over image + title at bottom left + white bottom bar) */}
                  <div
                    className={`absolute inset-0 ${service.tint} flex flex-col justify-between transition-opacity duration-300 ${
                      isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    {/* Upper transparent spacer */}
                    <div className="flex-1" />

                    {/* Bold Title at bottom left of image area */}
                    <div className="p-5 pb-3 text-left">
                      <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight leading-none drop-shadow-md">
                        {service.title}
                      </h3>
                    </div>

                    {/* White Bottom Footer Bar */}
                    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-slate-100 shadow-lg">
                      <span className="text-xs font-medium text-slate-700 truncate mr-2">
                        {service.subtitle}
                      </span>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-md text-xs font-bold text-white bg-[#e60067] hover:bg-[#c40058] transition-colors shrink-0 shadow-sm"
                      >
                        <span>Post a Project</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: 1 Tall Vertical Featured Card */}
          <div className="lg:col-span-6">
            {(() => {
              const isHovered = activeHoverId === featuredService.id;

              return (
                <div
                  key={featuredService.id}
                  onMouseEnter={() => setActiveHoverId(featuredService.id)}
                  onMouseLeave={() => setActiveHoverId(null)}
                  className="group relative h-[380px] sm:h-[440px] lg:h-[616px] rounded-xl overflow-hidden shadow-md border border-slate-200 bg-slate-200 cursor-pointer transition-all duration-300 hover:shadow-xl"
                >
                  {/* Clean Normal Image */}
                  <img
                    src={featuredService.image}
                    alt={featuredService.displayTitle}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* HOVER OVERLAY */}
                  <div
                    className={`absolute inset-0 ${featuredService.tint} flex flex-col justify-between transition-opacity duration-300 ${
                      isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    {/* Upper transparent spacer */}
                    <div className="flex-1" />

                    {/* Bold Title at bottom left of image area */}
                    <div className="p-6 sm:p-8 pb-4 text-left">
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight drop-shadow-md">
                        {featuredService.title}
                      </h3>
                    </div>

                    {/* White Bottom Footer Bar */}
                    <div className="bg-white px-5 py-4 flex items-center justify-between border-t border-slate-100 shadow-lg">
                      <span className="text-xs sm:text-sm font-semibold text-slate-700 truncate mr-3">
                        {featuredService.subtitle}
                      </span>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-md text-xs sm:text-sm font-bold text-white bg-[#e60067] hover:bg-[#c40058] transition-colors shrink-0 shadow-sm"
                      >
                        <span>Post a Project</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

        </div>
      </div>
    </section>
  );
};



