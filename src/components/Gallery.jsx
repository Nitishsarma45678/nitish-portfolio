import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "ExtractIQ",
    description: "A React-based OCR utility tool that extracts text from images while preserving original layout and spacing.",
    tech: ["React", "Vite", "Tailwind CSS", "OCR.space API"],
    link: "https://extract-iq.vercel.app"
  },
  {
    title: "CarePass",
    description: "Visitor pass management PWA with offline-first storage and a camera QR scanner.",
    tech: ["React", "Tailwind", "LocalForage"],
    link: "https://visitor-pass-system.vercel.app"
  },
  {
    title: "HealthAnalyzer Pro",
    description: "Intelligent health monitoring web application with real-time risk assessment logic.",
    tech: ["Flask", "SQLite", "JavaScript", "HTML/CSS"],
    link: "https://github.com/Nitishsarma45678/healthanalyzer-pro"
  }
];

export default function Gallery() {
  return (
    <section className="py-20 border-t border-forest/10" id="work">
      <h2 className="font-poetic text-4xl mb-16 text-forest">Selected Works</h2>
      
      <div className="flex flex-col gap-16">
        {projects.map((project, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            key={project.title}
            className="group flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-forest/20 pb-10"
          >
            <div className="md:w-2/3">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-3xl md:text-5xl font-poetic text-forest hover:text-clay transition-colors duration-300"
              >
                {project.title}
                <ArrowUpRight className="w-8 h-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
              <p className="mt-4 text-forest/80 leading-relaxed max-w-xl">
                {project.description}
              </p>
            </div>
            
            <div className="md:w-1/3 flex flex-wrap gap-2 md:justify-end content-start mt-4 md:mt-0">
              {project.tech.map(tech => (
                <span key={tech} className="text-xs uppercase tracking-wider bg-sage/30 px-3 py-1 rounded text-forest">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}