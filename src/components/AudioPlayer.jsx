import { useState, useRef } from "react";
import { Play, Pause, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      {/* NOTE: Place a file named "nature-sounds.mp3" in your public/ folder 
        for this to work perfectly!
      */}
      <audio 
        ref={audioRef} 
        src="/nature-sounds.mp3" 
        loop 
      />
      
      <button 
        onClick={togglePlay}
        className="flex items-center gap-3 bg-base/80 backdrop-blur-md border border-forest/20 px-4 py-3 rounded-full shadow-lg hover:bg-sage/20 transition-all duration-300 group"
      >
        <Leaf className={`w-4 h-4 text-clay ${isPlaying ? 'animate-pulse' : ''}`} />
        <span className="text-xs uppercase tracking-widest text-forest font-semibold">
          {isPlaying ? 'Pause Nature' : 'Play Nature'}
        </span>
        {isPlaying ? (
          <Pause className="w-4 h-4 text-forest" />
        ) : (
          <Play className="w-4 h-4 text-forest group-hover:translate-x-1 transition-transform" />
        )}
      </button>
    </motion.div>
  );
}