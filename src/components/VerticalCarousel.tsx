import { cn } from "@/lib/utils";

interface VerticalCarouselProps {
  words: string[];
  className?: string;
  speed?: number; // seconds per cycle
}

export function VerticalCarousel({
  words,
  className,
  speed = 6,
}: VerticalCarouselProps) {
  const doubled = [...words, ...words];

  return (
    <div
      className={cn(
        "relative overflow-hidden carousel-mask",
        className
      )}
      style={{ height: "1.4em" }}
    >
      <div
        className="flex flex-col"
        style={{
          animation: `scrollVertical ${speed}s linear infinite`,
        }}
      >
        {doubled.map((word, i) => (
          <span
            key={i}
            className="block leading-[1.4em] text-muted will-change-transform"
          >
            {word}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes scrollVertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>
    </div>
  );
}
