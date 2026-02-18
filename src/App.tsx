import { } from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Navigation } from '@/components/Navigation';
import { PageOverlay } from '@/components/PageOverlay';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Services } from '@/sections/Services';
import { Portfolio } from '@/sections/Portfolio';
import { Testimonials } from '@/sections/Testimonials';
import { CTA } from '@/sections/CTA';
import { Footer } from '@/sections/Footer';
import { usePageLoad } from '@/hooks/usePageLoad';

function App() {
  const { showOverlay } = usePageLoad(500);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#0A0A0F] transition-colors duration-500">
        {/* Page Load Overlay */}
        <PageOverlay isVisible={showOverlay} />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Testimonials />
          <CTA />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
