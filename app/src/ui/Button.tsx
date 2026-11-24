import type { FC, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "cobalt" | "ghost";
  size?: "sm" | "md" | "lg";
}

const BASE_STYLES =
  "inline-flex items-center justify-center font-medium rounded-md cursor-pointer transition-all duration-150 active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0047ff]";

const SIZES = {
  sm: "text-xs px-3 py-1.5 gap-1.5",
  md: "text-sm px-4 py-2.5 gap-2",
  lg: "text-base px-5 py-3 gap-2.5",
};

const VARIANTS = {
  primary: "bg-[#0e1013] text-white hover:bg-[#1f242c] shadow-xs",
  secondary: "bg-[#e2e5e9] text-[#0e1013] hover:bg-[#d6dbe0]",
  outline:
    "bg-white text-[#0e1013] border border-[#e2e5e9] hover:bg-[#f1f3f5] hover:border-[#ccd2d9]",
  cobalt: "bg-[#0047ff] text-white hover:bg-[#003ad1] shadow-xs",
  ghost: "bg-transparent text-[#0e1013] hover:bg-[#e2e5e9]/50",
};

export const Button: FC<ButtonProps> = ({
  type = "button",
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`${BASE_STYLES} ${SIZES[size]} ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
