import type { FC, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export const Button: FC<ButtonProps> = ({
  onClick,
  type = "button",
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-bold text-sm rounded-lg px-5 py-3 cursor-pointer transition-all duration-150 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-[#111111] text-white hover:bg-[#262626] shadow-sm",
    secondary: "bg-[#e5e5e3] text-[#111111] hover:bg-[#d5d5d3]",
    outline:
      "bg-transparent text-[#111111] border border-[#dddddd] hover:bg-[#e5e5e3]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
