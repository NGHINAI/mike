import React, { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BetaForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Beta request submitted:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-white" id="beta-access">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center glass-card p-12 bg-gradient-to-b from-gray-50 to-white shadow-lg">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-gray-800" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Thank You!</h2>
            <p className="text-lg text-gray-600">
              Your beta access request has been submitted. We'll be in touch soon with next steps.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white" id="beta-access">
      <div className="section-container">
        <div className="max-w-2xl mx-auto glass-card p-8 bg-gradient-to-b from-gray-50 to-white shadow-lg rounded-lg">
          <div className="text-center mb-12">
            <div className="pulse-chip mb-6 inline-flex">
              <span>Limited Beta Access</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Request Beta Access
            </h2>
            <p className="text-lg text-gray-600">
              Join leading law firms already using Mike to automate paralegal tasks and recover unbilled time.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-2 block">
                  First Name *
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2 block">
                  Last Name *
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                Work Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full"
              />
            </div>
            
            <div>
              <Label htmlFor="company" className="text-sm font-medium text-gray-700 mb-2 block">
                Law Firm / Company *
              </Label>
              <Input
                id="company"
                name="company"
                type="text"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full"
              />
            </div>
            
            <div>
              <Label htmlFor="role" className="text-sm font-medium text-gray-700 mb-2 block">
                Role / Title *
              </Label>
              <Input
                id="role"
                name="role"
                type="text"
                required
                value={formData.role}
                onChange={handleChange}
                className="w-full"
              />
            </div>
            
            <button
              type="submit"
              className="w-full flex items-center justify-center group"
              style={{
                backgroundColor: '#FE5C02',
                borderRadius: '12px',
                color: '#FFFFFF',
                fontSize: '16px',
                lineHeight: '24px',
                padding: '16px 24px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Request Beta Access
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
          
          <p className="text-xs text-gray-500 text-center mt-6">
            By submitting this form, you agree to receive communications about MikeBrief AI's beta program.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BetaForm;
