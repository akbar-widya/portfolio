import { useRef, useState, useMemo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollReveal } from "@/components/ScrollReveal";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string;
  link: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "TourVisto",
    description:
      "Platform otomasi perjalanan yang merancang itinerary secara cerdas melalui formulir dinamis dan integrasi AI.",
    tech: "React.js, Supabase, React Router v7, ShadCn, Google OAuth",
    link: "https://tourvisto-dashboard.vercel.app/",
  },
  {
    id: 2,
    title: "Visual Thinkboard",
    description:
      "Papan tugas visual yang mengubah kompleksitas manajemen proyek menjadi pengalaman intuitif dan estetis.",
    tech: "Vue.js, Supabase, Vue Router, Tailwind, Clerk",
    link: "https://visual-thinkboard.vercel.app/",
  },
  {
    id: 3,
    title: "Info Film",
    description:
      "Mesin pencarian film dengan rekomendasi infografis, menghubungkan penonton dengan cerita yang relevan.",
    tech: "React.js, Tailwind, React Router, IMDB API",
    link: "https://movie-finder-akbarw.vercel.app/",
  },
];

function getFloatXY(index: number) {
  const patterns = [
    { nameX: "30%", nameY: "20%", descX: "10%", descY: "70%", techX: "60%", techY: "15%" },
    { nameX: "50%", nameY: "15%", descX: "25%", descY: "65%", techX: "15%", techY: "60%" },
    { nameX: "20%", nameY: "25%", descX: "55%", descY: "15%", techX: "55%", techY: "70%" },
  ];
  return patterns[index % patterns.length];
}

function ProjectEntry({ project, index }: { project: Project; index: number }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState(false);
  const pos = useMemo(() => getFloatXY(index), [index]);

      useGSAP(
        () => {
          if (!sectionRef.current) return;
          gsap.from(sectionRef.current, {
            yPercent: 20,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              once: true,
            },
            delay: index * 0.1,
          });
        },
        { scope: sectionRef }
      );

  const linkProps = {
    href: project.link,
    target: "_blank" as const,
    rel: "noopener noreferrer" as const,
  };

  return (
    <section
      ref={sectionRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative min-h-0 md:min-h-[80dvh] border-t border-line overflow-visible"
    >
      {/* ═══ DESKTOP (floating layout) ═══ */}
      <div className="hidden md:block absolute inset-0">
        {/* Project number */}
        <span className="absolute top-8 left-8 lg:left-20 text-[11px] uppercase tracking-[0.2em] text-muted">
          0{index + 1}
        </span>

        {/* Floating name */}
        <div
          className="absolute select-none"
          style={{ left: pos.nameX, top: pos.nameY }}
        >
          <a
            {...linkProps}
            className="inline-block transition-all duration-300"
            style={{
              transform: hovered ? "translateX(12px)" : "translateX(0)",
            }}
          >
            <span className="text-[clamp(3rem,8vw,10rem)] font-bold leading-[0.85] tracking-[-0.04em] text-fg">
              {project.title}
            </span>
          </a>
        </div>

        {/* Description on hover */}
        <div
          className="absolute transition-all duration-500 ease-out"
          style={{
            left: pos.descX,
            top: pos.descY,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(10px)",
          }}
        >
          <p className="max-w-sm text-xl md:text-2xl font-light leading-relaxed text-muted">
            {project.description}
          </p>
        </div>

        {/* Tech on hover */}
        <div
          className="absolute transition-all duration-500 ease-out"
          style={{
            left: pos.techX,
            top: pos.techY,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(10px)",
          }}
        >
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted">
            {project.tech}
          </span>
        </div>
      </div>

      {/* ═══ MOBILE (conventional stack) ═══ */}
      <div className="block md:hidden py-12 px-0 space-y-5">
        <ScrollReveal delay={0} y={20}>
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted block">
            0{index + 1}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={60} y={28}>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="block group">
            <h3 className="text-5xl font-bold leading-[0.9] tracking-[-0.03em] text-fg transition-all duration-300 group-hover:translate-x-2">
              {project.title}
            </h3>
          </a>
        </ScrollReveal>

        <ScrollReveal delay={120} y={24}>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-muted">
            {project.description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={180} y={20}>
          <div className="pt-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted">
              {project.tech}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={240} y={16}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors mt-2"
          >
            Kunjungi
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M10 6l-3-3M10 6l-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section className="py-32 md:py-40 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto mb-8 md:mb-12">
        <ScrollReveal delay={0} y={20}>
          <span className="text-[11px] uppercase tracking-[0.25em] text-muted block mb-2">
            Pekerjaan Terpilih
          </span>
        </ScrollReveal>
        <ScrollReveal delay={80} y={28}>
          <h2 className="text-[clamp(1.5rem,4vw,5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-fg">
            Studi Kasus
          </h2>
        </ScrollReveal>
      </div>

      {PROJECTS.map((project, index) => (
        <div key={project.id}>
          <ProjectEntry project={project} index={index} />
        </div>
      ))}
    </section>
  );
}
