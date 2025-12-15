import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 md:py-40" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-mono text-primary mb-4 block tracking-wider">
              01 / ABOUT
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Designing scalable systems and{" "}
              <span className="text-gradient-accent">intelligent applications</span>
            </h2>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I’m a Mathematics and Computing undergraduate at NSUT with a strong focus on
              full-stack web development, machine learning, and AI-driven systems.
              I enjoy solving complex problems by combining solid engineering principles
              with data-driven intelligence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Over time, I’ve worked on projects focused on web development, machine learning fundamentals,
              and AI-driven ideas, while actively participating in hackathons such as Smart India Hackathon
              and Gen-AI buildathons. These experiences have helped me strengthen my problem-solving skills,
              collaborate in team-based environments, and translate ideas into functional prototypes. I am also an active member of GDG On Campus, NSUT, where I engage with the developer community. I’ve completed virtual internship programs that provided exposure to
  real-world workflows and industry expectations.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-4 py-2 bg-secondary/60 border border-border rounded-lg">
                <span className="text-2xl font-bold text-foreground">20+</span>
                <span className="text-sm text-muted-foreground ml-2">Projects</span>
              </div>
              <div className="px-4 py-2 bg-secondary/60 border border-border rounded-lg">
                <span className="text-2xl font-bold text-foreground">2+</span>
                <span className="text-sm text-muted-foreground ml-2">Years Coding</span>
              </div>
              <div className="px-4 py-2 bg-secondary/60 border border-border rounded-lg">
                <span className="text-2xl font-bold text-foreground">∞</span>
                <span className="text-sm text-muted-foreground ml-2">Curiosity</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
