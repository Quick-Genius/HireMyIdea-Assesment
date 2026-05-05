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
      <div className="md:my-24 my-8 max-w-5xl mx-auto px-4 md:px-8">
        <section className="w-full bg-[#FFF9EB] rounded-[1rem] md:rounded-[3.5rem] overflow-hidden">
          <div className="py-24 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
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
                <Link to="/" className="block mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="235" height="43" viewBox="0 0 235 43" fill="none" className="h-12 w-auto">
                    <path d="M51.3794 22.8744C50.7456 22.6747 46.7038 24.7708 46.4888 25.6298C46.2737 26.4887 54.0113 42.1087 54.7547 42.4371C55.498 42.7654 58.468 42.7291 58.8188 42.4371C59.1695 42.145 67.2049 26.4956 66.9432 25.6298C66.6816 24.7638 62.7917 21.8492 61.5307 22.8744C60.2698 23.8996 56.4767 33.0691 56.4767 33.0691C56.4767 33.0691 52.0133 23.0741 51.3794 22.8744Z" fill="#AEB93E"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M75.784 34.6549C74.9453 34.6396 74.1819 34.6257 73.5794 34.6257C73.5794 35.1707 73.8896 36.1295 76.0495 36.551C77.4942 36.8329 79.4763 36.2989 80.783 35.947C81.4298 35.7728 81.9112 35.643 82.0796 35.6792C82.5881 35.7881 84.9857 38.8758 84.1137 40.5468C83.2419 42.2178 73.325 44.361 69.4745 40.1109C65.624 35.8608 65.5514 30.4845 68.1668 26.852C70.7824 23.2194 73.979 22.7109 76.3402 22.7109C78.7012 22.7109 81.6239 23.0979 84.1137 26.2344C86.6036 29.3712 84.4095 34.1559 83.4599 34.4078C82.0959 34.7696 78.5345 34.7049 75.784 34.6549ZM73.5793 31.1021C73.7851 30.2787 74.6744 28.7733 76.558 28.632C78.9653 28.4514 78.709 30.1096 78.5748 30.9787C78.5681 31.0219 78.5616 31.0632 78.5559 31.1021H73.5793Z" fill="#AEB93E"></path>
                    <path d="M32.4408 13.3464C32.0595 12.6154 26.9215 13.2964 26.636 13.7735C26.3506 14.2505 27.3026 41.5301 27.4797 41.8046C27.657 42.079 37.0964 42.036 37.3851 41.8046C37.6739 41.5731 37.7469 36.9571 37.3851 36.5275C37.0234 36.0979 32.8783 36.1003 32.8783 36.1003C32.8783 36.1003 32.8219 14.0773 32.4408 13.3464Z" fill="#AEB93E"></path>
                    <path d="M44.7833 23.9464C43.9394 23.3245 39.7642 23.1024 38.9202 23.9464C38.0763 24.7903 38.3872 40.6473 38.9202 41.58C39.4532 42.5128 43.9394 42.2907 44.7833 41.58C45.6273 40.8693 45.6273 24.5682 44.7833 23.9464Z" fill="#AEB93E"></path>
                    <path d="M44.7833 14.607C43.9394 13.9851 39.7642 13.7631 38.9202 14.607C38.0763 15.4508 38.3872 19.8595 38.9202 20.7923C39.4532 21.725 43.9394 21.503 44.7833 20.7923C45.6273 20.0816 45.6273 15.2288 44.7833 14.607Z" fill="#AEB93E"></path>
                    <path d="M11.6445 7.9541C12.4104 9.37799 12.8738 10.4285 12.7638 12.2955" stroke="#B47E54" strokeWidth="1.74943" strokeLinecap="round"></path>
                    <path d="M25.1663 27.0132C25.1663 35.8274 22.081 42.9728 12.5992 42.9728C3.1175 42.9728 0.0322266 35.8274 0.0322266 27.0132C0.0322266 18.1991 7.69597 12.3589 12.5992 12.3589C17.5025 12.3589 25.1663 18.1991 25.1663 27.0132Z" fill="#AEB93E"></path>
                    <path d="M25.1668 27.0132C25.1668 35.8272 22.0816 42.9726 12.5998 42.9726C8.59668 42.9726 5.73372 41.6989 3.76172 39.5639C6.2414 40.6582 9.69106 41.6785 13.4808 41.3384C17.2705 40.9983 23.0118 39.5639 25.1668 27.0132Z" fill="black" fillOpacity="0.17"></path>
                    <path d="M22.2615 1.75041C21.7345 0.808721 17.9008 0.622276 15.7399 1.7504C13.5792 2.87853 12.5756 5.55323 12.7304 7.92803C13.9888 8.30191 15.5759 8.67554 18.2322 7.56102C20.8882 6.44651 22.6101 3.11565 22.2615 1.75041Z" fill="#AEB93E"></path>
                    <path d="M20.5462 2.678C20.721 2.20308 16.6358 6.00599 13.0654 7.26714C13.0654 7.26714 15.7484 6.79644 17.2876 5.70094C18.8267 4.60545 20.2372 3.5175 20.5462 2.678Z" fill="#8F9838"></path>
                    <path d="M5.94531 23.5363C5.94531 22.4632 6.81526 21.5933 7.8884 21.5933C8.96155 21.5933 9.83151 22.4632 9.83151 23.5363V24.0836C9.83151 25.1567 8.96155 26.0266 7.8884 26.0266C6.81526 26.0266 5.94531 25.1567 5.94531 24.0836V23.5363Z" fill="#2D2D2D"></path>
                    <path d="M15.3652 23.5363C15.3652 22.4632 16.2351 21.5933 17.3083 21.5933C18.3814 21.5933 19.2514 22.4632 19.2514 23.5363V24.0836C19.2514 25.1567 18.3814 26.0266 17.3083 26.0266C16.2351 26.0266 15.3652 25.1567 15.3652 24.0836V23.5363Z" fill="#2D2D2D"></path>
                    <path d="M11.168 25.903C11.4712 26.3679 11.9867 26.6672 12.6389 26.6672C13.4864 26.6672 13.8868 26.378 14.2133 25.8237" stroke="#2D2D2D" strokeWidth="0.728929" strokeLinecap="round"></path>
                    <path d="M8.89323 23.2728C9.19778 23.2728 9.44467 23.0259 9.44467 22.7214C9.44467 22.4168 9.19778 22.1699 8.89323 22.1699C8.58868 22.1699 8.3418 22.4168 8.3418 22.7214C8.3418 23.0259 8.58868 23.2728 8.89323 23.2728Z" fill="#D9D9D9"></path>
                    <path d="M18.3249 23.2728C18.6294 23.2728 18.8763 23.0259 18.8763 22.7214C18.8763 22.4168 18.6294 22.1699 18.3249 22.1699C18.0203 22.1699 17.7734 22.4168 17.7734 22.7214C17.7734 23.0259 18.0203 23.2728 18.3249 23.2728Z" fill="#D9D9D9"></path>
                  </svg>
                </Link>
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
