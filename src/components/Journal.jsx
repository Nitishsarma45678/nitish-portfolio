import { motion } from "framer-motion";
import { BookOpen, Briefcase, GraduationCap, ArrowUpRight, Cpu } from "lucide-react";

export default function Journal() {
  return (
    <section className="py-24 border-t border-forest/10" id="journal">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="font-poetic text-4xl mb-16 text-forest"
      >
        The Journal
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* Narrative Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative pl-8 border-l border-forest/5"
        >
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-clay/40 via-transparent to-transparent"></div>

          <div className="space-y-10 text-forest/80 leading-relaxed text-lg italic">
            <p className="relative">
              <span className="float-left text-7xl font-poetic text-clay mr-4 mt-2 leading-[0.8]">M</span>
              y approach to frontend development is much like <span className="text-forest font-bold italic">writing a poem</span>, every line of code should have purpose, rhythm, and elegance.
            </p>
            
            <p>
              I recently gained hands-on engineering experience as an <span className="text-forest underline decoration-clay/30 underline-offset-4 font-medium">Associate Software Engineer Trainee</span> at Sysfore Technologies. While my heart is in crafting perfect UI elements, I have a deep appreciation for full systems architecture.
            </p>

            {/* CLICKABLE FORMAL PUBLICATION CARD */}
            <a 
              href="/Publication.pdf" /* Put your paper link or PDF path here */
              target="_blank"
              rel="noreferrer"
              className="group block relative p-6 bg-sage/5 border border-forest/10 rounded-2xl not-italic transition-all duration-500 hover:bg-sage/10 hover:border-clay/30 hover:shadow-xl hover:shadow-forest/5"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-clay font-bold bg-clay/10 px-2 py-1 rounded">
                  Selected Publication
                </span>
                <ArrowUpRight className="w-4 h-4 text-clay opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              
              <h4 className="font-poetic text-xl text-forest mb-2 leading-tight group-hover:text-clay transition-colors duration-500">
                "Host-Based Intrusion Detection Systems: Architectures and Implementation"
              </h4>
              
              <p className="text-sm text-forest/60 font-mono italic mb-6">
                Published Research Paper • Technical Analysis & Research
              </p>

              {/* The "Animated Line" Indicator */}
              <div className="flex items-center gap-2 text-xs font-bold text-forest/40 group-hover:text-forest transition-colors duration-500">
                <div className="w-8 h-[1px] bg-forest/20 group-hover:w-16 group-hover:bg-clay transition-all duration-700 ease-in-out"></div>
                VIEW ARCHITECTURE
              </div>
            </a>

            {/* CURRENT FOCUS & ROOTS */}
            <div className="space-y-6 not-italic">
              <div className="space-y-4 pt-4 border-t border-forest/5">
                <p className="font-poetic text-2xl text-forest/90 leading-snug">
                  When I am away from the screen, I find balance in <span className="text-clay">nature</span> and getting lost in <span className="text-clay">music</span>.
                </p>
                
                <p className="text-base text-forest/60 leading-relaxed max-w-md">
                  I stay deeply connected to my roots through <span className="italic font-medium text-forest">Assamese art and literature</span> reminding me that even in a world of logic, there is always room for a soul.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline / Experience Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="space-y-12"
        >

          {/* Gurukul Group */}
          <div className="flex gap-6 group">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border border-forest/10 flex items-center justify-center group-hover:border-clay/40 transition-colors">
                <Cpu className="w-5 h-5 text-clay shrink-0 transition-transform group-hover:scale-110" />
              </div>
              <div className="w-[1px] h-full bg-forest/10 mt-4"></div>
            </div>
            <div className="pb-8">
              <h3 className="font-poetic text-2xl text-forest">Gurukul Group of Educational Wing</h3>
              <p className="text-sm text-forest/60 mb-3 uppercase tracking-widest font-semibold">TGT Teacher — AI & Coding • 2026</p>
              <p className="text-forest/80 text-sm leading-relaxed">Mentoring students in programming and hands-on software development and building practical AI applications, alongside foundational robotics concepts within the Innovation Lab.</p>
            </div>
          </div>

          {/* Sysfore */}
          <div className="flex gap-6 group">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border border-forest/10 flex items-center justify-center group-hover:border-clay/40 transition-colors">
                <Briefcase className="w-5 h-5 text-clay shrink-0 transition-transform group-hover:scale-110" />
              </div>
              <div className="w-[1px] h-full bg-forest/10 mt-4"></div>
            </div>
            <div className="pb-8">
              <h3 className="font-poetic text-2xl text-forest">Sysfore Technologies</h3>
              <p className="text-sm text-forest/60 mb-3 uppercase tracking-widest font-semibold">Associate Software Engineer • 2025</p>
              <p className="text-forest/80 text-sm leading-relaxed">Developed end-to-end solutions across Power Platform and designed scalable Dataverse data models.</p>
            </div>
          </div>

          {/* Kristu Jayanti */}
          <div className="flex gap-6 group">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border border-forest/10 flex items-center justify-center group-hover:border-clay/40 transition-colors">
                <GraduationCap className="w-5 h-5 text-clay shrink-0 transition-transform group-hover:scale-110" />
              </div>
              <div className="w-[1px] h-full bg-forest/10 mt-4"></div>
            </div>
            <div className="pb-8">
              <h3 className="font-poetic text-2xl text-forest">Kristu Jayanti College</h3>
              <p className="text-sm text-forest/60 mb-3 uppercase tracking-widest font-semibold">Master of Computer Science • 2023 — 2025</p>
              <p className="text-forest/80 text-sm leading-relaxed">Built my core foundations in software engineering, networking, and algorithms.</p>
            </div>
          </div>

          {/* Assam Downtown */}
          <div className="flex gap-6 group">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border border-forest/10 flex items-center justify-center group-hover:border-clay/40 transition-colors">
                <BookOpen className="w-5 h-5 text-clay shrink-0 transition-transform group-hover:scale-110" />
              </div>
            </div>
            <div>
              <h3 className="font-poetic text-2xl text-forest">Assam Downtown University</h3>
              <p className="text-sm text-forest/60 mb-3 uppercase tracking-widest font-semibold">Bachelor of Computer Application • 2020 — 2023</p>
              <p className="text-forest/80 text-sm leading-relaxed">Specialization in Cloud Technology and Information Security.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}