import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!titleRef.current) return;

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
      <div className="px-5 md:px-10 lg:px-16 max-w-[1600px] mx-auto w-full">
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
      </div>

      <div className="absolute bottom-8 left-0 right-0">
        <div className="px-5 md:px-10 lg:px-16 max-w-[1600px] mx-auto w-full">
          <div className="text-[11px] uppercase tracking-[0.25em] text-muted text-right">
            Purwokerto, Indonesia
          </div>
        </div>
      </div>
    </section>
  );
}
