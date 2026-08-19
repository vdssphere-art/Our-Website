import React from "react";
import { Heading, Subheading, SectionHeader } from "../ui/Typography";

const projects = [
  {
    title: "E-Commerce Experience",
    category: "Full-Stack Web App",
    description: "Next.js storefront with seamless checkout integration, fast filtering, and custom admin dashboard.",
  },
  {
    title: "SaaS Analytics Dashboard",
    category: "Web Application",
    description: "Real-time interactive data analytics suite built with React, Tailwind CSS, and chart visualizations.",
  },
  {
    title: "FinTech Mobile Interface",
    category: "Mobile UI/UX",
    description: "Sleek financial wallet app prototype designed for fast micro-transactions and account management.",
  },
];

export const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 md:py-28 border-b border-gray-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Featured Projects"
          title="Recent Client Work"
          subtitle="Explore some of the scalable applications and digital experiences crafted by VDS_SPHERE."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-gray-900/60 border border-gray-800 p-6 flex flex-col justify-between hover:border-blue-500/50 transition-all"
            >
              <div>
                <span className="text-xs font-semibold text-blue-400 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800/40 inline-block mb-4">
                  {project.category}
                </span>
                <Heading level={3} size="md" className="mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </Heading>
                <Subheading className="text-sm">
                  {project.description}
                </Subheading>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-800/60 flex items-center text-xs font-semibold text-blue-400 group-hover:translate-x-1 transition-transform">
                View Case Study &rarr;
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
