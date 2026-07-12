import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { AnimatedText } from "@/components/AnimatedText";
import { ScrollReveal } from "@/components/ScrollReveal";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!textRef.current) return;
      const paras = textRef.current.querySelectorAll(".reveal-text");

      gsap.from(paras, {
        yPercent: 30,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-32 md:py-40 px-6 md:px-12 lg:px-20"
    >
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-4">
          <ScrollReveal delay={0} y={24}>
            <AnimatedText
              text="Tentang"
              as="h2"
              className="text-6xl md:text-7xl lg:text-[8vw] font-bold leading-[0.9] tracking-[-0.03em] text-fg"
              stagger={0.04}
            />
          </ScrollReveal>
          <ScrollReveal delay={100} y={16}>
            <div className="mt-6 w-16 h-[1px] bg-muted" />
          </ScrollReveal>
        </div>

        <div ref={textRef} className="lg:col-span-7 lg:col-start-6 space-y-8 md:space-y-10">
          <ScrollReveal delay={0} y={30}>
            <p className="reveal-text text-2xl md:text-3xl lg:text-4xl font-light leading-[1.4] text-fg tracking-tight">
              Saya percaya bahwa setiap baris kode adalah sebuah keputusan desain.
              Teknologi, pada hakikatnya, bukan sekadar fungsionalitas, tetapi juga
              estetika yang berbicara kepada penggunanya.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80} y={28}>
            <p className="reveal-text text-base md:text-lg font-light leading-[1.7] text-muted">
              Berawal dari bangku SMK Telkom Purwokerto di jurusan Rekayasa
              Perangkat Lunak, saya membentuk fondasi teknis yang kokoh.
              Pengalaman magang sebagai Web Developer di Ishpot Coffee memberikan
              saya wawasan nyata dalam membangun solusi digital yang tidak hanya
              berjalan, tetapi juga menyentuh.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={160} y={28}>
            <p className="reveal-text text-base md:text-lg font-light leading-[1.7] text-muted">
              Saat ini, saya melanjutkan studi di Telkom University Purwokerto,
              jurusan Bisnis Digital, untuk memperdalam pemahaman tentang
              bagaimana teknologi berpadu dengan strategi bisnis. Sertifikasi dari
              Google dalam{" "}
              <em className="text-fg not-italic">AI for Professionals</em> dan{" "}
              <em className="text-fg not-italic">Agile Essentials</em> menegaskan
              komitmen saya untuk terus berkembang di tengah lanskap yang selalu
              berubah.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
