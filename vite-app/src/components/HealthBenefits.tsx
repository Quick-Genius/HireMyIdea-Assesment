import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fadeInUp, staggerContainer } from "../utils/animations";

const HealthBenefits: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#386641] pt-32 pb-10">
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-end gap-8 mb-20"
      >
        <motion.div variants={fadeInUp} className="flex flex-col gap-6">
          <h2 className="font-pall max-w-xl font-[500] text-3xl md:text-[4rem] text-white leading-tight">
            Health Benefits of Using Olive
          </h2>
          <div className="max-w-md md:text-xl text-sm text-white/90">
            Olive proactively flags harmful ingredients and offers personalized recommendations, empowering you to make better choices for your family's health.
          </div>
        </motion.div>
        
        <motion.div variants={fadeInUp}>
          <button 
            onClick={() => navigate('/coming-soon')}
            className="inline-flex items-center cursor-pointer font-sans justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all bg-white text-[#386641] shadow-lg hover:bg-neutral-50 px-8 py-4 text-lg" 
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.079 5.999l.239 .012c1.43 .097 3.434 1.013 4.508 2.586a1 1 0 0 1 -.344 1.44c-.05 .028 -.372 .158 -.497 .217a4.15 4.15 0 0 0 -.722 .431c-.614 .461 -.948 1.009 -.942 1.694c.01 .885 .339 1.454 .907 1.846c.208 .143 .436 .253 .666 .33c.126 .043 .426 .116 .444 .122a1 1 0 0 1 .662 .942c0 2.621 -3.04 6.381 -5.286 6.381c-.79 0 -1.272 -.091 -1.983 -.315l-.098 -.031c-.463 -.146 -.702 -.192 -1.133 -.192c-.52 0 -.863 .06 -1.518 .237l-.197 .053c-.575 .153 -.964 .226 -1.5 .248c-2.749 0 -5.285 -5.093 -5.285 -9.072c0 -3.87 1.786 -6.92 5.286 -6.92c.297 0 .598 .045 .909 .128c.403 .107 .774 .26 1.296 .508c.787 .374 .948 .44 1.009 .44h.016c.03 -.003 .128 -.047 1.056 -.457c1.061 -.467 1.864 -.685 2.746 -.616l-.24 -.012z" />
              <path d="M14 1a1 1 0 0 1 1 1a3 3 0 0 1 -3 3a1 1 0 0 1 -1 -1a3 3 0 0 1 3 -3z" />
            </svg>
            Download for iOS
          </button>
        </motion.div>
      </motion.div>

      <div className="flex flex-col px-4 md:px-8 pb-24 gap-12 max-w-7xl mx-auto">
        {/* Card 1: Nutritional Clarity */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-6 md:p-12 bg-white rounded-[2rem] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center shadow-xl overflow-hidden"
        >
          <div className="flex flex-col gap-8">
            <h3 className="font-pall text-[#1F3824] font-[500] text-3xl md:text-5xl">Achieve Nutritional Clarity</h3>
            <ul className="flex flex-col gap-6">
              {[
                "Olive breaks down every ingredient into clear, actionable information.",
                "Olive scores products out of 100 based on additives, seedoils, processing level, and detected toxins.",
                "Our ranking system is designed by registered holistic health experts, ensuring you and your family make informed decisions and improve health outcomes."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4 text-[#1F3824]">
                  <div className="w-6 h-6 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                    </svg>
                  </div>
                  <div className="md:text-lg text-sm font-medium leading-relaxed opacity-80">{text}</div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative h-[400px] md:h-[550px] bg-[#E9F2EB] rounded-[2rem] overflow-hidden">
            <div className="flex flex-col items-center justify-center h-full relative p-4">
              {/* Product Stacks */}
              <div className="relative w-full h-full flex items-center justify-center">
                 <motion.img 
                   animate={{ y: [0, -10, 0], rotate: [-10, -8, -10] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute left-[5%] top-[15%] w-32 md:w-48 rounded-3xl border-2 border-white shadow-xl opacity-60 grayscale-[0.2]" 
                   src="/assets/product-2.png" 
                 />
                 <motion.img 
                   animate={{ y: [0, 10, 0] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                   className="relative z-20 w-48 md:w-72 rounded-3xl border-4 border-white shadow-2xl" 
                   src="/assets/straus-ice-cream.png" 
                 />
                 <motion.img 
                   animate={{ y: [0, -15, 0], rotate: [10, 12, 10] }}
                   transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute right-[5%] top-[10%] w-32 md:w-48 rounded-3xl border-2 border-white shadow-xl opacity-60 grayscale-[0.2]" 
                   src="/assets/product-3.png" 
                 />
              </div>

              {/* Info Badge */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 w-[90%] max-w-sm">
                 <div className="bg-white rounded-2xl p-4 shadow-xl border border-black/5 flex items-center gap-4">
                    <img src="/assets/straus-ice-cream-description.png" className="w-12 h-12 object-contain rounded-lg" alt="" />
                    <div className="flex-1">
                       <h4 className="font-bold text-[#1F3824] text-sm md:text-base">Straus Ice Cream</h4>
                       <div className="flex items-center gap-2">
                          <span className="text-[#AEB93E] font-bold">96/100</span>
                          <span className="text-neutral-400 text-xs font-medium">Excellent</span>
                       </div>
                    </div>
                 </div>
                 
                 {/* Positives/Negatives mockup */}
                 <div className="flex gap-2 mt-2">
                    <div className="flex-1 bg-white/80 backdrop-blur-md rounded-xl p-3 border border-black/5">
                       <div className="flex items-center gap-2 mb-2">
                          <div className="w-4 h-4 rounded-full bg-[#AEB93E] flex items-center justify-center">
                             <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                          </div>
                          <span className="text-[10px] font-bold text-[#1F3824] uppercase">Positives</span>
                       </div>
                       <div className="space-y-1">
                          <div className="h-1.5 w-full bg-neutral-200 rounded-full" />
                          <div className="h-1.5 w-2/3 bg-neutral-200 rounded-full" />
                       </div>
                    </div>
                    <div className="flex-1 bg-white/80 backdrop-blur-md rounded-xl p-3 border border-black/5">
                       <div className="flex items-center gap-2 mb-2">
                          <div className="w-4 h-4 rounded-full bg-red-400 flex items-center justify-center text-white font-bold text-[8px]">×</div>
                          <span className="text-[10px] font-bold text-[#1F3824] uppercase">Negatives</span>
                       </div>
                       <div className="space-y-1">
                          <div className="h-1.5 w-full bg-neutral-200 rounded-full" />
                          <div className="h-1.5 w-3/4 bg-neutral-200 rounded-full" />
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Proactive Ingredient Filtering */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-6 md:p-12 bg-white rounded-[2rem] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center shadow-xl overflow-hidden"
        >
          <div className="order-2 lg:order-1 relative h-[400px] md:h-[550px] bg-[#FDE5EA] rounded-[2rem] overflow-hidden flex items-center justify-center">
              <div className="relative w-full h-full p-8 flex flex-col justify-center gap-4 -rotate-6 scale-110">
                 {/* Row 1: Positive Tags */}
                 <div className="flex flex-wrap gap-3 justify-center">
                    {[
                      { label: "Low PFAS", icon: true },
                      { label: "Plant-Based", icon: true },
                      { label: "Cholesterol-Free", icon: true },
                      { label: "100% Whole Grain", icon: true },
                      { label: "Organic Ingredients", icon: true },
                      { label: "Rich in Antioxidants", icon: true }
                    ].map((tag, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-black/5">
                        <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="text-xs font-bold text-[#1F3824]">{tag.label}</span>
                      </div>
                    ))}
                 </div>
                 
                 {/* Row 2: Negative Tags */}
                 <div className="flex flex-wrap gap-3 justify-center mt-4">
                    {[
                      "Potassium Sorbate",
                      "Potassium Bromate",
                      "Sodium Benzoate",
                      "Palm Oil",
                      "MSG",
                      "Monosodium Glutamate",
                      "Xanthan Gum",
                      "BHA",
                      "Saccharin"
                    ].map((tag, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-black/5">
                        <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center text-white font-bold text-[10px]">×</div>
                        <span className="text-xs font-bold text-[#1F3824]">{tag}</span>
                      </div>
                    ))}
                 </div>
              </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col gap-8">
            <h3 className="font-pall text-[#1F3824] font-[500] text-3xl md:text-5xl">Proactive Ingredient Filtering</h3>
            <ul className="flex flex-col gap-6">
              {[
                "Olive flags harmful additives and controversial ingredients before they become concerns.",
                "Keeps you ahead of potential food safety concerns.",
                "Gives busy parents the confidence to make safer food choices every time."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4 text-[#1F3824]">
                  <div className="w-6 h-6 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                    </svg>
                  </div>
                  <div className="md:text-lg text-sm font-medium leading-relaxed opacity-80">{text}</div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Card 3: Real Health Outcomes */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-6 md:p-12 bg-white rounded-[2rem] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center shadow-xl"
        >
          <div className="flex flex-col gap-8">
            <h3 className="font-pall text-[#1F3824] font-[500] text-3xl md:text-5xl">Real Health Outcomes for Your Family</h3>
            <ul className="flex flex-col gap-6">
              {[
                "Empowers parents to feel more in control of their family's health.",
                "Delivers personalized suggestions for healthier food choices.",
                "Promotes long-term well-being through informed, balanced decisions."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4 text-[#1F3824]">
                  <div className="w-6 h-6 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                    </svg>
                  </div>
                  <div className="md:text-lg text-sm font-medium leading-relaxed opacity-80">{text}</div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="h-[400px] md:h-[550px] bg-[#FEF9EC] rounded-[2rem] overflow-hidden flex items-center justify-center p-8">
            <motion.img 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full object-contain" 
              src="/assets/avocado_family_illustration_1777877245767.png"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HealthBenefits;
