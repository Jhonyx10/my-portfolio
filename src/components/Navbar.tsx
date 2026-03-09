import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
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
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center p-6 bg-slate-900/40 backdrop-blur-md border-b border-white/10 shadow-xl fixed w-full z-50 gap-4"
    >
      <ul className="flex gap-8">
        {navItems.map((item) => (
          <motion.li
            key={item.name}
            whileHover={{ y: -3, color: "#facc15" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="cursor-pointer text-sm uppercase tracking-widest font-medium text-white"
          >
            {item.link.startsWith("#") ? (
              <a href={item.link}>{item.name}</a>
            ) : item.link.startsWith("/#") ? (
               <a href={item.link}>{item.name}</a>
            ) : (
              <Link to={item.link}>{item.name}</Link>
            )}
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
