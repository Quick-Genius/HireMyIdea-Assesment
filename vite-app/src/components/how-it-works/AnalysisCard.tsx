import React from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";

interface AnalysisCardProps {
  title: string;
  description: string;
  index: number;
}

const products = [
  "/assets/product-1.png",
  "/assets/product-2.png",
  "/assets/product-3.png",
  "/assets/product-4.png",
  "/assets/product-5.png",
];

// Triple the products for seamless infinite scroll
const infiniteProducts = [...products, ...products, ...products];

const ProductItem = ({ src, index, x }: { src: string; index: number; x: any }) => {
  const itemWidth = 88;
  const itemCenter = index * itemWidth + 36; // index * (width+gap) + width/2
  
  const scale = useTransform(x, (currentX: number) => {
    const positionInCard = currentX + itemCenter;
    const distance = Math.abs(positionInCard);
    if (distance > 100) return 0.8;
    return 1.4 - (distance / 100) * 0.6;
  });

  const opacity = useTransform(x, (currentX: number) => {
    const positionInCard = currentX + itemCenter;
    const distance = Math.abs(positionInCard);
    if (distance > 150) return 0.1;
    if (distance > 100) return 0.3;
    return 1 - (distance / 100) * 0.7;
  });

  const blur = useTransform(x, (currentX: number) => {
    const positionInCard = currentX + itemCenter;
    const distance = Math.abs(positionInCard);
    if (distance > 50) return "blur(2px)";
    return `blur(${Math.max(0, (distance / 50) * 2)}px)`;
  });

  return (
    <motion.div
      style={{ scale, opacity, filter: blur }}
      className="flex-shrink-0 w-[72px] h-[72px] rounded-2xl shadow-xl border-2 border-white overflow-hidden bg-white"
    >
      <img
        src={src}
        className="w-full h-full object-contain p-2"
        alt={`Product ${index}`}
      />
    </motion.div>
  );
};

const AnalysisCard: React.FC<AnalysisCardProps> = ({ title, description, index }) => {
  const x = useMotionValue(0);
  
  // Base movement speed
  const speed = 0.5; 
  const itemWidth = 88; // 72px width + 16px gap
  const totalWidth = products.length * itemWidth;

  useAnimationFrame(() => {
    const currentX = x.get();
    let newX = currentX - speed;
    
    // Reset position for seamless loop
    if (newX <= -totalWidth) {
      newX += totalWidth;
    }
    
    x.set(newX);
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="max-w-md w-full mx-auto p-8 rounded-[24px] border border-[rgba(255,255,255,0.10)] bg-[#F5FAF6] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group flex flex-col h-full transition-all duration-300 hover:shadow-xl"
    >
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800 mb-6">
        {title}
      </h3>

      {/* Animated Illustration Area */}
      <div className="h-[240px] rounded-[32px] overflow-hidden relative bg-white/40 flex flex-col items-center justify-center border border-black/5">
        
        <div className="relative flex items-center w-full h-32 mt-4 overflow-visible">
          <motion.div 
            style={{ x }}
            className="flex items-center gap-4 absolute left-1/2"
          >
            {infiniteProducts.map((src, i) => (
              <ProductItem key={`${src}-${i}`} src={src} index={i} x={x} />
            ))}
          </motion.div>
        </div>

        {/* Safe to Consume Badge */}
        <div className="mt-8 bg-white px-6 py-2 rounded-full shadow-md border border-black/5 flex items-center gap-2 relative z-10">
          <div className="w-5 h-5 rounded-full bg-[#AEB93E] flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-[#1f3824] font-bold text-sm">Safe to consume</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm font-[500] text-neutral-600 max-w-[80%] mt-6 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default AnalysisCard;
