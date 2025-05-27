
import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
  results: string;
}

const testimonials: TestimonialProps[] = [{
  content: "Mike transformed our practice. We recovered $35,000 in previously unbilled time in the first quarter alone. Our paralegals now focus on substantive work instead of chasing files.",
  author: "Sarah Chen",
  role: "Managing Partner, Chen & Associates",
  gradient: "from-blue-700 via-indigo-800 to-purple-900",
  backgroundImage: "/background-section1.png",
  results: "$35,000 recovered in Q1"
}, {
  content: "The proactive deadline alerts alone have saved us from multiple potential malpractice situations. Mike caught deadlines our manual system missed.",
  author: "Michael Rodriguez",
  role: "Senior Partner, Rodriguez Law Firm",
  gradient: "from-indigo-900 via-purple-800 to-orange-500",
  backgroundImage: "/background-section2.png",
  results: "Zero missed deadlines"
}, {
  content: "Our billing accuracy improved by 40% and we eliminated revenue write-offs. Mike ensures every billable minute is captured and properly documented.",
  author: "Dr. Amara Patel",
  role: "Partner, Patel Personal Injury Law",
  gradient: "from-purple-800 via-pink-700 to-red-500",
  backgroundImage: "/background-section3.png",
  results: "40% billing improvement"
}, {
  content: "As a solo practitioner, Mike is like having a full-time paralegal without the overhead. It's freed me to take on more cases and focus on client service.",
  author: "Jason Lee",
  role: "Solo Practitioner, Lee Law Office",
  gradient: "from-orange-600 via-red-500 to-purple-600",
  backgroundImage: "/background-section1.png",
  results: "30% more cases handled"
}];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png",
  results
}: TestimonialProps) => {
  return <div className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden" style={{
    backgroundImage: `url('${backgroundImage}')`
  }}>
      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
        {results}
      </div>
      
      <div className="relative z-0">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-20">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
        </div>
      </div>
    </div>;
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return <section className="py-12 bg-white relative" id="testimonials" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
            <span>Results</span>
          </div>
        </div>
        
        <h2 className="text-5xl font-display font-bold mb-12 text-left">Real Results from Real Law Firms</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} content={testimonial.content} author={testimonial.author} role={testimonial.role} gradient={testimonial.gradient} backgroundImage={testimonial.backgroundImage} results={testimonial.results} />)}
        </div>
      </div>
    </section>;
};

export default Testimonials;
