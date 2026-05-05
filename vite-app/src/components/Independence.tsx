import React from "react";
import { motion } from "framer-motion";

const Independence: React.FC = () => {
  return (
    <section className="md:my-40 my-16 max-w-none mx-auto px-4 md:px-8">
      <div className="flex items-center justify-center flex-col max-w-7xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex relative text-primary items-center justify-center"
        >
          <h2 className="font-pall text-center text-[#FF9DB4] font-bold text-3xl md:text-5xl xl:text-8xl max-w-none">
            100% Independent.
          </h2>
        </motion.div>
        
        <div className="flex md:flex-row flex-col items-center justify-center gap-2 md:gap-10 w-full flex-1">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:text-5xl xl:text-8xl text-center text-[#FF9DB4] font-bold text-3xl max-w-none whitespace-nowrap"
          >
            Always.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-sm xl:text-2xl font-bold text-[#386641] leading-relaxed md:pt-2 xl:pt-4 text-center md:text-left"
          >
            We <span className="text-[#AEB93E]">never monetize</span> through brand deals, affiliate links, or <br></br> ads — so 
            <span className="text-[#AEB93E]"> you can trust</span> our 
            <span className="text-[#AEB93E]"> recommendations</span> are always<br></br> aligned with our users.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Independence;
