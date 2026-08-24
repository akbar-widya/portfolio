import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { AnimatedText } from "@/components/AnimatedText";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      const els = sectionRef.current.querySelectorAll(".swiss-reveal");

      gsap.from(els, {
        yPercent: 20,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 md:py-40 border-t border-line"
    >
      <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-3 lg:sticky lg:top-32 lg:self-start">
          <AnimatedText
            text="Tentang"
            as="h2"
            className="text-[clamp(1.5rem,4vw,5rem)] font-bold leading-[0.9] tracking-[-0.03em] text-fg"
            stagger={0.04}
          />
        </div>

        <div className="lg:col-span-3 lg:border-l lg:border-line lg:pl-8">
          <p className="swiss-reveal text-base md:text-lg font-semibold leading-[1.5] text-fg">
            Saya percaya bahwa setiap baris kode adalah sebuah keputusan desain.
            Teknologi, pada hakikatnya, bukan sekadar fungsionalitas, tetapi
            juga estetika yang berbicara kepada penggunanya.
          </p>
        </div>

        <div className="lg:col-span-3 lg:border-l lg:border-line lg:pl-8">
          <p className="swiss-reveal text-sm md:text-base font-light leading-[1.7] text-muted">
            Berawal dari bangku SMK Telkom Purwokerto di jurusan Rekayasa
            Perangkat Lunak, saya membentuk fondasi teknis yang kokoh.
            Pengalaman magang sebagai Web Developer di Ishpot Coffee memberikan
            saya wawasan nyata dalam membangun solusi digital yang tidak hanya
            berjalan, tetapi juga menyentuh.
          </p>
        </div>

        <div className="lg:col-span-3 lg:border-l lg:border-line lg:pl-8">
          <p className="swiss-reveal text-sm md:text-base font-light leading-[1.7] text-muted">
            Saat ini, saya melanjutkan studi di Telkom University Purwokerto,
            jurusan Bisnis Digital, untuk memperdalam pemahaman tentang
            bagaimana teknologi berpadu dengan strategi bisnis. Sertifikasi{" "}
            <a
              href="https://coursera.org/verify/professional-cert/LO4IF4HQ0CIE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-fg underline underline-offset-4 hover:text-muted transition-colors"
            >
              Google AI for Professionals ↗
            </a>
            ,{" "}
            <a
              href="https://coursera.org/verify/specialization/J26O95I8UQQG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-fg underline underline-offset-4 hover:text-muted transition-colors"
            >
              Google Agile Essentials ↗
            </a>
            , dan{" "}
            <a
              href="https://coursera.org/verify/professional-cert/Q9N4SQCJPIOD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-fg underline underline-offset-4 hover:text-muted transition-colors"
            >
              Google IT Automation with Python ↗
            </a>{" "}
            menegaskan komitmen saya untuk terus berkembang di tengah lanskap
            yang selalu berubah.
          </p>
        </div>
      </div>
    </section>
  );
}
