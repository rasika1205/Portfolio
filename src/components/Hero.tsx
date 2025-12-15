import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-background opacity-50" />
      
      {/* Gradient Orb */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 md:py-40">
        <div className="flex flex-col items-center text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/80 border border-border rounded-full text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Open to opportunities
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="text-gradient">Rasika Gautam</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 font-light"
          >
            Computer Science Student & Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl text-base md:text-lg text-muted-foreground/80 mb-12 leading-relaxed"
          >
            Building intelligent systems and crafting elegant solutions. 
            Passionate about AI, software engineering, and creating impactful technology.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center gap-4 mb-16"
          >
            <a
              href="https://github.com/rasika1205"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary/80 border border-border rounded-xl text-muted-foreground hover:text-foreground hover:border-primary/50 hover:glow-subtle transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/rasika-gautam-72a46a323"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary/80 border border-border rounded-xl text-muted-foreground hover:text-foreground hover:border-primary/50 hover:glow-subtle transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:rasikagautam1205@gmail.com"
              className="p-3 bg-secondary/80 border border-border rounded-xl text-muted-foreground hover:text-foreground hover:border-primary/50 hover:glow-subtle transition-all duration-300"
            >
              <Mail size={20} />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={16} />
            </motion.div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};
