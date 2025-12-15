import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Sneha",
    role: "Hackathon Teammate",
    content:
      "Rasika is someone you want on your team during hackathons. She’s quick to understand problems, great leader, and is always willing to learn new things to get the solution working.",
    avatar: "SG",
  },
  {
    name: "Rishika",
    role: "College Peer, NSUT",
    content:
      "What stands out about Rasika is her consistency. Whether it’s web development or ML basics, she puts in the effort to understand concepts deeply instead of just copying solutions.",
    avatar: "RG",
  },
  {
    name: "Pulkit Gupta",
    role: "College Peer, NSUT",
    content: "She stands out in her work, especially through her projects, which are diverse in ideas and show a strong grasp of machine learning and web development.",
    avatar: "PG",
  },
  {
    name: "Arav",
    role: "College Peer, NSUT",
    content: "Their research contributions to our lab were invaluable. Strong foundation in machine learning with a keen eye for innovative solutions.",
    avatar: "AS",
  },
];

export const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="relative py-32 md:py-40" ref={ref}>
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-primary mb-4 block tracking-wider">
            04 / TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            What People Say
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Feedback from professors, colleagues, and collaborators.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-6 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all duration-500"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors duration-300" />

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed pr-8">
                "{review.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {review.avatar}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {review.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
