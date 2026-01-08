import React, { useState } from 'react';
import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import ServiceCard from '../components/ServiceCard';
import { properties, services } from '../data/properties';
import { FaArrowRight, FaChartLine, FaUsers, FaAward, FaBuilding } from 'react-icons/fa';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const featuredProperties = properties;
  const allServices = services;

  const filters = [
    { id: 'all', label: 'All Properties' },
    { id: 'sale', label: 'For Sale' },
    { id: 'rent', label: 'For Rent' },
    { id: 'luxury', label: 'Luxury' },
    { id: 'commercial', label: 'Commercial' },
  ];

  const stats = [
    { icon: <FaBuilding />, value: '500+', label: 'Properties' },
    { icon: <FaUsers />, value: '2500+', label: 'Happy Clients' },
    { icon: <FaChartLine />, value: '$2B+', label: 'Property Value' },
    { icon: <FaAward />, value: '25+', label: 'Awards Won' },
  ];

  return (
    <div className="bg-dark text-light">
      <Hero />
      
      {/* Properties Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gray-900 px-4 py-2 rounded-full border border-gray-800 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-sm font-mono text-primary">FEATURED PROPERTIES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="block">Discover Our</span>
              <span className="text-primary">
                Exclusive Collection
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Curated selection of premium properties designed for the modern lifestyle
            </p>
          </div>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-900 text-gray-400 hover:text-light hover:bg-gray-800'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          
          {/* Properties Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          {/* View All Button */}
          <div className="text-center">
            <button className="group inline-flex items-center space-x-3 bg-gray-900 border border-gray-800 px-8 py-4 rounded-full hover:border-primary transition-all duration-300">
              <span className="text-light font-bold">View All Properties</span>
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform">
                <FaArrowRight className="text-white" />
              </div>
            </button>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <div className="text-2xl text-primary">{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold text-light mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gray-900 px-4 py-2 rounded-full border border-gray-800 mb-6">
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                <span className="text-sm font-mono text-secondary">OUR SERVICES</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="block">Comprehensive</span>
                <span className="text-primary">
                  Real Estate Solutions
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                From visionary development to seamless management, we provide end-to-end 
                solutions that transform properties into exceptional living experiences.
              </p>
              <button className="bg-secondary text-white font-bold px-8 py-4 rounded-full hover:bg-secondary/90 hover:shadow-xl transition-all duration-300">
                Explore All Services
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gray-900 border border-gray-800 rounded-3xl p-12">
                <div className="text-6xl font-bold text-light mb-4">360°</div>
                <div className="text-xl font-bold text-light mb-2">Full-Cycle Approach</div>
                <p className="text-gray-400">
                  We handle every aspect of the property lifecycle, ensuring excellence 
                  from concept to completion and beyond.
                </p>
              </div>
            </div>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-12 lg:p-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your
              <span className="block text-primary">
                Property Vision?
              </span>
            </h2>
            <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
              Connect with our experts for personalized guidance on your next property venture
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 hover:shadow-xl transition-all duration-300">
                Schedule Consultation
              </button>
              <button className="border-2 border-gray-700 text-light font-bold px-8 py-4 rounded-full hover:border-primary hover:text-primary transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;