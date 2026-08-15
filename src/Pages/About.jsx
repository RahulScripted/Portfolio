import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AboutElement from '../components/AboutElement';

function About() {
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <div className='w-full flex flex-col p-5 lg:p-10 gap-10'>
      <div className="w-full flex flex-col max-sm:pl-5 pl-10 lg:pl-20 gap-28">
        
        {/* About - element */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <AboutElement />
        </motion.div>
      </div>
    </div>
  );
}

export default About;