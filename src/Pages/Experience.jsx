import React, { useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import Timeline from '../components/Timeline';
import Cards from '../components/Cards';
import Contact from '../components/Contact';

function Experience() {
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <div className='flex item-center justify-center flex-col-reverse lg:justify-between lg:flex-row relative p-5 lg:p-10 gap-4 mb-10'>
      
      {/* Left Part */}
      <motion.div
        className='relative w-full lg:sticky lg:top-10 lg:w-1/2 lg:h-screen'
        initial={{ x: -100, opacity: 0 }} // Initial state (off-screen to the left with 0 opacity)
        animate={{ x: 0, opacity: 1 }} // Animate to normal position and full opacity
        transition={{ duration: 1, type: "spring", stiffness: 50 }} // Add spring transition for smooth animation
      >
        <Cards />
      </motion.div>

      {/* Right Part */}
      <div className="w-full flex flex-col max-sm:pl-5 pl-10 lg:pl-20 gap-20">
        
        {/* Timeline - element */}
        <motion.div
          initial={{ opacity: 0 }} // Start with opacity 0
          animate={{ opacity: 1 }} // Animate to full opacity
          transition={{ duration: 1, delay: 0.3 }} // Add delay for a sequential effect
        >
          <Timeline />
        </motion.div>

        {/* Contact - element */}
        <motion.div
          initial={{ x: 200, opacity: 0 }} // Initial state (off-screen to the right with 0 opacity)
          animate={{ x: 0, opacity: 1 }} // Animate to normal position and full opacity
          transition={{ duration: 1, type: "spring", stiffness: 100 }} // Add spring transition for smooth animation
        >
          <Contact />
        </motion.div>
      </div>
    </div>
  );
}

export default Experience;