import React from "react";
import Link from "next/link";
import { Subheading } from "../ui/Typography";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                V
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900">
                VDS<span className="text-blue-600">_SPHERE</span>
              </span>
            </Link>
            <Subheading className="max-w-md text-sm leading-relaxed">
              VDS_SPHERE is a modern freelance software & digital product agency.
              We build scalable web applications, mobile experiences, and custom cloud solutions for modern teams.
            </Subheading>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4 text-sm tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li>
                <a href="#about" className="hover:text-blue-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-600 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-blue-600 transition-colors">
                  Featured Work
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600 transition-colors">
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Agency Focus */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4 text-sm tracking-wider uppercase">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li>Full Stack Web Apps</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design Systems</li>
              <li>API & Cloud Infrastructure</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
          <p>© {new Date().getFullYear()} VDS_SPHERE Agency. All rights reserved.</p>
          <p className="mt-4 sm:mt-0">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};
