import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);

  // Smooth spring physics for that "liquid" feel
  const mouseX = useSpring(0, { stiffness: 250, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 250, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = () => setIsHovered(true);
    const handleUnhover = () => setIsHovered(false);

    window.addEventListener("mousemove", handleMouseMove);
    
    // Select all links and buttons to trigger the expansion effect
    const targets = document.querySelectorAll("a, button");
    targets.forEach((t) => {
      t.addEventListener("mouseenter", handleHover);
      t.addEventListener("mouseleave", handleUnhover);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      targets.forEach((t) => {
        t.removeEventListener("mouseenter", handleHover);
        t.removeEventListener("mouseleave", handleUnhover);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* The trailing Aura */}
      <motion.div
        className="absolute w-12 h-12 border border-clay/30 rounded-full"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "rgba(203, 153, 126, 0.1)" : "rgba(203, 153, 126, 0)",
        }}
      />
      {/* The solid Ink Point */}
      <motion.div
        className="absolute w-1.5 h-1.5 bg-forest rounded-full"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
      />
    </div>
  );
}