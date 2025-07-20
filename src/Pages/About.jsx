import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import AboutElement from '../components/AboutElement';
import Cards from '../components/Cards';

function About() {
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <div className='flex item-center justify-center flex-col-reverse lg:justify-between lg:flex-row p-5 lg:p-10 gap-10'>

      {/* Left Part */}
      <motion.div 
        className='relative w-full lg:sticky lg:top-10 lg:w-1/2 lg:h-screen'
        initial={{ x: -100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
      >
        <Cards />
      </motion.div>

      {/* Right Part */}
      <div className="w-full flex flex-col max-sm:pl-5 pl-10 lg:pl-20 gap-28">
        
        {/* About - element */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <AboutElement />
        </motion.div>

        {/* Contact - element */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Contact />
        </motion.div>
      </div>

    </div>
  );
}

export default About;