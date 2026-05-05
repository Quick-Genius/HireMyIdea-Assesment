import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import HealthBenefits from './components/HealthBenefits';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import Pricing from './components/Pricing';
import ProtectYourFamily from './components/ProtectYourFamily';
import Independence from './components/Independence';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';

function LandingPage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <HealthBenefits />
      <Testimonials />
      <Features />
      <Pricing />
      <ProtectYourFamily />
      <Independence />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className='__variable_f367f3 __variable_0d7163 __className_9ed02d __className_5f0e35 antialiased'>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>

        {/* Accessibility / Routing utilities */}
        <div style={{ position: 'absolute' }}>
          <span id="next-route-announcer" aria-live="assertive" aria-atomic="true"></span>
        </div>
      </div>
    </Router>
  );
}

export default App;