
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Pricing from '../components/Pricing';
import Team from '../components/Team';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { toast } from '@/components/ui/sonner';

const Index = () => {
  useEffect(() => {
    // Display a welcome toast when the page loads
    setTimeout(() => {
      toast("Welcome to Aurora", {
        description: "AI-powered image generation at your fingertips.",
      });
    }, 1500);

    // Add intersection observer for animation triggers
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    animatedElements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      if (animatedElements) {
        animatedElements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <About />
        <Gallery />
        <Pricing />
        <Team />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
