export default function SkillCard({skill}) {
    return (
        <div
            className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-gray-700/50 hover:border-purple-500/50 active:scale-[0.98] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">

            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl">{skill.icon}</span>

                    <span className="text-lg sm:text-xl font-bold text-white">
                        {skill.name}
                    </span>
                </div>

                <span
                    className={`text-xl sm:text-2xl font-bold bg-white ${skill.color} bg-clip-text text-transparent`}
                >
                    {skill.level}%
                </span>
            </div>

            <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                <div
                    className={`absolute top-0 left-0 h-full bg-purple-500 ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{width: `${skill.level}%`}}
                >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"/>
                </div>
            </div>
        </div>
    );
}