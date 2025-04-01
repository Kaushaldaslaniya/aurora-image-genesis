
import React from 'react';
import { Button } from '@/components/ui/button';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="hero-blob w-[500px] h-[500px] bg-aurora-blue/40 left-[-150px] bottom-[20%]"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative h-[500px] animate-fade-in">
            <div className="absolute top-0 left-0 w-[280px] h-[320px] rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b" 
                alt="Team working on AI" 
                className="w-full h-full object-cover rounded-3xl shadow-xl"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[280px] h-[320px] -rotate-3 z-10">
              <div className="relative w-full h-full">
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                  alt="AI Technology" 
                  className="w-full h-full object-cover rounded-3xl shadow-xl"
                />
                <div className="absolute inset-0 bg-aurora-gradient opacity-30 rounded-3xl"></div>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up opacity-0">Our Story</h2>
            <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg mb-4 text-gray-700">
                Founded in 2023, Aurora was born from a passion to make AI-generated imagery accessible to everyone. What started as a small project between AI researchers has grown into a powerful platform used by creators worldwide.
              </p>
              <p className="text-lg mb-4 text-gray-700">
                Our team combines expertise in artificial intelligence, computer vision, and user experience design to create a seamless creation process from prompt to high-resolution output.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                We believe in the democratization of creative tools and are committed to building technology that empowers artists, marketers, and businesses to achieve their visual communication goals.
              </p>
            </div>
            
            <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
              <Button className="bg-aurora-purple hover:bg-aurora-purple/90">Learn More About Us</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
