
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  useEffect(() => {
    if (isMobile) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  
  return (
    <section 
      className="overflow-hidden relative bg-cover min-h-screen flex items-center justify-center" 
      id="hero" 
      style={{
        backgroundImage: 'linear-gradient(135deg, rgba(17,24,39,0.9) 0%, rgba(55,65,81,0.8) 50%, rgba(107,114,128,0.7) 100%), url("/Header-background.webp")',
        backgroundPosition: 'center 30%', 
        padding: isMobile ? '120px 12px 60px' : '140px 20px 80px'
      }}
    >
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-gradient-to-br from-gray-400/20 to-gray-600/10 opacity-20 blur-3xl rounded-full"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="text-center max-w-4xl mx-auto">
          <div 
            className="pulse-chip mb-6 opacity-0 animate-fade-in inline-flex" 
            style={{ animationDelay: "0.1s" }}
          >
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">01</span>
            <span>AI Legal Assistant</span>
          </div>
          
          <h1 
            className="section-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight opacity-0 animate-fade-in mb-8 text-white" 
            style={{ animationDelay: "0.3s" }}
          >
            Meet Mike: Your Proactive<br />AI Paralegal Coworker
          </h1>
          
          <p 
            style={{ animationDelay: "0.5s" }} 
            className="section-subtitle mt-6 mb-12 leading-relaxed opacity-0 animate-fade-in text-gray-200 font-normal text-lg sm:text-xl text-center max-w-3xl mx-auto"
          >
            Automate 95% of paralegal tasks, recover $30K+ in unbilled time, and eliminate $60K in lost productivity - all from within your existing Slack workspace.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.7s" }}
          >
            <a 
              href="#beta-access" 
              className="flex items-center justify-center group w-full sm:w-auto text-center bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-full transition-all duration-300"
            >
              Request Beta Access
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#features" 
              className="button-secondary w-full sm:w-auto text-center px-8 py-4 text-base text-gray-200 border-gray-400 hover:border-gray-300 hover:text-gray-100"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-gray-400/20 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
    </section>
  );
};

export default Hero;
