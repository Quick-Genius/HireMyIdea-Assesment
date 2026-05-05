import React from "react";
import { motion } from "framer-motion";

const Pricing: React.FC = () => {
  return (
    <section className="py-12 md:py-24 pb-72 px-4 relative overflow-hidden bg-white" id="pricing">
      {/* Background Flower SVG */}
      <div className="absolute -bottom-12 -right-24 pointer-events-none select-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="600" height="650" viewBox="0 0 600 650" fill="none">
          <path fill="#EBF5ED" d="M221.489 89.862C209.906 48.662 225.623.594 275.544.594c49.927 0 65.644 48.067 54.061 89.268-8.556 30.426-31.848 102.041-43.448 137.418-1.326 4.049 1.294 8.301 5.225 9.938 3.93 1.637 8.666.418 10.588-3.378 16.816-33.219 50.985-100.338 66.452-127.899 20.943-37.325 66.045-60.2 101.345-24.899 35.304 35.304 12.429 80.405-24.896 101.349-27.563 15.464-94.679 49.636-127.895 66.451-3.799 1.923-5.019 6.658-3.382 10.589 1.637 3.93 5.889 6.551 9.935 5.224 35.381-11.599 106.996-34.894 137.421-43.448 41.201-11.582 89.269 4.134 89.269 54.056 0 49.927-48.068 65.644-89.269 54.061-30.425-8.556-102.04-31.848-137.421-43.448-4.046-1.326-8.298 1.294-9.935 5.224-1.637 3.931-.417 8.666 3.382 10.589 33.216 16.815 100.332 50.987 127.895 66.451 37.325 20.944 60.2 66.045 24.899 101.349-35.303 35.301-80.407 12.426-101.348-24.899-15.464-27.564-49.636-94.68-66.452-127.896-1.922-3.798-6.658-5.018-10.588-3.381-3.931 1.637-6.551 5.889-5.225 9.935 11.6 35.381 34.895 106.996 43.448 137.421 11.583 41.201-4.134 89.269-54.058 89.269-49.925 0-65.641-48.068-54.058-89.269 8.553-30.425 31.848-102.04 43.447-137.421 1.327-4.046-1.291-8.298-5.224-9.935-3.928-1.637-8.666-.417-10.589 3.381-16.815 33.216-50.984 100.332-66.451 127.896-20.941 37.325-66.045 60.2-101.346 24.899-35.303-35.304-12.428-80.405 24.897-101.349 27.563-15.464 94.679-49.636 127.895-66.451 3.799-1.923 5.018-6.658 3.379-10.589-1.635-3.93-5.887-6.55-9.933-5.224-35.377 11.6-106.995 34.895-137.42 43.448C48.942 340.907.874 325.19.874 275.266c0-49.925 48.068-65.641 89.268-54.059 30.426 8.554 102.041 31.849 137.419 43.448 4.048 1.327 8.3-1.291 9.937-5.224 1.637-3.928.421-8.666-3.378-10.589-33.219-16.815-100.338-50.987-127.898-66.451-37.326-20.944-60.2-66.045-24.9-101.349 35.304-35.3 80.408-12.426 101.349 24.899 15.464 27.564 49.636 94.68 66.451 127.896 1.923 3.799 6.658 5.018 10.589 3.378 3.931-1.634 6.551-5.886 5.224-9.932-11.599-35.38-34.894-106.995-43.447-137.42Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center max-w-xl mx-auto md:mb-24 mb-12">
          <div className="flex relative text-primary items-center justify-center">
            <h2 className="font-pall text-primary max-w-xl font-[500] text-2xl md:text-[3.2rem] mb-4 leading-tight">
              Healthy Choices <br /> Honest Pricing
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 px-4 md:px-0 gap-8 max-w-4xl mx-auto">
          {/* Monthly Plan */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 flex flex-col gap-8 relative bg-[#F0F7F2] shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="absolute -top-16 -left-8 pointer-events-none">
              <img 
                alt="Olive Icon" 
                src="/assets/olive.svg" 
                className="w-24 drop-shadow-lg"
              />
            </div>
            
            <div className="space-y-1">
              <p className="text-lg font-medium capitalize text-[#386641]">monthly</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-[#1F3824]">$14.99</span>
                <span className="text-sm opacity-80 text-[#1F3824]/60">/monthly</span>
              </div>
            </div>

            <ul className="space-y-4 flex-1">
              {[
                "Unlimited Scans",
                "Unlimited Database Searches",
                "Comprehensive Lab-Testing Data"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="tabler-icon tabler-icon-circle-check-filled w-5 h-5 text-[#386641]">
                    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"></path>
                  </svg>
                  <span className="text-lg font-[500] text-[#1F3824]/80">{feature}</span>
                </li>
              ))}
            </ul>

            <a 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center cursor-pointer font-sans justify-center gap-2 whitespace-nowrap rounded-full transition-all shadow-md px-6 py-4 text-base w-full font-[600] bg-[#253612] text-white hover:bg-[#2D5234]" 
              href="https://signup.oliveapp.com/olive-onboarding/"
            >
              Subscribe
            </a>
          </motion.div>

          {/* Yearly Plan */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 flex flex-col gap-8 relative bg-[#386641] text-white shadow-xl scale-105 z-10"
          >
            <div className="space-y-1">
              <p className="text-lg font-medium capitalize opacity-90">yearly</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-semibold">$69.99</span>
                <span className="text-2xl font-medium line-through opacity-40">$179.88</span>
                <span className="text-sm opacity-80">/yearly</span>
              </div>
            </div>

            <ul className="space-y-4 flex-1">
              {[
                "Everything in monthly plan",
                "Get 7 months free",
                "60% Savings"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="tabler-icon tabler-icon-circle-check-filled w-5 h-5 text-white">
                    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"></path>
                  </svg>
                  <span className="text-lg font-[500] opacity-90">{feature}</span>
                </li>
              ))}
            </ul>

            <a 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center cursor-pointer font-sans justify-center gap-2 whitespace-nowrap rounded-full transition-all shadow-md px-6 py-4 text-base w-full font-[600] bg-white text-[#253612] hover:bg-gray-50" 
              href="https://signup.oliveapp.com/olive-onboarding/"
            >
              Subscribe
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
