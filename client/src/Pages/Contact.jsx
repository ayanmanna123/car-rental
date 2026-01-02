import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  MessageCircle,
  Star,
  MessageSquare,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log("Form submitted:", formData);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20", // Added dark variant
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@carrental.com", "support@carrental.com"],
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Car Street", "New York, NY 10001"],
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Closed",
      ],
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-zinc-950 dark:to-zinc-900 pt-8 transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-16 pb-4">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="text-center max-w-3xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-6
                         cursor-pointer hover:bg-orange-200 dark:hover:bg-orange-800 transition-colors duration-200"
              >
            <MessageSquare className="w-5 h-5 text-orange-500" />
              <span className="text-orange-700 dark:text-orange-400 font-medium">
                Contact Us
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
              Get in <span className="text-orange-500">Touch</span>
            </h1>
            <p className="text-gray-600 dark:text-zinc-400 text-lg leading-relaxed">
              We'd love to hear from you. Let us know how we can help make your
              car rental experience even better.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Information Column */}
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="whileInView"
              className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`${info.bgColor} rounded-xl p-6 hover:scale-105 transition-all border border-transparent dark:border-zinc-800`}>
                    <div className="flex items-center gap-3 mb-4">
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                      <h3 className="text-xl font-semibold dark:text-zinc-100">{info.title}</h3>
                    </div>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 dark:text-zinc-400 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gray-100 dark:bg-zinc-800 rounded-xl p-4 h-64 flex items-center justify-center border border-transparent dark:border-zinc-700">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 dark:text-zinc-600 mx-auto mb-2" />
                  <p className="text-gray-400 dark:text-zinc-500 text-sm font-medium">Map View Coming Soon</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form Column */}
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="whileInView"
              className="bg-white dark:bg-zinc-900 rounded-xl p-8 border border-gray-100 dark:border-zinc-800 shadow-xl transition-colors">
              <div className="flex items-center gap-2 mb-6">
                <MessageCircle className="w-6 h-6 text-orange-500" />
                <h2 className="text-2xl font-bold dark:text-white">Send Us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-gray-700 dark:text-zinc-300 font-medium text-sm">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 
                               text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 
                               transition-all placeholder-gray-400 dark:placeholder-zinc-500"
                      required
                    />
                    <User className="w-5 h-5 text-gray-400 dark:text-zinc-500 absolute right-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-gray-700 dark:text-zinc-300 font-medium text-sm">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 
                               text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 
                               transition-all placeholder-gray-400 dark:placeholder-zinc-500"
                      required
                    />
                    <Mail className="w-5 h-5 text-gray-400 dark:text-zinc-500 absolute right-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-gray-700 dark:text-zinc-300 font-medium text-sm">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Enter the subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 
                             text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 
                             transition-all placeholder-gray-400 dark:placeholder-zinc-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-gray-700 dark:text-zinc-300 font-medium text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Type your message here"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 
                             text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 
                             transition-all resize-none placeholder-gray-400 dark:placeholder-zinc-500"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-lg flex items-center justify-center gap-2 shadow-lg
                           ${isSubmitted ? "bg-green-500 shadow-green-500/20" : "bg-orange-500 shadow-orange-500/30"} 
                           text-white font-bold transition-all`}>
                  {isSubmitted ? (
                    <>
                      <Star className="w-5 h-5" />
                      <span>Message Sent Successfully!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;