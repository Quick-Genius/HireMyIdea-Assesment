import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { fadeIn } from "../utils/animations";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleNav = (e: React.MouseEvent) => {
    const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
    if (href && !href.startsWith('#') && href !== '/') {
      e.preventDefault();
      navigate('/coming-soon');
    }
  };

  const navLinks = [
    { name: "Olive Health", href: "/health" },
    { name: "Solutions", href: "/solutions", hasChevron: true },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "/blogs", hasChevron: true },
    { name: "Restaurants", href: "/restaurants" },
    { name: "Food", href: "/foods", hasChevron: true },
  ];

  return (
    <>
      <motion.div 
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="z-[60] mx-auto hidden w-full flex-row items-center justify-between self-start lg:flex font-pall sticky inset-x-0 top-0 px-8 h-[80px] bg-white/80 backdrop-blur-md border-b border-neutral-100"
      >
        <div className="flex flex-1 flex-row items-center justify-between max-w-7xl mx-auto h-full">
          <Link aria-label="Return to homepage" className="relative z-20 flex items-center" to="/">
            <div className="flex items-center">
              <img src="/assets/olive.svg" alt="Olive Logo" className="h-11 w-auto" />
              <span className="text-[2.5rem] font-bold text-[#386641] font-pall tracking-[-0.05em] -ml-0.5">live</span>
            </div>
          </Link>

          <nav className="flex justify-center gap-6">
            {navLinks.map((link) => (
              <motion.a 
                key={link.name}
                className="relative text-[#1F3824] font-inter font-medium text-sm flex items-center gap-1 cursor-pointer hover:opacity-70 transition-opacity" 
                href={link.href}
                onClick={handleNav}
              >
                {link.name}
                {link.hasChevron && (
                  <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                )}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <Link 
              className="text-[#1F3824] text-sm font-bold hover:opacity-70 transition-opacity" 
              to="/coming-soon"
            >
              Sign in
            </Link>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/coming-soon')}
              className="inline-flex items-center cursor-pointer font-sans justify-center gap-2 whitespace-nowrap rounded-full font-bold transition-all bg-[#1F3824] text-white shadow-md hover:shadow-lg px-6 py-3 text-sm" 
            >
              Get Olive
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l14 0" />
                <path d="M13 18l6 -6" />
                <path d="M13 6l6 6" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Nav */}
      <div className="relative mx-auto flex w-full flex-col items-center justify-between px-4 py-4 lg:hidden font-pall bg-white border-b border-neutral-100">
        <div className="flex w-full flex-row items-center justify-between">
          <Link aria-label="Return to homepage" className="relative z-20 flex items-center gap-1" to="/">
            <div className="flex items-center">
              <img src="/assets/olive.svg" alt="Olive Logo" className="h-7 w-auto" />
              <span className="text-[1.875rem] font-bold text-[#386641] tracking-tighter ml-1">live</span>
            </div>
          </Link>
          <div 
            onClick={() => navigate('/coming-soon')}
            className="p-2 hover:bg-neutral-100 rounded-full transition-colors cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1F3824]">
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
