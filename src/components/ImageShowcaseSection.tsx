
import React from "react";

const ImageShowcaseSection = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            Your AI Paralegal, Right in Slack
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Mike seamlessly integrates with your existing workflow, delivering powerful 
            AI capabilities without disrupting how your team already works.
          </p>
        </div>
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll">
          <div className="w-full">
            <img 
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=80" 
              alt="Slack interface showing Mike AI assistant in action" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">Zero Learning Curve</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Mike operates entirely within Slack using natural language commands, @mentions, 
              and simple slash commands. Your team can start benefiting immediately without 
              training or workflow changes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
