"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

export interface LanguageToggleProps {
  currentLocale: string;
  labels?: {
    en: string;
    es: string;
    toggle?: string;
  };
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  currentLocale,
  labels = { en: "EN", es: "ES", toggle: "Change language" },
  className = "",
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (newLocale: "en" | "es") => {
    if (newLocale === currentLocale) return;

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

    const newPath = `/${segments.join("/")}`;
    router.push(newPath);
  };

  return (
    <div
      className={`inline-flex items-center gap-1 p-1 rounded-xl bg-dsg-200/40 dark:bg-dsg-900/60 border border-dsg-200/60 dark:border-dsg-800/60 text-xs font-medium ${className}`}
    >
      <button
        type="button"
        onClick={() => handleLanguageChange("es")}
        aria-label={labels.es}
        className={`px-2 py-1 rounded-lg transition-all duration-200 cursor-pointer ${
          currentLocale === "es"
            ? "bg-vc-500 text-dsg-950 font-semibold shadow-xs"
            : "text-dsg-600 dark:text-dsg-400 hover:text-dsg-950 dark:hover:text-dsg-100"
        }`}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => handleLanguageChange("en")}
        aria-label={labels.en}
        className={`px-2 py-1 rounded-lg transition-all duration-200 cursor-pointer ${
          currentLocale === "en"
            ? "bg-vc-500 text-dsg-950 font-semibold shadow-xs"
            : "text-dsg-600 dark:text-dsg-400 hover:text-dsg-950 dark:hover:text-dsg-100"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
