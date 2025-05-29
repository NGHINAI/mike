
import React from "react";

const SpecsSection = () => {
  return (
    <section className="w-full py-16 sm:py-24 bg-white" id="solution">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-6xl mx-auto text-center">
          <div className="pulse-chip mb-8 inline-flex">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
            <span>Core Solution</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display leading-tight mb-12">
            <span className="block bg-clip-text text-transparent bg-[url('/text-mask-image.jpg')] bg-cover bg-center">
              Mike integrates seamlessly into your existing Slack workspace, becoming your firm's intelligent AI paralegal.
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No new interfaces to learn, no workflow disruption - just powerful automation delivered where your team already communicates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
