"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ES, GB } from "country-flag-icons/react/3x2";

export interface LanguageToggleProps {
  currentLocale: string;
  labels?: {
    en: string;
    es: string;
    toggle?: string;
  };
  className?: string;
}

const locales = [
  { code: "es" as const, label: "Español", Flag: ES },
  { code: "en" as const, label: "English", Flag: GB },
];

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  currentLocale,
  labels = { en: "EN", es: "ES", toggle: "Change language" },
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (newLocale: "en" | "es") => {
    if (newLocale === currentLocale) {
      setOpen(false);
      return;
    }

    if (!pathname) {
      router.push(`/${newLocale}`);
      return;
    }

    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0 && (segments[0] === "en" || segments[0] === "es")) {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }

    router.push(`/${segments.join("/")}`);
    setOpen(false);
  };

  const current = locales.find((l) => l.code === currentLocale) ?? locales[0];

  return (
    <div ref={ref} className={`relative inline-flex items-center ${className}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={labels.toggle}
        className="inline-flex items-center gap-2 px-2 py-1 rounded-lg border text-xs font-medium bg-dsg-200/40 dark:bg-dsg-900/60 border-dsg-200/60 dark:border-dsg-800/60 text-dsg-600 dark:text-dsg-400 cursor-pointer outline-none focus:ring-2 focus:ring-vc-500"
      >
        <current.Flag className="w-5 h-[15px] rounded-sm" />
        {current.label}
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 py-1 rounded-lg border bg-white dark:bg-dsg-900 border-dsg-200/60 dark:border-dsg-800/60 shadow-lg z-50 min-w-[100px]">
          {locales.map(({ code, label, Flag }) => (
            <button
              key={code}
              type="button"
              onClick={() => handleLanguageChange(code)}
              className={`w-full inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${code === currentLocale
                  ? "bg-vc-500/10 text-vc-600 dark:text-vc-400"
                  : "text-dsg-600 dark:text-dsg-400 hover:bg-dsg-100 dark:hover:bg-dsg-800"
                }`}
            >
              <Flag className="w-5 h-[15px] rounded-sm" />
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;
