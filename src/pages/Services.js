import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/properties';

const Services = () => {
  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <div className="relative py-32 px-6 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block">Our</span>
              <span className="text-secondary">
                Services
              </span>
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Comprehensive real estate solutions designed to maximize your property's potential
            </p>
          </div>
        </div>
      </div>

      {/* All Services */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gray-900 px-4 py-2 rounded-full border border-gray-800 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-sm font-mono text-primary">OUR PROCESS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How We Work
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Consultation', desc: 'Understanding your needs and vision' },
              { number: '02', title: 'Planning', desc: 'Strategic development and design' },
              { number: '03', title: 'Execution', desc: 'Precision implementation' },
              { number: '04', title: 'Delivery', desc: 'Final handover and support' }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gray-900 border border-gray-800 rounded-2xl flex items-center justify-center mx-auto group-hover:border-primary transition-all duration-300">
                    <span className="text-4xl font-bold text-primary">{step.number}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gray-800 group-hover:bg-primary transition-colors"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-light mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-primary">PrimeEstates</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Expert Team', desc: '100+ certified professionals' },
              { title: 'Award Winning', desc: 'Industry recognized excellence' },
              { title: '24/7 Support', desc: 'Round-the-clock assistance' },
              { title: 'Full Transparency', desc: 'Clear communication' },
              { title: 'Market Leaders', desc: 'Top 5% satisfaction rate' },
              { title: 'Guaranteed Quality', desc: 'Industry-best standards' }
            ].map((item, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-primary transition-colors">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-4xl font-bold text-primary">•</div>
                </div>
                <h3 className="text-xl font-bold text-light mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;