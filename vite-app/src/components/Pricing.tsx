import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fadeInUp, staggerContainer } from "../utils/animations";

const Pricing: React.FC = () => {
  const navigate = useNavigate();

  const handleNav = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/coming-soon');
  };

  return (
    <section id="pricing" className="py-24 px-4 relative overflow-hidden bg-white">
      {/* Background Decorative SVG */}
      <div className="absolute -bottom-12 -right-24 opacity-20 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="600" height="650" viewBox="0 0 600 650" fill="none">
          <path fill="#EBF5ED" d="M221.489 89.862C209.906 48.662 225.623.594 275.544.594c49.927 0 65.644 48.067 54.061 89.268-8.556 30.426-31.848 102.041-43.448 137.418-1.326 4.049 1.294 8.301 5.225 9.938 3.93 1.637 8.666.418 10.588-3.378 16.816-33.219 50.985-100.338 66.452-127.899 20.943-37.325 66.045-60.2 101.345-24.899 35.304 35.304 12.429 80.405-24.896 101.349-27.563 15.464-94.679 49.636-127.895 66.451-3.799 1.923-5.019 6.658-3.382 10.589 1.637 3.93 5.889 6.551 9.935 5.224 35.381-11.599 106.996-34.894 137.421-43.448 41.201-11.582 89.269 4.134 89.269 54.056 0 49.927-48.068 65.644-89.269 54.061-30.425-8.556-102.04-31.848-137.421-43.448-4.046-1.326-8.298 1.294-9.935 5.224-1.637 3.931-.417 8.666 3.382 10.589 33.216 16.815 100.332 50.987 127.895 66.451 37.325 20.944 60.2 66.045 24.899 101.349-35.303 35.301-80.407 12.426-101.348-24.899-15.464-27.564-49.636-94.68-66.452-127.896-1.922-3.798-6.658-5.018-10.588-3.381-3.931 1.637-6.551 5.889-5.225 9.935 11.6 35.381 34.895 106.996 43.448 137.421 11.583 41.201-4.134 89.269-54.058 89.269-49.925 0-65.641-48.068-54.058-89.269 8.553-30.425 31.848-102.04 43.447-137.421 1.327-4.046-1.291-8.298-5.224-9.935-3.928-1.637-8.666-.417-10.589 3.381-16.815 33.216-50.984 100.332-66.451 127.896-20.941 37.325-66.045 60.2-101.346 24.899-35.303-35.304-12.428-80.405 24.897-101.349 27.563-15.464 94.679-49.636 127.895-66.451 3.799-1.923 5.018-6.658 3.379-10.589-1.635-3.93-5.887-6.55-9.933-5.224-35.377 11.6-106.995 34.895-137.42 43.448C48.942 340.907.874 325.19.874 275.266c0-49.925 48.068-65.641 89.268-54.059 30.426 8.554 102.041 31.849 137.419 43.448 4.048 1.327 8.3-1.291 9.937-5.224 1.637-3.928.421-8.666-3.378-10.589-33.219-16.815-100.338-50.987-127.898-66.451-37.326-20.944-60.2-66.045-24.9-101.349 35.304-35.3 80.408-12.426 101.349 24.899 15.464 27.564 49.636 94.68 66.451 127.896 1.923 3.799 6.658 5.018 10.589 3.378 3.931-1.634 6.551-5.886 5.224-9.932-11.599-35.38-34.894-106.995-43.447-137.42Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto md:mb-24 mb-12"
        >
          <h2 className="font-pall text-primary font-[500] text-4xl md:text-[3.2rem] mb-6">
            Healthy Choices, Honest Pricing
          </h2>
          <p className="text-lg text-neutral-600">Choose the plan that fits your family's health journey.</p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto px-4"
        >
          {/* Monthly Plan */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="rounded-[2.5rem] p-10 flex flex-col gap-10 relative bg-[#F0F7F2] border border-[#386641]/10 shadow-xl"
          >
            <div className="absolute -top-12 -left-6">
              <img src="/assets/olive.svg" className="w-24 drop-shadow-xl" alt="Olive Icon" />
            </div>
            
            <div className="space-y-2">
              <p className="text-primary font-bold uppercase tracking-widest text-sm">Monthly</p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-primary">$14.99</span>
                <span className="text-neutral-500 font-medium">/month</span>
              </div>
            </div>

            <ul className="space-y-6 flex-1">
              {[
                "Unlimited Scans",
                "Unlimited Database Searches",
                "Comprehensive Lab-Testing Data"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="bg-[#386641] rounded-full p-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-primary/80">{feature}</span>
                </li>
              ))}
            </ul>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleNav}
              className="bg-[#253612] text-white text-center py-5 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all"
            >
              Start Free Trial
            </motion.button>
          </motion.div>

          {/* Yearly Plan */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="rounded-[2.5rem] p-10 flex flex-col gap-10 relative bg-[#386641] text-white shadow-2xl border border-white/10 overflow-hidden"
          >
            {/* Ribbon/Badge */}
            <div className="absolute top-8 right-[-35px] bg-[#AEB93E] text-primary font-bold py-1 px-12 rotate-45 text-sm shadow-md">
              BEST VALUE
            </div>

            <div className="space-y-2">
              <p className="text-white/70 font-bold uppercase tracking-widest text-sm">Yearly</p>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-bold text-white">$69.99</span>
                <span className="text-2xl line-through text-white/40 font-medium">$179.88</span>
              </div>
              <p className="text-[#AEB93E] font-bold">Save 60% — Get 7 months free</p>
            </div>

            <ul className="space-y-6 flex-1">
              {[
                "Everything in monthly plan",
                "Priority Access to Features",
                "Family Account Support",
                "Advanced Health Tracking"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-full p-1">
                    <svg className="w-4 h-4 text-[#AEB93E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white/90">{feature}</span>
                </li>
              ))}
            </ul>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleNav}
              className="bg-white text-[#386641] text-center py-5 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all"
            >
              Get Started Now
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* 100% Independent Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-48 max-w-7xl mx-auto px-4"
      >
        <div className="flex flex-col items-center">
          <h2 className="font-pall text-[#FF9DB4] font-bold text-5xl md:text-[8rem] leading-none text-center">
            100% Independent. Always.
          </h2>
          <div className="max-w-4xl mt-12">
            <p className="text-2xl md:text-4xl font-bold text-[#386641] text-center leading-relaxed">
              We <span className="text-[#AEB93E]">never monetize</span> through brand deals, affiliate links, or ads — so <span className="text-[#AEB93E]">you can trust</span> our recommendations are always aligned with our users.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Pricing;
