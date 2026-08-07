"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaExternalLinkAlt,
  FaCertificate,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";
import {
  projects,
  academicExperiences,
  skills,
  getText,
} from "../data/portfolio";

/* ─── Translations ─── */
const translations = {
  es: {
    navAbout: "Sobre Mí",
    navProjects: "Proyectos",
    navExperience: "Formación",
    navContact: "Contacto",
    heroDescription:
      "Mi objetivo es escribir código **mantenible, limpio** y **comprensible** para que el proceso de desarrollo sea agradable.",
    heroProjectsBtn: "Proyectos",
    heroDownloadCV: "Descargar CV",
    projectsTag: ".../Proyectos ...",
    projectsTitle: "Proyectos Realizados",
    projectsViewBtn: "Ver proyecto",
    projectsCodeBtn: "Ver código",
    aboutTag: ".../Sobre mí ...",
    aboutTitle: "Sobre Mí",
    aboutText:
      "¡Hola! Soy Alessandro, un desarrollador **full-stack**. Estudiante de Ingeniería Informática apasionado por crear soluciones reales. Especializado en tecnologías modernas y diseño de **sistemas escalables**.",
    experienceTag: ".../Formación ...",
    experienceTitle: "Formación y Logros",
    certificateLabel: "Certificado",
    contactTag: ".../Contacto ...",
    contactTitle: "Hablemos",
    contactText:
      "¿Tienes un proyecto en mente o quieres colaborar? No dudes en contactarme.",
    contactDownloadCV: "↓ Descargar CV",
    footerRights: "Todos los derechos reservados.",
  },
  en: {
    navAbout: "About Me",
    navProjects: "Projects",
    navExperience: "Education",
    navContact: "Contact",
    heroDescription:
      "My goal is to write **maintainable, clean** and **understandable** code so that the development process is enjoyable.",
    heroProjectsBtn: "Projects",
    heroDownloadCV: "Download CV",
    projectsTag: ".../Projects ...",
    projectsTitle: "Projects",
    projectsViewBtn: "View project",
    projectsCodeBtn: "View code",
    aboutTag: ".../About me ...",
    aboutTitle: "About Me",
    aboutText:
      "Hi! I'm Alessandro, a **full-stack** developer. Computer Engineering student passionate about creating real solutions. Specialized in modern technologies and **scalable systems** design.",
    experienceTag: ".../Education ...",
    experienceTitle: "Education & Achievements",
    certificateLabel: "Certificate",
    contactTag: ".../Contact ...",
    contactTitle: "Let's Talk",
    contactText:
      "Do you have a project in mind or want to collaborate? Don't hesitate to contact me.",
    contactDownloadCV: "↓ Download CV",
    footerRights: "All rights reserved.",
  },
};

type Lang = keyof typeof translations;

/* ─── Helper: render bold markdown ─── */
function renderBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

/* ─── Animation Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ─── Animated Container Wrapper ─── */
function AnimatedSection({
  children,
  className = "section-container",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

/* ─── Main Component ─── */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("es");
  const [activeTimeline, setActiveTimeline] = useState<number>(
    academicExperiences.length > 0 ? academicExperiences[0].id : -1
  );

  const t = translations[lang];

  const miTelefono = "59176023052";
  const mensajeWhatsApp =
    lang === "es"
      ? "Hola Alessandro, vengo de tu portafolio web y me gustaría hablar contigo."
      : "Hi Alessandro, I'm coming from your portfolio and I'd like to talk to you.";

  const handleNavClick = () => setMenuOpen(false);

  // Group skills by localized category
  const skillsByCategory = skills.reduce(
    (acc: Record<string, typeof skills>, skill) => {
      const cat = getText(skill.category, lang);
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(skill);
      return acc;
    },
    {}
  );

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: "Github",
      href: "https://github.com/DrAlastor",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/alessandro-yevara-ponce-286876407/",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      href: "https://instagram.com/byalastor",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      href: "mailto:yevaraponcealessandro@gmail.com",
    },
  ];

  const navItems = [
    { label: t.navAbout, href: "#about" },
    { label: t.navProjects, href: "#projects" },
    { label: t.navExperience, href: "#experience" },
    { label: t.navContact, href: "#contact" },
  ];

  return (
    <main>
      {/* ═══════════════════════════════════════════
          NAVBAR
          ═══════════════════════════════════════════ */}
      <nav className="navbar">
        <a href="#" className="navbar-logo">
          Alessandro
          <span>Yevara</span>
        </a>

        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            className="lang-toggle"
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
          >
            <span className={lang === "es" ? "active-lang" : ""}>ESP</span>
            /
            <span className={lang === "en" ? "active-lang" : ""}>ENG</span>
          </button>

          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={handleNavClick}>
            {item.label}
          </a>
        ))}
      </div>

      {/* ═══════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════ */}
      <section className="section-wrapper">
        {/* Full-width Screen Circles — Hero */}
        <div
          className="circle-decoration circle-xl double"
          style={{ top: "-300px", right: "-250px" }}
        />
        <div
          className="circle-decoration circle-lg subtle"
          style={{ bottom: "-250px", left: "-200px" }}
        />
        <div
          className="circle-decoration circle-sm"
          style={{ top: "25%", left: "55%" }}
        />

        <div className="hero">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <h1 className="hero-title">
              Full-stack
              <br />
              <span style={{ paddingLeft: "10%" }}>Developer</span>
            </h1>
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {renderBold(t.heroDescription)}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <a href="#projects" className="btn-primary">
              {t.heroProjectsBtn} <FaArrowRight />
            </a>
            <a
              href="/CV_Alessandro_Yevara.pdf"
              download
              className="btn-circle"
              title={t.heroDownloadCV}
            >
              ↓
            </a>
          </motion.div>

          <motion.div
            className="social-pills"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="social-pill"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PROJECTS SECTION
          ═══════════════════════════════════════════ */}
      <section className="section-wrapper" id="projects">
        {/* Full-width Screen Circles — Projects */}
        <div
          className="circle-decoration circle-lg double"
          style={{ top: "-150px", right: "-200px" }}
        />
        <div
          className="circle-decoration circle-md subtle"
          style={{ bottom: "-100px", left: "-150px" }}
        />

        <AnimatedSection className="section-container">
          <motion.p className="section-tag" variants={fadeUp} custom={0}>
            {t.projectsTag}
          </motion.p>
          <motion.h2 className="section-title" variants={fadeUp} custom={1}>
            {t.projectsTitle}
          </motion.h2>

          <div className="projects-grid">
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                className="project-card"
                variants={fadeUp}
                custom={i + 2}
              >
                {p.image_url ? (
                  <img
                    src={p.image_url}
                    alt={getText(p.title, lang)}
                    className="project-card-image"
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <div
                    className="project-card-image"
                    style={{
                      background: `linear-gradient(135deg, 
                        hsl(${(i * 60 + 240) % 360}, 40%, 25%), 
                        hsl(${(i * 60 + 280) % 360}, 50%, 20%))`,
                    }}
                  />
                )}
                <div className="project-card-body">
                  <h3 className="project-card-title">{getText(p.title, lang)}</h3>
                  <p className="project-card-desc">
                    {getText(p.short_description, lang)}
                  </p>

                  {p.tech_stack && p.tech_stack.length > 0 && (
                    <div className="skill-tags" style={{ marginBottom: "16px" }}>
                      {p.tech_stack.map((tech: string) => (
                        <span key={tech} className="skill-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="project-card-actions">
                    {p.project_url && (
                      <a
                        href={p.project_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-read-more"
                      >
                        {t.projectsViewBtn} <FaExternalLinkAlt size={10} />
                      </a>
                    )}
                    {p.github_url && (
                      <a
                        href={p.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-circle"
                        style={{
                          width: "36px",
                          height: "36px",
                          fontSize: "0.85rem",
                        }}
                        title={t.projectsCodeBtn}
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ═══════════════════════════════════════════
          ABOUT SECTION
          ═══════════════════════════════════════════ */}
      <section className="section-wrapper" id="about">
        {/* Full-width Screen Circles — About */}
        <div
          className="circle-decoration circle-xl subtle"
          style={{ top: "-200px", left: "-300px" }}
        />
        <div
          className="circle-decoration circle-md double"
          style={{ bottom: "-120px", right: "-120px" }}
        />

        <AnimatedSection className="section-container">
          <motion.p className="section-tag" variants={fadeUp} custom={0}>
            {t.aboutTag}
          </motion.p>
          <motion.h2 className="section-title" variants={fadeUp} custom={1}>
            {t.aboutTitle}
          </motion.h2>

          <div className="about-content">
            <div style={{ position: "relative", zIndex: 1 }}>
              <motion.p className="about-text" variants={fadeUp} custom={2}>
                {renderBold(t.aboutText)}
              </motion.p>

              <motion.div
                className="skills-container"
                variants={staggerContainer}
              >
                {Object.entries(skillsByCategory).map(
                  ([category, catSkills], i) => (
                    <motion.div
                      key={category}
                      className="skill-group"
                      variants={fadeUp}
                      custom={i + 3}
                    >
                      <h4 className="skill-group-title">{category}</h4>
                      <div className="skill-tags">
                        {catSkills.map((skill) => (
                          <span key={skill.id} className="skill-tag">
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )
                )}
              </motion.div>
            </div>

            <motion.div variants={fadeUp} custom={3}>
              <img
                src="/alessandro-face.png"
                alt="Alessandro Yevara"
                className="about-photo"
              />
            </motion.div>
          </div>
        </AnimatedSection>
      </section>

      {/* ═══════════════════════════════════════════
          EXPERIENCE / TIMELINE SECTION
          ═══════════════════════════════════════════ */}
      <section className="section-wrapper" id="experience">
        {/* Full-width Screen Circles — Experience */}
        <div
          className="circle-decoration circle-lg"
          style={{ top: "-150px", right: "-200px" }}
        />
        <div
          className="circle-decoration circle-xl double"
          style={{ bottom: "-350px", left: "-350px" }}
        />

        <AnimatedSection className="section-container">
          <motion.p className="section-tag" variants={fadeUp} custom={0}>
            {t.experienceTag}
          </motion.p>
          <motion.h2 className="section-title" variants={fadeUp} custom={1}>
            {t.experienceTitle}
          </motion.h2>

          <motion.div className="timeline" variants={staggerContainer}>
            {academicExperiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                className={`timeline-item ${activeTimeline === exp.id ? "active" : ""}`}
                variants={fadeUp}
                custom={i + 2}
                onClick={() => setActiveTimeline(exp.id)}
              >
                <div className="timeline-date">
                  {new Date(exp.start_date).getFullYear()}
                  {exp.end_date && ` - ${new Date(exp.end_date).getFullYear()}`}
                </div>
                <div className="timeline-company">{getText(exp.institution, lang)}</div>
                <div className="timeline-role">
                  {getText(exp.title, lang)}
                  {exp.has_certificate && (
                    <span
                      style={{
                        marginLeft: "8px",
                        color: "#4ade80",
                        fontSize: "0.75rem",
                      }}
                    >
                      <FaCertificate
                        style={{ display: "inline", marginRight: "4px" }}
                      />
                      {t.certificateLabel}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </section>

      {/* ═══════════════════════════════════════════
          CONTACT SECTION
          ═══════════════════════════════════════════ */}
      <section className="section-wrapper" id="contact">
        {/* Full-width Screen Circles — Contact */}
        <div
          className="circle-decoration circle-lg double"
          style={{ top: "-100px", left: "-180px" }}
        />
        <div
          className="circle-decoration circle-md"
          style={{ bottom: "-150px", right: "-120px" }}
        />

        <AnimatedSection className="section-container">
          <motion.p className="section-tag" variants={fadeUp} custom={0}>
            {t.contactTag}
          </motion.p>
          <motion.h2 className="section-title" variants={fadeUp} custom={1}>
            {t.contactTitle}
          </motion.h2>

          <motion.div className="contact-content" variants={fadeUp} custom={2}>
            <p
              className="about-text"
              style={{ textAlign: "center", maxWidth: "500px" }}
            >
              {t.contactText}
            </p>

            <div className="contact-links">
              <a
                href={`https://wa.me/${miTelefono}?text=${encodeURIComponent(mensajeWhatsApp)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <FaWhatsapp /> WhatsApp
              </a>
              <a
                href="mailto:yevaraponcealessandro@gmail.com"
                className="btn-primary"
                style={{
                  background: "transparent",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <FaEnvelope /> Email
              </a>
              <a
                href="/CV_Alessandro_Yevara.pdf"
                download
                className="btn-primary"
                style={{
                  background: "transparent",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                {t.contactDownloadCV}
              </a>
            </div>

            <div className="social-pills" style={{ marginTop: "16px" }}>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════════ */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Alessandro Yevara. {t.footerRights}
        </p>
      </footer>
    </main>
  );
}
