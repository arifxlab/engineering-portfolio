import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
                         children,
                         variant = "primary",
                         size = "md",
                         className,
                         ...props
                       }: ButtonProps) {
  const variants = {
    primary:
      "bg-cyan-500 text-white hover:bg-cyan-600",
    secondary:
      "bg-zinc-800 text-white hover:bg-zinc-700",
    outline:
      "border border-zinc-700 text-zinc-100 hover:bg-zinc-900",
    ghost:
      "text-zinc-200 hover:bg-zinc-900",
  };

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-5",
    lg: "h-12 px-7 text-lg",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
