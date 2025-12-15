import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Instagram } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/rasika1205",
    icon: Github,
    handle: "@rasika1205",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rasika-gautam-72a46a323",
    icon: Linkedin,
    handle: "Connect with me",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/rasika_gau125",
    icon: Instagram,
    handle: "Follow me",
  },
  {
    name: "Email",
    url: "mailto:rasikagautam1205@gmail.com",
    icon: Mail,
    handle: "rasikagautam1205@gmail.com",
  },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 md:py-40" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary mb-4 block tracking-wider">
            04 / CONTACT
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's Build Something
            <br />
            <span className="text-gradient-accent">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm always open to discussing new projects, opportunities, or just chatting about tech.
            Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group relative p-6 bg-card border border-border rounded-2xl hover:border-primary/50 hover:glow-subtle transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-4">
                <link.icon
                  size={24}
                  className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                />
                <ArrowUpRight
                  size={16}
                  className="text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{link.name}</h3>
              <p className="text-sm text-muted-foreground">{link.handle}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="mailto:rasikagautam1205@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:glow-primary transition-all duration-300 transform hover:scale-105"
          >
            Send me a message
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
