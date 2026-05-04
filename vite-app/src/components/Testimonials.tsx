import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/animations";

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 md:py-48 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative w-full aspect-[16/9] max-h-[600px] rounded-[3rem] overflow-hidden shadow-2xl"
        >
          {/* Background Image */}
          <img 
            src="/assets/showcase.jpeg" 
            className="w-full h-full object-cover" 
            alt="Woman shopping for healthy groceries" 
          />
          
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/5" />

          {/* Floating Testimonial Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-10 right-10 md:bottom-20 md:right-20 bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/20 max-w-lg"
          >
            <div className="flex flex-col gap-6">
              <p className="text-[#1F3824] text-lg md:text-xl font-medium leading-relaxed italic">
                "Olive has completely changed the way I shop for my family. I feel confident knowing exactly what's in our food before it ever hits our pantry."
              </p>
              
              <div className="flex items-center justify-between mt-2">
                 <div className="flex flex-col">
                    <span className="font-bold text-[#1F3824] text-lg">Megan L.</span>
                    <div className="flex text-[#AEB93E] gap-1">
                       {[...Array(5)].map((_, i) => (
                         <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                         </svg>
                       ))}
                    </div>
                 </div>
                 <img src="/assets/meghan-l.png" className="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover" alt="Megan L." />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Small branding text below */}
        <div className="mt-12 flex justify-center">
           <div className="flex items-center gap-2 opacity-50">
              <span className="text-sm font-bold text-[#1F3824]">REAL MOTHERS</span>
              <div className="w-1 h-1 rounded-full bg-[#1F3824]" />
              <span className="text-sm font-bold text-[#1F3824]">REAL RESULTS</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
