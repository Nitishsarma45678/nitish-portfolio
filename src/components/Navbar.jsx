import { motion } from "framer-motion";

export default function Navbar() {
  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Journal", href: "#journal" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    /* THE MAGIC: "md:hidden" hides it on desktop. "top-6" places it at the top on phones. */
    <div className="md:hidden fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      <motion.nav
        /* CHANGED: Drops in from the top (y: -50) */
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: .5, duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-6 bg-base/90 backdrop-blur-md border border-forest/20 px-8 py-4 rounded-full shadow-lg pointer-events-auto"
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-xs uppercase tracking-widest text-forest font-semibold"
          >
            {link.name}
          </a>
        ))}
      </motion.nav>
    </div>
  );
}