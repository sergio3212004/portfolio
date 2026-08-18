import React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  tag?: string;
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
  containerClassName?: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  tag,
  title,
  subtitle,
  align = "left",
  children,
  className = "",
  containerClassName = "",
  ...props
}) => {
  const isCenter = align === "center";

  return (
    <section
      id={id}
      className={`py-20 sm:py-28 relative scroll-mt-20 ${className}`}
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
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-hb-500 inline-block" />
                <span className="text-xs font-mono tracking-widest text-hb-600 dark:text-hb-400 uppercase font-semibold">
                  {tag}
                </span>
              </div>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dsg-950 dark:text-[#edf3f5]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-base text-dsg-600 dark:text-dsg-400 leading-relaxed">
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
