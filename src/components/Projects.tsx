import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ExternalLink, GitFork, Star, Loader2, Folder, Rocket } from "lucide-react";
import { PROJECT_META } from "@/data/projectMeta";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  pushed_at: string;
  size: number;
  fork: boolean | null;
  image_url?: string | null;
}

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  Python: "bg-green-500",
  Java: "bg-orange-500",
  "C++": "bg-pink-500",
  C: "bg-gray-400",
  HTML: "bg-red-500",
  CSS: "bg-purple-500",
  Rust: "bg-orange-600",
  Go: "bg-cyan-500",
  default: "bg-muted-foreground",
};

// Keywords to identify major/hackathon projects
const majorKeywords = ["hackathon", "major", "ai", "ml", "machine-learning", "deep-learning", "full-stack", "web-app", "application", "platform"];
const normalize = (name: string) => name.toLowerCase();

const getProjectImage = (repo: GitHubRepo): string => {
  // Generate a gradient based on the repo name for visual variety
  const gradients = [
    "from-blue-600/20 via-cyan-500/10 to-teal-400/20",
    "from-purple-600/20 via-pink-500/10 to-rose-400/20",
    "from-orange-600/20 via-amber-500/10 to-yellow-400/20",
    "from-green-600/20 via-emerald-500/10 to-teal-400/20",
    "from-indigo-600/20 via-violet-500/10 to-purple-400/20",
    "from-rose-600/20 via-red-500/10 to-orange-400/20",
  ];
  const index = repo.name.length % gradients.length;
  return gradients[index];
};
    const MAJOR_PROJECTS = new Set([
  "apex",
  "fincoachai",
  "sentinel",
  "odyssey",
  "graphrag",
  "breast-cancer-prediction",
  "x-ray-image-classification",
  "text-to-sql",
  "sustainability-chatbot",
  "insurance-claim-automation",
  "educhat-ai",
  "ai-career-coach",
  "medical-assistant-ai-tool",
  "web-scrapping"
].map(normalize));

const MINOR_PROJECTS = new Set([
  "eventra",
  "map-charting-student-math-misunderstandings",
  "demand-forecasting",
  "stock-market-forecasting",
  "energy-forecasting",
  "dashboard",
  "flask-mini-project"

].map(normalize));

const isMajorProject = (repo: GitHubRepo): boolean => {
  const name = repo.name.toLowerCase();

  if (MAJOR_PROJECTS.has(name)) return true;
  if (MINOR_PROJECTS.has(name)) return false;

  // default fallback
  return false;
};


const ProjectCard = ({ repo, index, isInView, isMajor }: { 
  repo: GitHubRepo; 
  index: number; 
  isInView: boolean;
  isMajor: boolean;
}) => {
  const gradient = repo.image_url ? null : getProjectImage(repo);

  
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col bg-card border border-border rounded-2xl hover:border-primary/50 hover:glow-subtle transition-all duration-500 overflow-hidden"
    >
      {/* Project Image/Gradient */}
      <div className="relative h-40 overflow-hidden">
          {repo.image_url ? (
            <img
              src={repo.image_url}
              alt={repo.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${gradient}`} />
          )}

        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        {!repo.image_url && (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="p-4 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50"
            >
              {isMajor ? (
                <Rocket className="w-8 h-8 text-primary" />
              ) : (
                <Folder className="w-8 h-8 text-primary" />
              )}
            </motion.div>
          </div>
        )}
        {/* Live badge if homepage exists */}
        {repo.homepage && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30">
              Live
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Top Row */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {repo.language && (
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  languageColors[repo.language] || languageColors.default
                }`}
              />
            )}
            <span className="text-xs text-muted-foreground font-mono">
              {repo.language || "Various"}
            </span>
          </div>
          <ExternalLink
            size={14}
            className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
          />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
          {repo.name}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
          {repo.description || "No description available"}
        </p>

        {/* Topics */}
        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {repo.topics.slice(0, 3).map((topic) => (
              <span
                key={topic}
                className="px-2 py-0.5 text-xs bg-secondary rounded-md text-muted-foreground"
              >
                {topic}
              </span>
            ))}
          </div>
        )}

        {/* Stats */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto pt-3 border-t border-border/50">
          <span className="flex items-center gap-1">
            <Star size={12} />
            {repo.stargazers_count}
          </span>
          <span className="flex items-center gap-1">
            <GitFork size={12} />
            {repo.forks_count}
          </span>
        </div>
      </div>
    </motion.a>
  );
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
  const fetchRepos = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/rasika1205/repos?sort=updated&per_page=100",
        {
          headers: {
            Accept: "application/vnd.github+json",
          },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch repositories");

      const data: GitHubRepo[] = await response.json();

      // 1️⃣ Remove forked repositories properly
      const nonForkedRepos = data.filter((repo) => !repo.fork);

      // 2️⃣ Enrich repos with local project meta (image, description, live link)
      const enrichedRepos = nonForkedRepos.map((repo) => {
        const key = repo.name.toLowerCase();
        const meta = PROJECT_META[key];

        return {
          ...repo,
          image_url: meta?.image || null,
          description: meta?.description || repo.description,
          homepage: meta?.liveUrl || repo.homepage,
        };
      });

      setRepos(enrichedRepos);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  fetchRepos();
}, []);

  const majorProjects = repos.filter(repo => isMajorProject(repo));
const miniProjects = repos.filter(repo => !isMajorProject(repo));


  return (
    <section id="projects" className="relative py-32 md:py-40" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-primary mb-4 block tracking-wider">
            02 / PROJECTS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Featured Work
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            My long-term goal is to work at the intersection of software engineering
            and artificial intelligence, contributing to high-impact products and research-driven innovation. I value clean architecture, thoughtful design, and continuous learning.
            A selection of projects I've built, from AI experiments to full-stack applications.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : error ? (
          <div className="text-center py-20 text-muted-foreground">{error}</div>
        ) : (
          <>
            {/* Major / Hackathon Projects */}
            {majorProjects.length > 0 && (
              <div className="mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center gap-3 mb-8"
                >
                  <Rocket className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">
                    Major & Hackathon Projects
                  </h3>
                  <span className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full">
                    {majorProjects.length}
                  </span>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {majorProjects.map((repo, index) => (
                    <ProjectCard 
                      key={repo.id} 
                      repo={repo} 
                      index={index} 
                      isInView={isInView}
                      isMajor={true}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Mini Projects */}
            {miniProjects.length > 0 && (
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-center gap-3 mb-8"
                >
                  <Folder className="w-5 h-5 text-muted-foreground" />
                  <h3 className="text-xl font-semibold text-foreground">
                    Mini Projects & Experiments
                  </h3>
                  <span className="px-2 py-0.5 text-xs bg-secondary text-muted-foreground rounded-full">
                    {miniProjects.length}
                  </span>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {miniProjects.map((repo, index) => (
                    <ProjectCard 
                      key={repo.id} 
                      repo={repo} 
                      index={index} 
                      isInView={isInView}
                      isMajor={false}
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/rasika1205?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 link-underline"
          >
            View all projects on GitHub
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
