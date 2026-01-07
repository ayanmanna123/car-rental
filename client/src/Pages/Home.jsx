import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Hero from "../components/home/Hero";
import Work from "../components/home/Work";
import Faq from "../components/home/Faq";
import Loader from "../components/default/Loader";
import MouseTrail from "../components/default/Mousetrail";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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

  return (
    <>
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>

      <motion.main
        initial="initial"
        animate="animate"
        /* 
           Step 1: Added background and text color classes.
           Step 2: Added transition-colors for a smooth theme switch.
        */
        className="min-h-screen pt-16 md:pt-20 bg-white dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 transition-colors duration-300"
      >
        <motion.div variants={fadeInUp}>
          <Hero />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Work />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Faq />
        </motion.div>
      </motion.main>

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
    </>
  );
};

export default Home;