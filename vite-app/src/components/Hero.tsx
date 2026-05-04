import React from "react";
import Navbar from "./Navbar";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full z-10 bg-white">
      <div className="pb-12 p-2 md:p-4">
        <div className="w-full relative z-[100] bg-[#F9FBF8] rounded-[2rem] md:rounded-[2.5rem] pt-6 pb-20">
          <Navbar />
          <div className="flex flex-col items-center">
            <div className="mb-2 flex gap-2 flex-col sm:items-center md:justify-center sm:flex-row">
              <div className="mb-4 flex flex-row items-center justify-center md:justify-start sm:mb-0">
                <div className="group relative -mr-3">
                  <div>
                    <div className="relative overflow-hidden rounded-full border-2 border-neutral-200">
                      <img alt="John Doe" loading="lazy" width="100" height="100" decoding="async" className="h-8 w-8 object-cover object-top md:h-8 md:w-8" style={{ color: "transparent" }} src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1599566150163-29194dcaad36%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D3387%26q%3D80&w=256&q=75" />
                    </div>
                  </div>
                </div>
                <div className="group relative -mr-3">
                  <div>
                    <div className="relative overflow-hidden rounded-full border-2 border-neutral-200">
                      <img alt="Robert Johnson" loading="lazy" width="100" height="100" decoding="async" className="h-8 w-8 object-cover object-top md:h-8 md:w-8" style={{ color: "transparent" }} src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1535713875002-d1d0cf377fde%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww%26auto%3Dformat%26fit%3Dcrop%26w%3D800%26q%3D60&w=256&q=75" />
                    </div>
                  </div>
                </div>
                <div className="group relative -mr-3">
                  <div>
                    <div className="relative overflow-hidden rounded-full border-2 border-neutral-200">
                      <img alt="Jane Smith" loading="lazy" width="100" height="100" decoding="async" className="h-8 w-8 object-cover object-top md:h-8 md:w-8" style={{ color: "transparent" }} src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1580489944761-15a19d654956%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww%26auto%3Dformat%26fit%3Dcrop%26w%3D800%26q%3D60&w=256&q=75" />
                    </div>
                  </div>
                </div>
                <div className="group relative -mr-3">
                  <div>
                    <div className="relative overflow-hidden rounded-full border-2 border-neutral-200">
                      <img alt="Emily Davis" loading="lazy" width="100" height="100" decoding="async" className="h-8 w-8 object-cover object-top md:h-8 md:w-8" style={{ color: "transparent" }} src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1438761681033-6461ffad8d80%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D800%26q%3D60&w=256&q=75" />
                    </div>
                  </div>
                </div>
                <div className="z-10 h-8 w-8 flex items-center justify-center rounded-full border-2 border-neutral-200 bg-[linear-gradient(135deg,_rgba(231,_230,_230,_0.5)_0%,_rgba(203,_203,_203,_0.5)_97%)]">
                  <span className="text-xs font-medium text-black/30">3k+</span>
                </div>
              </div>
              <span className="font-dm-sans text-xs text-neutral-600">Trusted by thousands of healthy families</span>
            </div>

            <h1 className="relative z-50 py-2 md:pt-8 pb-4 mx-auto mt-4 max-w-4xl text-[#1F3824] text-balance text-center font-pall font-[600] tracking-[-0.03em] leading-[1.05] text-5xl md:text-[5.5rem]">
              <span style={{ display: "inline-block", verticalAlign: "top", textDecoration: "inherit", textWrap: "balance" }}>The Safest Way to<br className="hidden md:block" /> Shop for Groceries</span>
            </h1>
            
            <p className="relative z-50 mx-auto mt-4 md:text-lg text-sm max-w-md px-4 text-center text-[#1F1F1F99]">
              Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your Family's Diet and Get Expert-Backed Food Insights
            </p>
            
            <div className="flex justify-center flex-col md:flex-row p-8 mx-auto gap-2">
              <a className="inline-flex items-center cursor-pointer font-sans justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all shadow-md px-4 py-2.5 text-sm bg-[#1F3824] text-white hover:opacity-90" href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="tabler-icon tabler-icon-brand-apple-filled">
                  <path d="M15.079 5.999l.239 .012c1.43 .097 3.434 1.013 4.508 2.586a1 1 0 0 1 -.344 1.44c-.05 .028 -.372 .158 -.497 .217a4.15 4.15 0 0 0 -.722 .431c-.614 .461 -.948 1.009 -.942 1.694c.01 .885 .339 1.454 .907 1.846c.208 .143 .436 .253 .666 .33c.126 .043 .426 .116 .444 .122a1 1 0 0 1 .662 .942c0 2.621 -3.04 6.381 -5.286 6.381c-.79 0 -1.272 -.091 -1.983 -.315l-.098 -.031c-.463 -.146 -.702 -.192 -1.133 -.192c-.52 0 -.863 .06 -1.518 .237l-.197 .053c-.575 .153 -.964 .226 -1.5 .248c-2.749 0 -5.285 -5.093 -5.285 -9.072c0 -3.87 1.786 -6.92 5.286 -6.92c.297 0 .598 .045 .909 .128c.403 .107 .774 .26 1.296 .508c.787 .374 .948 .44 1.009 .44h.016c.03 -.003 .128 -.047 1.056 -.457c1.061 -.467 1.864 -.685 2.746 -.616l-.24 -.012z"></path>
                  <path d="M14 1a1 1 0 0 1 1 1a3 3 0 0 1 -3 3a1 1 0 0 1 -1 -1a3 3 0 0 1 3 -3z"></path>
                </svg>Download for iOS
              </a>
            </div>

            <div className="relative z-50 min-h-[500px] max-w-6xl mx-auto overflow-hidden w-full">
              <div className="flex absolute inset-0 top-[25%] -translate-y-1/2 left-1/4 right-1/4 z-[51] justify-center mask-l-from-50-pct mask-r-from-50-pct pointer-events-none">
                <div className="h-full w-full overflow-hidden relative">
                  <div className="absolute z-1 top-1/2 -translate-y-1/2 flex gap-2 items-center animate-scroll" style={{ width: "200%" }}>
                    {/* Floating Products using real assets */}
                    <div className="relative w-[6.25rem] h-[6.25rem] shrink-0" style={{ opacity: 0.3, transform: "scale(0.8)" }}>
                      <img alt="Organic Bagels" className="rounded-2xl object-cover" style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0 }} src="/assets/product-1.png" />
                    </div>
                    <div className="relative w-[6.25rem] h-[6.25rem] shrink-0" style={{ opacity: 0.3, transform: "scale(0.8)" }}>
                      <img alt="Cocao-nectar Bar" className="rounded-2xl object-cover" style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0 }} src="/assets/product-2.png" />
                    </div>
                    <div className="relative w-[6.25rem] h-[6.25rem] shrink-0" style={{ opacity: 0.3, transform: "scale(0.8)" }}>
                      <img alt="Strawberry Tonic" className="rounded-2xl object-cover" style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0 }} src="/assets/product-3.png" />
                    </div>
                    <div className="relative w-[6.25rem] h-[6.25rem] shrink-0" style={{ opacity: 0.3, transform: "scale(0.8)" }}>
                      <img alt="Fig Crackers" className="rounded-2xl object-cover" style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0 }} src="/assets/product-4.png" />
                    </div>
                    <div className="relative w-[6.25rem] h-[6.25rem] shrink-0" style={{ opacity: 1, transform: "scale(1.2)" }}>
                      <img alt="Gradea Raw Milk" className="rounded-2xl object-cover shadow-xl" style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0 }} src="/assets/product-9.png" />
                    </div>
                    <div className="relative w-[6.25rem] h-[6.25rem] shrink-0" style={{ opacity: 0.3, transform: "scale(0.8)" }}>
                      <img alt="Late July Snacks" className="rounded-2xl object-cover" style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0 }} src="/assets/product-10.png" />
                    </div>
                    
                    {/* Duplicate for infinite scroll effect */}
                    <div className="relative w-[6.25rem] h-[6.25rem] shrink-0" style={{ opacity: 0.3, transform: "scale(0.8)" }}>
                      <img alt="Organic Bagels" className="rounded-2xl object-cover" style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0 }} src="/assets/product-1.png" />
                    </div>
                    <div className="relative w-[6.25rem] h-[6.25rem] shrink-0" style={{ opacity: 0.3, transform: "scale(0.8)" }}>
                      <img alt="Cocao-nectar Bar" className="rounded-2xl object-cover" style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0 }} src="/assets/product-2.png" />
                    </div>
                    <div className="relative w-[6.25rem] h-[6.25rem] shrink-0" style={{ opacity: 0.3, transform: "scale(0.8)" }}>
                      <img alt="Strawberry Tonic" className="rounded-2xl object-cover" style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0 }} src="/assets/product-3.png" />
                    </div>
                    <div className="relative w-[6.25rem] h-[6.25rem] shrink-0" style={{ opacity: 0.3, transform: "scale(0.8)" }}>
                      <img alt="Fig Crackers" className="rounded-2xl object-cover" style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0 }} src="/assets/product-4.png" />
                    </div>
                    <div className="relative w-[6.25rem] h-[6.25rem] shrink-0" style={{ opacity: 1, transform: "scale(1.2)" }}>
                      <img alt="Gradea Raw Milk" className="rounded-2xl object-cover shadow-xl" style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0 }} src="/assets/product-9.png" />
                    </div>
                    <div className="relative w-[6.25rem] h-[6.25rem] shrink-0" style={{ opacity: 0.3, transform: "scale(0.8)" }}>
                      <img alt="Late July Snacks" className="rounded-2xl object-cover" style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0 }} src="/assets/product-10.png" />
                    </div>
                  </div>
                  <div className="absolute left-0 right-0 h-[200px] w-[280px] bg-[white] mx-auto top-[114px]"></div>
                </div>
              </div>
              
              <div className="hero-details-card pointer-events-none relative w-full h-[600px] flex justify-center -mt-20">
                <div className="relative top-[20px] flex items-center justify-end left-1/2 -translate-x-1/2 bg-black h-[26px] w-[100px] rounded-full z-10">
                  <div className="h-[16px] bg-[radial-gradient(50%_50%_at_50%_50%,_var(--color-white-4,_rgba(255,_255,_255,_0.04))_72%,_var(--color-white-16,_rgba(255,_255,_255,_0.16))_100%)] w-[16px] mr-[5px] rounded-full absolute right-0"></div>
                </div>
                <div className="h-full top-[10px] bg-white mx-auto w-[280px] rounded-tr-[36px] rounded-tl-[36px] shadow-xl absolute inset-x-0 z-[4]"></div>
                <div className="h-[600px] mx-auto w-[300px] bg-[linear-gradient(180deg,_rgba(88,_88,_88,_0.24)_0%,_rgba(255,_255,_255,_0.24)_100%)] rounded-[38px] shadow-xl absolute inset-x-0 z-[3]"></div>
                <div className="absolute h-[400px] w-[280px] top-[10px] rounded-[36px] mx-auto bg-[rgb(21,21,21)] flex items-end z-[4] justify-center inset-x-0"></div>
                <div className="absolute flex items-end z-[100] justify-center inset-x-0 top-0">
                  <img alt="Gradea Raw Pure Jersey Milk" className="rounded-[36px] object-cover h-[580px] w-[276px] relative top-3" src="/assets/hero_iphone_screen_gradea_milk.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
