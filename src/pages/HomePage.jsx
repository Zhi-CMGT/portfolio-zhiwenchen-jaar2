import {useState, useEffect} from "react";
import {Code, Palette, Zap, ArrowRight, Mail, X, Menu, Download} from "lucide-react";
import {Link} from 'react-router';
import Footer from '../components/Footer';
import skills from '../data/skills';
import SkillCard from '../components/SkillCard.jsx';

const Github = ({size = 24, className = ""}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path
            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
        <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
);

export default function HomePage() {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'contact'];
            const scrollPosition = window.scrollY + 100;
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const {offsetTop, offsetHeight} = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({behavior: 'smooth'});
        setIsMenuOpen(false);
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-x-hidden">

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-lg border-b border-purple-500/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div
                            className="text-xl sm:text-2xl font-bold bg-purple-400 bg-clip-text text-transparent cursor-default">
                            Portfolio
                        </div>

                        <div className="hidden md:flex space-x-6 lg:space-x-8">
                            {['Home', 'About', 'Skills', 'Contact'].map((item) => (
                                <button key={item} onClick={() => scrollToSection(item.toLowerCase())}
                                        className={`relative px-3 py-2 transition-all duration-300 text-sm lg:text-base ${
                                            activeSection === item.toLowerCase() ? 'text-purple-400' : 'text-gray-300 hover:text-white'
                                        }`}>
                                    {item}
                                    {activeSection === item.toLowerCase() && (
                                        <span
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-white"/>
                                    )}
                                </button>
                            ))}
                            <Link to="/projects"
                                  className="px-3 py-2 text-gray-300 hover:text-white transition-all text-sm lg:text-base">
                                Projects
                            </Link>
                        </div>

                        <button className="md:hidden text-white p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
                                onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu openen">
                            {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                        </button>
                    </div>

                    {isMenuOpen && (
                        <div className="md:hidden mt-3 pb-3 space-y-1 animate-fadeIn border-t border-gray-700/50 pt-3">
                            {['Home', 'About', 'Skills', 'Contact'].map((item) => (
                                <button key={item} onClick={() => scrollToSection(item.toLowerCase())}
                                        className="block w-full text-left px-4 py-3 hover:bg-purple-500/20 rounded-lg transition-colors text-gray-200 font-medium">
                                    {item}
                                </button>
                            ))}
                            <Link to="/projects" onClick={() => setIsMenuOpen(false)}
                                  className="block w-full text-left px-4 py-3 hover:bg-purple-500/20 rounded-lg transition-colors text-gray-200 font-medium">
                                Projects
                            </Link>
                        </div>
                    )}
                </div>
            </nav>

            <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-8 animate-fadeInUp">
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tight">
                            <span
                                className="bg-purple-400 bg-clip-text text-transparent">
                                Hallo, ik ben
                            </span>
                            <br/>
                            <span className="text-white drop-shadow-2xl">Zhiwen Chen</span>
                        </h1>
                        <p className="text-base sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-2">
                            Full Stack Developer in opleiding die gepassioneerd is in het oplossen van problemen door
                            middel van design en technologie.
                        </p>
                    </div>

                    <div
                        className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 animate-fadeInUp px-4"
                        style={{animationDelay: '0.2s'}}>
                        <Link to="/projects"
                              className="px-6 sm:px-8 py-3 sm:py-4 bg-purple-400 rounded-full font-semibold hover:scale-105 active:scale-95 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2 text-sm sm:text-base">
                            Bekijk Projecten <ArrowRight size={18}/>
                        </Link>
                        <button onClick={() => scrollToSection('contact')}
                                className="px-6 sm:px-8 py-3 sm:py-4 border border-gray-600 rounded-full font-semibold hover:border-purple-500 hover:text-purple-400 active:scale-95 transition-all duration-300 text-sm sm:text-base">
                            Contact
                        </button>
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20">
                <div className="max-w-5xl mx-auto w-full">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-10 sm:mb-16 text-center">
                        <span className="bg-white bg-clip-text text-transparent">Over Mij</span>
                    </h2>
                    <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
                        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                            Ik ben een Creative Media & Game Technologies (CMGT) student met een brede interesse in
                            het ontwerpen en ontwikkelen van interactieve digitale ervaringen. Tijdens mijn studie
                            heb ik gewerkt aan projecten waarin creativiteit, technologie en gebruikerservaring
                            samenkomen, zoals applicaties, prototypes en interactieve concepten.
                        </p>
                        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                            Wat mij motiveert is het oplossen van problemen door middel van design en technologie.
                            Ik vind het interessant om ideeën niet alleen visueel uit te werken, maar ook technisch
                            tot leven te brengen. Daarbij werk ik graag gestructureerd, maar met ruimte voor
                            creativiteit en experiment.
                        </p>
                        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                            Ik werk graag aan het verder ontwikkelen van mijn vaardigheden binnen een professionele
                            omgeving. Ik haal energie uit het werken aan echte projecten, het samenwerken in teams
                            en het leren van ervaren ontwikkelaars en designers.
                        </p>

                        <div className="pt-4 flex flex-wrap gap-4">
                            <a
                                href="/ZhiwenChen-CV.pdf"
                                download
                                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-400 rounded-full font-bold hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-blue-500/25 text-sm sm:text-base"
                            >
                                <Download size={20}/> Download CV
                            </a>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="px-6 py-3 border border-gray-700 rounded-full font-bold hover:bg-gray-800 transition-colors text-sm sm:text-base text-gray-300"
                            >
                                Contacteer Mij
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="skills" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20">
                <div className="max-w-5xl mx-auto w-full">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-10 sm:mb-16 text-center">
                        <span
                            className="bg-white bg-clip-text text-transparent">Vaardigheden</span>
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
                        {skills.map((skill) => (
                            <SkillCard key={skill.name} skill={skill}/>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20">
                <div className="max-w-4xl mx-auto w-full">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 sm:mb-12 text-center">
                        <span
                            className="bg-white bg-clip-text text-transparent">Contact</span>
                    </h2>
                    <div
                        className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 border border-gray-700/50">
                        <p className="text-base sm:text-xl text-gray-300 text-center mb-8 sm:mb-12 leading-relaxed">
                            Neem gerust contact op!
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
                            <a href="mailto:zhiwen72@hotmail.com"
                               className="flex flex-col items-center gap-3 sm:gap-4 p-5 sm:p-6 bg-purple-500/20 rounded-xl hover:scale-105 active:scale-95 transition-transform duration-300 border border-purple-500/30 hover:border-purple-500/60">
                                <Mail className="text-purple-400" size={36}/>
                                <div className="text-center">
                                    <div className="font-semibold text-white mb-1">Email</div>
                                    <div className="text-xs sm:text-sm text-gray-400 break-all">zhiwen72@hotmail.com
                                    </div>
                                </div>
                            </a>
                            <a href="https://github.com/Zhi-CMGT" target="_blank" rel="noopener noreferrer"
                               className="flex flex-col items-center gap-3 sm:gap-4 p-5 sm:p-6 bg-purple-500/20 rounded-xl hover:scale-105 active:scale-95 transition-transform duration-300 border border-purple-500/30 hover:border-purple-500/60">
                                <Github className="text-purple-400" size={36}/>
                                <div className="text-center">
                                    <div className="font-semibold text-white mb-1">GitHub</div>
                                    <div className="text-xs sm:text-sm text-gray-400">@Zhi-CMGT</div>
                                </div>
                            </a>
                        </div>
                        <div className="text-center">
                            <a href="mailto:zhiwen72@hotmail.com"
                               className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-purple-500 rounded-full font-bold text-base sm:text-lg hover:scale-105 active:scale-95 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/50">
                                Stuur een Bericht
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
}