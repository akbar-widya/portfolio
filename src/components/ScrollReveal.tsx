import { useRef, useEffect, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 28,
  duration = 0.7,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("scroll-reveal-visible");
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove("scroll-reveal-visible");
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, once]);

  return (
    <div
      ref={ref}
      className={cn("scroll-reveal md:!opacity-100 md:!translate-y-0", className)}
      style={{
        "--sr-y": `${y}px`,
        "--sr-duration": `${duration}ms`,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
