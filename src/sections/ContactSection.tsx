import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function IconEmail() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const CONTACTS = [
  {
    icon: <IconEmail />,
    label: "Email",
    text: "akbarwidya.dev@gmail.com",
    href: "mailto:akbarwidya.dev@gmail.com",
  },
  {
    icon: <IconInstagram />,
    label: "Instagram",
    text: "@akbarwidya.dev",
    href: "https://instagram.com/akbarwidya.dev",
  },
  {
    icon: <IconGitHub />,
    label: "GitHub",
    text: "github.com/akbar-widya",
    href: "https://github.com/akbar-widya",
  },
];

export function ContactSection() {
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
    { scope: sectionRef }
  );

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="pt-16 md:pt-40 pb-8 md:pb-16 border-t border-line"
    >
      <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16">

        {/* ── Zone 1: Hero — Heading + Intro ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-start">
          <div className="lg:col-span-7">
            <span className="swiss-reveal text-[11px] uppercase tracking-[0.25em] text-muted block mb-3 md:mb-4">
              Mari Kita
            </span>
            <h2 className="swiss-reveal text-[clamp(2.5rem,9vw,7rem)] font-bold leading-[0.88] tracking-[-0.03em] text-fg">
              Memulai
              <br />
              Percakapan
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 pt-2 md:pt-4">
            <p className="swiss-reveal text-sm md:text-lg font-medium leading-[1.6] text-fg">
              Punya proyek menarik atau sekadar ingin bertukar ide? Saya selalu terbuka untuk kolaborasi dan peluang baru.
            </p>
          </div>
        </div>

        {/* ── Spacer ── */}
        <div className="h-12 md:h-24" />

        {/* ── Divider ── */}
        <div className="h-[1px] bg-line" />

        {/* ── Zone 2: Contact Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {CONTACTS.map((contact, i) => (
            <div
              key={contact.label}
              className={`swiss-reveal py-8 md:py-16 border-b border-line md:border-b-0 ${
                i < CONTACTS.length - 1 ? "md:border-r md:border-line" : ""
              } ${i > 0 ? "md:pl-10" : ""}`}
            >
              <div className="text-fg mb-4 md:mb-6">{contact.icon}</div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted block mb-1.5 md:mb-2">
                {contact.label}
              </span>
              <a
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-base md:text-lg text-fg hover:text-muted transition-colors"
              >
                {contact.text}
              </a>
              <div className="mt-6 md:mt-8 w-10 md:w-12 h-[1px] bg-muted" />
            </div>
          ))}
        </div>

        {/* ── CV Button ── */}
        <div className="py-8 md:py-6 border-b border-line md:border-b-0">
          <a
            href="/cv-akbar.pdf"
            download
            className="swiss-reveal inline-flex items-center gap-3 text-base md:text-lg font-medium md:bg-fg md:text-bg md:px-8 md:py-4 md:rounded-full transition-colors hover:text-muted md:hover:bg-muted"
          >
            Unduh CV
            <span>→</span>
          </a>
        </div>
      </div>

      {/* ── Divider before footer ── */}
      <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="mt-12 md:mt-32 h-[1px] bg-line" />
      </div>

      {/* ── Footer ── */}
      <footer className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 mt-6 md:mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted">
        <span>Akbar Widya Pamungkas</span>
        <span>Purwokerto, Indonesia</span>
        <span>&copy; {new Date().getFullYear()}</span>
      </footer>
    </section>
  );
}
