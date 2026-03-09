import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: isHome ? "#about" : "/#about" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: isHome ? "#contact" : "/#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      // Fixed: Tailwind uses z-50 (not z-100), or use brackets for arbitrary values
      className="bg-slate-900/80 backdrop-blur-md border-b border-white/10 shadow-xl fixed top-0 w-full z-[100] p-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - Always visible */}
        <span className="font-bold text-xl tracking-tighter">JO</span>

        {/* Desktop Links - centered logic with the flex-grow and justify-center */}
        <ul className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <li 
              key={item.name} 
              className="cursor-pointer text-sm uppercase tracking-widest font-medium text-slate-300 hover:text-yellow-400 transition-colors"
            >
              {item.link.startsWith("#") || item.link.startsWith("/#") ? (
                <a href={item.link}>{item.name}</a>
              ) : (
                <Link to={item.link}>{item.name}</Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {/* Invisible spacer for Desktop to keep logo left (keeps the absolute centered list perfect) */}
        <div className="hidden md:block w-10"></div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-white/10 absolute left-0 top-[76px] w-full"
          >
            <ul className="flex flex-col items-center gap-8 py-10">
              {navItems.map((item) => (
                <li key={item.name} onClick={() => setIsOpen(false)}>
                   {item.link.startsWith("#") || item.link.startsWith("/#") ? (
                    <a href={item.link} className="text-lg uppercase tracking-[0.2em]">{item.name}</a>
                  ) : (
                    <Link to={item.link} className="text-lg uppercase tracking-[0.2em]">{item.name}</Link>
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