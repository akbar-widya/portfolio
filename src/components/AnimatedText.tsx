import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function AnimatedText({
  text,
  className,
  delay = 0,
  stagger = 0.02,
  as: Tag = "span",
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const chars = containerRef.current?.querySelectorAll(".char");
      if (!chars || chars.length === 0) return;

      gsap.fromTo(
        chars,
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.2, ease: "power3.out", stagger, delay }
      );
    },
    { scope: containerRef }
  );

  const words = text.split(" ");

  return (
    <div ref={containerRef}>
      <Tag className={cn("inline-flex flex-wrap", className)}>
        {words.map((word, wi) => (
          <span key={wi} className="inline-flex mr-[0.25em]">
            {word.split("").map((char, ci) => (
              <span
                key={ci}
                className="char inline-block will-change-transform"
                style={{ whiteSpace: "pre" }}
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </Tag>
    </div>
  );
}
