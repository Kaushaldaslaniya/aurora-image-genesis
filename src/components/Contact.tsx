
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-secondary/50">
      <div className="hero-blob w-[600px] h-[600px] bg-aurora-blue/30 right-[-200px] bottom-[-300px]"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-up opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-700 mb-6">
              Have questions about our AI image generation platform? We're here to help.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-aurora-purple/10 flex items-center justify-center mr-4">
                  <MessageSquare size={20} className="text-aurora-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Chat with us</h3>
                  <p className="text-gray-600">Our friendly team is here to help.</p>
                  <a href="#" className="text-aurora-purple font-medium hover:underline mt-1 inline-block">Start a conversation</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-aurora-purple/10 flex items-center justify-center mr-4">
                  <Mail size={20} className="text-aurora-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email us</h3>
                  <p className="text-gray-600">We'll respond as soon as possible.</p>
                  <a href="mailto:hello@aurora-ai.com" className="text-aurora-purple font-medium hover:underline mt-1 inline-block">hello@aurora-ai.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-aurora-purple/10 flex items-center justify-center mr-4">
                  <MapPin size={20} className="text-aurora-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Visit us</h3>
                  <p className="text-gray-600">Come say hello at our office.</p>
                  <p className="text-gray-600 mt-1">123 Innovation Drive, San Francisco, CA 94107</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-2xl shadow-xl p-6 md:p-8 animate-slide-up opacity-0" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2.5 bg-white/70 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-aurora-purple"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2.5 bg-white/70 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-aurora-purple"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2.5 bg-white/70 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-aurora-purple"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2.5 bg-white/70 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-aurora-purple"
                  placeholder="Your message..."
                />
              </div>
              
              <Button className="w-full bg-aurora-purple hover:bg-aurora-purple/90">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
