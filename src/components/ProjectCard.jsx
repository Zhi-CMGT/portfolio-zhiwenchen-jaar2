import {ExternalLink, Images} from "lucide-react";
import {useState} from "react";
import ImageModal from "./ImageModal";

export default function ProjectCard({project}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]">

                <div
                    className={`h-36 sm:h-48 bg-gradient-to-br ${project.gradient} relative cursor-pointer overflow-hidden`}
                    onClick={() => project.images?.length > 0 && setIsModalOpen(true)}
                >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"/>

                    {project.images?.[0] && (
                        <img
                            src={project.images[0]}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                        />
                    )}

                    {project.images?.length > 0 && (
                        <div
                            className="absolute bottom-3 right-3 z-20 bg-black/60 backdrop-blur-md p-2 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-xs text-white">
                            <Images size={14}/> {project.images.length} Foto's
                        </div>
                    )}
                </div>

                <div className="p-5 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">
                        {project.title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                        {project.description}
                    </p>

                    {project.contribution && (
                        <div className="mb-4 sm:mb-6">
                            <h4 className="text-xs sm:text-sm font-semibold text-purple-400 uppercase tracking-wider mb-1">
                                Mijn Bijdrage
                            </h4>
                            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                                {project.contribution}
                            </p>
                        </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-5 sm:mb-8">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="px-2 sm:px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs font-semibold border border-purple-500/20"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center justify-between">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-bold transition-colors text-sm sm:text-base"
                        >
                            Bekijk Project <ExternalLink size={16}/>
                        </a>

                        {project.images?.length > 0 && (
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
                            >
                                <Images size={18}/> Bekijk Foto's
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <ImageModal
                images={project.images}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}