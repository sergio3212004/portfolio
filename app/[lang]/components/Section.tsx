import React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  tag?: string;
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
  containerClassName?: string;
  alternate?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  id,
  tag,
  title,
  subtitle,
  align = "left",
  alternate = false,
  children,
  className = "",
  containerClassName = "",
  ...props
}) => {
  const isCenter = align === "center";

  return (
    <section
      id={id}
      className={`py-20 sm:py-28 relative scroll-mt-20 transition-colors ${
        alternate
          ? "bg-dsg-100/35 dark:bg-[#0e1518]/70 border-y border-dsg-200/70 dark:border-[#1b272f]/60"
          : "bg-transparent"
      } ${className}`}
      {...props}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}
      >
        {(tag || title || subtitle) && (
          <div
            className={`max-w-3xl mb-12 sm:mb-16 ${
              isCenter ? "mx-auto text-center" : "text-left"
            }`}
          >
            {tag && (
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dsg-200/70 dark:bg-[#162228] border border-dsg-300/80 dark:border-[#22333c] shadow-xs mb-3.5 ${
                  isCenter ? "justify-center" : ""
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-hb-500 animate-pulse" />
                <span className="text-[11px] font-mono tracking-widest text-hb-700 dark:text-hb-400 uppercase font-bold">
                  {tag}
                </span>
              </div>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-dsg-950 dark:text-[#edf3f5] leading-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3.5 text-base sm:text-lg text-dsg-600 dark:text-dsg-400 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
