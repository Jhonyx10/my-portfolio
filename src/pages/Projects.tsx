import { motion, type Variants } from "framer-motion";
import { Github, Layout as LayoutIcon, Activity, ArrowUpRight } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
};

const Projects = () => {
  const projects = [
    {
      title: "MedSync Platform",
      description: "A comprehensive healthcare management system featuring appointment scheduling and role-based access control.",
      tech: ["Laravel", "Vue 3", "MongoDB", "Inertia"],
      icon: <Activity className="text-yellow-500" size={20} />,
      github: "https://github.com/Jhonyx10",
      image: null,
    },
    {
      title: "VILT Dashboard",
      description: "Real-time administrative interface with integrated Pusher.js notifications and flexible schemas.",
      tech: ["Inertia.js", "Tailwind", "Reverb"],
      icon: <LayoutIcon className="text-yellow-500" size={20} />,
      github: "https://github.com/Jhonyx10",
      image: null,
    }
  ];

  return (
    <div id="projects" className="py-20 pb-32 px-6 md:px-12 scroll-mt-32 ">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex justify-center items-center min-h-screen"
      >
        {/* LEFT: Header (Now properly Sticky) */}
        <div className="lg:col-span-5 lg:sticky lg:top-40 self-start text-left">
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-yellow-500"></div>
            <span className="text-yellow-500 font-mono text-[10px] tracking-[0.3em] uppercase">
              Portfolio
            </span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
            Latest <br /><span className="text-slate-500 italic font-light">Works.</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-slate-400 text-base max-w-xs leading-relaxed">
            Architecting robust systems with the <span className="text-white">VILT stack</span>, bridging the gap between clean code and intuitive design.
          </motion.p>
        </div>

        {/* RIGHT: Project List (Left Aligned text for readability) */}
        <div className="lg:col-span-7 space-y-24 text-left mt-100">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group border-b border-white/5 pb-20 last:border-0"
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
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 bg-white/5 rounded-xl border border-white/5 group-hover:bg-yellow-500/10 transition-all">
                        {project.icon}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-yellow-500 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-4 pt-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                        <Github size={20} />
                      </a>
                      <a href="#" className="text-slate-500 hover:text-yellow-500 transition-colors">
                        <ArrowUpRight size={20} />
                      </a>
                    </div>
                  </div>

                  <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] font-mono tracking-widest text-slate-500 bg-white/[0.03] border border-white/5 px-2.5 py-1 rounded-md uppercase">
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
    </div>
  );
};

export default Projects;