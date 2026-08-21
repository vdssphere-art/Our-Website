"use client";

import React from "react";
import { Heading, Subheading, SectionHeader } from "../ui/Typography";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          badge="Get In Touch"
          title="Let's Build Something Great Together"
          subtitle="Have an upcoming project or need dedicated freelance talent for your team? Reach out to VDS_SPHERE."
        />

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 p-8 rounded-2xl bg-white border border-slate-200 text-left space-y-6 max-w-xl mx-auto shadow-lg"
        >
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
              Project Details
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about your project requirements..."
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-lg text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 active:scale-95"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
};
