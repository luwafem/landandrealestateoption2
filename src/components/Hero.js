import React from 'react';
import { FaArrowRight, FaPlay } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-dark overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-3 bg-gray-900 px-4 py-2 rounded-full border border-gray-800">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-sm font-mono text-primary">2024 TRENDING</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-light leading-tight">
              <span className="block">Redefine</span>
              <span className="text-primary">
                Urban Living
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              We transform spaces into experiences. From visionary development to 
              seamless management, we're shaping the future of real estate.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <button className="group relative bg-primary text-white font-bold px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:bg-primary/90 hover:shadow-lg">
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Explore Properties</span>
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
              
              <button className="group flex items-center space-x-3 text-light hover:text-primary transition-colors">
                <div className="w-12 h-12 border-2 border-gray-700 rounded-full flex items-center justify-center group-hover:border-primary transition-colors">
                  <FaPlay size={14} />
                </div>
                <div className="text-left">
                  <span className="text-sm font-medium">Watch Showcase</span>
                  <span className="text-xs text-gray-500 block">2 min video</span>
                </div>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-800">
              <div>
                <div className="text-3xl font-bold text-light mb-2">500+</div>
                <div className="text-sm text-gray-500">Properties</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-light mb-2">98%</div>
                <div className="text-sm text-gray-500">Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-light mb-2">25+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden border border-gray-800 group">
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"
                alt="Modern Architecture"
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-dark/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-4">
                <div className="text-sm text-gray-400">Featured</div>
                <div className="text-xl font-bold text-light">Modern Loft</div>
                <div className="text-primary font-mono">$4.2M</div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-2xl shadow-2xl animate-float">
              <div className="text-white font-bold text-xl">Award Winning</div>
              <div className="text-white/80 text-sm">Design Excellence 2024</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-gray-500 font-mono tracking-widest">SCROLL</span>
          <div className="w-0.5 h-16 bg-primary rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;