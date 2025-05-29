
import React, { useRef } from "react";
import { CheckCircle, Zap, Clock } from "lucide-react";

const DetailsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 bg-gray-50 relative" id="details" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="max-w-6xl mx-auto text-center">
          <div className="pulse-chip mb-8 inline-flex">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">03</span>
            <span>Key Benefits</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            Simple Commands, Powerful Results
          </h2>
          
          <p className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto">
            Mike integrates seamlessly with your existing Slack workspace. No new platforms to learn, 
            no workflow disruption.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card bg-white text-center">
              <div className="w-16 h-16 bg-pulse-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-pulse-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">95% Task Automation</h3>
              <p className="text-gray-600">Automate routine paralegal tasks with natural language commands</p>
            </div>
            
            <div className="feature-card bg-white text-center">
              <div className="w-16 h-16 bg-pulse-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-pulse-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">$30K+ Recovery</h3>
              <p className="text-gray-600">Recover unbilled time and eliminate costly productivity losses</p>
            </div>
            
            <div className="feature-card bg-white text-center">
              <div className="w-16 h-16 bg-pulse-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-pulse-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Zero Learning Curve</h3>
              <p className="text-gray-600">Works directly within your existing Slack workspace</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
