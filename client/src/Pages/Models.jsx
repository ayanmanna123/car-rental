import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Car,
  Users,
  Briefcase,
  Fuel,
  Star,
  ChevronRight,
  Search,
  Filter
} from "lucide-react";

// The same cars array used in your booking page
const cars = [
  {
    id: 1,
    name: "Tesla Model 3",
    category: "Sedan",
    price: 89,
    image: "https://media.zigcdn.com/media/model/2024/Jun/bmw-m5-2025.jpg",
    features: { seats: "5", luggage: "3", fuel: "Electric" },
    rating: 4.9,
  },
  {
    id: 2,
    name: "BMW X5",
    category: "SUV",
    price: 129,
    image: "https://d2m3nfprmhqjvd.cloudfront.net/blog/20220825223325/Luxury-SUVs.jpg",
    features: { seats: "7", luggage: "5", fuel: "Hybrid" },
    rating: 4.8,
  },
  // ... (Add more from your list)
];

const Models = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Sedan", "SUV", "Luxury", "Sports"];

  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || car.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 transition-colors duration-300 pt-24 pb-20">
      <div className="container mx-auto px-4">

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 dark:text-white"
          >
            Our Vehicle <span className="text-orange-500">Fleet</span>
          </motion.h1>
          <p className="text-gray-600 dark:text-zinc-400">
            Choose from our extensive collection of premium vehicles, from eco-friendly electric cars to high-performance luxury SUVs.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search car models..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all dark:text-white"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap
                  ${activeCategory === cat
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-zinc-400 hover:bg-orange-100 dark:hover:bg-zinc-800"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-bold dark:text-white">{car.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">{car.category}</span>
                    <h3 className="text-xl font-bold dark:text-white">{car.name}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-orange-500">${car.price}</p>
                    <p className="text-xs text-gray-400">per day</p>
                  </div>
                </div>

                {/* Features Row */}
                <div className="grid grid-cols-3 gap-2 mb-6 py-4 border-t border-b border-gray-100 dark:border-zinc-800">
                  <div className="flex flex-col items-center gap-1">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-600 dark:text-zinc-400">{car.features.seats} Seats</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 border-x border-gray-100 dark:border-zinc-800 px-2">
                    <Briefcase className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-600 dark:text-zinc-400">{car.features.luggage} Bags</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Fuel className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-600 dark:text-zinc-400">{car.features.fuel}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to={`/booking/${car.id}`}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20"
                >
                  Book Now
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCars.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-zinc-500 text-lg">No cars found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Models;