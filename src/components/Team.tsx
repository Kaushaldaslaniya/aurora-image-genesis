
import React, { useState } from 'react';
import { Linkedin, Twitter, Globe } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

const Team: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Alex Morgan",
      role: "Chief AI Officer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "PhD in Computer Vision with 10+ years experience in AI research. Leads our AI model development team.",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#"
      }
    },
    {
      id: 2,
      name: "Sam Patel",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Software engineer with expertise in scalable infrastructure. Previously at Google and AWS.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 3,
      name: "Olivia Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
      bio: "Award-winning digital artist with a passion for combining traditional art techniques with AI technology.",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#"
      }
    },
    {
      id: 4,
      name: "Marcus Johnson",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Product strategist focused on creating intuitive user experiences. Previously led product teams at Adobe.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 5,
      name: "Elena Rodriguez",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Digital marketing specialist with expertise in growth strategies for tech startups.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section id="team" className="py-20 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-700">
            The talented people behind our innovative AI image generation technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className="relative group animate-slide-up opacity-0" 
              style={{ animationDelay: `${0.1 * index}s` }}
              onMouseEnter={() => setActiveId(member.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full aspect-[3/4] object-cover object-center transition-transform duration-500 group-hover:scale-110" 
                />
                <div className={`
                  absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                  transition-opacity duration-300 
                  ${activeId === member.id ? 'opacity-100' : 'opacity-0 lg:opacity-0 lg:group-hover:opacity-100'}
                `}>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg">{member.name}</h3>
                    <p className="text-white/80 text-sm">{member.role}</p>
                    
                    <div className={`
                      mt-2 overflow-hidden transition-all duration-300 
                      ${activeId === member.id ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0 lg:group-hover:max-h-32 lg:group-hover:opacity-100'}
                    `}>
                      <p className="text-white/70 text-xs mb-3">{member.bio}</p>
                      <div className="flex space-x-3">
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} className="text-white/80 hover:text-white">
                            <Linkedin size={18} />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a href={member.social.twitter} className="text-white/80 hover:text-white">
                            <Twitter size={18} />
                          </a>
                        )}
                        {member.social.website && (
                          <a href={member.social.website} className="text-white/80 hover:text-white">
                            <Globe size={18} />
                          </a>
                        )}
                      </div>
                    </div>
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

export default Team;
