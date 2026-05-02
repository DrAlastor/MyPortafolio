"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaExternalLinkAlt,
  FaCertificate,
} from "react-icons/fa";
import { supabase } from "../lib/supabase";

export default function Home() {
  // Estados para la base de datos actualizada
  const [proyectos, setProyectos] = useState<any[]>([]);
  const [experiencias, setExperiencias] = useState<any[]>([]);
  const [habilidades, setHabilidades] = useState<any[]>([]);

  const miTelefono = "59176023052";
  const mensajeWhatsApp =
    "Hola Alessandro, vengo de tu portafolio web y me gustaría hablar contigo.";

  // Carga de datos desde Supabase
  useEffect(() => {
    async function obtenerDatos() {
      // 1. Proyectos destacados
      const { data: dataProyectos } = await supabase
        .from("projects")
        .select("*")
        .eq("is_featured", true);
      if (dataProyectos) setProyectos(dataProyectos);

      // 2. Experiencia académica y certificados
      const { data: dataExperiencias } = await supabase
        .from("academic_experiences")
        .select("*")
        .order("start_date", { ascending: false });
      if (dataExperiencias) setExperiencias(dataExperiencias);

      // 3. Habilidades / Tech Stack
      const { data: dataSkills } = await supabase.from("skills").select("*");
      if (dataSkills) setHabilidades(dataSkills);
    }
    obtenerDatos();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden pb-20">
      {/* FONDO ORIGINAL: Gradiente radial sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black -z-10 fixed"></div>

      {/* --- SECCIÓN 1: HERO --- */}
      <section className="min-h-screen flex items-center justify-center p-8 md:p-24">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              Hola, soy <br />
              <span className="text-gray-300 text-4xl md:text-6xl">
                Alessandro Yevara
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-500 font-semibold flex items-center">
              Desarrollador de Software
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="ml-1"
              >
                |
              </motion.span>
            </h2>
            <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
              Estudiante de Ingeniería Informática apasionado por crear
              soluciones reales. Especializado en tecnologías modernas y diseño
              de sistemas escalables.
            </p>

            <div className="flex items-center gap-4 mt-4">
              <a
                href="/CV_Alessandro_Yevara.pdf"
                download
                className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
              >
                Descargar CV
              </a>
              <a
                href={`https://wa.me/${miTelefono}?text=${encodeURIComponent(mensajeWhatsApp)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                Contáctame
              </a>
            </div>

            <div className="flex flex-wrap gap-6 mt-6 text-gray-400 text-2xl items-center">
              <a
                href="https://github.com/DrAlastor"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/alessandro-yevara-ponce-286876407/"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com/byalastor"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="mailto:yevaraponcealessandro@gmail.com"
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                <FaEnvelope />{" "}
                <span className="text-sm font-medium hidden md:block">
                  yevaraponcealessandro@gmail.com
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-80 h-80 md:w-96 md:h-96 bg-zinc-900 rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
              <img
                src="/alessandro-face.png"
                alt="Alessandro"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECCIÓN 2: PROYECTOS --- */}
      <section className="py-20 px-8 md:px-24">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12">Proyectos Destacados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {proyectos.map((p) => (
              <div
                key={p.id}
                className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all"
              >
                <h4 className="text-2xl font-semibold mb-2">{p.title}</h4>
                <p className="text-gray-400 mb-6">{p.short_description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech_stack?.map((tech: string) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-400 text-xs px-3 py-1 rounded-full border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {p.project_url && (
                  <a
                    href={p.project_url}
                    target="_blank"
                    className="text-white flex items-center gap-2 text-sm hover:underline"
                  >
                    Ver proyecto <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 3: EXPERIENCIA Y CERTIFICADOS (DB ACTUALIZADA) --- */}
      <section className="py-20 px-8 md:px-24 bg-zinc-900/20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12">Formación y Logros</h3>
          <div className="space-y-6">
            {experiencias.map((exp) => (
              <div
                key={exp.id}
                className="flex flex-col md:flex-row md:items-center justify-between p-6 border-l-2 border-zinc-800 bg-zinc-900/30 rounded-r-xl"
              >
                <div>
                  <h4 className="text-xl font-bold">{exp.title}</h4>
                  <p className="text-blue-500">{exp.institution}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    {exp.description}
                  </p>
                </div>
                <div className="mt-4 md:mt-0 flex items-center gap-4">
                  {exp.has_certificate && (
                    <span className="flex items-center gap-1 text-green-400 text-xs bg-green-400/10 px-2 py-1 rounded">
                      <FaCertificate /> Certificado
                    </span>
                  )}
                  <span className="text-zinc-500 text-sm italic">
                    {new Date(exp.start_date).getFullYear()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 4: HABILIDADES (DB ACTUALIZADA) --- */}
      <section className="py-20 px-8 md:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12">Habilidades Técnicas</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {habilidades.map((skill) => (
              <div
                key={skill.id}
                className="bg-zinc-800/50 border border-white/5 px-6 py-3 rounded-xl hover:bg-zinc-700/50 transition-colors"
              >
                <span className="font-medium">{skill.name}</span>
                <span className="text-xs text-zinc-500 block">
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
