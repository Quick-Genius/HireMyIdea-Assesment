import React from "react";
import { motion } from "framer-motion";

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 md:py-48 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        
        {/* Mobile View */}
        <div className="md:hidden flex flex-col">
          <div className="text-center mb-8">
            <div className="flex relative text-primary items-center justify-center">
              <h2 className="font-pall max-w-xl font-[500] text-2xl md:text-[2.6rem] text-[#1F3824] mb-4">
                Real Mothers<br />Real Results
              </h2>
            </div>
            <p className="text-[#1F3824]/60 text-sm px-4">
              Join thousands of satisfied parents who trust Olive to help them make healthier choices for their families.
            </p>
          </div>
          
          <div className="relative w-full h-[300px] mb-8 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
            <img 
              alt="Testimonials Hero" 
              src="/assets/testimonial-family.png"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col gap-4">
            {/* Mobile Testimonial 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg w-full border border-gray-100">
              <p className="text-[#1F3824] text-sm mb-4 leading-relaxed">
                Olive has completely changed the way I shop for my family. I feel confident knowing exactly what's in our food before it ever hits our pantry.
              </p>
              <div className="flex items-start flex-col">
                <h6 className="text-[#1F3824] text-sm font-semibold font-[300]">Megan L.</h6>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Testimonial 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg w-full border border-gray-100">
              <p className="text-[#1F3824] text-sm mb-4 leading-relaxed">
                Meal planning used to be stressful. Now I scan, get recommendations, and feel great about what my kids are eating. It's that easy.
              </p>
              <div className="flex items-start flex-col">
                <h6 className="text-[#1F3824] text-sm font-semibold font-[300]">Tina B.</h6>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <a href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789" target="_blank" rel="noopener noreferrer" className="text-[#386641] font-medium flex items-center gap-2 justify-center mt-8">
            read all 3,147+ reviews
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" />
            </svg>
          </a>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-12 gap-12 relative min-h-[950px] items-center">
          
          {/* Left Side: Hero Image Container */}
          <div className="col-span-6 relative flex justify-start pl-12">
            <div className="relative w-[500px] h-[500px] z-10">
               <div className="absolute inset-0 bg-gray-100 rounded-3xl shadow-xl overflow-hidden">
                  <img 
                    alt="Testimonials Hero" 
                    src="/assets/testimonial-family.png"
                    className="object-cover w-full h-full grayscale"
                  />
               </div>
            </div>

            {/* Floating Card 3: Lila M (Mid of image, a little downside) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute top-[90%] left-72 z-30"
            >
              <div className="relative flex items-end gap-3">
                <div className="bg-white rounded-2xl p-6 shadow-lg w-[420px] border border-gray-100">
                  <p className="text-[#1F3824] text-sm mb-4 leading-relaxed">
                    After just a week of using Olive, I feel more in control of my family's nutrition than ever before. It's empowering to make informed choices so quickly.
                  </p>
                  <div className="flex items-start flex-col">
                    <h6 className="text-[#1F3824] text-sm font-semibold font-[300]">Lila M.</h6>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <img src="/assets/lila-m.png" className="w-10 h-10 rounded-full border-2 border-white shadow-lg object-cover mb-4" alt="" />
              </div>
            </motion.div>
          </div>

          {/* Right Side: Heading Content and Floating Cards 1 & 2 */}
          <div className="col-span-6 flex flex-col items-start -ml-16 relative z-40">
            
            {/* Floating Card 1: Megan L (More right, after image) */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute -top-48 right-72 z-50"
            >
              <div className="relative flex items-end gap-3">
                <div className="bg-white rounded-2xl p-6 shadow-lg w-[420px] border border-gray-100">
                  <p className="text-[#1F3824] text-sm mb-4 leading-relaxed">
                    Olive has completely changed the way I shop for my family. I feel confident knowing exactly what's in our food before it ever hits our pantry.
                  </p>
                  <div className="flex items-start flex-col">
                    <h6 className="text-[#1F3824] text-sm font-semibold font-[300]">Megan L.</h6>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <img src="/assets/meghan-l.png" className="w-10 h-10 rounded-full border-2 border-white shadow-lg object-cover mb-4" alt="" />
              </div>
            </motion.div>

            <h2 className="font-pall text-[3.2rem] leading-[1.1] text-[#1F3824] font-[400] text-left mb-4 mt-4">
              Real Mothers<br />Real Results
            </h2>

            <a 
              href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#386641] font-semibold text-lg flex items-center gap-2 hover:opacity-70 transition-all mb-2"
            >
              read all 3,147+ reviews
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" />
              </svg>
            </a>

            {/* Floating Card 2: Tina B (Below title, right of it) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="ml-4"
            >
              <div className="relative flex items-end gap-3 flex-row-reverse">
                <div className="bg-white rounded-2xl p-6 shadow-lg w-[420px] border border-gray-100">
                  <p className="text-[#1F3824] text-sm mb-4 leading-relaxed">
                    Meal planning used to be stressful. Now I scan, get recommendations, and feel great about what my kids are eating. It's that easy.
                  </p>
                  <div className="flex items-start flex-col">
                    <h6 className="text-[#1F3824] text-sm font-semibold font-[300]">Tina B.</h6>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <img src="/assets/tina-b.png" className="w-10 h-10 rounded-full border-2 border-white shadow-lg object-cover mb-4" alt="" />
              </div>
            </motion.div>
          </div>

        </div>

        {/* Decorative Background Shape */}
        <svg 
          width="484" height="813" viewBox="0 0 484 813" fill="none" xmlns="http://www.w3.org/2000/svg" 
          className="absolute hidden md:block w-[700px] h-auto -left-48 top-1/2 -translate-y-1/2 opacity-60 z-0 pointer-events-none"
        >
          <path d="M77.3736 0.964844C21.3156 0.964844 -24.1293 46.4097 -24.1293 102.468V160.487L-64.5964 120.015C-104.235 80.3766 -168.503 80.3766 -208.142 120.015C-247.781 159.654 -247.781 223.926 -208.142 263.565L-166.233 305.473H-227.135C-283.193 305.473 -328.638 350.918 -328.638 406.976C-328.638 463.034 -283.193 508.479 -227.135 508.479H-170.293L-209.855 548.041C-249.494 587.68 -249.494 651.947 -209.855 691.586C-170.216 731.225 -105.945 731.225 -66.3057 691.586L-24.1293 649.409V711.484C-24.1293 767.542 21.3156 812.987 77.3736 812.987C133.432 812.987 178.876 767.542 178.876 711.484V650.583L222.498 694.205C262.137 733.844 326.405 733.844 366.043 694.205C405.682 654.566 405.682 590.294 366.043 550.655L323.867 508.479H381.882C437.94 508.479 483.385 463.034 483.385 406.976C483.385 350.918 437.94 305.473 381.882 305.473H319.807L364.334 260.946C403.973 221.307 403.973 157.04 364.334 117.401C324.695 77.7619 260.424 77.7619 220.785 117.401L178.876 159.309V102.468C178.876 46.4097 133.432 0.964844 77.3736 0.964844Z" fill="#EBF5ED" />
        </svg>

      </div>
    </section>
  );
};

export default Testimonials;
