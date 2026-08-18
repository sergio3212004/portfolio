"use client";

import React, { useSyncExternalStore } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export interface ThemeToggleProps {
  lightLabel?: string;
  darkLabel?: string;
  className?: string;
}

const themeStore = {
  subscribe(callback: () => void) {
    if (typeof window === "undefined") return () => {};
    const observer = new MutationObserver(callback);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    window.addEventListener("storage", callback);
    return () => {
      observer.disconnect();
      window.removeEventListener("storage", callback);
    };
  },
  getSnapshot(): boolean {
    if (typeof window === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  },
  getServerSnapshot(): boolean {
    return false;
  },
};

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  lightLabel = "Light mode",
  darkLabel = "Dark mode",
  className = "",
}) => {
  const isDark = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
    themeStore.getServerSnapshot,
  );

  const toggleTheme = () => {
    const nextIsDark = !isDark;

    if (nextIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? lightLabel : darkLabel}
      title={isDark ? lightLabel : darkLabel}
      className={`relative inline-flex items-center justify-center p-2 rounded-xl text-dsg-700 dark:text-dsg-300 hover:text-hb-600 dark:hover:text-hb-400 hover:bg-dsg-200/50 dark:hover:bg-dsg-800/60 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-vc-400 ${className}`}
    >
      <span className="sr-only">{isDark ? lightLabel : darkLabel}</span>
      {isDark ? (
        <SunIcon className="w-5 h-5 transition-transform duration-300 rotate-0 hover:rotate-45 text-vc-400" />
      ) : (
        <MoonIcon className="w-5 h-5 transition-transform duration-300 -rotate-12 hover:rotate-0 text-dsg-800" />
      )}
    </button>
  );
};

export default ThemeToggle;
