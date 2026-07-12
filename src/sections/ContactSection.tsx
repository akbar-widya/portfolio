import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { AnimatedText } from "@/components/AnimatedText";
import { MagneticButton } from "@/components/MagneticButton";
import { ScrollReveal } from "@/components/ScrollReveal";

const CONTACTS = [
  {
    label: "Email",
    href: "mailto:akbarwidya.dev@gmail.com",
    text: "akbarwidya.dev@gmail.com",
    x: "5%",
    y: "35%",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/akbarwidya.dev",
    text: "@akbarwidya.dev",
    x: "55%",
    y: "20%",
  },
  {
    label: "GitHub",
    href: "https://github.com/akbar-widya",
    text: "github.com/akbar-widya",
    x: "60%",
    y: "55%",
  },
];

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ctaRef.current || !linksRef.current) return;

      gsap.from(ctaRef.current, {
        yPercent: 30,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      const items = linksRef.current.querySelectorAll(".contact-item");
      if (items.length > 0) {
        gsap.from(items, {
          yPercent: 20,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            once: true,
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] py-32 md:py-40 overflow-visible"
    >
      {/* Rotated CTA */}
      <ScrollReveal delay={0} y={30}>
        <div ref={ctaRef} className="-rotate-[1.2deg] mx-0 px-6 md:px-20">
          <AnimatedText
            text="Memulai Percakapan"
            as="h2"
            className="text-[clamp(3rem,10vw,14rem)] font-bold leading-[0.85] tracking-[-0.04em] text-fg w-full"
            stagger={0.02}
          />
        </div>
      </ScrollReveal>

      {/* Links - scattered on desktop, stacked on mobile */}
      <div
        ref={linksRef}
        className="relative mt-12 md:mt-16 px-6 md:px-0 md:min-h-[50vh] space-y-8 md:space-y-0"
      >
        {CONTACTS.map((contact, i) => (
          <ScrollReveal key={contact.label} delay={i * 80} y={24} className="block md:contents">
            <a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item block md:absolute group"
              style={{ left: contact.x, top: contact.y }}
            >
              <span className="block text-[11px] uppercase tracking-[0.25em] text-muted mb-1">
                {contact.label}
              </span>
              <span className="block text-xl md:text-2xl font-light text-fg transition-transform duration-300 group-hover:translate-x-2">
                {contact.text}
              </span>
            </a>
          </ScrollReveal>
        ))}

        <ScrollReveal delay={240} y={24} className="block md:contents">
          <div className="contact-item md:absolute" style={{ left: "20%", top: "70%" }}>
            <MagneticButton
              href="/cv-akbar.pdf"
              download
              variant="solid"
              className="text-lg font-light tracking-tight"
            >
              Unduh CV
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-8 left-6 md:left-12 lg:left-20 right-6 md:right-12 lg:right-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted">
        <span>Akbar Widya Pamungkas</span>
        <span>Purwokerto, Indonesia</span>
        <span>&copy; {new Date().getFullYear()}</span>
      </footer>
    </section>
  );
}
