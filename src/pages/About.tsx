import { motion, type Variants } from "framer-motion";
import { aboutData } from "../assets/data/about";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const About = () => {
  return (
    <div
      id="about"
      className="bg-[#050505] min-h-screen flex flex-col" // Changed to flex-col
    >
      {/* 1. THE MARGIN/SPACER: Adjust 'h-32' to move the whole thing down */}
      <div className="h-24 md:h-32 lg:h-40 w-full" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start px-6 md:px-12"
      >
        {/* LEFT: Sticky side */}
        <div className="w-full lg:w-5/12 lg:sticky lg:top-32 flex flex-col">
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-10 bg-yellow-500"></div>
            <span className="text-yellow-500 font-mono text-[10px] tracking-[0.3em] uppercase">
              The Developer
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.85]"
          >
            About <br />
            <span className="text-slate-500 italic font-light">Me.</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-lg max-w-xs leading-relaxed italic border-l border-white/10 pl-6"
          >
            "Coding with purpose, designing with empathy."
          </motion.p>
        </div>

        {/* RIGHT: Content side */}
        <div className="w-full lg:w-7/12 flex flex-col space-y-32">
          {/* Sections (Profile, Skills, Education) remain the same... */}
          <motion.section
            variants={itemVariants}
            className="flex flex-col space-y-8"
          >
            <h3 className="text-xs font-mono tracking-[0.3em] uppercase text-slate-500 border-b border-white/5 pb-4">
              Profile
            </h3>
            <p className="text-xl md:text-3xl text-white leading-tight font-light tracking-tight">
              {aboutData.profile}
            </p>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="flex flex-col space-y-12"
          >
            <h3 className="text-xs font-mono tracking-[0.3em] uppercase text-slate-500 border-b border-white/5 pb-4">
              Technical Arsenal
            </h3>

            {/* Changed Grid to Flexbox */}
            <div className="flex flex-wrap gap-y-12 gap-x-8">
              {aboutData.skills.map((skillGroup: any) => (
                <div
                  key={skillGroup.category}
                  className="flex flex-col space-y-6 basis-full sm:basis-[calc(50%-2rem)]"
                >
                  <h4 className="text-yellow-500 font-bold text-xs uppercase tracking-[0.2em]">
                    {skillGroup.category}
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill: any) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono text-slate-300 border border-white/10 bg-white/5 px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Education */}
          <motion.section
            variants={itemVariants}
            className="flex flex-col space-y-12"
          >
            <h3 className="text-xs font-mono tracking-[0.3em] uppercase text-slate-500 border-b border-white/5 pb-4">
              Education
            </h3>

            <div className="flex flex-col">
              {aboutData.education.map((edu: any, index: any) => (
                <div
                  key={index}
                  className="group relative flex flex-col pb-12 mb-12 border-b border-white/5 last:border-0"
                >
                  <div className="flex flex-col space-y-2 mb-6">
                    <h4 className="text-2xl md:text-4xl font-bold text-white group-hover:text-yellow-500 transition-colors duration-500">
                      {edu.degree}
                    </h4>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="text-slate-400 font-medium text-lg mb-4">
                      {edu.institution}
                    </p>
                    <span className="text-yellow-500 font-mono text-[10px] tracking-widest uppercase">
                      {edu.year}
                    </span>
                  </div>

                  {edu.description && (
                    <p className="text-slate-500 text-base leading-relaxed max-w-xl font-light mb-4">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </motion.div>

      {/* Bottom Padding */}
      <div className="h-32 w-full" />
    </div>
  );
};

export default About;
