import { cn } from "@/lib/utils";
import type { ReactNode, AnchorHTMLAttributes } from "react";

interface MagneticButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "ghost" | "solid";
}

export function MagneticButton({
  children,
  className,
  variant = "ghost",
  ...props
}: MagneticButtonProps) {
  const baseStyles =
    "group inline-flex items-center gap-3 transition-transform duration-300 ease-out hover:scale-[1.03] will-change-transform";

  const variants = {
    ghost: "text-foreground",
    solid:
      "bg-foreground text-background px-8 py-4 rounded-full hover:bg-muted hover:text-foreground",
  };

  return (
    <a
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      <span className="relative overflow-hidden">
        <span className="block transition-transform duration-300 group-hover:-translate-y-full">
          {children}
        </span>
        <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:-translate-y-full">
          {children}
        </span>
      </span>
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-60 group-hover:opacity-100 transition-opacity"
        >
          <path
            d="M3 8H13M13 8L9 4M13 8L9 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}
