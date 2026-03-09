import type { ReactNode } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

interface LayoutProps {
    children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-yellow-500/30">
            <Navbar />
            {/* Added pt-20 to match your Navbar height */}
            <main className="pt-20"> 
                {children || <Outlet />}
            </main>
            <footer className="border-t border-white/5 py-12 text-center bg-[#050505]">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-600">
                    Built with <span className="text-white">React</span> & <span className="text-white">Framer Motion</span> — 2026
                </p>
            </footer>
        </div>
    );
};

export default Layout;