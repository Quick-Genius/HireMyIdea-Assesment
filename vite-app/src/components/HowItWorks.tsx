import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

const steps = [
  {
    title: "Scan & Detect",
    description: "When you open Olive simply scan the barcode to instantly detect product ingredients. Olive’s intuitive design means busy parents can quickly see which items contain harmful substances, delivering peace of mind with every scan.",
    content: (
      <div className="relative w-full h-full flex items-center justify-center">
         <img src="/assets/barcode-image.png" className="w-2/3 h-auto object-contain" alt="Avocado with barcode" />
         <motion.div 
           animate={{ y: [-100, 100, -100] }}
           transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
           className="absolute w-full h-1 bg-[#AEB93E] shadow-[0_0_15px_#AEB93E]"
         />
      </div>
    )
  },
  {
    title: "Data Analysis & Validation",
    description: "After scanning, our food scanner app compares product data with an extensive, up-to-date food database. Using expert nutritional guidelines, Olive filters out potentially dangerous ingredients so you never have to second guess.",
    content: (
      <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
         <div className="flex gap-2 mb-8">
            {[1, 2, 3].map(i => (
              <img key={i} src={`/assets/product-${i}.png`} className="w-12 h-12 rounded-lg border-2 border-white shadow-md opacity-40" alt="" />
            ))}
            <div className="w-16 h-16 bg-white rounded-xl shadow-xl border-2 border-white flex items-center justify-center -mt-2">
               <img src="/assets/product-7.png" className="w-10 h-10 object-contain" alt="" />
            </div>
            {[4, 5, 6].map(i => (
              <img key={i} src={`/assets/product-${i}.png`} className="w-12 h-12 rounded-lg border-2 border-white shadow-md opacity-40" alt="" />
            ))}
         </div>
         <div className="bg-white px-6 py-3 rounded-full shadow-lg border border-black/5 flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-[#AEB93E] flex items-center justify-center">
               <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
            </div>
            <span className="text-[#1F3824] font-bold">Safe to consume</span>
         </div>
      </div>
    )
  },
  {
    title: "Actionable Insights & Recommendations",
    description: "Once analyzed, Olive provides tailored insights and healthier product suggestions. Olive proactively flags harmful ingredients and offers personalized recommendations, empowering you to make better choices for your family's health & nutrition.",
    content: (
      <div className="relative w-full h-full flex items-center justify-center">
         <div className="relative flex items-center justify-center">
            <motion.img 
              animate={{ x: -60, rotate: -15, scale: 0.9 }}
              className="absolute w-40 h-56 object-cover rounded-2xl shadow-xl border-4 border-white opacity-40" 
              src="/assets/product-1.png" 
            />
            <motion.img 
              animate={{ x: 60, rotate: 15, scale: 0.9 }}
              className="absolute w-40 h-56 object-cover rounded-2xl shadow-xl border-4 border-white opacity-40" 
              src="/assets/product-3.png" 
            />
            <motion.img 
              className="relative z-10 w-48 h-64 object-cover rounded-2xl shadow-2xl border-4 border-white" 
              src="/assets/product-10-details.png" 
            />
         </div>
      </div>
    )
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-white py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col items-center mb-24"
        >
          <div className="flex items-center gap-6">
            <h2 className="font-pall text-[#1F3824] text-3xl md:text-7xl font-[500] text-center">
              How the Olive Food Scanner App Works
            </h2>
            <img src="/assets/title.png" className="h-12 md:h-20 w-auto" alt="Olive logo icon" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="bg-[#F6F6F6] rounded-[2.5rem] p-8 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-[300px] w-full rounded-[2rem] overflow-hidden mb-10 bg-transparent">
                 {step.content}
              </div>
              
              <div className="flex flex-col gap-4">
                 <h3 className="font-pall text-2xl md:text-3xl text-[#1F3824] font-bold">
                    {step.title}
                 </h3>
                 <p className="text-[#1F3824]/70 leading-relaxed font-medium">
                    {step.description}
                 </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
