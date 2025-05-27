
import React, { useRef } from "react";

const DetailsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 bg-gray-50 relative" id="details" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
            <span>How It Works</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">Simple Slack Commands, Powerful Results</h2>
            <p className="text-lg text-gray-700 mb-6">
              Mike integrates seamlessly with your existing Slack workspace. No new platforms to learn, 
              no workflow disruption. Just powerful AI capabilities delivered through simple, natural language commands.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-pulse-500 text-white rounded-full flex items-center justify-center font-semibold">1</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Natural Language Commands</h3>
                  <p className="text-gray-600">Simply @mention Mike or use slash commands like "/mike summarize contract for Johnson case"</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-pulse-500 text-white rounded-full flex items-center justify-center font-semibold">2</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Intelligent Processing</h3>
                  <p className="text-gray-600">Mike's specialized AI agents work behind the scenes to complete complex legal tasks</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-pulse-500 text-white rounded-full flex items-center justify-center font-semibold">3</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Proactive Insights</h3>
                  <p className="text-gray-600">Receive automated alerts, suggestions, and insights directly in your Slack channels</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80" 
              alt="Legal team collaborating with AI assistance" 
              className="w-full h-auto rounded-2xl shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-lg font-semibold">95% Task Automation</p>
              <p className="text-sm opacity-90">Zero learning curve required</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
