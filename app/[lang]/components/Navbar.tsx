"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import Button from "./Button";

export interface NavItem {
  label: string;
  href: string;
}

export interface NavbarProps {
  brand?: string;
  greeting?: string;
  items?: NavItem[];
  lang?: string;
  downloadCvText?: string;
  themeLabels?: {
    light?: string;
    dark?: string;
  };
  languageLabels?: {
    en: string;
    es: string;
    toggle?: string;
  };
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  brand = "Sergio",
  greeting = "👋 Sergio",
  items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  lang = "es",
  downloadCvText = "Download CV",
  themeLabels,
  languageLabels,
  className = "",
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = items.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(`#${id}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-dsg-50/85 dark:bg-[#0d1316]/85 backdrop-blur-md border-b border-dsg-200/70 dark:border-[#1e2c33]/40 py-3 shadow-xs"
          : "bg-transparent py-5"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left Side: Brand Logo & Greeting */}
        <div className="flex items-center gap-4">
          <Link
            href={`/${lang}`}
            className="group flex items-center gap-2.5 focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-dsg-200/80 dark:bg-[#19262d] border border-dsg-300 dark:border-[#273a45] flex items-center justify-center text-hb-700 dark:text-hb-400 font-bold text-sm tracking-wider group-hover:border-hb-500 transition-colors">
              S
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-dsg-950 dark:text-[#edf3f5] group-hover:text-hb-600 dark:group-hover:text-hb-400 transition-colors">
                {brand}
              </span>
              <span className="text-[10px] text-dsg-500 dark:text-dsg-400 font-mono hidden sm:inline">
                {greeting}
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-6 lg:gap-8"
        >
          {items.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`text-xs font-medium uppercase tracking-wider transition-colors duration-150 relative py-1 ${
                  isActive
                    ? "text-hb-600 dark:text-hb-400 font-semibold"
                    : "text-dsg-600 dark:text-dsg-400 hover:text-dsg-950 dark:hover:text-[#edf3f5]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-hb-500 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Side: Actions (Download CV, Language, Theme) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden lg:block">
            <Button
              href="#contact"
              variant="outline"
              size="sm"
              className="text-[11px] font-mono border-dsg-300 dark:border-[#2a3c46]"
            >
              {downloadCvText}
            </Button>
          </div>

          <LanguageToggle currentLocale={lang} labels={languageLabels} />
          <ThemeToggle
            lightLabel={themeLabels?.light}
            darkLabel={themeLabels?.dark}
          />

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-dsg-700 dark:text-dsg-300 hover:bg-dsg-200/50 dark:hover:bg-dsg-800/50 focus:outline-none cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-5 h-5" />
            ) : (
              <Bars3Icon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-dsg-200 dark:border-[#1e2c33] bg-dsg-50/95 dark:bg-[#0d1316]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-1">
            {items.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs uppercase tracking-wider font-medium transition-colors ${
                    isActive
                      ? "bg-dsg-200/70 dark:bg-dsg-800/60 text-hb-700 dark:text-hb-400 font-semibold"
                      : "text-dsg-600 dark:text-dsg-400 hover:bg-dsg-200/40 dark:hover:bg-dsg-800/30 hover:text-dsg-950 dark:hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-hb-500" />
                  )}
                </a>
              );
            })}
          </nav>
          <div className="pt-2">
            <Button
              href="#contact"
              variant="outline"
              size="sm"
              className="w-full text-xs font-mono"
            >
              {downloadCvText}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
