import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Full Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80")'
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white">
              {/* Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20 mb-8">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-sm font-mono text-primary">PREMIUM REAL ESTATE</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="block">Discover</span>
                <span className="text-primary">Extraordinary</span>
                <span className="block">Properties</span>
              </h1>
              
              {/* Subheading */}
              <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
                From visionary development to seamless management, we create exceptional 
                living experiences that stand the test of time.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="group bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center space-x-3 hover:shadow-xl hover:shadow-primary/20">
                  <span className="text-lg">Explore Properties</span>
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
                
                <button className="border-2 border-white/30 text-white font-bold px-8 py-4 rounded-lg hover:border-primary hover:text-primary transition-all duration-300 backdrop-blur-sm">
                  View Services
                </button>
              </div>

              {/* Stats */}
              <div className="mt-16 pt-8 border-t border-white/20">
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
                    <div className="text-sm text-gray-300">Properties Sold</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">₦2B+</div>
                    <div className="text-sm text-gray-300">Property Value</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">25+</div>
                    <div className="text-sm text-gray-300">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Featured Property Card */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 max-w-md ml-auto">
                <div className="mb-6">
                  <span className="bg-primary text-white px-4 py-1.5 rounded-full text-sm font-bold">
                    FEATURED
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">Skyline Penthouse</h3>
                <p className="text-gray-300 mb-6">Manhattan, New York</p>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">5</div>
                    <div className="text-sm text-gray-300">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">6</div>
                    <div className="text-sm text-gray-300">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">8,500</div>
                    <div className="text-sm text-gray-300">Sq Ft</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">₦12.5M</div>
                  <button className="w-full bg-white text-dark font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-gray-300 font-mono tracking-widest">SCROLL</span>
          <div className="w-0.5 h-16 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;