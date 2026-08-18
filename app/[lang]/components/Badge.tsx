import React from "react";

export type BadgeVariant =
  | "neutral"
  | "primary"
  | "honey"
  | "brick"
  | "bordeaux";

export type BadgeSize = "sm" | "md";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
  pulse?: boolean;
}

const variantStyles: Record<BadgeVariant, { container: string; dot: string }> = {
  neutral: {
    container:
      "bg-dsg-200/60 dark:bg-[#162227] text-dsg-700 dark:text-dsg-300 border-dsg-300 dark:border-[#22333b]",
    dot: "bg-dsg-500",
  },
  primary: {
    container:
      "bg-vc-500/10 text-dsg-950 dark:text-vc-300 border-vc-500/30",
    dot: "bg-vc-500",
  },
  honey: {
    container:
      "bg-hb-500/10 text-hb-800 dark:text-hb-300 border-hb-500/25",
    dot: "bg-hb-500",
  },
  brick: {
    container:
      "bg-br-500/10 text-br-800 dark:text-br-300 border-br-500/25",
    dot: "bg-br-500",
  },
  bordeaux: {
    container:
      "bg-nb-500/10 text-nb-800 dark:text-nb-300 border-nb-500/25",
    dot: "bg-nb-500",
  },
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "text-[11px] px-2.5 py-1 gap-1.5 font-mono tracking-wide",
  md: "text-xs px-3 py-1.5 gap-2 font-mono tracking-wide",
};

export const Badge: React.FC<BadgeProps> = ({
  variant = "neutral",
  size = "md",
  icon,
  pulse = false,
  children,
  className = "",
  ...props
}) => {
  const styles = variantStyles[variant];

  return (
    <span
      className={`inline-flex items-center font-medium rounded-md border transition-colors ${styles.container} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 ${styles.dot}`}
          />
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${styles.dot}`}
          />
        </span>
      )}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

export default Badge;
