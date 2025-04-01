
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const heroImageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroImageRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate percentage
      const moveX = (clientX / innerWidth) - 0.5;
      const moveY = (clientY / innerHeight) - 0.5;
      
      // Move the element based on mouse position
      heroImageRef.current.style.transform = `translateX(${moveX * 20}px) translateY(${moveY * 20}px)`;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden">
      {/* Background blobs */}
      <div className="hero-blob w-[500px] h-[500px] bg-aurora-purple left-[-100px] top-[10%]"></div>
      <div className="hero-blob w-[600px] h-[600px] bg-aurora-blue right-[-200px] bottom-[5%]"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl mx-auto lg:mx-0">
            {/* Animated badge */}
            <div className="inline-flex items-center space-x-2 bg-white/30 backdrop-blur px-4 py-2 rounded-full animate-fade-in">
              <Sparkles size={16} className="text-aurora-purple" />
              <span className="text-sm font-medium">AI-Powered Image Generation</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down opacity-0" style={{ animationDelay: '0.2s' }}>
              Transform Your <span className="text-gradient">Imagination</span> Into Stunning Visuals
            </h1>
            
            {/* Description */}
            <p className="text-lg text-gray-700 animate-slide-down opacity-0" style={{ animationDelay: '0.4s' }}>
              Create breathtaking images with our advanced AI technology. Perfect for designers, marketers, and creators looking for unique visual content.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 animate-slide-down opacity-0" style={{ animationDelay: '0.6s' }}>
              <Button size="lg" className="bg-aurora-purple hover:bg-aurora-purple/90">
                Start Creating
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-aurora-purple/50 text-aurora-purple hover:bg-aurora-purple/5">
                View Gallery
              </Button>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="relative min-h-[400px] animate-fade-in" style={{ animationDelay: '0.8s' }} ref={heroImageRef}>
            <div className="absolute top-0 left-[10%] w-[250px] h-[250px] rotate-6 hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="AI generated portrait"
                className="w-full h-full object-cover rounded-3xl shadow-xl img-mask-1" 
              />
            </div>
            <div className="absolute top-[35%] left-[35%] w-[220px] h-[280px] -rotate-3 hover-scale z-10">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
                alt="AI generated landscape" 
                className="w-full h-full object-cover rounded-3xl shadow-xl img-mask-2"
              />
            </div>
            <div className="absolute bottom-0 left-[15%] w-[200px] h-[200px] rotate-12 hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1486718448742-163732cd1544" 
                alt="AI generated abstract" 
                className="w-full h-full object-cover rounded-3xl shadow-xl img-mask-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
