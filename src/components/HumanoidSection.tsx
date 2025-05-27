
import React from "react";

const HumanoidSection = () => {
  return (
    <section className="w-full py-8 sm:py-12 bg-white" id="problem">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">2</span>
              <span>The Problem</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-gray-900">
              Small Law Firms Are Drowning in Inefficiency
            </h2>
            
            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-red-800 mb-2">Lost Productivity</h3>
                <p className="text-red-700">Paralegals waste 832 hours yearly on non-billable admin tasks. That's $60,000 in lost productivity per firm with two paralegals.</p>
              </div>
              
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-orange-800 mb-2">Bleeding Revenue</h3>
                <p className="text-orange-700">Attorneys lose $150,000 annually from unbilled time. Manual errors cost $50-$500 per mistake, with 5-10% revenue write-offs.</p>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-yellow-800 mb-2">Tool Overload</h3>
                <p className="text-yellow-700">Firms juggle 6.6 tools per case on average, causing productivity loss from constant context switching.</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80" 
              alt="Overwhelmed legal professional with paperwork" 
              className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl sm:rounded-3xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-lg sm:text-xl font-semibold">Over $200,000 lost annually</p>
              <p className="text-sm sm:text-base opacity-90">Before error costs and turnover</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanoidSection;
