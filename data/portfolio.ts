/*  ============================================================
    PORTFOLIO DATA — Edita este archivo para actualizar tu portafolio
    ============================================================
    • Agrega, elimina o modifica proyectos, formación, habilidades.
    • Para traducir, cada texto puede ser un objeto con { es: "...", en: "..." }
      o simplemente un string si no requiere traducción.
    • Las imágenes de proyectos van en /public/ y se referencian
      como "/nombre-imagen.png".
    • Los links pueden ser null si no aplican.
    ============================================================ */

/* ─── Types ─── */

export type LocalizedText = string | { es: string; en: string };

/** Función helper para obtener el texto según el idioma seleccionado ('es' | 'en') */
export function getText(text: LocalizedText, lang: "es" | "en"): string {
  if (typeof text === "string") return text;
  return text[lang] || text.es || "";
}

export interface Project {
  id: number;
  title: LocalizedText;
  short_description: LocalizedText;
  tech_stack: string[];
  project_url: string | null;
  github_url: string | null;
  /** Ruta a imagen en /public/, ej: "/proyecto-1.png". Si es null se usa un gradiente. */
  image_url: string | null;
}

export interface AcademicExperience {
  id: number;
  title: LocalizedText;
  institution: LocalizedText;
  description: LocalizedText;
  start_date: string; // formato "YYYY-MM-DD"
  end_date: string | null;
  has_certificate: boolean;
}

export interface Skill {
  id: number;
  name: string;
  /** Categoría para agrupar: "Front-end", "Back-end", "Estilos", "DevOps", "Herramientas", etc. */
  category: LocalizedText;
}

/* ─── Proyectos ─── */
export const projects: Project[] = [
  {
    id: 1,
    title: {
      es: "Modelado de Sismos en 2D",
      en: "2D Earthquake Modeling",
    },
    short_description: {
      es: "Simulación visual de ondas sísmicas en un plano 2D con parámetros configurables y representación gráfica en tiempo real.",
      en: "Visual simulation of seismic waves in a 2D plane with configurable parameters and real-time visual representation.",
    },
    tech_stack: ["Python", "NumPy", "Matplotlib"],
    project_url: null,
    github_url: "https://github.com/DrAlastor",
    image_url: null,
  },
  {
    id: 2,
    title: {
      es: "Mi Portafolio Web",
      en: "My Web Portfolio",
    },
    short_description: {
      es: "Sitio web personal construido con Next.js, diseño dark profesional con animaciones fluidas y soporte bilingüe.",
      en: "Personal website built with Next.js, professional dark design with smooth animations and bilingual support.",
    },
    tech_stack: ["Next.js", "TypeScript", "Framer Motion", "CSS"],
    project_url: null,
    github_url: "https://github.com/DrAlastor",
    image_url: null,
  },
  // ── Agrega más proyectos aquí ──
  // {
  //   id: 3,
  //   title: { es: "Nombre proyecto", en: "Project name" },
  //   short_description: { es: "Descripción en español.", en: "Description in English." },
  //   tech_stack: ["Tech1", "Tech2"],
  //   project_url: "https://...",
  //   github_url: "https://github.com/...",
  //   image_url: "/proyecto-3.png",
  // },
];

/* ─── Formación y Logros ─── */
export const academicExperiences: AcademicExperience[] = [
  {
    id: 1,
    title: {
      es: "Ingeniería Informática",
      en: "Computer Engineering",
    },
    institution: {
      es: "Universidad",
      en: "University",
    },
    description: {
      es: "Carrera en curso de Ingeniería Informática.",
      en: "Ongoing Computer Engineering degree.",
    },
    start_date: "2022-01-01",
    end_date: null,
    has_certificate: false,
  },
  {
    id: 2,
    title: {
      es: "Curso de Desarrollo Web Full-stack",
      en: "Full-stack Web Development Course",
    },
    institution: {
      es: "Plataforma Online",
      en: "Online Platform",
    },
    description: {
      es: "Desarrollo web con JavaScript, React y Node.js.",
      en: "Web development with JavaScript, React, and Node.js.",
    },
    start_date: "2023-06-01",
    end_date: "2023-12-01",
    has_certificate: true,
  },
];

/* ─── Habilidades Técnicas ─── */
export const skills: Skill[] = [
  // Front-end
  { id: 1, name: "TypeScript", category: { es: "Front-end", en: "Front-end" } },
  { id: 2, name: "React", category: { es: "Front-end", en: "Front-end" } },
  { id: 3, name: "Next.js", category: { es: "Front-end", en: "Front-end" } },
  { id: 4, name: "HTML5", category: { es: "Front-end", en: "Front-end" } },

  // Estilos
  { id: 5, name: "CSS3", category: { es: "Estilos", en: "Styles" } },
  { id: 6, name: "Tailwind CSS", category: { es: "Estilos", en: "Styles" } },

  // Back-end
  { id: 7, name: "Python", category: { es: "Back-end", en: "Back-end" } },
  { id: 8, name: "Node.js", category: { es: "Back-end", en: "Back-end" } },
  { id: 9, name: "JavaScript", category: { es: "Back-end", en: "Back-end" } },

  // Herramientas / Tools
  { id: 10, name: "Git", category: { es: "Herramientas", en: "Tools" } },
  { id: 11, name: "GitHub", category: { es: "Herramientas", en: "Tools" } },
  { id: 12, name: "VS Code", category: { es: "Herramientas", en: "Tools" } },
];
