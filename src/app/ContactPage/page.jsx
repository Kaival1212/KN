"use client";
import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 1500);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-kn-navy mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business with custom tech solutions? Fill out the form below or use the contact details.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow p-8">
              {submitted ? (
                <div className="text-center text-kn-green font-semibold">
                  ✅ Thank you! We'll be in touch soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {['name','email','phone','company'].map((field) => (
                      <div key={field}>
                        <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                          {field === 'email' ? 'Email Address *' : field === 'name' ? 'Full Name *' : field === 'phone' ? 'Phone Number' : 'Company Name'}
                        </label>
                        <input
                          id={field}
                          name={field}
                          type={field === 'email' ? 'email' : 'text'}
                          value={formData[field]}
                          onChange={handleChange}
                          required={field==='name'||field==='email'}
                          placeholder={field.charAt(0).toUpperCase()+field.slice(1)}
                          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-kn-green"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project or inquiry"
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-kn-green"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-kn-green text-white font-semibold py-3 rounded-md hover:bg-kn-green/90 transition"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div>
            <div className="bg-kn-navy text-white rounded-xl shadow p-8">
              <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="mr-3 text-kn-green">📧</span>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a href="mailto:support@knconsulting.uk" className="text-gray-300 hover:text-white">
                      support@knconsulting.uk
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 text-kn-green">📞</span>
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <a href="tel:+447539283203" className="text-gray-300 hover:text-white">
                      07539 283203
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 text-kn-green">📍</span>
                  <div>
                    <p className="font-medium mb-1">Location</p>
                    <p className="text-gray-300">Based in UK — serving nationwide</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <h3 className="text-lg font-semibold mb-3">Hours of Operation</h3>
                <ul className="space-y-1 text-gray-300">
                  <li className="flex justify-between"><span>Monday - Friday</span><span>9:00 AM - 6:00 PM</span></li>
                  <li className="flex justify-between"><span>Saturday</span><span>By appointment</span></li>
                  <li className="flex justify-between"><span>Sunday</span><span>Closed</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
