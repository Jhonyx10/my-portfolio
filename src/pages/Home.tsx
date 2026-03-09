import { motion, type Variants } from "framer-motion";
import Profile from "../assets/profile.jpg";
import { Github, Linkedin, Mail } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

const Home = () => {
  return (
    <div id="home" className="bg-[#050505] min-h-screen text-white flex items-center justify-center selection:bg-yellow-500/30">
      <main className="max-w-4xl mx-auto px-6 py-24 text-center">
        
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
          className="flex flex-col items-center"
        >
          {/* 1. Minimalist Profile Image */}
          <motion.div variants={fadeUp} className="relative mb-10 group">
            {/* Soft Glow behind image */}
            <div className="absolute -inset-2 bg-yellow-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <img 
              src={Profile} 
              alt="Jhonmark"
              className="relative h-32 w-32 md:h-40 md:w-40 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-white/5"
            />
          </motion.div>

          {/* 2. Clean Status Label */}
          <motion.div 
            variants={fadeUp}
            className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-[10px] font-bold tracking-[0.2em] text-yellow-500 uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
            Open for projects
          </motion.div>

          {/* 3. High-Impact Typography */}
          <motion.h1 
            variants={fadeUp}
            className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
          >
            Jhonmark <span className="text-slate-500 italic font-light">Ordaniza</span>
          </motion.h1>

          {/* 4. Balanced Paragraph */}
          <motion.p 
            variants={fadeUp}
            className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto mb-12 leading-relaxed"
          >
            I’m a Full-stack developer crafting high-performance web experiences. 
            Focused on the <span className="text-white font-medium">VILT ecosystem</span> and human-centric design.
          </motion.p>

          {/* 5. Minimalist CTA */}
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-center gap-8">        
            <div className="flex gap-6 text-sm font-medium text-slate-500">
             <a 
                href="https://github.com/Jhonyx10" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Github size={18} className="group-hover:text-yellow-500 transition-colors" />
                <span>GitHub</span>
              </a>
              <span className="text-white/10">•</span>
             <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Linkedin size={18} className="group-hover:text-yellow-500 transition-colors" />
                <span>LinkedIn</span>
              </a>
              <span className="text-white/10">•</span>
              <a 
                href="mailto:your-email@example.com" 
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Mail size={18} className="group-hover:text-yellow-500 transition-colors" />
                <span>Email</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

      </main>
    </div>
  );
};

export default Home;