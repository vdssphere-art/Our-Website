import React from "react";
import { Heading, Subheading, SectionHeader } from "../ui/Typography";

const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "Custom web applications built with Next.js, React, Node.js, and TypeScript focused on speed, SEO, and scalability.",
    tag: "Web Apps",
  },
  {
    title: "Mobile App Engineering",
    description:
      "Cross-platform iOS and Android mobile apps crafted with React Native and modern mobile design principles.",
    tag: "Mobile",
  },
  {
    title: "UI/UX & Design Systems",
    description:
      "Intuitive, modern, high-converting user interfaces and reusable design component systems.",
    tag: "Design",
  },
  {
    title: "API & Cloud Infrastructure",
    description:
      "Robust REST/GraphQL APIs, serverless architectures, and automated CI/CD deployment pipelines.",
    tag: "Backend",
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 border-b border-gray-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="What We Do"
          title="End-to-End Freelance Engineering Services"
          subtitle="From concept design to production deployment, VDS_SPHERE turns complex software requirements into elegant solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-all group"
            >
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-2">
                {service.tag}
              </span>
              <Heading level={3} size="md" className="mb-3 group-hover:text-blue-400 transition-colors">
                {service.title}
              </Heading>
              <Subheading className="text-sm">
                {service.description}
              </Subheading>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
