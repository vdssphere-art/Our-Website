import React from "react";
import Link from "next/link";
import { Subheading } from "../ui/Typography";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-200">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img
                src="/images/vdslogo.png"
                alt="VDS Logo"
                className="h-9 w-auto object-contain"
              />
              <span className="font-extrabold text-xl tracking-tight text-black">
                VDS<span className="text-black">_SPHERE</span>
              </span>
            </Link>
            <Subheading className="max-w-md text-sm leading-relaxed text-gray-600">
              VDS_SPHERE is a modern freelance software & digital product agency.
              We build scalable web applications, mobile experiences, and custom cloud solutions for modern teams.
            </Subheading>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-black mb-4 text-sm tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li>
                <a href="#about" className="hover:text-black transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-black transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-black transition-colors">
                  Featured Work
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-black transition-colors">
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Agency Focus */}
          <div>
            <h4 className="font-bold text-black mb-4 text-sm tracking-wider uppercase">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
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
