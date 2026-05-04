import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';

const faqData = [
  {
    question: "What is the Food Scanner App and how does it work?",
    answer: "Olive is a comprehensive tool designed to help busy parents make informed food choices. By scanning product barcodes, it quickly identifies harmful ingredients and suggests safer alternatives, ensuring that you always stay ahead of potential health risks."
  },
  {
    question: "How does Olive ensure the accuracy of the Food Scanner App results?",
    answer: "Our app relies on an extensive, expert-curated database of nutritional information and ingredient safety ratings. We continuously update our data based on the latest scientific research and holistic health guidelines to provide you with the most accurate analysis."
  },
  {
    question: "Which products can I scan with the Food Scanner App?",
    answer: "You can scan almost any packaged food product with a barcode. From snacks and cereals to baby food and dairy products, Olive provides a detailed breakdown of what's inside."
  },
  {
    question: "Can the Food Scanner App be customized to my family's dietary needs?",
    answer: "Yes! Olive allows you to set personalized filters for allergies, sensitivities, and specific dietary goals (like gluten-free or dairy-free), making it easy to find products that fit your family's unique needs."
  },
  {
    question: "Is my data secure when I use the Olive?",
    answer: "Absolutely. We prioritize your privacy and use industry-standard encryption to protect your data. We never sell your personal information to third parties."
  },
  {
    question: "When will the Android version of the Food Scanner App be available?",
    answer: "We are working hard to bring Olive to Android users! Stay tuned for updates on our official launch date."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className={`border-b border-[#386641]/10 transition-colors duration-300 ${isOpen ? 'bg-[#EBE7DD]/40 rounded-2xl' : ''}`}>
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <h3 className="text-lg font-medium text-[#1F3824]">{question}</h3>
        <motion.span 
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="ml-4 flex-shrink-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" fill="none" viewBox="0 0 41 41" className="w-6 h-6 text-[#386641]">
            <path fill="#1F3824" d="M8.715 8.688a16.667 16.667 0 1 1 23.568 23.568A16.666 16.666 0 0 1 8.717 8.69l-.002-.002Zm13.452 6.785a1.667 1.667 0 0 0-3.334 0v3.333H15.5a1.667 1.667 0 1 0 0 3.334h3.333v3.333a1.667 1.667 0 0 0 3.334 0V22.14H25.5a1.667 1.667 0 0 0 0-3.334h-3.333v-3.333Z" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-[#1F3824]/80 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Footer = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleNav = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/coming-soon');
  };

  return (
    <div style={{ display: 'contents' }}>
      <div className="md:my-24 my-8 max-w-6xl mx-auto px-4 md:px-8">
        <section className="w-full bg-[#FFF9EB] rounded-[1rem] md:rounded-[3.5rem] overflow-hidden">
          <div className="py-24 px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex justify-center relative items-center mb-12">
                <div className="flex relative text-primary items-center justify-center">
                  <h2 className="font-pall text-primary max-w-xl font-[500] text-2xl md:text-[3.2rem] text-center">Frequently Asked Questions by Parents</h2>
                </div>
                <img alt="Olive Icon" loading="lazy" width="100" height="100" decoding="async" style={{ color: 'transparent', width: '5em' }} src="/assets/olive-faq.png" />
              </div>
              
              <div className="flex justify-center mb-16">
                <button 
                  onClick={handleNav}
                  className="md:px-8 md:py-4 flex items-center cursor-pointer font-sans justify-center gap-2 rounded-full font-medium transition-all bg-[#386641] text-white shadow-md hover:bg-[#1F3824] px-4 py-2.5 text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M15.079 5.999l.239 .012c1.43 .097 3.434 1.013 4.508 2.586a1 1 0 0 1 -.344 1.44c-.05 .028 -.372 .158 -.497 .217a4.15 4.15 0 0 0 -.722 .431c-.614 .461 -.948 1.009 -.942 1.694c.01 .885 .339 1.454 .907 1.846c.208 .143 .436 .253 .666 .33c.126 .043 .426 .116 .444 .122a1 1 0 0 1 .662 .942c0 2.621 -3.04 6.381 -5.286 6.381c-.79 0 -1.272 -.091 -1.983 -.315l-.098 -.031c-.463 -.146 -.702 -.192 -1.133 -.192c-.52 0 -.863 .06 -1.518 .237l-.197 .053c-.575 .153 -.964 .226 -1.5 .248c-2.749 0 -5.285 -5.093 -5.285 -9.072c0 -3.87 1.786 -6.92 5.286 -6.92c.297 0 .598 .045 .909 .128c.403 .107 .774 .26 1.296 .508c.787 .374 .948 .44 1.009 .44h.016c.03 -.003 .128 -.047 1.056 -.457c1.061 -.467 1.864 -.685 2.746 -.616l-.24 -.012z" />
                    <path d="M14 1a1 1 0 0 1 1 1a3 3 0 0 1 -3 3a1 1 0 0 1 -1 -1a3 3 0 0 1 3 -3z" />
                  </svg>
                  Download for iOS
                </button>
              </div>

              <div className="space-y-2">
                {faqData.map((item, index) => (
                  <FAQItem 
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="md:my-24 my-8 max-w-6xl mx-auto px-4 md:px-8">
        <div className="px-6 py-12 md:px-32 md:py-20 rounded-3xl bg-[url('/assets/cta.png')] bg-cover bg-center relative overflow-hidden">
          <div className="flex relative text-primary items-start justify-start">
            <h2 className="font-pall text-left text-white font-bold text-3xl md:text-6xl justify-start max-w-lg items-start mr-0">Keep your family safe with Olive</h2>
          </div>
          <div className="flex flex-col gap-4 mt-10">
            {[
              "Effortless food scanning",
              "Peace of mind for parents",
              "Healthy product recommendations"
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <svg width="26" height="27" viewBox="0 0 26 27" fill="none">
                  <path d="M13 26.97c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13z" fill="white" fillOpacity="0.2" />
                  <path d="M17.8 10.45c-.2-.2-.5-.3-.8-.3s-.6.1-.8.3l-4.3 4.3-1.7-1.7c-.2-.2-.5-.3-.8-.3s-.6.1-.8.3c-.2.2-.3.5-.3.8s.1.6.3.8l2.6 2.6c.2.2.5.3.8.3s.6-.1.8-.3l5.2-5.2c.2-.2.3-.5.3-.8s-.1-.6-.3-.8z" fill="white" />
                </svg>
                <p className="text-white text-2xl font-medium">{text}</p>
              </div>
            ))}
          </div>
          <button 
            onClick={handleNav}
            className="inline-flex items-center cursor-pointer justify-center gap-2 rounded-full font-medium transition-all bg-white text-[#386641] hover:bg-gray-100 px-8 py-4 text-lg mt-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M15.079 5.999l.239 .012c1.43 .097 3.434 1.013 4.508 2.586a1 1 0 0 1 -.344 1.44c-.05 .028 -.372 .158 -.497 .217a4.15 4.15 0 0 0 -.722 .431c-.614 .461 -.948 1.009 -.942 1.694c.01 .885 .339 1.454 .907 1.846c.208 .143 .436 .253 .666 .33c.126 .043 .426 .116 .444 .122a1 1 0 0 1 .662 .942c0 2.621 -3.04 6.381 -5.286 6.381c-.79 0 -1.272 -.091 -1.983 -.315l-.098 -.031c-.463 -.146 -.702 -.192 -1.133 -.192c-.52 0 -.863 .06 -1.518 .237l-.197 .053c-.575 .153 -.964 .226 -1.5 .248c-2.749 0 -5.285 -5.093 -5.285 -9.072c0 -3.87 1.786 -6.92 5.286 -6.92c.297 0 .598 .045 .909 .128c.403 .107 .774 .26 1.296 .508c.787 .374 .948 .44 1.009 .44h.016c.03 -.003 .128 -.047 1.056 -.457c1.061 -.467 1.864 -.685 2.746 -.616l-.24 -.012z" />
              <path d="M14 1a1 1 0 0 1 1 1a3 3 0 0 1 -3 3a1 1 0 0 1 -1 -1a3 3 0 0 1 3 -3z" />
            </svg>
            Download for iOS
          </button>
        </div>
      </div>

      <div className="md:mt-24 mt-8 2xl:max-w-7xl mx-auto pt-24 pb-8 px-4 md:px-8">
        <footer className="w-full bg-[#386641] text-white rounded-[1rem] md:rounded-[3.5rem]">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
              <div className="md:col-span-4">
                <h3 className="text-lg font-medium mb-4">Explore More Olive Tools</h3>
                <ul className="space-y-3">
                  {[
                    { label: "Explore Foods", href: "/foods" },
                    { label: "Allergy Scanner App", href: "/allergy-scanner-app" },
                    { label: "Gluten Free Scanner", href: "/gluten-free-scanner" },
                    { label: "Dairy Free App", href: "/dairy-free-app" },
                    { label: "Food Ingredient Checker", href: "/food-ingredient-checker" },
                    { label: "Olive Health", href: "/health" }
                  ].map((link, i) => (
                    <li key={i}>
                      <Link to="/coming-soon" className="text-white/80 hover:text-white transition-colors">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-lg font-medium mb-4">About</h3>
                <ul className="space-y-3">
                  <li><Link to="/coming-soon" className="text-white/80 hover:text-white transition-colors">Blog</Link></li>
                  <li><a href="mailto:contact@oliveapp.com" className="text-white/80 hover:text-white transition-colors">Email us</a></li>
                  <li><Link to="/coming-soon" className="text-white/80 hover:text-white transition-colors">Contact us</Link></li>
                </ul>
              </div>
              <div className="md:col-span-4">
                <img src="/assets/title.png" alt="Olive Logo" className="h-12 w-auto mb-6 brightness-0 invert" />
                <p className="text-white/80 mb-4 mt-4">Get the latest lab testing data sent directly to your inbox.</p>
                <form className="flex flex-col lg:flex-row gap-2 my-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="Enter Email address" className="flex-1 px-4 py-2 rounded-full bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/20" />
                  <button onClick={handleNav} className="rounded-full font-medium bg-white text-[#386641] px-6 py-3 hover:bg-gray-100 transition-all">Subscribe</button>
                </form>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20">
              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 md:mb-0">
                {["Terms of Service", "Privacy Policy", "Refund Policy", "Medical Consent", "Sign in"].map((item, i) => (
                  <Link key={i} to="/coming-soon" className="text-white/80 hover:text-white transition-colors text-sm">{item}</Link>
                ))}
              </div>
              <p className="text-white/80 text-sm">© 2026 Olive Inc.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
