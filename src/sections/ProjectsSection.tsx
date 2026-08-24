import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  github?: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "ForgeFlow WMS",
    description:
      "Sistem manajemen gudang (WMS) skala enterprise untuk mengelola pergerakan stok presisi, alokasi pekerjaan, dan analitik data terpusat.",
    link: "https://forgeflow-web.pages.dev",
    image: "/projects/forgeflow.jpg",
  },
  {
    id: 2,
    title: "HabitEngine",
    description:
      "Aplikasi pelacakan kebiasaan harian untuk memantau progres, menganalisis tren, dan menjaga streak dengan sistem autentikasi dan isolasi data yang aman.",
    link: "https://track-habit.akbarwidya-dev.workers.dev",
    image: "/projects/trackhabit.jpg",
  },
  {
    id: 3,
    title: "TourVisto",
    description:
      "Platform otomasi perjalanan yang merancang itinerary secara cerdas melalui formulir dinamis dan integrasi AI. (Catatan: Matikan 3rd-party blocker jika gagal login).",
    link: "https://tourvisto-dashboard.vercel.app/",
    image: "/projects/tourvisto.jpg",
  },
  {
    id: 4,
    title: "Asyiah Craft",
    description:
      "Katalog digital UMKM kerajinan rajut dengan pemesanan via WhatsApp. Aktif digunakan sebagai website resmi operasional Asyiah Craft",
    link: "https://asyiahcraft.vercel.app/",
    image: "/projects/asyiahcraft.jpg",
  },
  {
    id: 5,
    title: "Visual Thinkboard",
    description:
      "Papan tugas visual yang mengubah kompleksitas manajemen proyek menjadi pengalaman intuitif dan estetis.",
    link: "https://visual-thinkboard.vercel.app/",
    image: "/projects/thinkboard.jpg",
  },
  {
    id: 6,
    title: "Info Film",
    description:
      "Mesin pencarian film dengan rekomendasi infografis, menghubungkan penonton dengan cerita yang relevan.",
    link: "https://movie-finder-akbarw.vercel.app/",
    image: "/projects/infofilm.jpg",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!cardRef.current) return;
      gsap.from(cardRef.current, {
        yPercent: 15,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          once: true,
        },
        // Memberikan sedikit delay bergantian untuk efek grid
        delay: (index % 2) * 0.1,
      });
    },
    { scope: cardRef },
  );

  return (
    <div ref={cardRef} className="flex flex-col group">
      {/* Image */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block mb-6"
      >
        <div className="aspect-[4/3] rounded-xl overflow-hidden bg-line">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </a>

      {/* Name + Link */}
      <div className="flex justify-between items-start gap-4 mb-3">
        <h3 className="text-xl md:text-2xl font-bold leading-[0.9] tracking-[-0.03em] text-fg">
          {project.title}
        </h3>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-sm font-medium text-fg underline underline-offset-4 hover:text-muted transition-colors mt-1 md:mt-0"
        >
          Live Demo ↗
        </a>
      </div>

      {/* Description */}
      <p className="text-sm font-light leading-[1.7] text-muted max-w-[90%]">
        {project.description}
      </p>
    </div>
  );
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      const headerEls = sectionRef.current.querySelectorAll(
        ".section-header-reveal",
      );

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
    { scope: sectionRef },
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-16 md:py-40 border-t border-line"
    >
      <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16">
        {/* Header Section (Dipindah ke atas untuk memberi ruang maksimal pada grid) */}
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <h2 className="section-header-reveal text-[clamp(2rem,5vw,5rem)] font-bold leading-[0.9] tracking-[-0.03em] text-fg">
            Studi Kasus
          </h2>
          <p className="section-header-reveal mt-8 text-sm font-light leading-[1.7] text-muted max-w-md">
            Beberapa proyek yang saya kerjakan, mulai dari ide, perancangan,
            hingga hasil akhir.
          </p>
        </div>

        {/* 2-Column Grid untuk Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16 lg:gap-x-12 lg:gap-y-24">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
