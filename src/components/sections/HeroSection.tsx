"use client";

import React, { useState } from "react";

const clients = [
  { name: "Zirise", logo: "/images/logos/zirise.png" },
  { name: "Vayumandal Innovations", logo: "/images/logos/vayumandal.png" },
  { name: "AR Legal", logo: "/images/logos/arlegal.png" },
  { name: "Logixjunction", logo: "/images/logos/logixjunction.jpeg" },
];

export const HeroSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  /* Duplicate client list for seamless infinite scroll */
  const marqueeClients = [...clients, ...clients, ...clients, ...clients, ...clients];

  return (
    <section className="relative pt-8 pb-32 md:pt-12 md:pb-44 xl:pb-70 overflow-clip select-none bg-[#f5efe6]">

      {/* Floating Robotic Hand — left side, palm below heading */}
      <div className="absolute left-0 top-1/2 -translate-y-[40%] pointer-events-none z-0 hidden md:block">
        <img
          src="/images/robotic-hand.png"
          alt=""
          aria-hidden="true"
          className="hero-float w-[500px] lg:w-[1000px] xl:w-1500 h-auto mix-blend-multiply"
          draggable={false}
        />
      </div>

      {/* ── Scrolling Client Strip — above headings ── */}
      <div className="relative z-10 mb-8 md:mb-12 flex justify-center">
        <div className="w-[90%] sm:w-[70%] lg:w-[50%] py-4 marquee-container">
          <div className="marquee-track items-center gap-10 sm:gap-14">
            {marqueeClients.map((client, i) => (
              <div
                key={i}
                className="flex items-center gap-3 shrink-0 px-2"
              >
                {/* Client Logo */}
                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain mix-blend-multiply"
                    draggable={false}
                  />
                </div>
                {/* Client Name */}
                <span className="text-lg font-semibold text-slate-700 whitespace-nowrap tracking-tight">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Giant Typography Block */}
      <div className="relative z-10 max-w-[95vw] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Line 1 — filled black by default, outlined (stroked) on hover */}
        <h1
          className={`hero-text-giant text-black ${isHovered ? "hero-text-outlined-active" : ""
            }`}
        >
          Digital Agency
        </h1>

        {/* Line 2 — outlined by default, filled black on hover */}
        <p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`hero-text-giant hero-text-outlined cursor-default mt-1 sm:mt-2 ${isHovered ? "!text-black" : ""
            }`}
          style={
            isHovered
              ? { WebkitTextStrokeColor: "transparent" }
              : undefined
          }
        >
          & Developers
        </p>
      </div>
    </section>
  );
};
