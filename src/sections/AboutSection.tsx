import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "@/lib/prefers-reduced-motion";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      if (!sectionRef.current) return;
      const els = sectionRef.current.querySelectorAll(".swiss-reveal");

      gsap.from(els, {
        yPercent: 20,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.1, // Disesuaikan sedikit agar alirannya lebih halus
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
      className="py-16 md:py-40 bg-surface-alt"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 flex flex-col items-center">
        {/* Header Section */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="swiss-reveal text-[clamp(2rem,5vw,5rem)] font-bold leading-[0.9] tracking-[-0.03em] text-foreground">
            Mengenal Saya
          </h2>
        </div>

        {/* Editorial Content */}
        <div className="max-w-3xl w-full flex flex-col items-center text-center space-y-10 md:space-y-12">
          {/* Statement Utama (Filosofi) */}
          <p className="swiss-reveal text-xl md:text-3xl font-medium leading-[1.4] text-foreground">
            Bagi saya, menulis kode bukan sekadar membuat aplikasi yang
            berfungsi, tetapi tentang menciptakan{" "}
            <span className="text-primary">
              pengalaman yang nyaman dan bermakna
            </span>{" "}
            bagi penggunanya.
          </p>

          {/* Paragraf Naratif (Background & Sertifikasi yang digabung) */}
          <div className="space-y-6 text-sm md:text-base font-light leading-[1.8] text-muted-foreground max-w-2xl">
            <p className="swiss-reveal">
              Ketertarikan saya pada dunia perangkat lunak sudah dipupuk sejak
              masa sekolah di SMK Telkom Purwokerto. Ilmu tersebut kemudian saya
              terapkan secara nyata saat magang sebagai Web Developer di Ishpot
              Coffee, tempat saya belajar langsung bagaimana membangun produk
              digital yang benar-benar menjawab kebutuhan pengguna.
            </p>
            <p className="swiss-reveal">
              Saat ini, saya sedang menempuh studi Bisnis Digital di Telkom
              University Purwokerto untuk memahami bagaimana teknologi dan
              strategi bisnis bisa berjalan beriringan. Di luar rutinitas
              kampus, saya terus memperbarui wawasan melalui sertifikasi
              profesional:{" "}
              <a
                href="https://coursera.org/verify/professional-cert/LO4IF4HQ0CIE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-foreground underline underline-offset-4 decoration-primary/40 hover:text-primary hover:decoration-primary transition-colors"
              >
                Google AI for Professionals ↗
              </a>
              ,{" "}
              <a
                href="https://coursera.org/verify/specialization/J26O95I8UQQG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-foreground underline underline-offset-4 decoration-primary/40 hover:text-primary hover:decoration-primary transition-colors"
              >
                Agile Essentials ↗
              </a>
              , dan{" "}
              <a
                href="https://coursera.org/verify/professional-cert/Q9N4SQCJPIOD"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-foreground underline underline-offset-4 decoration-primary/40 hover:text-primary hover:decoration-primary transition-colors"
              >
                IT Automation with Python ↗
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
