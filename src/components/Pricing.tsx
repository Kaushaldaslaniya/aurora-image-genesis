
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
};

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const pricingPlans: PricingPlan[] = [
    {
      name: "Starter",
      price: isAnnual ? "$9.99" : "$14.99",
      description: "Perfect for beginners and casual creators",
      features: [
        "100 AI image generations per month",
        "Standard resolution outputs",
        "Basic editing tools",
        "24-hour support",
        "Commercial rights to images"
      ]
    },
    {
      name: "Pro",
      price: isAnnual ? "$29.99" : "$39.99",
      description: "For serious creators and small businesses",
      features: [
        "500 AI image generations per month",
        "High resolution outputs",
        "Advanced editing tools",
        "Priority support",
        "Commercial rights to images",
        "Batch processing",
        "API access"
      ],
      recommended: true
    },
    {
      name: "Enterprise",
      price: isAnnual ? "$99.99" : "$119.99",
      description: "For businesses with high volume needs",
      features: [
        "2000 AI image generations per month",
        "Ultra-high resolution outputs",
        "Complete editing suite",
        "Dedicated support manager",
        "Commercial rights to images",
        "Batch processing",
        "Advanced API access",
        "Custom AI model training"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="hero-blob w-[600px] h-[600px] bg-aurora-purple/30 left-[-200px] top-[30%]"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-slide-up opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-700 mb-8">
            Choose the plan that fits your creative needs. All plans include access to our AI image generation technology.
          </p>
          
          {/* Pricing Toggle */}
          <div className="flex items-center justify-center space-x-3 mb-8">
            <span className={`${isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>Annual</span>
            <button 
              className={`w-14 h-7 rounded-full p-1 flex ${isAnnual ? 'bg-gray-200' : 'bg-aurora-purple'}`}
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <span 
                className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                  isAnnual ? '' : 'translate-x-7'
                }`}
              />
            </button>
            <span className={`${!isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>Monthly</span>
          </div>
          {isAnnual && (
            <div className="text-sm text-aurora-purple font-medium animate-fade-in">
              Save up to 25% with annual billing
            </div>
          )}
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`
                rounded-2xl p-6 transition-all duration-300 animate-slide-up opacity-0 hover:shadow-xl
                ${plan.recommended 
                  ? 'glass-card border-aurora-purple border-2 shadow-lg transform -translate-y-2' 
                  : 'bg-white border border-gray-100 shadow'
                }
              `}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              {plan.recommended && (
                <div className="bg-aurora-purple text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full inline-block mb-3">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500 ml-1">/month</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 mt-0.5">
                      <Check size={18} className="text-green-500" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${plan.recommended 
                  ? 'bg-aurora-purple hover:bg-aurora-purple/90' 
                  : 'bg-gray-900 hover:bg-gray-800'
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
