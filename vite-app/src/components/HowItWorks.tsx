import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/animations";
import ScanningCard from "./how-it-works/ScanningCard";
import AnalysisCard from "./how-it-works/AnalysisCard";
import RecommendationsCard from "./how-it-works/RecommendationsCard";

const steps = [
  {
    title: "Scan & Detect",
    description: "When you open Olive simply scan the barcode to instantly detect product ingredients. Olive’s intuitive design means busy parents can quickly see which items contain harmful substances, delivering peace of mind with every scan.",
  },
  {
    title: "Data Analysis & Validation",
    description: "After scanning, our food scanner app compares product data with an extensive, up-to-date food database. Using expert nutritional guidelines, Olive filters out potentially dangerous ingredients so you never have to second guess.",
  },
  {
    title: "Actionable Insights & Recommendations",
    description: "Once analyzed, Olive provides tailored insights and healthier product suggestions. Olive proactively flags harmful ingredients and offers personalized recommendations, empowering you to make better choices for your family's health & nutrition.",
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-white py-20 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16 md:mb-24"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <h2 className="font-pall text-[#1F3824] text-4xl md:text-6xl font-medium text-center tracking-tight">
              How the Olive Food<br></br>
              Scanner App Works
            </h2>
            <motion.img 
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              src="/assets/title.png" 
              className="h-10 md:h-16 w-auto" 
              alt="Olive logo icon" 
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ScanningCard 
            index={0}
            title={steps[0].title}
            description={steps[0].description}
          />
          <AnalysisCard 
            index={1}
            title={steps[1].title}
            description={steps[1].description}
          />
          <RecommendationsCard 
            index={2}
            title={steps[2].title}
            description={steps[2].description}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

