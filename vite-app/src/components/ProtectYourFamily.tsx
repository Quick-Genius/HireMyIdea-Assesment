import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2940&auto=format",
  "https://images.unsplash.com/photo-1605522561233-768ad7a8fabf?q=80&w=2940&auto=format",
  "https://images.unsplash.com/photo-1576867757603-05b134ebc379?q=80&w=2940&auto=format",
  "/assets/showcase.jpeg"
];

const ProtectYourFamily: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="md:my-24 my-8 max-w-5xl mx-auto px-4 md:px-8">
      <div className="relative w-full bg-[#386641] rounded-[1rem] md:rounded-[3.5rem] overflow-hidden">
        {/* Top Curved Container */}
        <div className="relative w-full bg-[#386641] rounded-[1rem] md:rounded-b-[50rem] overflow-hidden shadow-2xl">
          <div className="h-[400px] md:h-[800px] relative">
            
            {/* Background Image Slider */}
            <div className="absolute inset-0 w-full h-full">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={images[currentSlide]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
                  className="w-full h-full object-contain"
                  alt={`Slide ${currentSlide + 1}`}
                />
              </AnimatePresence>
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Pagination Dots */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    currentSlide === i ? "bg-white w-8" : "bg-white/40 w-2"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative py-24 md:py-32 flex flex-col items-center justify-center text-center text-white px-4 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-pall font-[400] mb-12 leading-tight">
              Protect Your Family <br /> From Hidden Toxins
            </h2>
            <a 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center cursor-pointer font-sans justify-center gap-2 whitespace-nowrap rounded-full transition-all shadow-xl px-8 py-4 text-base md:text-lg bg-white text-[#386641] hover:bg-gray-50 font-medium group" 
              href="https://signup.oliveapp.com/olive-onboarding/"
            >
              Sign up for Olive today
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProtectYourFamily;
