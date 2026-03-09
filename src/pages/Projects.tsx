import { motion } from "framer-motion";

const Projects = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const projects = [
        {
            title: "Project Alpha",
            description: "A high-performance web application built with React and Vite.",
            icon: "🚀",
        },
        {
            title: "Project Beta",
            description: "A sleek and modern dashboard using Tailwind CSS v4.",
            icon: "📊",
        },
        {
            title: "Project Gamma",
            description: "An interactive portfolio site with Framer Motion animations.",
            icon: "🎨",
        },
    ];

    return (
        <div className="pt-32 px-4 min-h-screen">
            <motion.section
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="max-w-6xl mx-auto text-center"
            >
                <h2 className="text-4xl md:text-6xl font-bold mb-12">My Work</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-yellow-400/50 transition-colors"
                        >
                            <div className="text-4xl mb-4">{project.icon}</div>
                            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                            <p className="text-slate-400">{project.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    );
};

export default Projects;
