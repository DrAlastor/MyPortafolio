"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa"; // Añadí el ícono de correo
import { supabase } from "../lib/supabase";

export default function Home() {
  // Estado solo para los proyectos (ya no necesitamos los del formulario)
  const [proyectos, setProyectos] = useState<any[]>([]);

  // TU NÚMERO DE WHATSAPP REAL
  const miTelefono = "59176023052";

  // Mensaje predeterminado para cuando hagan clic en "Contáctame"
  const mensajeWhatsApp =
    "Hola Alessandro, vengo de tu portafolio web y me gustaría hablar contigo.";

  // Traer proyectos al cargar
  useEffect(() => {
    async function obtenerProyectos() {
      const { data } = await supabase
        .from("projects")
        .select("*")
        .eq("is_featured", true);
      if (data) setProyectos(data);
    }
    obtenerProyectos();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden pb-10">
      {/* Fondo con gradiente */}
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
              Hola, soy <br />{" "}
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
              Soy estudiante de Ingeniería y desarrollador web. Me apasiona
              crear, aprender y llevar mis ideas a la realidad a través de la
              programación y la resolución de problemas.
            </p>

            <div className="flex items-center gap-4 mt-4">
              {/* BOTÓN DESCARGAR CV */}
              <a
                href="/CV_Alessandro_Yevara.pdf"
                download
                className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors inline-block"
              >
                Descargar CV
              </a>

              {/* BOTÓN CONTACTO DIRECTO A WHATSAPP */}
              <a
                href={`https://wa.me/${miTelefono}?text=${encodeURIComponent(mensajeWhatsApp)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                Contáctame
              </a>
            </div>

            {/* REDES SOCIALES Y CONTACTO */}
            <div className="flex flex-wrap gap-6 mt-6 text-gray-400 text-2xl items-center">
              <a
                href="https://instagram.com/byalastor"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                title="Instagram"
              >
                <FaInstagram />
              </a>
              {/* Dejé el de LinkedIn vacío por si luego lo creas/agregas */}
              <a
                href="https://www.linkedin.com/in/alessandro-yevara-ponce-286876407/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/DrAlastor"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:yevaraponcealessandro@gmail.com"
                className="hover:text-white transition-colors flex items-center gap-2"
                title="Enviar Correo"
              >
                <FaEnvelope />
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
            <div className="w-80 h-80 md:w-96 md:h-96 bg-zinc-900 rounded-3xl border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden">
              <img
                src="/alessandro-face.png"
                alt="Alessandro Yevara"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECCIÓN 2: PROYECTOS --- */}
      <section className="py-10 p-8 md:p-24 z-10 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12"
          >
            Proyectos Destacados
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {proyectos.map((proyecto) => (
              <motion.div
                key={proyecto.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-colors"
              >
                <h4 className="text-2xl font-semibold mb-3">
                  {proyecto.title}
                </h4>
                <p className="text-gray-400 mb-6">
                  {proyecto.short_description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {proyecto.tech_stack.map((tech: string) => (
                    <span
                      key={tech}
                      className="bg-white/5 text-blue-400 text-sm px-3 py-1 rounded-full border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
