import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:py-6"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors duration-300"
        >
          rasika<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://github.com/rasika1205"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 bg-secondary border border-border rounded-lg text-foreground hover:bg-muted hover:border-primary/50 transition-all duration-300"
          >
            GitHub
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://github.com/rasika1205"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 bg-secondary border border-border rounded-lg text-foreground text-center"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
