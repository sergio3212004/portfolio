import React from "react";
import Link from "next/link";
import { NavItem } from "./Navbar";

export interface FooterProps {
  brand?: string;
  items?: NavItem[];
  rightsText?: string;
  tagline?: string;
  lang?: string;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({
  brand = "Sergio",
  items = [],
  rightsText = "All rights reserved.",
  tagline = "Crafted with restraint and technical precision.",
  lang = "es",
  className = "",
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`mt-auto border-t border-dsg-200 dark:border-[#1e2c33] bg-dsg-100/30 dark:bg-[#090e10] py-12 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-dsg-200 dark:border-[#182328]">
          <div className="flex flex-col items-center md:items-start gap-1">
            <Link
              href={`/${lang}`}
              className="text-base font-bold text-dsg-950 dark:text-[#edf3f5] hover:text-hb-500 dark:hover:text-hb-400 transition-colors"
            >
              {brand}
            </Link>
            <p className="text-xs font-mono text-dsg-500 dark:text-dsg-400">
              {tagline}
            </p>
          </div>

          {/* Nav links */}
          {items.length > 0 && (
            <div className="flex flex-wrap justify-center items-center gap-6 text-xs font-mono uppercase tracking-wider text-dsg-600 dark:text-dsg-400">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-hb-600 dark:hover:text-hb-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-dsg-500 dark:text-dsg-400">
          <p>
            © {currentYear} {brand}. {rightsText}
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-hb-400 transition-colors"
            >
              GitHub
            </a>
            <span>/</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-hb-400 transition-colors"
            >
              LinkedIn
            </a>
            <span>/</span>
            <a
              href="mailto:sergiom@example.com"
              className="hover:text-hb-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
