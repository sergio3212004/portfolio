import React from "react";
import Link from "next/link";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "honey"
  | "outline"
  | "ghost"
  | "danger";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const variantStyles: Record<ButtonVariant, string> = {
  // vanilla-custard-500 with dark text (strict accessibility compliance)
  primary:
    "bg-vc-500 text-dsg-950 font-bold hover:bg-vc-400 focus-visible:ring-2 focus-visible:ring-vc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] tracking-wider uppercase",
  // honey-bronze accent
  honey:
    "bg-hb-500 text-dsg-50 font-semibold hover:bg-hb-400 focus-visible:ring-2 focus-visible:ring-hb-400 active:scale-[0.98] tracking-wider uppercase",
  // Sober matte slate secondary
  secondary:
    "bg-dsg-100 dark:bg-dsg-900 text-dsg-900 dark:text-dsg-100 hover:bg-dsg-200 dark:hover:bg-dsg-800 hover:text-hb-600 dark:hover:text-hb-400 border border-dsg-200 dark:border-dsg-800 active:scale-[0.98]",
  // Minimalist crisp outline
  outline:
    "border border-dsg-300 dark:border-dsg-700 text-dsg-800 dark:text-dsg-200 hover:border-hb-500 hover:text-hb-600 dark:hover:border-hb-400 dark:hover:text-hb-400 bg-transparent active:scale-[0.98] tracking-wider uppercase",
  ghost:
    "text-dsg-700 dark:text-dsg-300 hover:text-dsg-950 dark:hover:text-dsg-50 hover:bg-dsg-200/50 dark:hover:bg-dsg-800/50 bg-transparent",
  danger:
    "bg-nb-500 text-white font-semibold hover:bg-nb-600 focus-visible:ring-2 focus-visible:ring-nb-400 active:scale-[0.98]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3.5 py-1.5 text-xs rounded-md gap-1.5",
  md: "px-5 py-2.5 text-xs rounded-md gap-2",
  lg: "px-7 py-3.5 text-xs sm:text-sm rounded-md gap-2.5",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  external = false,
  icon,
  iconPosition = "left",
  children,
  className = "",
  disabled,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none focus:outline-none select-none";
  const combinedClasses = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="inline-flex shrink-0 items-center">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="inline-flex shrink-0 items-center">{icon}</span>
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {content}
    </button>
  );
};

export default Button;
