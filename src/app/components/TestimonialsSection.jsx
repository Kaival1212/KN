"use client"
import React from 'react';

const Testimonial = ({ quote, name, position, company, avatar }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
    <div className="flex items-center mb-4">
      <svg className="w-8 h-8 text-kn-green" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.4 6.4C4.64 8.32 1.9 12.16 2 17.6V24h7.2v-7.2H6.4c0-3.84 1.92-6.72 5.76-8.64L10.4 6.4zm14.4 0C19.04 8.32 16.3 12.16 16.4 17.6V24h7.2v-7.2h-2.8c0-3.84 1.92-6.72 5.76-8.64L24.8 6.4z" />
      </svg>
    </div>
    <p className="text-gray-700 mb-6 italic">{quote}</p>
    <div className="flex items-center">
      {avatar ? (
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full mr-3 object-cover" />
      ) : (
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium mr-3">
          {name.charAt(0)}
        </div>
      )}
      <div>
        <p className="font-semibold text-kn-navy">{name}</p>
        <p className="text-sm text-gray-500">{position}, {company}</p>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      name: "John Smith",
      position: "CEO",
      company: "Tech Solutions Ltd"
    },
    {
      quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      name: "Sarah Wilson",
      position: "Operations Manager",
      company: "Business Corp"
    },
    {
      quote: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
      name: "Mike Johnson",
      position: "Founder",
      company: "Startup Inc"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-kn-navy">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <Testimonial key={idx} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;