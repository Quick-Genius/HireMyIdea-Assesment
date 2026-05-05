import React from "react";
import { motion } from "framer-motion";

interface ScanningCardProps {
  title: string;
  description: string;
  index: number;
}

interface ParticleProps {
  delay: number;
  left: string;
  top: string;
  scale: number;
  rotate: number;
  opacity: number;
}

const Particle = ({ delay, left, top, scale, rotate, opacity }: ParticleProps) => (
  <motion.svg
    className="pointer-events-none absolute z-20"
    width="32"
    height="32"
    viewBox="0 0 21 21"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, opacity, 0],
      scale: [0, scale, 0],
      rotate: rotate + 20
    }}
    transition={{ 
      duration: 2, 
      repeat: Infinity, 
      delay: delay,
      ease: "easeInOut"
    }}
    style={{ left, top }}
  >
    <path
      opacity="0.8"
      d="M11.3013 13.0702C10.537 13.1467 9.4709 12.8266 8.04671 12.1297L8.02026 12.1172L8.00061 12.1368C6.85364 13.2321 5.9347 13.8592 5.18172 14.0174L5.07559 14.0368C3.43069 14.2913 2.97659 12.7429 3.37591 9.85826L3.39176 9.74667L3.32493 9.71102C-0.730973 7.49471 -0.423501 5.47902 4.10718 4.64456L4.22767 4.62286L4.26634 4.417C4.66689 2.31333 5.24804 1.14741 6.19681 0.935047L6.28976 0.917604C7.29215 0.762556 8.22342 1.69761 9.27529 3.64222L9.37374 3.82687L9.49636 3.81097C14.0674 3.23758 14.9695 5.06618 11.7721 8.40381L11.718 8.45817L11.7674 8.55966C12.9937 11.1364 13.0512 12.737 11.5062 13.0391L11.4089 13.056L11.3013 13.0702Z"
      fill="#1F3824"
    />
  </motion.svg>
);

const ScanningCard: React.FC<ScanningCardProps> = ({ title, description, index }) => {
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
      <div className="h-[240px] rounded-[32px] overflow-hidden relative bg-white/40 flex items-center justify-center border border-black/5">
        {/* Scanner Brackets */}
        <div className="absolute inset-6 pointer-events-none z-10">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-[3px] border-l-[3px] border-[#1F3824] opacity-20 rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-[3px] border-r-[3px] border-[#1F3824] opacity-20 rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[3px] border-l-[3px] border-[#1F3824] opacity-20 rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[3px] border-r-[3px] border-[#1F3824] opacity-20 rounded-br-xl" />
        </div>

        {/* Floating Particles (More and Bigger) */}
        <Particle delay={0} left="25%" top="55%" scale={0.8} rotate={45} opacity={0.6} />
        <Particle delay={1} left="75%" top="15%" scale={1.0} rotate={120} opacity={0.4} />
        <Particle delay={2} left="15%" top="25%" scale={0.7} rotate={90} opacity={0.5} />
        <Particle delay={0.5} left="85%" top="75%" scale={0.9} rotate={180} opacity={0.3} />
        <Particle delay={1.5} left="50%" top="10%" scale={0.6} rotate={30} opacity={0.5} />
        <Particle delay={2.5} left="10%" top="80%" scale={0.8} rotate={200} opacity={0.4} />
        <Particle delay={3} left="90%" top="40%" scale={0.7} rotate={150} opacity={0.5} />

        {/* Barcode Image */}
        <div className="relative z-0">
          <motion.img
            src="/assets/barcode-image.png"
            className="w-32 h-auto object-contain transition-transform duration-500 group-hover:scale-110"
            alt="Barcode"
          />
          {/* Barcode Glow */}
          <motion.div
            animate={{ opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-[#AEB93E] blur-3xl -z-10"
          />
        </div>

        {/* Scanning Line */}
        <motion.div
          animate={{ top: ["10%", "90%", "10%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[10%] w-[80%] h-[2px] bg-[#1F3824] shadow-[0_0_15px_#1F3824] z-20 rounded-full"
        />
      </div>


      {/* Description */}
      <p className="text-sm font-[500] text-neutral-600 max-w-[80%] mt-6 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default ScanningCard;

