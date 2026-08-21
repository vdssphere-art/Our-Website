import React from "react";
import { Heading, Subheading, SectionHeader } from "../ui/Typography";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-slate-200 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="About VDS_SPHERE"
          title="Empowering Brands With High-Caliber Freelance Talent"
          subtitle="We combine agency-level quality with the agility and responsiveness of dedicated freelance developers."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
            <Heading level={3} size="md" className="mb-2 text-blue-600">
              01. Rapid Execution
            </Heading>
            <Subheading className="text-sm">
              Sprint-based development cycles that get your product to market without unnecessary overhead.
            </Subheading>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
            <Heading level={3} size="md" className="mb-2 text-blue-600">
              02. Clean Architecture
            </Heading>
            <Subheading className="text-sm">
              Scalable codebase setup using modern frameworks, TypeScript, and maintainable component hierarchies.
            </Subheading>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
            <Heading level={3} size="md" className="mb-2 text-blue-600">
              03. Direct Communication
            </Heading>
            <Subheading className="text-sm">
              Work directly with lead engineers. Transparent updates, clean code handoffs, and ongoing support.
            </Subheading>
          </div>
        </div>
      </div>
    </section>
  );
};
