import {X, ChevronLeft, ChevronRight} from "lucide-react";
import {useState, useEffect} from "react";

export default function ImageModal({images, isOpen, onClose}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setCurrentIndex(0);
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !images || images.length === 0) return null;

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const isVideo = (path) => {
        return typeof path === 'string' && path.match(/\.(mp4|webm|ogg|mov)$/i);
    };

    return (
        <div
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2 z-[110]"
            >
                <X size={32}/>
            </button>

            {images.length > 1 && (
                <>
                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20 z-[110]"
                    >
                        <ChevronLeft size={32}/>
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20 z-[110]"
                    >
                        <ChevronRight size={32}/>
                    </button>
                </>
            )}

            <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
                {isVideo(images[currentIndex]) ? (
                    <video
                        key={images[currentIndex]}
                        src={images[currentIndex]}
                        controls
                        autoPlay
                        className="max-w-full max-h-full shadow-2xl rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />
                ) : (
                    <img
                        src={images[currentIndex]}
                        alt={`Project media ${currentIndex + 1}`}
                        className="max-w-full max-h-full object-contain select-none shadow-2xl rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />
                )}

                {images.length > 1 && (
                    <div
                        className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
                        {currentIndex + 1} / {images.length}
                    </div>
                )}
            </div>
        </div>
    );
}