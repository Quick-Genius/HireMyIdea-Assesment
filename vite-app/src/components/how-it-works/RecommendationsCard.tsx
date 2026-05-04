import React from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

interface RecommendationsCardProps {
  title: string;
  description: string;
  index: number;
}

const names = [
  "Lentil and Spinach Soup",
  "Organic Almond Milk",
  "Gluten Free Bread",
  "Greek Yogurt",
  "Chia Seeds",
  "Quinoa Salad",
  "Avocado Toast",
  "Tomato Basil Soup",
  "Chickpea Coconut Curry",
];

const images = [
  "/assets/product-1.png",
  "/assets/product-2.png",
  "/assets/product-3.png",
];

const RecommendationsCard: React.FC<RecommendationsCardProps> = ({ title, description, index }) => {
  const y = useMotionValue(0);
  
  // Continuous scroll animation for background names
  useAnimationFrame(() => {
    const currentY = y.get();
    let newY = currentY - 0.4; // Speed of scroll
    if (newY <= -240) newY = 0; // Loop point based on list height
    y.set(newY);
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="max-w-md w-full mx-auto p-8 rounded-[24px] border border-[rgba(255,255,255,0.10)] bg-[#F5FAF6] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group flex flex-col h-full transition-all duration-300 hover:shadow-xl relative overflow-hidden"
    >
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800 mb-6 relative z-30">
        {title}
      </h3>

      {/* Animated Illustration Area */}
      <div className="h-[240px] rounded-[32px] overflow-hidden relative bg-white/40 flex items-center justify-center border border-black/5">
        
        {/* Scrolling Names Background */}
        <div className="absolute inset-0 flex flex-col items-center gap-4 py-4 opacity-[0.15] pointer-events-none z-0">
          <motion.div style={{ y }} className="flex flex-col gap-3 w-full px-8">
            {[...names, ...names].map((name, i) => (
              <div 
                key={i} 
                className="w-full py-3 px-4 bg-white/40 rounded-full border border-black/5 text-center text-xs font-semibold text-[#1F3824] shadow-sm backdrop-blur-md whitespace-nowrap overflow-hidden"
              >
                {name}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Product Cards Stack - Static Layered Deck */}
        <div className="relative w-full h-full flex items-center justify-center z-10 scale-[0.8] gap-0">
          
          {/* Left Card */}
          <motion.div
            animate={{ y: [10, 5, 10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute origin-bottom flex-shrink-0"
            style={{ x: -60, rotate: -8, scale: 0.9, zIndex: 10 }}
          >
            <img src={images[0]} className="w-[160px] h-[200px] object-cover rounded-[24px] shadow-xl" alt="" />
          </motion.div>

          {/* Right Card */}
          <motion.div
            animate={{ y: [10, 15, 10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute origin-bottom flex-shrink-0"
            style={{ x: 60, rotate: 8, scale: 0.9, zIndex: 10 }}
          >
            <img src={images[2]} className="w-[160px] h-[200px] object-cover rounded-[24px] shadow-xl" alt="" />
          </motion.div>

          {/* Center Card (Top) */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="relative origin-bottom flex-shrink-0"
            style={{ scale: 1, zIndex: 20 }}
          >
            <img src={images[1]} className="w-[160px] h-[200px] object-cover rounded-[24px] shadow-2xl" alt="" />
          </motion.div>
        </div>

      </div>

      {/* Description */}
      <p className="text-sm font-[500] text-neutral-600 max-w-[80%] mt-6 leading-relaxed relative z-30">
        {description}
      </p>
    </motion.div>
  );
};

export default RecommendationsCard;
