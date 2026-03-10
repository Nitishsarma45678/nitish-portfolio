import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative py-12 md:py-0">
      {/* Subtle background "Glow" */}
      <div className="absolute top-0 right-0 -z-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-sage/20 rounded-full blur-3xl opacity-60 mix-blend-multiply pointer-events-none"></div>

      <div className="max-w-3xl z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-poetic text-xl md:text-2xl italic text-clay mb-6 mt-10 md:mt-0"
        >
          "Software is just poetry written in logic."
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-poetic font-bold leading-[1.1] tracking-tight text-forest mb-6"
        >
          Nitish Kumar <br className="hidden md:block"/> Sarma.
        </motion.h1>

        {/* Bio Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-forest/80 mb-10 leading-relaxed max-w-2xl"
        >
          I am a frontend engineer blending artistic design with robust logic. I specialize in building high-fidelity React interfaces and scalable web applications.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col md:flex-row md:items-center gap-6"
        >
          {/* Tags */}
          <div className="flex flex-wrap items-center gap-3 text-sm md:text-base">
            <span className="bg-forest text-base px-5 py-2 rounded-full">
              Frontend Engineer
            </span>
            <span className="border border-forest text-forest px-5 py-2 rounded-full">
              React Specialist
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-forest md:ml-4">
            <a href="https://github.com/Nitishsarma45678" target="_blank" rel="noreferrer" className="hover:text-clay transition-colors p-2 border border-forest/20 rounded-full hover:border-clay hover:bg-forest/5">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/nitish-sarma-328451229/" target="_blank" rel="noreferrer" className="hover:text-clay transition-colors p-2 border border-forest/20 rounded-full hover:border-clay hover:bg-forest/5">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:nitishsarma8@gmail.com" className="hover:text-clay transition-colors p-2 border border-forest/20 rounded-full hover:border-clay hover:bg-forest/5">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator - Now flows naturally on mobile and absolute on desktop! */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-16 md:mt-0 md:absolute md:bottom-10 md:left-0 animate-bounce text-forest/50 flex items-center gap-2 text-sm"
      >
        <ArrowDown className="w-4 h-4" />
        <span className="font-poetic italic">Scroll to explore</span>
      </motion.div>
    </section>
  );
}