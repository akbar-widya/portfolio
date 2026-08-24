import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { AnimatedText } from "@/components/AnimatedText";
import { MagneticButton } from "@/components/MagneticButton";
import { prefersReducedMotion } from "@/lib/prefers-reduced-motion";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
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
      <div aria-hidden className="hero-wash pointer-events-none absolute inset-0" />

      <div className="px-5 md:px-10 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="mb-6 md:mb-10 flex items-baseline">
          <AnimatedText
            text="Hai, saya Akbar Widya Pamungkas"
            as="span"
            className="text-base md:text-xl font-medium tracking-[-0.01em]"
          />
          <span aria-hidden className="text-base md:text-xl font-medium text-primary">
            .
          </span>
        </div>

        <div className="overflow-visible">
          <h1
            ref={titleRef}
            className="font-bold text-foreground leading-[0.82] tracking-[-0.04em] select-none bleed-text will-change-transform"
            style={{
              // Ukuran disesuaikan agar pas di dalam max-w-7xl tanpa meluber ke kanan
              fontSize: "clamp(3.5rem, 12vw, 14.5rem)",
              // Sedikit tarikan optik agar rata kiri huruf 'F' sejajar presisi dengan padding
              marginLeft: "-0.05em",
            }}
          >
            Frontend
            <br />
            Developer
            <span className="text-primary">.</span>
          </h1>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0">
        <div className="px-5 md:px-10 lg:px-16 max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            {/* CTA */}
            <div className="flex items-center gap-6 md:gap-10">
              <MagneticButton
                href="#projects"
                className="text-sm md:text-base font-medium"
              >
                Lihat Studi Kasus
              </MagneticButton>
              <a
                href="/cv-akbar.pdf"
                download
                className="text-sm md:text-base font-medium text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 decoration-border hover:decoration-foreground"
              >
                Unduh CV
              </a>
            </div>

            {/* Lokasi */}
            <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground md:text-right">
              Purwokerto, Indonesia
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
