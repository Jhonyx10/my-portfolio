import { motion } from "framer-motion";
import Profile from "../assets/profile.jpg";

const Home = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div id="home" className="bg-slate-900 min-h-screen text-white flex items-center justify-center">
      {/* Hero / Profile Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div 
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center gap-10 md:gap-16 text-center md:text-left"
        >
          {/* Profile Image with Decorative Ring */}
          <motion.div
            variants={fadeUp}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full blur opacity-30"></div>
            <img 
              src={Profile} 
              alt="Jhonmark Ordaniza"
              className="relative h-48 w-48 md:h-64 md:w-64 rounded-full object-cover border-4 border-slate-800 shadow-2xl"
            />
          </motion.div>

          {/* Profile Text Content */}
          <div className="flex flex-col items-center md:items-start">
            <motion.span 
              variants={fadeUp}
              className="text-yellow-400 font-mono tracking-widest mb-2"
            >
              FULL-STACK DEVELOPER
            </motion.span>
            
            <motion.h2
              variants={fadeUp}
              className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
            >
              Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Jhonmark</span>
            </motion.h2>
            
            <motion.p
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl mb-8 max-w-xl text-slate-400 leading-relaxed"
            >
              I specialize in building high-performance web applications using **React**, **Tailwind**, and **TypeScript**. I love turning complex problems into simple, beautiful, and intuitive designs.
            </motion.p>

            {/* Quick Info/Badges */}
            <motion.div 
              variants={fadeUp}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center md:justify-start gap-3 mb-8"
            >
              {["Philippines", "Freelance", "Open to Work"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs font-medium text-slate-300">
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeUp}
              transition={{ delay: 0.5 }}
              className="flex gap-4"
            >
              <a
                href="#projects"
                className="bg-yellow-400 text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition-all shadow-lg hover:shadow-yellow-400/20"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="bg-slate-800 text-white border border-slate-700 px-8 py-3 rounded-full font-bold hover:bg-slate-700 transition-all"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;