
import React from 'react';
import { Wand2, ImageIcon, DownloadCloud, Hash, Palette, LayoutGrid } from 'lucide-react';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
};

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => (
  <div 
    className="glass-card rounded-2xl p-6 hover-scale animate-slide-up opacity-0" 
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-aurora-gradient mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <Wand2 size={24} className="text-white" />,
      title: "Advanced AI Generation",
      description: "Create stunning images with our state-of-the-art AI models trained on diverse datasets.",
      delay: 0.1
    },
    {
      icon: <ImageIcon size={24} className="text-white" />,
      title: "High Resolution Outputs",
      description: "Download images in crystal-clear 4K resolution, perfect for professional use.",
      delay: 0.2
    },
    {
      icon: <DownloadCloud size={24} className="text-white" />,
      title: "Quick Downloads",
      description: "Instantly access your creations with our high-speed delivery system.",
      delay: 0.3
    },
    {
      icon: <Hash size={24} className="text-white" />,
      title: "UUID Retrieval",
      description: "Easily retrieve images from Instagram posts using our unique identifier system.",
      delay: 0.4
    },
    {
      icon: <Palette size={24} className="text-white" />,
      title: "Style Customization",
      description: "Choose from various artistic styles to match your creative vision.",
      delay: 0.5
    },
    {
      icon: <LayoutGrid size={24} className="text-white" />,
      title: "Batch Processing",
      description: "Generate multiple variations at once to find the perfect match for your needs.",
      delay: 0.6
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="hero-blob w-[600px] h-[600px] bg-aurora-purple/40 right-[-200px] top-[10%]"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-700">
            Our platform offers cutting-edge tools that make AI image generation accessible and powerful.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
