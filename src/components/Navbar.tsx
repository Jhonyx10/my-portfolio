import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Briefcase, Mail, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navItems = [
    { name: "Home", link: "/", icon: <Home size={16} /> },
    { name: "About", link: isHome ? "about" : "/about", icon: <User size={16} /> },
    { name: "Projects", link: "/projects", icon: <Briefcase size={16} /> },
    { name: "Contact", link: isHome ? "#contact" : "/#contact", icon: <Mail size={16} /> },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#050505]/80 backdrop-blur-md border-b border-white/5 fixed top-0 w-full z-[100] h-20 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full relative px-8 md:px-12">

        {/* Logo - Matches the H1 style */}
        <Link to="/" className="font-bold text-xl tracking-tighter text-white hover:text-yellow-500 transition-colors">
          JO<span className="text-yellow-500">.</span>
        </Link>

        {/* Desktop Links - Minimalist & Spaced */}
        <ul className="hidden md:flex gap-10 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="cursor-pointer text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400 hover:text-white transition-all duration-300"
            >
              {item.link.startsWith("#") || item.link.startsWith("/#") ? (
                <a href={item.link} className="flex items-center gap-2">
                  {item.icon}
                  {item.name}
                </a>
              ) : (
                <Link to={item.link} className="flex items-center gap-2">
                  {item.icon}
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle - Minimalist */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white hover:text-yellow-500 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Dark & Sleek */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#050505] border-b border-white/5 absolute left-0 top-20 w-full shadow-2xl"
          >
            <ul className="flex flex-col items-center gap-8 py-12">
              {navItems.map((item) => (
                <li key={item.name} onClick={() => setIsOpen(false)}>
                  {item.link.startsWith("#") || item.link.startsWith("/#") ? (
                    <a href={item.link} className="text-sm uppercase tracking-[0.3em] font-bold text-slate-400 hover:text-yellow-500">
                      {item.name}
                    </a>
                  ) : (
                    <Link to={item.link} className="text-sm uppercase tracking-[0.3em] font-bold text-slate-400 hover:text-yellow-500">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;