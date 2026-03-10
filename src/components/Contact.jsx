import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight, Github, Linkedin, FileDown } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 border-t border-forest/10" id="contact">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-poetic text-xl italic text-clay mb-4"
        >
          What's next?
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-poetic text-forest mb-8"
        >
          Let's Build <br className="hidden md:block"/> Something Beautiful.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-forest/80 mb-12 text-lg px-4"
        >
          I'm currently open to new opportunities as a Frontend Engineer. Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          {/* Email Button */}
          <a 
            href="mailto:nitishsarma8@gmail.com" 
            className="flex items-center gap-2 bg-forest text-base px-8 py-4 rounded-full hover:bg-forest/90 transition-all duration-300 group shadow-sm"
          >
            <Mail className="w-5 h-5 text-base" />
            <span className="font-semibold tracking-wide text-base">Say Hello</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-base" />
          </a>
          
          {/* Download Resume Button */}
          <a 
            href="/Nitish_Resume.pdf" 
            download
            className="flex items-center gap-2 border border-forest/20 text-forest px-8 py-4 rounded-full hover:border-clay hover:text-clay transition-all duration-300 bg-white/30 backdrop-blur-sm group shadow-sm"
          >
            <FileDown className="w-5 h-5 group-hover:bounce" />
            <span className="font-semibold tracking-wide">Download CV</span>
          </a>

          {/* Phone Link (Optional - removed from main buttons to keep it cleaner, but you can add back if you prefer) */}
          <a 
            href="tel:+919365627698" 
            className="sm:hidden flex items-center gap-2 text-forest/60 hover:text-clay transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm">+91 93656 27698</span>
          </a>
        </motion.div>
      </div>

      {/* Footer minimal links */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-32 pt-8 border-t border-forest/10 flex flex-col md:flex-row justify-between items-center gap-4 text-forest/60 text-sm"
      >
        <p>© {new Date().getFullYear()} Crafted with React & Tailwind.</p>
        
        <div className="flex items-center gap-8">
            <a href="tel:+919365627698" className="hidden md:flex items-center gap-1 hover:text-clay transition-colors">
                <Phone className="w-3 h-3" /> +91 93656 27698
            </a>
            <div className="flex gap-6">
                <a href="https://github.com/Nitishsarma45678" target="_blank" rel="noreferrer" className="hover:text-clay transition-colors flex items-center gap-1">
                    GitHub <ArrowUpRight className="w-3 h-3" />
                </a>
                <a href="https://linkedin.com/in/nitish-sarma-328451229/" target="_blank" rel="noreferrer" className="hover:text-clay transition-colors flex items-center gap-1">
                    LinkedIn <ArrowUpRight className="w-3 h-3" />
                </a>
            </div>
        </div>
      </motion.div>
    </section>
  );
}