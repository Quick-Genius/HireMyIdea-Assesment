import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";

const phoneProducts = [
  { id: 1, name: "Organic Bagels", img: "/assets/product-1.png", detailsImg: "/assets/product-1-details.png" },
  { id: 2, name: "Cocao-nectar Bar", img: "/assets/product-2.png", detailsImg: "/assets/product-2-detail.png" },
  { id: 3, name: "Gradea Raw Milk", img: "/assets/product-9.png", detailsImg: "/assets/product-10-details.png" },
  { id: 4, name: "Strawberry Tonic", img: "/assets/product-3.png", detailsImg: "/assets/product-3-details.png" }
];

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % phoneProducts.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full z-10 bg-white">
      <div className="pb-12 px-4 pt-6 md:px-8 md:pt-10">
        <div className="w-full relative z-[100] bg-[#F9FBF8] rounded-[2rem] md:rounded-[2.5rem] pt-6 pb-0 overflow-hidden border border-[#e6e6e6]">
          <Navbar />
          <div className="flex flex-col items-center mt-10">
            
            {/* 1. Avatar Cluster */}
            <div className="mb-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="flex items-center">
                <img alt="User" className="w-[32px] h-[32px] min-w-[32px] min-h-[32px] aspect-square rounded-full border-2 border-white object-cover flex-shrink-0" src="/assets/photo-1438761681033-6461ffad8d80.jpg" />
                <img alt="User" className="w-[32px] h-[32px] min-w-[32px] min-h-[32px] aspect-square rounded-full border-2 border-white object-cover flex-shrink-0 -ml-[10px]" src="/assets/photo-1535713875002-d1d0cf377fde.jpg" />
                <img alt="User" className="w-[32px] h-[32px] min-w-[32px] min-h-[32px] aspect-square rounded-full border-2 border-white object-cover flex-shrink-0 -ml-[10px]" src="/assets/photo-1580489944761-15a19d654956.jpg" />
                <img alt="User" className="w-[32px] h-[32px] min-w-[32px] min-h-[32px] aspect-square rounded-full border-2 border-white object-cover flex-shrink-0 -ml-[10px]" src="/assets/photo-1599566150163-29194dcaad36.jpg" />
                <div className="w-[32px] h-[32px] min-w-[32px] min-h-[32px] aspect-square rounded-full border-2 border-white bg-gray-100 flex items-center justify-center flex-shrink-0 -ml-[10px] z-10">
                  <span className="text-[11px] font-bold text-gray-600">3+</span>
                </div>
              </div>
              <span className="font-dm-sans text-sm font-medium text-neutral-600">Trusted by thousands of healthy families</span>
            </div>

            {/* 3. Heading Typography Fix */}
            <h1 className="relative z-50 py-2 pb-4 mx-auto max-w-4xl text-[#1F3824] text-center font-pall font-bold leading-tight text-4xl md:text-5xl lg:text-[4.5rem]">
              <span style={{ display: "inline-block", verticalAlign: "top", textDecoration: "inherit" }}>The Safest Way to<br className="hidden md:block" /> Shop for Groceries</span>
            </h1>
            
            <p className="relative z-50 mx-auto mt-4 md:text-lg text-sm max-w-md px-4 text-center text-[#1F1F1F99]">
              Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your Family's Diet and Get Expert-Backed Food Insights
            </p>
            
            <div className="relative z-[60] flex justify-center flex-col md:flex-row px-8 pt-8 pb-0 mx-auto gap-2">
              <a className="inline-flex items-center cursor-pointer font-sans justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all shadow-md px-4 py-2.5 text-sm bg-[#1F3824] text-white hover:opacity-90" href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="tabler-icon tabler-icon-brand-apple-filled">
                  <path d="M15.079 5.999l.239 .012c1.43 .097 3.434 1.013 4.508 2.586a1 1 0 0 1 -.344 1.44c-.05 .028 -.372 .158 -.497 .217a4.15 4.15 0 0 0 -.722 .431c-.614 .461 -.948 1.009 -.942 1.694c.01 .885 .339 1.454 .907 1.846c.208 .143 .436 .253 .666 .33c.126 .043 .426 .116 .444 .122a1 1 0 0 1 .662 .942c0 2.621 -3.04 6.381 -5.286 6.381c-.79 0 -1.272 -.091 -1.983 -.315l-.098 -.031c-.463 -.146 -.702 -.192 -1.133 -.192c-.52 0 -.863 .06 -1.518 .237l-.197 .053c-.575 .153 -.964 .226 -1.5 .248c-2.749 0 -5.285 -5.093 -5.285 -9.072c0 -3.87 1.786 -6.92 5.286 -6.92c.297 0 .598 .045 .909 .128c.403 .107 .774 .26 1.296 .508c.787 .374 .948 .44 1.009 .44h.016c.03 -.003 .128 -.047 1.056 -.457c1.061 -.467 1.864 -.685 2.746 -.616l-.24 -.012z"></path>
                  <path d="M14 1a1 1 0 0 1 1 1a3 3 0 0 1 -3 3a1 1 0 0 1 -1 -1a3 3 0 0 1 3 -3z"></path>
                </svg>Download for iOS
              </a>
            </div>

            <div className="relative z-50 min-h-[500px] max-w-6xl mx-auto overflow-hidden w-full -mt-[180px] -mb-20">
              <div className="hero-details-card pointer-events-none relative w-full h-[800px] flex justify-center">
                {/* Phone Hardware Top Notch */}
                <div className="absolute top-[20px] flex items-center justify-end left-1/2 -translate-x-1/2 bg-black h-[26px] w-[100px] rounded-full z-[110]">
                  <div className="h-[16px] bg-[radial-gradient(50%_50%_at_50%_50%,_var(--color-white-4,_rgba(255,_255,_255,_0.04))_72%,_var(--color-white-16,_rgba(255,_255,_255,_0.16))_100%)] w-[16px] mr-[5px] rounded-full absolute right-0"></div>
                </div>
                
                {/* Phone Bezels */}
                <div className="h-full top-[10px] bg-white mx-auto w-[280px] rounded-tr-[36px] rounded-tl-[36px] shadow-xl absolute inset-x-0 z-[104]"></div>
                <div className="h-[800px] mx-auto w-[300px] bg-[linear-gradient(180deg,_rgba(88,_88,_88,_0.24)_0%,_rgba(255,_255,_255,_0.24)_100%)] rounded-[38px] shadow-xl absolute inset-x-0 z-[103]"></div>
                <div className="absolute h-[800px] w-[284px] top-[8px] rounded-[38px] mx-auto bg-black flex items-end z-[104] justify-center inset-x-0 shadow-2xl"></div>
                
                {/* Phone Screen & Inner Animation */}
                <div className="absolute flex items-start z-[105] justify-center inset-x-0 top-[12px]">
                  <div className="rounded-[32px] overflow-hidden bg-[#F5FAF6] h-[772px] w-[276px] relative shadow-inner">
                    
                    {/* Top: Horizontal Sliding Product Carousel */}
                    <div className="h-[200px] w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#E6F3E6] to-[#F5FAF6]">
                      {phoneProducts.map((product, idx) => {
                        // Calculate wrapped offset for infinite feeling
                        let offset = idx - activeIndex;
                        if (offset < -1) offset += phoneProducts.length;
                        if (offset > 1) offset -= phoneProducts.length;
                        
                        const isCenter = offset === 0;
                        const isLeft = offset === -1 || offset < -1;
                        const isRight = offset === 1 || offset > 1;

                        return (
                          <motion.div
                            key={product.id}
                            initial={false}
                            animate={{ 
                              x: offset * 180, 
                              scale: isCenter ? 1 : 0.9,
                              opacity: isCenter ? 1 : (isLeft || isRight ? 0.6 : 0),
                              zIndex: isCenter ? 20 : 10
                            }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute flex flex-col items-center justify-center pointer-events-none"
                          >
                            <img 
                              src={product.img} 
                              alt={product.name}
                              className="w-[120px] h-[120px] object-cover rounded-[24px] shadow-lg"
                            />
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Bottom: Vertically Pulling up Information Card */}
                    <div className="h-[572px] w-full absolute bottom-0 bg-white">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeIndex}
                          initial={{ y: 40, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -40, opacity: 0 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="w-full h-full bg-white rounded-t-[32px] shadow-[0_-8px_30px_rgba(0,0,0,0.06)] flex flex-col items-center border-t border-gray-100 overflow-hidden"
                        >
                          <img 
                            src={phoneProducts[activeIndex].detailsImg} 
                            alt={`${phoneProducts[activeIndex].name} details`}
                            className="w-full h-full object-cover object-top"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
