import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({
                       children,
                       className,
                       ...props
                     }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-sm transition-all duration-300 hover:border-cyan-500/40 hover:shadow-lg",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
