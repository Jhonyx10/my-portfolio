import { ReactNode } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

interface LayoutProps {
    children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="bg-slate-900 min-h-screen text-white font-sans">
            <Navbar />
            <main>
                {children || <Outlet />}
            </main>
            <footer className="bg-slate-900 border-t border-slate-800 py-10 text-center">
                <p className="text-slate-500">© 2026 Jhonmark Ordaniza. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;
