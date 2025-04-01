
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  prompt: string;
}

const GalleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    alt: "Colorful digital landscape",
    prompt: "Digital landscape with neon colors, cyberpunk style, futuristic city"
  },
  {
    src: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    alt: "Mystical forest",
    prompt: "Enchanted forest with glowing particles, magical atmosphere, fantasy world"
  },
  {
    src: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
    alt: "Abstract architecture",
    prompt: "Minimalist futuristic architecture, clean lines, dramatic lighting"
  },
  {
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    alt: "Ocean waves",
    prompt: "Powerful ocean waves at sunset, dramatic seascape, atmospheric"
  },
  {
    src: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b",
    alt: "Geometric building",
    prompt: "Geometric building patterns, architectural photography, perspective"
  },
  {
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    alt: "Portrait of a woman",
    prompt: "Photorealistic portrait of a young woman, soft lighting, detailed features"
  }
];

const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState<boolean[]>(Array(GalleryImages.length).fill(false));
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const revealTimers = GalleryImages.map((_, index) => {
            return setTimeout(() => {
              setIsRevealed(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 200);
          });
          
          return () => {
            revealTimers.forEach(timer => clearTimeout(timer));
          };
        }
      },
      { threshold: 0.2 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  
  const handlePrevious = () => {
    setActiveIndex(prev => (prev === 0 ? GalleryImages.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex(prev => (prev === GalleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-20 relative overflow-hidden bg-secondary/50">
      <div className="hero-blob w-[700px] h-[700px] bg-aurora-blue/20 left-[30%] top-[30%]"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-slide-up opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery Showcase</h2>
          <p className="text-lg text-gray-700">
            Explore stunning AI-generated artwork created with our platform. Each image can be retrieved using its unique UUID.
          </p>
        </div>
        
        {/* Featured Image */}
        <div className="mb-16 relative">
          <div className="bg-aurora-card glass-card rounded-3xl p-6 md:p-10 max-w-5xl mx-auto shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={GalleryImages[activeIndex].src} 
                  alt={GalleryImages[activeIndex].alt}
                  className="w-full h-[300px] md:h-[400px] object-cover transition-all duration-700 hover:scale-110"
                />
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">{GalleryImages[activeIndex].alt}</h3>
                <div className="glass-card rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-500 mb-1">Prompt:</p>
                  <p className="text-gray-900 italic">&ldquo;{GalleryImages[activeIndex].prompt}&rdquo;</p>
                </div>
                <p className="text-gray-600">
                  UUID: 7e9f2a3b-5c8d-41e6-9f0a-{(activeIndex + 1) * 107}db92ec
                </p>
                <div className="flex space-x-4 pt-4">
                  <Button variant="outline" size="icon" onClick={handlePrevious}>
                    <ArrowLeft size={18} />
                  </Button>
                  <Button variant="outline" size="icon" onClick={handleNext}>
                    <ArrowRight size={18} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Grid Gallery */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GalleryImages.map((image, index) => (
            <div 
              key={index} 
              className={`overflow-hidden rounded-xl cursor-pointer shadow-lg transition-all duration-700 ${
                isRevealed[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="group relative">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
