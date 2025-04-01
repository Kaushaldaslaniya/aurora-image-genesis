
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Unlocking Creative Potential with AI-Generated Imagery",
      excerpt: "Discover how AI image generation is revolutionizing the creative process for artists and designers worldwide.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      date: "May 15, 2023",
      author: {
        name: "Alex Morgan",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      },
      category: "Creativity"
    },
    {
      id: 2,
      title: "The Technical Innovations Behind Modern AI Image Generation",
      excerpt: "A deep dive into the neural networks and algorithms that power today's AI image generation platforms.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      date: "June 2, 2023",
      author: {
        name: "Sam Patel",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      category: "Technology"
    },
    {
      id: 3,
      title: "Ethical Considerations in AI-Generated Art and Photography",
      excerpt: "Exploring the ethical questions surrounding ownership, copyright, and the future of human creativity.",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b",
      date: "July 10, 2023",
      author: {
        name: "Olivia Chen",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
      },
      category: "Ethics"
    }
  ];

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      <div className="hero-blob w-[600px] h-[600px] bg-aurora-blue/20 right-[-250px] top-[20%]"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl animate-slide-up opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights & News</h2>
            <p className="text-lg text-gray-700">
              Stay updated with the latest trends, techniques, and innovations in AI-generated imagery.
            </p>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0 animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
            View All Articles
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl animate-slide-up opacity-0" 
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-medium bg-aurora-purple/10 text-aurora-purple px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    className="w-10 h-10 rounded-full mr-3 object-cover" 
                  />
                  <span className="text-sm font-medium">{post.author.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
