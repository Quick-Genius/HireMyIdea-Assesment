import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fadeInUp, staggerContainer } from "../utils/animations";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#F9FBF8] pt-4 pb-32">
      {/* Background blobs for depth */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/3 bg-[#1F3824]/3 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/4 bg-[#AEB93E]/3 blur-[80px] rounded-full" />

      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center"
      >
        {/* Trusted By Section */}
        <motion.div variants={fadeInUp} className="flex flex-col items-center gap-3 mb-4">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <img 
                key={i} 
                className="w-9 h-9 rounded-full border-2 border-white shadow-sm object-cover" 
                src={`/assets/photo-${[
                  "1535713875002-d1d0cf377fde",
                  "1605522561233-768ad7a8fabf",
                  "1599566150163-29194dcaad36",
                  "1580489944761-15a19d654956",
                  "1438761681033-6461ffad8d80"
                ][i-1]}.jpg`} 
                alt="User avatar" 
              />
            ))}
            <div className="w-9 h-9 rounded-full border-2 border-white bg-neutral-100 flex items-center justify-center text-[10px] font-bold text-neutral-500 shadow-sm relative z-10">
              13k+
            </div>
          </div>
          <span className="text-[13px] font-bold text-neutral-400 tracking-tight uppercase">Trusted by thousands of healthy families</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          variants={fadeInUp}
          className="font-pall text-[#1F3824] text-6xl md:text-[5.5rem] font-[500] leading-[1] max-w-4xl mb-6 tracking-[-0.03em]"
        >
          The Safest Way to <br className="hidden md:block" /> Shop for Groceries
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          variants={fadeInUp}
          className="text-[#1F3824]/60 md:text-xl text-lg max-w-2xl leading-relaxed mb-8 font-medium"
        >
          Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your Family's Diet and Get Expert-Backed Food Insights
        </motion.p>
 
        {/* CTA Button */}
        <motion.div variants={fadeInUp} className="mb-12">
          <button 
            onClick={() => navigate('/coming-soon')}
            className="inline-flex items-center cursor-pointer font-sans justify-center gap-2 whitespace-nowrap rounded-full font-bold transition-all bg-[#1F3824] text-white shadow-lg hover:shadow-xl px-10 py-4 text-lg" 
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="mb-0.5">
              <path d="M15.079 5.999l.239 .012c1.43 .097 3.434 1.013 4.508 2.586a1 1 0 0 1 -.344 1.44c-.05 .028 -.372 .158 -.497 .217a4.15 4.15 0 0 0 -.722 .431c-.614 .461 -.948 1.009 -.942 1.694c.01 .885 .339 1.454 .907 1.846c.208 .143 .436 .253 .666 .33c.126 .043 .426 .116 .444 .122a1 1 0 0 1 .662 .942c0 2.621 -3.04 6.381 -5.286 6.381c-.79 0 -1.272 -.091 -1.983 -.315l-.098 -.031c-.463 -.146 -.702 -.192 -1.133 -.192c-.52 0 -.863 .06 -1.518 .237l-.197 .053c-.575 .153 -.964 .226 -1.5 .248c-2.749 0 -5.285 -5.093 -5.285 -9.072c0 -3.87 1.786 -6.92 5.286 -6.92c.297 0 .598 .045 .909 .128c.403 .107 .774 .26 1.296 .508c.787 .374 .948 .44 1.009 .44h.016c.03 -.003 .128 -.047 1.056 -.457c1.061 -.467 1.864 -.685 2.746 -.616l-.24 -.012z" />
              <path d="M14 1a1 1 0 0 1 1 1a3 3 0 0 1 -3 3a1 1 0 0 1 -1 -1a3 3 0 0 1 3 -3z" />
            </svg>
            Download for iOS
          </button>
        </motion.div>

        {/* Mockup Section */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="relative w-full max-w-5xl mx-auto"
        >
          {/* Floating Product Elements */}
          <div className="absolute inset-0 z-0">
             <motion.img 
               animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
               transition={{ duration: 6, repeat: Infinity }}
               src="/assets/product-1.png" className="absolute left-[5%] top-[20%] w-24 md:w-44 opacity-10 grayscale brightness-110" alt="" 
             />
             <motion.img 
               animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
               transition={{ duration: 7, repeat: Infinity }}
               src="/assets/product-2.png" className="absolute left-[15%] bottom-[10%] w-20 md:w-36 opacity-10 grayscale brightness-110" alt="" 
             />
             <motion.img 
               animate={{ y: [0, -15, 0], x: [0, -15, 0] }}
               transition={{ duration: 8, repeat: Infinity }}
               src="/assets/product-3.png" className="absolute right-[10%] top-[10%] w-24 md:w-44 opacity-10 grayscale brightness-110" alt="" 
             />
             <motion.img 
               animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
               transition={{ duration: 9, repeat: Infinity }}
               src="/assets/product-4.png" className="absolute right-[15%] bottom-[20%] w-20 md:w-36 opacity-10 grayscale brightness-110" alt="" 
             />
          </div>

          {/* iPhone Mockup */}
          <div className="relative z-10 mx-auto w-[280px] md:w-[420px] aspect-[1/2] bg-[#111111] rounded-[3.5rem] p-3 shadow-2xl ring-1 ring-white/10">
             <div className="w-full h-full bg-white rounded-[2.8rem] overflow-hidden relative">
                {/* iPhone Dynamic Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-20" />
                
                {/* App Content */}
                <div className="w-full h-full">
                   <img src="/assets/hero_iphone_screen_gradea_milk.png" className="w-full h-full object-cover scale-[1.01]" alt="App Screenshot" />
                </div>
             </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
