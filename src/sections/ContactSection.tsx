import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "@/lib/prefers-reduced-motion";

const CONTACTS = [
  {
    label: "Email",
    text: "akbarwidya.dev@gmail.com",
    href: "mailto:akbarwidya.dev@gmail.com",
  },
  {
    label: "GitHub",
    text: "github.com/akbar-widya",
    href: "https://github.com/akbar-widya",
  },
  {
    label: "Instagram",
    text: "@akbargismo",
    href: "https://instagram.com/akbargismo",
  },
];

export function ContactSection() {
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
        stagger: 0.1,
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
      id="contact"
      ref={sectionRef}
      className="on-dark bg-background pt-20 md:pt-40 pb-10 md:pb-14"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        {/* ── Grid Asimetris: Kiri (Teks Utama) & Kanan (Kontak) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          {/* Kolom Kiri: Heading & Deskripsi */}
          <div className="lg:col-span-7">
            <h2 className="swiss-reveal text-[clamp(2.5rem,8vw,6.5rem)] font-bold leading-[0.9] tracking-[-0.03em] text-foreground mb-6 md:mb-8">
              Mari
              <br />
              Berbincang
              <span className="text-primary">.</span>
            </h2>
            <p className="swiss-reveal text-sm md:text-base font-light leading-[1.6] text-muted-foreground max-w-sm">
              Punya ide proyek yang ingin diwujudkan, atau sekadar butuh teman
              diskusi seputar teknologi? Jangan ragu untuk menyapa, saya selalu
              terbuka untuk obrolan santai maupun kolaborasi serius.
            </p>
          </div>

          {/* Kolom Kanan: Daftar Kontak & Tombol CV */}
          <div className="lg:col-span-4 lg:col-start-9 flex flex-col space-y-10 md:space-y-12 lg:pt-8">
            <div className="flex flex-col space-y-8">
              {CONTACTS.map((contact) => (
                <div key={contact.label} className="swiss-reveal flex flex-col">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    {contact.label}
                  </span>
                  <a
                    href={contact.href}
                    target={
                      contact.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      contact.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-lg md:text-xl font-medium text-foreground hover:text-primary transition-colors w-fit underline underline-offset-4 decoration-border hover:decoration-primary"
                  >
                    {contact.text}
                  </a>
                </div>
              ))}
            </div>

            {/* Tombol CV menyatu dengan rapi di bawah daftar kontak */}
            <div className="swiss-reveal">
              <a
                href="/resume-akbar-widya.pdf"
                download
                className="inline-flex items-center gap-3 text-sm md:text-base font-medium text-primary-foreground bg-primary px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:brightness-105"
              >
                Unduh CV
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Footer terintegrasi dalam max-w-7xl ── */}
        <div className="mt-24 md:mt-32 h-[1px] bg-border" />
        <footer className="mt-6 md:mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>Akbar Widya</span>
          <span>Purwokerto, Indonesia</span>
          <span>&copy; {new Date().getFullYear()}</span>
        </footer>
      </div>
    </section>
  );
}
