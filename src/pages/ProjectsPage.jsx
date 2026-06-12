import {useEffect} from "react";
import {ArrowLeft} from "lucide-react";
import {Link} from 'react-router';
import Footer from '../components/Footer';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard.jsx';

export function ProjectsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
            <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-lg border-b border-purple-500/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
                    <Link to="/"
                          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                        <ArrowLeft size={18}/><span>Terug naar Home</span>
                    </Link>
                    <div
                        className="text-xl sm:text-2xl font-bold bg-white bg-clip-text text-transparent">
                        Projecten
                    </div>
                </div>
            </nav>

            <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-10 sm:mb-16 text-center">
                    <span className=" bg-white bg-clip-text text-transparent">
                        Mijn Projecten
                    </span>
                </h1>

                <div className="grid sm:grid-cols-2 gap-5 sm:gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project}/>
                    ))}
                </div>
            </main>

            <Footer/>
        </div>
    );
}