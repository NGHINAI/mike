
import React from "react";
import { MessageSquare, Zap, Bell } from "lucide-react";

const DetailsSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Natural Language Commands",
      description: "Simply @mention Mike or use slash commands like \"/mike summarize contract for Johnson case\""
    },
    {
      icon: Zap,
      title: "Intelligent Processing",
      description: "Mike's specialized AI agents work behind the scenes to complete complex legal tasks"
    },
    {
      icon: Bell,
      title: "Proactive Insights",
      description: "Receive automated alerts, suggestions, and insights directly in your Slack channels"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900">
            Simple Commands, Powerful Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mike integrates seamlessly with your existing Slack workspace. No new platforms to learn, 
            no workflow disruption. Just powerful AI capabilities delivered through simple, natural language commands.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-pulse-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg">
            <span className="text-2xl font-bold text-pulse-500 mr-2">95%</span>
            <span className="text-gray-700">Task Automation</span>
            <span className="mx-3 text-gray-300">•</span>
            <span className="text-gray-700">Zero Learning Curve</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
