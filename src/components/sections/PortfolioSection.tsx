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
    <section id="portfolio" className="py-20 md:py-28 border-b border-slate-200">
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
              className="group rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-400 transition-all shadow-sm hover:shadow-md"
            >
              <div>
                <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-4">
                  {project.category}
                </span>
                <Heading level={3} size="md" className="mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </Heading>
                <Subheading className="text-sm">
                  {project.description}
                </Subheading>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
                View Case Study &rarr;
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
