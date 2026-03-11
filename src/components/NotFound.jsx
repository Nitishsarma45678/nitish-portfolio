import { motion } from "framer-motion";
import { ArrowLeft, Feather } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 text-center">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-clay/10 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-md z-10"
      >
        {/* Feather Icon floating gently */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Feather className="w-10 h-10 md:w-12 md:h-12 text-clay mx-auto mb-6 opacity-80" />
        </motion.div>
        
        <h1 className="text-7xl md:text-9xl font-poetic font-bold text-forest mb-4 tracking-tighter">
          404
        </h1>
        
        <p className="font-poetic text-2xl md:text-3xl italic text-clay mb-6">
          A blank page in the journal.
        </p>

        <p className="text-forest/80 mb-10 text-lg leading-relaxed">
          The words you are looking for haven't been written yet, or the page has drifted away like a leaf on the wind.
        </p>

        <a 
          href="/"
          className="inline-flex items-center gap-3 border border-forest/20 text-forest px-8 py-4 rounded-full hover:border-clay hover:text-clay transition-all duration-300 bg-white/30 backdrop-blur-sm group shadow-sm mx-auto"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold tracking-widest uppercase text-xs">Return Home</span>
        </a>
      </motion.div>
    </section>
  );
}