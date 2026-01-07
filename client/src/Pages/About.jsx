import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Shield,
  Car,
  CheckCircle,
  Award,
  Settings,
  Users,
  CreditCard,
  Clock,
  BarChart,
  PhoneCall,
  Calendar,
  ArrowUp,
} from "lucide-react";

const About = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  const featureCards = [
    {
      icon: Shield,
      title: "Secure Booking",
      description: "Advanced security measures for safe transactions",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: Car,
      title: "Wide Selection",
      description: "Diverse fleet of vehicles for every need",
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Round-the-clock customer assistance",
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      icon: CreditCard,
      title: "Easy Payments",
      description: "Flexible and secure payment options",
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
  ];

  const advancedFeatures = [
    {
      icon: Clock,
      title: "Real-time Availability",
      description: "Check car availability instantly with live updates",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    },
    {
      icon: Calendar,
      title: "Flexible Duration",
      description: "Rent cars from hours to months with flexible terms",
      color: "text-pink-500",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
    },
    {
      icon: CreditCard,
      title: "Integrated Payments",
      description: "Secure payment gateway with multiple options",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    },
    {
      icon: BarChart,
      title: "Admin Analytics",
      description: "Comprehensive dashboards with valuable insights",
      color: "text-teal-500",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
    },
    {
      icon: PhoneCall,
      title: "24/7 Support",
      description: "Round-the-clock comprehensive customer assistance",
      color: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
  ];

  const stats = [
    { value: "15K+", label: "Happy Customers" },
    { value: "150+", label: "Locations" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Customer Support" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <motion.div
        className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white py-24 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-6"
          >
            <Star className="w-16 h-16 mx-auto" />
          </motion.div>
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl font-light mb-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Experience the Best in Car Rentals
          </motion.p>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto opacity-90"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Welcome to CarRental, where we redefine the car rental experience.
            Our mission is to provide seamless, reliable, and affordable car
            rentals for everyone, everywhere.
          </motion.p>
        </div>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        className="max-w-6xl mx-auto px-4 py-20"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <Award className="w-12 h-12 text-orange-500 mr-4" />
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
                Our Mission
              </h2>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Our mission is to revolutionize the car rental industry by
              providing a seamless, transparent, and customer-centric
              experience. We believe in making car rentals accessible,
              affordable, and stress-free for everyone.
            </p>
            <div className="space-y-4">
              {[
                "User-friendly booking process",
                "Transparent pricing with no hidden fees",
                "24/7 customer support",
                "Regular fleet maintenance and updates",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center"
                whileHover={{ y: -10, shadow: "xl" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Basic Features Section */}
      <motion.div
        className="bg-white dark:bg-gray-800 py-20 px-4"
        {...fadeIn}
        transition={{ delay: 0.3 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Key Features
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Discover what makes us the preferred choice for car rentals
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureCards.map((feature, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg h-full transition-all duration-300 group-hover:shadow-2xl">
                  <div
                    className={`${feature.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-6`}
                  >
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Advanced Features */}
      <motion.div
        className="max-w-6xl mx-auto px-4 py-20"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <div className="text-center mb-16">
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring" }}
          >
            <Settings className="w-12 h-12 text-orange-500 mx-auto" />
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Advanced Features
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our application is packed with powerful features to ensure a smooth
            car rental experience
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advancedFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div
                className={`${feature.bgColor} w-14 h-14 rounded-lg flex items-center justify-center mb-6`}
              >
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 z-50 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </div>
  );
};

export default About;