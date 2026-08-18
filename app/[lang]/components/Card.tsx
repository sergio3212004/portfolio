import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  hoverEffect = true,
  children,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`relative rounded-xl bg-dsg-100/70 dark:bg-[#131d22] border border-dsg-200 dark:border-[#1e2c33] p-6 sm:p-8 transition-all duration-200 ${
        hoverEffect
          ? "hover:border-dsg-400 dark:hover:border-dsg-700 hover:shadow-xs"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
