
import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    
    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative" id="get-access" ref={ctaRef}>
      <div className="section-container relative z-10 opacity-0 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto glass-card p-6 sm:p-8 md:p-10 lg:p-14 text-center overflow-hidden relative">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-pulse-100/30 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-gray-100/50 rounded-full -translate-x-1/2 translate-y-1/2 blur-2xl"></div>
          
          <div className="pulse-chip mx-auto mb-4 sm:mb-6">
            <span>Limited Beta Access</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Start Saving $200,000+ Annually <br className="hidden sm:inline" />
            <span className="text-pulse-500">With Your AI Paralegal</span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join leading law firms already using Mike to automate 95% of paralegal tasks, 
            recover unbilled time, and eliminate costly errors. Limited beta spots available.
          </p>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-green-800">
              <div className="text-center">
                <div className="text-2xl font-bold">$60,000</div>
                <div className="text-sm">Productivity Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">$30,000</div>
                <div className="text-sm">Recovered Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">832</div>
                <div className="text-sm">Hours Saved/Year</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="button-primary group flex items-center justify-center w-full sm:w-auto">
              Get Mike for Your Firm
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#" className="button-secondary w-full sm:w-auto text-center">
              Schedule Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
