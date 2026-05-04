import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const featureCards = [
  {
    title: "Detailed Product Breakdown",
    description: "Olive goes beyond basic labels. We analyze processing levels, additives, and hidden toxins to give you a complete picture of what's in your food.",
    color: "bg-[#EFF6F0]",
    textColor: "text-[#386641]",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
  {
    title: "Seed Oil Free Dining Map",
    description: "Find restaurants that align with your health goals. Our integrated map highlights dining spots that prioritize clean oils and ingredients.",
    color: "bg-[#386641]",
    textColor: "text-white",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "Certified Lab-Testing Data",
    description: "We verify our data with certified lab results, ensuring that the information you receive is accurate, scientific, and trustworthy.",
    color: "bg-[#AEB93E]",
    textColor: "text-white",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.724 2.17a2 2 0 00.547 1.022l1.414 1.414a2 2 0 001.022.547l2.387.477a2 2 0 001.96-1.414l.724-2.17a2 2 0 00-.547-1.022l-1.414-1.414z" />
      </svg>
    )
  }
];

const FeatureCard = ({ card, index, progress, range }: { card: any, index: number, progress: any, range: number[] }) => {
  const scale = useTransform(progress, range, [1, 1 - (featureCards.length - index) * 0.05]);
  
  return (
    <div className="sticky top-[15vh] flex items-center justify-center mb-[10vh]">
      <motion.div 
        style={{ scale, top: `calc(15vh + ${index * 25}px)` }}
        className={`relative w-full max-w-4xl h-[500px] ${card.color} rounded-[3rem] p-12 shadow-2xl flex flex-col justify-between overflow-hidden border border-black/5`}
      >
        <div className="flex justify-between items-start">
           <div className={`${card.textColor} opacity-80`}>
              {card.icon}
           </div>
           <div className={`text-6xl font-pall ${card.textColor} opacity-20`}>
              0{index + 1}
           </div>
        </div>
        
        <div className="flex flex-col gap-6">
           <h3 className={`text-4xl md:text-5xl font-pall font-bold ${card.textColor}`}>
              {card.title}
           </h3>
           <p className={`text-xl md:text-2xl ${card.textColor} opacity-90 max-w-2xl leading-relaxed`}>
              {card.description}
           </p>
        </div>

        {/* Decorative background element */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      </motion.div>
    </div>
  );
};

const Features: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="features" ref={containerRef} className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-32">
          <h2 className="font-pall text-primary text-4xl md:text-7xl font-bold text-center mb-8">
            Why Choose Olive?
          </h2>
          <p className="text-xl text-neutral-600 text-center max-w-2xl">
            We've built the most comprehensive health companion for your grocery shopping and dining experiences.
          </p>
        </div>

        <div className="relative">
          {featureCards.map((card, i) => {
             const start = i / featureCards.length;
             const end = 1;
             return (
               <FeatureCard 
                 key={i} 
                 card={card} 
                 index={i} 
                 progress={scrollYProgress} 
                 range={[start, end]}
               />
             );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
