
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'
    )}>
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold text-gradient">Aurora</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="font-medium hover:text-aurora-purple transition-colors">Home</a>
          <a href="#about" className="font-medium hover:text-aurora-purple transition-colors">About</a>
          <a href="#features" className="font-medium hover:text-aurora-purple transition-colors">Features</a>
          <a href="#gallery" className="font-medium hover:text-aurora-purple transition-colors">Gallery</a>
          <a href="#pricing" className="font-medium hover:text-aurora-purple transition-colors">Pricing</a>
          <a href="#contact" className="font-medium hover:text-aurora-purple transition-colors">Contact</a>
        </div>
        
        <div className="hidden md:block">
          <Button className="bg-aurora-purple hover:bg-aurora-purple/90 shadow-lg">Get Started</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-600 rounded-lg"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} glass-nav mt-3 py-4 px-4 animate-fade-in`}>
        <div className="flex flex-col space-y-4">
          <a href="#home" className="font-medium p-2 hover:bg-white/20 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" className="font-medium p-2 hover:bg-white/20 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#features" className="font-medium p-2 hover:bg-white/20 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
          <a href="#gallery" className="font-medium p-2 hover:bg-white/20 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Gallery</a>
          <a href="#pricing" className="font-medium p-2 hover:bg-white/20 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</a>
          <a href="#contact" className="font-medium p-2 hover:bg-white/20 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <Button className="bg-aurora-purple hover:bg-aurora-purple/90 shadow-lg w-full">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
