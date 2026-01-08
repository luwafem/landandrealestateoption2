import React from 'react';
import { FaUsers, FaAward, FaMapMarkerAlt, FaLightbulb, FaHandshake, FaRocket } from 'react-icons/fa';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alexandra Chen",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      experience: "25+ years",
      description: "Visionary leader with extensive experience in luxury real estate development."
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Head of Development",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      experience: "18+ years",
      description: "Award-winning architect specializing in sustainable urban design."
    },
    {
      id: 3,
      name: "Sophia Williams",
      role: "Sales Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80",
      experience: "15+ years",
      description: "Expert in luxury property sales and international markets."
    },
    {
      id: 4,
      name: "David Kim",
      role: "Property Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      experience: "12+ years",
      description: "Specialist in premium property management and client relations."
    }
  ];

  const milestones = [
    { year: "1998", title: "Company Founded", description: "Started with a vision to redefine urban living" },
    { year: "2005", title: "First Major Development", description: "Completed landmark residential complex in NYC" },
    { year: "2012", title: "International Expansion", description: "Opened offices in 5 major global cities" },
    { year: "2018", title: "Tech Innovation", description: "Launched AI-powered property management platform" },
    { year: "2023", title: "Sustainable Focus", description: "Achieved 100% carbon-neutral developments" }
  ];

  const values = [
    { icon: <FaLightbulb />, title: "Innovation", description: "Pushing boundaries in design and technology" },
    { icon: <FaHandshake />, title: "Integrity", description: "Transparent and honest in all dealings" },
    { icon: <FaUsers />, title: "Collaboration", description: "Working together for exceptional results" },
    { icon: <FaRocket />, title: "Excellence", description: "Striving for perfection in every detail" }
  ];

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <div className="relative py-32 px-6 bg-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block">About</span>
              <span className="text-primary">
                CrystalBlackRealtors
              </span>
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Leading the future of real estate with innovation, integrity, and exceptional service
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gray-900 px-4 py-2 rounded-full border border-gray-800">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-sm font-mono text-primary">OUR STORY</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-light">
              Redefining Real Estate Since 1998
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-400 text-lg leading-relaxed">
                Founded with a vision to transform urban living, Crystal Black Realtors began as a small 
                boutique agency with big dreams. What started as a passion project has grown into 
                one of the most respected names in property development and management.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Over the past 25+ years, we've expanded our expertise to cover every aspect of 
                the property lifecycle—from visionary development and sustainable design to 
                meticulous management and strategic sales.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Today, we continue to push boundaries, embracing technology and sustainable 
                practices to create exceptional living experiences that stand the test of time.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">₦2B+</div>
                <div className="text-sm text-gray-400">Property Value</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-gray-400">Global Cities</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gray-900 rounded-3xl p-2 border border-gray-800">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                alt="Our Office"
                className="rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-dark border border-gray-800 rounded-2xl p-6 shadow-2xl">
              <div className="text-4xl font-bold text-primary">25+</div>
              <div className="text-sm text-gray-400">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Core Values</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do at PrimeEstates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-primary transition-colors group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <div className="text-2xl text-primary">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-light mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-secondary">Journey</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-800"></div>
            
            <div className="space-y-20">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Year */}
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-white mb-8 lg:mb-0 z-10">
                    {milestone.year}
                  </div>
                  
                  {/* Content */}
                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-primary transition-colors">
                      <h3 className="text-2xl font-bold text-light mb-3">{milestone.title}</h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="text-primary">Leadership</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experienced professionals dedicated to your property success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-primary transition-colors group">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-2xl mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {member.experience}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-light text-center mb-2">{member.name}</h3>
                <p className="text-primary text-center font-medium mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm text-center">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Awards & Recognition */}
      <div className="py-24 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Awards & <span className="text-secondary">Recognition</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaAward className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-light mb-2">Best Property Developer 2024</h3>
              <p className="text-gray-400 text-sm">Global Real Estate Awards</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaUsers className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-light mb-2">Top Employer 2023</h3>
              <p className="text-gray-400 text-sm">Forbes Business Council</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaMapMarkerAlt className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-light mb-2">Sustainability Award 2023</h3>
              <p className="text-gray-400 text-sm">Green Building Council</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaAward className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-light mb-2">Innovation Leader 2024</h3>
              <p className="text-gray-400 text-sm">Real Estate Tech Awards</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our <span className="text-primary">Success Story</span>
            </h2>
            <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
              Whether you're looking to buy, sell, develop, or manage property, 
              we have the expertise to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 hover:shadow-xl transition-all duration-300">
                Partner With Us
              </button>
              <button className="border-2 border-gray-700 text-light font-bold px-8 py-4 rounded-full hover:border-primary hover:text-primary transition-all duration-300">
                View Careers
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;