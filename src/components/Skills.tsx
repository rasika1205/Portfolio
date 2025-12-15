import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Brain,
  Globe,
  Wrench,
  FileCode,
  Cpu,
  Database,
  Cloud,
  Palette,
  GitBranch,
  Container,
  Terminal,
  Sparkles,
  Bot,
  Layers,
  Server,
  Braces,
  Blocks,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  icon: LucideIcon;
}

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "Python", icon: FileCode },
      { name: "TypeScript", icon: Braces },
      { name: "JavaScript", icon: Blocks },
      { name: "Java", icon: Cpu },
      { name: "C++", icon: Terminal },
      { name: "SQL", icon: Database },
    ],
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: [
      { name: "NLP", icon: Layers },
      { name: "Gen-AI", icon: Sparkles },
      { name: "Scikit-learn", icon: Brain },
      { name: "Deep Learning(Basic)", icon: Bot },
      { name: "LangChain", icon: Cpu },
      { name: "Google ADK(AI Agents)", icon: Sparkles },
    ],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: [
      { name: "React", icon: Blocks },
      { name: "Express.js", icon: Layers },
      { name: "Node.js", icon: Server },
      { name: "Tailwind CSS", icon: Palette },
      { name: "MongoDB and MySQL", icon: Database },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "AWS", icon: Cloud },
      { name: "VS Code", icon: Code2 },
      { name: "Figma", icon: Palette },
      { name:"Bootstrap", icon:Sparkles}
    ],
  },
];

const iconAnimation = {
  initial: { rotate: 0, scale: 1 },
  hover: { 
    rotate: [0, -10, 10, -5, 5, 0], 
    scale: [1, 1.2, 1.1, 1.15, 1],
    transition: { duration: 0.5 }
  },
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32 md:py-40" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-primary mb-4 block tracking-wider">
            03 / SKILLS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Tech Stack
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-2 rounded-lg bg-primary/10 border border-primary/20"
                  >
                    <CategoryIcon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <h3 className="text-sm font-semibold text-foreground tracking-wide uppercase">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-1">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        whileHover="hover"
                        className="group flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-secondary/50 transition-all duration-300 cursor-default"
                      >
                        <motion.div
                          variants={iconAnimation}
                          className="text-primary/60 group-hover:text-primary transition-colors duration-300"
                        >
                          <SkillIcon className="w-4 h-4" />
                        </motion.div>
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
