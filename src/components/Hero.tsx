
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center bg-white relative" 
      id="hero"
    >
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <div className="space-y-8">
          <div 
            className="inline-flex items-center px-4 py-2 bg-pulse-50 border border-pulse-200 rounded-full text-pulse-600 text-sm font-medium opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-2 h-2 bg-pulse-500 rounded-full mr-2"></span>
            AI Legal Assistant
          </div>
          
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-gray-900 opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.3s" }}
          >
            Meet Mike: Your AI<br />
            <span className="text-pulse-500">Paralegal</span> Coworker
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.5s" }}
          >
            Automate 95% of paralegal tasks, recover $30K+ in unbilled time, and eliminate $60K in lost productivity — all from within your existing Slack workspace.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.7s" }}
          >
            <a 
              href="#get-access" 
              className="inline-flex items-center justify-center group px-8 py-4 bg-pulse-500 hover:bg-pulse-600 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Your AI Paralegal
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a 
              href="#features" 
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 hover:border-pulse-500 text-gray-700 hover:text-pulse-500 font-medium rounded-full transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Restored background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pulse-100/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pulse-50/50 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
