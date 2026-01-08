import React from 'react';
import { FaBed, FaBath, FaRulerCombined, FaHeart, FaArrowRight } from 'react-icons/fa';

const PropertyCard = ({ property }) => {
  const [liked, setLiked] = React.useState(false);

  return (
    <div className="group bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden hover:border-primary transition-all duration-500 hover:shadow-xl">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60"></div>
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1.5 text-xs font-bold rounded-full ${
            property.type === 'sale' 
              ? 'bg-primary text-white' 
              : 'bg-secondary text-white'
          }`}>
            {property.type === 'sale' ? 'FOR SALE' : 'FOR RENT'}
          </span>
        </div>
        
        {/* Like Button */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-4 right-4 w-10 h-10 bg-dark/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-dark transition-colors"
        >
          <FaHeart className={liked ? 'text-secondary' : 'text-gray-400'} />
        </button>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-light">
            ₦{property.price.toLocaleString()}
            {property.type === 'rent' && (
              <span className="text-sm text-gray-500 font-normal">/month</span>
            )}
          </div>
          <div className="text-xs font-mono px-3 py-1 bg-gray-800 text-gray-400 rounded-full">
            {property.rating} ★
          </div>
        </div>
        
        {/* Title & Location */}
        <h3 className="text-xl font-bold text-light mb-2">{property.title}</h3>
        <p className="text-gray-400 text-sm mb-6">{property.location}</p>
        
        {/* Features */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
              <FaBed className="text-primary" size={14} />
            </div>
            <div>
              <div className="text-xs text-gray-500">Beds</div>
              <div className="text-sm font-bold text-light">{property.bedrooms}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
              <FaBath className="text-primary" size={14} />
            </div>
            <div>
              <div className="text-xs text-gray-500">Baths</div>
              <div className="text-sm font-bold text-light">{property.bathrooms}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
              <FaRulerCombined className="text-primary" size={14} />
            </div>
            <div>
              <div className="text-xs text-gray-500">Area</div>
              <div className="text-sm font-bold text-light">{property.area} sqft</div>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <button className="w-full py-3.5 bg-gray-800 text-light font-bold rounded-xl hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 group">
          <span>View Details</span>
          <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;