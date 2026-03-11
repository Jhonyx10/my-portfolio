import { motion, type Variants } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { projectsData } from "../assets/data/project";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-[#050505] min-h-screen flex flex-col px-6 md:px-12 scroll-mt-32"
    >
      {/* 1. TOP SPACER: Guarantees the margin from the top */}
      <div className="h-24 md:h-32 lg:h-48 w-full" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        /* 2. CONVERTED TO FLEX: Matches the About page structure */
        className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 w-full"
      >
        {/* LEFT: Header (Sticky on Desktop) */}
        <div className="w-full lg:w-5/12 text-left lg:sticky lg:top-32 self-start">
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-10 bg-yellow-500"></div>
            <span className="text-yellow-500 font-mono text-[10px] tracking-[0.3em] uppercase">
              Portfolio
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]"
          >
            Latest <br />
            <span className="text-slate-500 italic font-light">Works.</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-base max-w-xs leading-relaxed"
          >
            Architecting robust systems with the{" "}
            <span className="text-white">VILT stack</span>, bridging the gap
            between clean code and intuitive design.
          </motion.p>
        </div>

        {/* RIGHT: Project List */}
        <div className="w-full lg:w-7/12 flex flex-col space-y-20 md:space-y-32 text-left">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group border-b border-white/5 pb-16 md:pb-20 last:border-0"
            >
              <div className="flex flex-col gap-8">
                {project.image && (
                  <div className="relative w-full aspect-video overflow-hidden rounded-2xl bg-white/5 border border-white/5 shadow-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                )}

                <div className="space-y-6">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 bg-white/5 rounded-xl border border-white/5 group-hover:bg-yellow-500/10 transition-all">
                        {project.icon}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-yellow-500 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-4 pt-2 shrink-0">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-white transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href="#"
                        className="text-slate-500 hover:text-yellow-500 transition-colors"
                      >
                        <ArrowUpRight size={20} />
                      </a>
                    </div>
                  </div>

                  <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono tracking-widest text-slate-500 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Spacer */}
      <div className="h-32 w-full" />
    </div>
  );
};

export default Projects;
