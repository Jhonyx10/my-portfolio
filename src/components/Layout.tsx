import type { ReactNode } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    // Added flex and flex-col to keep footer at bottom
    <div className="bg-slate-900 min-h-screen text-white font-sans flex flex-col">
      <Navbar />
      {/* Added pt-28 to push content below the fixed navbar.
          Added flex-grow to push the footer down. 
      */}
      <main className="grow pt-28 px-4">
        {children || <Outlet />}
      </main>
      <footer className="bg-slate-900 border-t border-slate-800 py-10 text-center">
        <p className="text-slate-500">© 2026 Jhonmark Ordaniza. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;