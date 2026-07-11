import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { VerticalCarousel } from "@/components/VerticalCarousel";

const CAROUSEL_WORDS = [
  "React Specialist",
  "UI/UX Enthusiast",
  "Digital Craftsman",
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const stampRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!titleRef.current) return;

      if (stampRef.current) {
        gsap.from(stampRef.current, {
          yPercent: -20,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.3,
        });
      }

      // Unified scroll-driven timeline: entrance → hold → dissolve
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      })
        .from(titleRef.current, {
          yPercent: 30,
          opacity: 0,
          duration: 0.2,
          ease: "power2.out",
        })
        .to({}, { duration: 0.3 })
        .to(titleRef.current, {
          yPercent: -40,
          opacity: 0,
          filter: "blur(6px)",
          duration: 0.5,
          ease: "none",
        });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex flex-col justify-center pt-32 pb-16 overflow-visible"
    >
      {/* Stamp label */}
      <div
        ref={stampRef}
        className="mb-6 md:mb-8 ml-[8vw] md:ml-[10vw]"
      >
        <div className="flex items-center gap-3">
          <span className="text-[11px] uppercase tracking-[0.3em] text-muted font-normal leading-none">
            Specializing in
          </span>
          <span className="w-8 h-[1px] bg-muted" />
        </div>
        <div className="mt-2">
          <VerticalCarousel
            words={CAROUSEL_WORDS}
            speed={8}
            className="text-[11px] uppercase tracking-[0.2em] text-muted"
          />
        </div>
      </div>

      {/* Bleeding monolith */}
      <div className="overflow-visible">
        <h1
          ref={titleRef}
          className="font-bold text-fg leading-[0.82] tracking-[-0.04em] select-none bleed-text will-change-transform"
          style={{
            fontSize: "clamp(3.5rem, 16vw, 22rem)",
            marginLeft: "clamp(-0.5rem, -4vw, -8rem)",
          }}
        >
          Frontend
          <br />
          Developer
        </h1>
      </div>

      {/* Location — bottom right */}
      <div className="absolute bottom-8 right-6 md:right-12 lg:right-20 text-[11px] uppercase tracking-[0.25em] text-muted">
        Purwokerto, Indonesia
      </div>
    </section>
  );
}
