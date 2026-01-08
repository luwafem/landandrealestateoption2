import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <div className="relative py-32 px-6 bg-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block">Get In</span>
              <span className="text-primary">
                Touch
              </span>
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Let's discuss how we can help transform your property vision into reality
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-light mb-8">Send Us a Message</h2>
            
            {submitted ? (
              <div className="text-center py-12">
                <FaCheckCircle className="text-6xl text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-light mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-400">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-light focus:outline-none focus:border-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-light focus:outline-none focus:border-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-light focus:outline-none focus:border-primary"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-light focus:outline-none focus:border-primary"
                    >
                      <option value="">Select a subject</option>
                      <option value="property-inquiry">Property Inquiry</option>
                      <option value="sales">Sales</option>
                      <option value="management">Property Management</option>
                      <option value="development">Development</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-light focus:outline-none focus:border-primary resize-none"
                    placeholder="Tell us about your property needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <span>Send Message</span>
                  <FaPaperPlane />
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-light mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-light">Phone Number</h4>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-500 text-sm">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-light">Email Address</h4>
                    <p className="text-gray-400">info@CrystalBlackRealtors.com</p>
                    <p className="text-gray-500 text-sm">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-light">Office Address</h4>
                    <p className="text-gray-400">123 Business Avenue</p>
                    <p className="text-gray-400">New York, NY 10001</p>
                    <p className="text-gray-500 text-sm">United States</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-light mb-6">Business Hours</h3>
              <div className="space-y-4">
                {[
                  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
                  { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
                  { day: 'Sunday', hours: 'Closed' }
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-800 last:border-0">
                    <span className="text-gray-400">{schedule.day}</span>
                    <span className="text-light font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-light mb-6">Visit Our Office</h3>
            <div className="h-96 bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-700">
              <div className="text-center">
                <div className="text-6xl mb-6"></div>
                <p className="text-gray-400">Interactive map would appear here</p>
                <p className="text-gray-500 text-sm mt-2">123 Business Ave, New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;