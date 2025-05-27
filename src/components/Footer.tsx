
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 py-8">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and branding */}
          <div className="flex items-center space-x-2">
            <img 
              src="/logo.svg" 
              alt="Mike Brief AI Logo" 
              className="h-6" 
            />
            <span className="text-lg font-bold text-gray-900">MikeBrief AI</span>
          </div>
          
          {/* Copyright and description */}
          <div className="text-center md:text-right">
            <p className="text-gray-600 text-sm mb-1">
              Your AI paralegal for Slack workspaces
            </p>
            <p className="text-gray-500 text-xs">
              © 2024 MikeBrief AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
