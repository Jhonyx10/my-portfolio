import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Install lucide-react or use SVG icons

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

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-slate-900/40 backdrop-blur-md border-b border-white/10 shadow-xl fixed w-full z-50 p-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-center">
        {/* Desktop Links (Hidden on mobile) */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ y: -3, color: "#facc15" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer text-sm uppercase tracking-widest font-medium text-white"
            >
              {item.link.startsWith("#") || item.link.startsWith("/#") ? (
                <a href={item.link}>{item.name}</a>
              ) : (
                <Link to={item.link}>{item.name}</Link>
              )}
            </motion.li>
          ))}
        </ul>

        {/* Mobile Header (Visible on mobile only) */}
        <div className="flex w-full justify-between items-center md:hidden">
          <span className="font-bold text-lg tracking-tighter">JO</span>
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-6 pb-4">
              {navItems.map((item) => (
                <motion.li
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="text-sm uppercase tracking-widest font-medium text-white"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {item.link.startsWith("#") || item.link.startsWith("/#") ? (
                    <a href={item.link}>{item.name}</a>
                  ) : (
                    <Link to={item.link}>{item.name}</Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;