import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

const HealthBenefits: React.FC = () => {

  return (
    <section className="bg-[#F5FAF6]">
      <div className="pb-32 md:pb-48 pt-24 md:pt-32 bg-[#386641] px-4">
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col md:flex-row p-8 md:p-0 justify-between max-w-5xl mx-auto items-start gap-10"
      >
        <motion.div variants={fadeInUp} className="flex relative text-primary items-center justify-center">
          <h2 className="font-pall max-w-xl font-[500] text-2xl md:text-[3.2rem] text-white">
            Health Benefits of Using Olive
          </h2>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="flex gap-6 flex-col">
          <div className="max-w-sm md:text-xl text-sm text-[#F5FAF6]">
            Olive proactively flags harmful ingredients and offers personalized recommendations, empowering you to make better choices for your family's health.
          </div>
          <div className="flex items-center gap-4">
            <a 
              target="_blank" 
              className="has-[>svg]:px-4 inline-flex items-center cursor-pointer font-sans justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all bg-white text-[#386641] shadow-xs hover:bg-neutral-50 px-4 py-2.5 text-sm" 
              href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
              rel="noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="tabler-icon tabler-icon-brand-apple-filled ">
                <path d="M15.079 5.999l.239 .012c1.43 .097 3.434 1.013 4.508 2.586a1 1 0 0 1 -.344 1.44c-.05 .028 -.372 .158 -.497 .217a4.15 4.15 0 0 0 -.722 .431c-.614 .461 -.948 1.009 -.942 1.694c.01 .885 .339 1.454 .907 1.846c.208 .143 .436 .253 .666 .33c.126 .043 .426 .116 .444 .122a1 1 0 0 1 .662 .942c0 2.621 -3.04 6.381 -5.286 6.381c-.79 0 -1.272 -.091 -1.983 -.315l-.098 -.031c-.463 -.146 -.702 -.192 -1.133 -.192c-.52 0 -.863 .06 -1.518 .237l-.197 .053c-.575 .153 -.964 .226 -1.5 .248c-2.749 0 -5.285 -5.093 -5.285 -9.072c0 -3.87 1.786 -6.92 5.286 -6.92c.297 0 .598 .045 .909 .128c.403 .107 .774 .26 1.296 .508c.787 .374 .948 .44 1.009 .44h.016c.03 -.003 .128 -.047 1.056 -.457c1.061 -.467 1.864 -.685 2.746 -.616l-.24 -.012z"></path>
                <path d="M14 1a1 1 0 0 1 1 1a3 3 0 0 1 -3 3a1 1 0 0 1 -1 -1a3 3 0 0 1 3 -3z"></path>
              </svg>
              Download for iOS
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>

    <div className="flex flex-col px-4 md:px-8 py-24 gap-12 max-w-7xl mx-auto -mt-48 relative z-10">
        {/* Card 1: Nutritional Clarity */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-4 bg-white w-full max-w-5xl mx-auto rounded-2xl grid grid-cols-1 lg:grid-cols-2 shadow-xl overflow-hidden lg:h-[500px]"
        >
          <div className="flex flex-col gap-4 justify-between p-4">
            <div className="flex relative text-primary items-center justify-start">
              <h3 className="font-pall text-primary max-w-xl font-[500] text-xl md:text-3xl">Achieve Nutritional Clarity</h3>
            </div>
            <ul className="flex flex-col gap-3 self-start w-full">
              {[
                "Olive breaks down every ingredient into clear, actionable information.",
                "Olive scores products out of 100 based on additives, seedoils, processing level, and detected toxins.",
                "Our ranking system is designed by registered holistic health experts, ensuring you and your family make informed decisions."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4 text-primary">
                  <div className="w-6 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="tabler-icon tabler-icon-circle-check-filled w-6 h-6">
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"></path>
                    </svg>
                  </div>
                  <div className="md:text-lg text-sm ">{text}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-b from-[#EFF6F0] to-[#9DC8A3] rounded-2xl p-6 md:p-10 flex flex-col items-center justify-center overflow-hidden">
            <div className="flex items-center justify-center pt-4 relative w-full h-48 md:h-64">
              <img src="/assets/product-2.png" className="absolute w-24 md:w-40 rounded-3xl border-2 border-white object-cover translate-x-12 md:translate-x-20 -rotate-12 scale-90 opacity-60" alt="" />
              <img src="/assets/straus-ice-cream.png" className="relative z-20 w-32 md:w-48 rounded-3xl border-2 border-white object-cover shadow-2xl" alt="" />
              <img src="/assets/product-3.png" className="absolute w-24 md:w-40 rounded-3xl border-2 border-white object-cover -translate-x-12 md:-translate-x-20 rotate-12 scale-90 opacity-60" alt="" />
            </div>

            <div className="px-4 py-3 bg-white/50 backdrop-blur-sm relative flex flex-row gap-4 w-full max-w-sm mt-8 rounded-2xl border border-white/20">
              <img src="/assets/straus-ice-cream-description.png" className="w-12 h-12 md:w-16 md:h-16 rounded-xl object-contain" alt="" />
              <div className="flex flex-col">
                <span className="font-bold text-lg md:text-xl text-[#1F3824]">Straus Ice Cream</span>
                <div className="flex gap-2 items-center">
                  <span className="font-bold text-lg text-[#1F3824]">96/100</span>
                  <span className="font-semibold text-sm text-[#1F3824]/60">Excellent</span>
                </div>
              </div>
            </div>

            <div className="flex flex-row w-full gap-4 mt-6">
              <div className="flex-1 bg-white/50 rounded-2xl p-4 flex flex-col gap-2">
                <div className="font-bold text-sm md:text-base flex items-center gap-2 text-[#1F3824]/80">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"></path></svg>
                  Positives
                </div>
                <div className="grid grid-cols-12 gap-1">
                  {[5, 5, 2, 8, 4, 6, 6, 5, 7].map((col, i) => (
                    <div 
                      key={i} 
                      className="h-4 rounded-md bg-white/60" 
                      style={{ gridColumn: `span ${col} / span ${col}` }}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="flex-1 bg-white/50 rounded-2xl p-4 flex flex-col gap-2">
                <div className="font-bold text-sm md:text-base flex items-center gap-2 text-[#7A4343]/80">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.489 5.8a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z"></path></svg>
                  Negatives
                </div>
                <div className="grid grid-cols-12 gap-1">
                  {[5, 5, 2, 8, 4, 6, 6, 5, 7].map((col, i) => (
                    <div 
                      key={i} 
                      className="h-4 rounded-md bg-white/60" 
                      style={{ gridColumn: `span ${col} / span ${col}` }}
                    ></div>
                  ))}
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
          className="p-4 bg-white max-w-5xl mx-auto rounded-2xl grid grid-cols-1 lg:grid-cols-2 shadow-xl overflow-hidden lg:h-[500px]"
        >
          <div className="flex flex-col gap-4 justify-between p-4">
            <div className="flex relative text-primary items-center justify-start">
              <h3 className="font-pall text-primary max-w-xl font-[500] text-xl md:text-3xl">Proactive Ingredient Filtering</h3>
            </div>
            <ul className="flex flex-col gap-3 self-start w-full">
              <li className="flex items-start gap-4 text-primary">
                <div className="w-6 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="tabler-icon tabler-icon-circle-check-filled w-6 h-6">
                    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"></path>
                  </svg>
                </div>
                <div className="md:text-lg text-sm ">Olive flags harmful additives and controversial ingredients before they become mainstream concerns.</div>
              </li>
              <li className="flex items-start gap-4 text-primary">
                <div className="w-6 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="tabler-icon tabler-icon-circle-check-filled w-6 h-6">
                    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"></path>
                  </svg>
                </div>
                <div className="md:text-lg text-sm ">Keeps you ahead of potential food safety concerns.</div>
              </li>
              <li className="flex items-start gap-4 text-primary">
                <div className="w-6 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="tabler-icon tabler-icon-circle-check-filled w-6 h-6">
                    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"></path>
                  </svg>
                </div>
                <div className="md:text-lg text-sm ">Gives busy parents the confidence to make safer food choices every time.</div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-b from-[#FFF0F0] to-[#FFC2D0] rounded-2xl p-6 md:p-10 flex flex-col items-center justify-center overflow-hidden">
            <div className="w-[150%] h-full mt-8 md:mt-12 -rotate-[15deg] flex flex-col gap-6">
              {/* Row 1: Positive Tags (Looping) */}
              <div className="flex gap-4 whitespace-nowrap">
                <motion.div 
                  animate={{ x: [0, -1000] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="flex gap-4 items-center"
                >
                  {[
                    "Cholesterol-Free", "High Fibre", "No MSG", "Organic Ingredients", "Low PFAS", "Plant-Based", "Gluten-Free",
                    "Cholesterol-Free", "High Fibre", "No MSG", "Organic Ingredients", "Low PFAS", "Plant-Based", "Gluten-Free"
                  ].map((tag, i) => (
                    <div key={i} className="flex items-center bg-black/10 px-4 py-2 rounded-full gap-2 text-xs font-bold text-[#1F3824]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#1F3824]"><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"></path></svg>
                      {tag}
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Row 2: Negative Tags (Looping reverse) */}
              <div className="flex gap-4 whitespace-nowrap">
                <motion.div 
                  animate={{ x: [-1000, 0] }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="flex gap-4 items-center"
                >
                  {[
                    "Potassium Bromate", "Aspartame", "Saccharin", "Palm Oil", "Sodium Benzoate", "Xanthan Gum", "Artificial Colors",
                    "Potassium Bromate", "Aspartame", "Saccharin", "Palm Oil", "Sodium Benzoate", "Xanthan Gum", "Artificial Colors"
                  ].map((tag, i) => (
                    <div key={i} className="flex items-center bg-black/10 px-4 py-2 rounded-full gap-2 text-xs font-bold text-[#1F3824]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-red-500/80"><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.489 5.8a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z"></path></svg>
                      {tag}
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Row 3: Negative Tags (Looping slow) */}
              <div className="flex gap-4 whitespace-nowrap">
                <motion.div 
                  animate={{ x: [0, -1000] }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="flex gap-4 items-center"
                >
                  {[
                    "Sodium Nitrite", "TBHQ", "Monosodium Glutamate", "Potassium Sorbate", "BHA", "Carrageenan", "MSG",
                    "Sodium Nitrite", "TBHQ", "Monosodium Glutamate", "Potassium Sorbate", "BHA", "Carrageenan", "MSG"
                  ].map((tag, i) => (
                    <div key={i} className="flex items-center bg-black/10 px-4 py-2 rounded-full gap-2 text-xs font-bold text-[#1F3824]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-red-500/80"><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.489 5.8a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z"></path></svg>
                      {tag}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Real Health Outcomes */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-4 bg-white max-w-5xl mx-auto rounded-2xl grid grid-cols-1 lg:grid-cols-2 shadow-xl overflow-hidden lg:h-[500px]"
        >
          <div className="flex flex-col gap-4 justify-between p-4">
            <div className="flex relative text-primary items-center justify-start">
              <h3 className="font-pall text-primary max-w-xl font-[500] text-xl md:text-3xl">Real Health Outcomes for Your Family</h3>
            </div>
            <ul className="flex flex-col gap-3 self-start w-full">
              {[
                "Empowers parents to feel more in control of their family's health.",
                "Delivers personalized suggestions for healthier, expert-backed food choices.",
                "Promotes long-term well-being through informed, balanced decisions."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4 text-primary">
                  <div className="w-6 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="tabler-icon tabler-icon-circle-check-filled w-6 h-6">
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"></path>
                    </svg>
                  </div>
                  <div className="md:text-lg text-sm ">{text}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-b from-[#FEF9EC] to-[#F6E6BC] rounded-2xl p-6 md:p-10 flex items-center justify-center overflow-hidden">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              src="/assets/family.png" 
              className="w-full h-full max-h-80 md:max-h-full object-contain" 
              alt="Family Health" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HealthBenefits;
