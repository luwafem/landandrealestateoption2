import React from 'react';

const ServiceCard = ({ service, index }) => {
  return (
    <div className="group relative bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-primary transition-all duration-500">
      {/* Service Number */}
      <div className="absolute top-6 right-6">
        <span className="text-4xl font-bold text-gray-800">0{index + 1}</span>
      </div>
      
      {/* Title */}
      <h3 className="text-2xl font-bold text-light mb-4">{service.title}</h3>
      
      {/* Description */}
      <p className="text-gray-400 mb-8 leading-relaxed">{service.description}</p>
      
      {/* Features */}
      <ul className="space-y-3 mb-10">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm">
            <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      
      {/* Hover Effect Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
};

export default ServiceCard;