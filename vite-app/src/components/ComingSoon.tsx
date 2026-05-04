import React from 'react';
import { useNavigate } from 'react-router-dom';

const ComingSoon: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5FAF6] flex flex-col items-center justify-center p-4 text-center font-sans">
      <div className="max-w-2xl bg-white p-12 rounded-[3.5rem] shadow-xl border border-[#386641]/10 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#AEB93E]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#386641]/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="flex justify-center mb-8">
            <img 
              src="/assets/title.png" 
              alt="Olive Icon" 
              className="h-24 w-auto drop-shadow-sm"
            />
          </div>
          
          <h1 className="font-pall text-4xl md:text-6xl text-[#1F3824] mb-6 font-medium leading-tight">
            Coming Soon
          </h1>
          
          <div className="space-y-4 mb-10">
            <p className="text-xl text-[#386641] font-medium italic">
              "This is a company assessment."
            </p>
            <p className="text-lg text-[#1F3824]/60 max-w-md mx-auto leading-relaxed">
              The page you are looking for is currently being prepared to help more families shop with confidence.
            </p>
          </div>
          
          <button 
            onClick={() => navigate('/')}
            className="px-10 py-4 bg-[#386641] text-white rounded-full text-lg font-medium transition-all hover:bg-[#1F3824] hover:shadow-lg active:scale-95 shadow-md"
          >
            Back to Home
          </button>
        </div>
      </div>
      
      <p className="mt-8 text-[#386641]/40 text-sm">
        © 2026 Olive Inc. All rights reserved.
      </p>
    </div>
  );
};

export default ComingSoon;
