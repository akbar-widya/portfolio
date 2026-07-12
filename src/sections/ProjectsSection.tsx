import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  year: string;
  role: string;
  link: string;
  github?: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "TourVisto",
    description:
      "Platform otomasi perjalanan yang merancang itinerary secara cerdas melalui formulir dinamis dan integrasi AI.",
    tech: ["React.js", "Supabase", "React Router v7", "ShadCn", "Google OAuth"],
    year: "2025",
    role: "Fullstack Developer",
    link: "https://tourvisto-dashboard.vercel.app/",
  },
  {
    id: 2,
    title: "Visual Thinkboard",
    description:
      "Papan tugas visual yang mengubah kompleksitas manajemen proyek menjadi pengalaman intuitif dan estetis.",
    tech: ["Vue.js", "Supabase", "Vue Router", "Tailwind", "Clerk"],
    year: "2025",
    role: "Frontend Developer",
    link: "https://visual-thinkboard.vercel.app/",
  },
  {
    id: 3,
    title: "Info Film",
    description:
      "Mesin pencarian film dengan rekomendasi infografis, menghubungkan penonton dengan cerita yang relevan.",
    tech: ["React.js", "Tailwind", "React Router", "IMDB API"],
    year: "2025",
    role: "Frontend Developer",
    link: "https://movie-finder-akbarw.vercel.app/",
  },
];

function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!rowRef.current) return;
      gsap.from(rowRef.current, {
        yPercent: 15,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rowRef.current,
          start: "top 85%",
          once: true,
        },
        delay: index * 0.08,
      });
    },
    { scope: rowRef }
  );

  return (
    <div ref={rowRef} className="border-t border-line">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 py-8 lg:py-12">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold leading-[0.9] tracking-[-0.03em] text-fg transition-transform duration-300 hover:translate-x-2">
            {project.title}
          </h3>
          <p className="mt-4 text-sm md:text-base font-light leading-[1.7] text-muted">
            {project.description}
          </p>
        </div>

        <div className="lg:border-l lg:border-line lg:pl-8">
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted block mb-3">
            Teknologi
          </span>
          <div className="space-y-1">
            {project.tech.map((t) => (
              <p key={t} className="text-sm text-fg">
                {t}
              </p>
            ))}
          </div>
        </div>

        <div className="lg:border-l lg:border-line lg:pl-8">
          <div className="space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted block mb-1">
                Tahun
              </span>
              <p className="text-sm text-fg">{project.year}</p>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted block mb-1">
                Peran
              </span>
              <p className="text-sm text-fg">{project.role}</p>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted block mb-1">
                Link
              </span>
              <div className="space-y-1">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-fg underline underline-offset-4 hover:text-muted transition-colors block"
                >
                  Live Demo ↗
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-fg underline underline-offset-4 hover:text-muted transition-colors block"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      const headerEls = sectionRef.current.querySelectorAll(".section-header-reveal");

      gsap.from(headerEls, {
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
      id="projects"
      ref={sectionRef}
      className="py-16 md:py-40 border-t border-line"
    >
      <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        <div className="lg:col-span-3 lg:sticky lg:top-32 lg:self-start">
          <h2 className="section-header-reveal text-[clamp(1.5rem,4vw,5rem)] font-bold leading-[0.9] tracking-[-0.03em] text-fg">
            Studi Kasus
          </h2>
          <div className="section-header-reveal mt-6 w-16 h-[1px] bg-muted" />
        </div>

        <div className="lg:col-span-9">
          {PROJECTS.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
