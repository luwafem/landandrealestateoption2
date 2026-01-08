import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';
import { FaSearch, FaFilter, FaSortAmountDown, FaMapMarkerAlt, FaDollarSign, FaBed, FaBath } from 'react-icons/fa';

const Properties = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('price-high');
  const [priceRange, setPriceRange] = useState([0, 10000000]);

  // Filter and sort properties
  const filteredProperties = properties
    .filter(property => {
      const matchesSearch = searchQuery === '' || 
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesType = selectedType === 'all' || property.type === selectedType;
      
      const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];
      
      return matchesSearch && matchesType && matchesPrice;
    })
    .sort((a, b) => {
      switch(sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        case 'size': return b.area - a.area;
        default: return 0;
      }
    });

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <div className="relative py-32 px-6 bg-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block">Find Your</span>
              <span className="text-primary">
                Dream Property
              </span>
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Browse our exclusive collection of premium properties across the globe
            </p>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-light focus:outline-none focus:border-primary"
              />
            </div>

            {/* Property Type */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-light focus:outline-none focus:border-primary"
            >
              <option value="all">All Types</option>
              <option value="sale">For Sale</option>
              <option value="rent">For Rent</option>
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-light focus:outline-none focus:border-primary"
            >
              <option value="price-high">Price: High to Low</option>
              <option value="price-low">Price: Low to High</option>
              <option value="rating">Highest Rated</option>
              <option value="size">Largest First</option>
            </select>

            {/* Price Range */}
            <div className="relative">
              <FaDollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-light focus:outline-none focus:border-primary"
              >
                <option value="10000000">Any Price</option>
                <option value="1000000">Up to $1M</option>
                <option value="3000000">Up to $3M</option>
                <option value="5000000">Up to $5M</option>
                <option value="10000000">Up to $10M</option>
              </select>
            </div>
          </div>

          {/* Advanced Filters (Collapsible) */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Bedrooms</label>
                <select className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-light">
                  <option>Any</option>
                  <option>1+</option>
                  <option>2+</option>
                  <option>3+</option>
                  <option>4+</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Bathrooms</label>
                <select className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-light">
                  <option>Any</option>
                  <option>1+</option>
                  <option>2+</option>
                  <option>3+</option>
                  <option>4+</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Min Area (sqft)</label>
                <input
                  type="number"
                  placeholder="Any"
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-light"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Location</label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="City, State"
                    className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-light"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-gray-400">
            Showing <span className="text-light font-bold">{filteredProperties.length}</span> properties
          </div>
          <button className="flex items-center space-x-2 text-primary hover:text-primary/80">
            <FaFilter />
            <span>Reset Filters</span>
          </button>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <div className="col-span-3 text-center py-20">
              <div className="text-6xl mb-6">🏡</div>
              <h3 className="text-2xl font-bold text-light mb-4">No Properties Found</h3>
              <p className="text-gray-400 mb-8">Try adjusting your search filters</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedType('all');
                  setPriceRange([0, 10000000]);
                }}
                className="bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

        {/* Pagination */}
        {filteredProperties.length > 0 && (
          <div className="mt-16 flex justify-center">
            <div className="flex items-center space-x-4">
              <button className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center hover:border-primary transition-colors">
                ←
              </button>
              <button className="w-12 h-12 bg-primary text-white font-bold rounded-xl">1</button>
              <button className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl hover:border-primary transition-colors">
                2
              </button>
              <button className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl hover:border-primary transition-colors">
                3
              </button>
              <button className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center hover:border-primary transition-colors">
                →
              </button>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
              Let our expert agents help you find your perfect property
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 hover:shadow-xl transition-all duration-300">
                Contact Agent
              </button>
              <button className="border-2 border-gray-700 text-light font-bold px-8 py-4 rounded-full hover:border-primary hover:text-primary transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;