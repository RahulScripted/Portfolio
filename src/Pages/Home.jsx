import { useEffect } from 'react';
import { motion } from 'framer-motion'; 
import HomeElement from '../components/HomeElement';
import Contact from '../components/Contact';
import AboutElement from '../components/AboutElement';
import ProjectElement from '../components/ProjectElement';
import ExperienceSection from '../components/ExperienceSection';
import CertificationsSection from '../components/CertificationsSection';
import SkillRunner from '../Pages/SkillRunner';

function Home() {

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <div className='w-full flex flex-col items-center p-5 lg:p-10 gap-16 md:gap-28 mb-10'>
      <div className="w-full flex flex-col items-center justify-center gap-16 md:gap-28">
        
        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <HomeElement />
        </motion.div>

        {/* About */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <AboutElement />
        </motion.div>

        {/* Experience */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <ExperienceSection />
        </motion.div>

        {/* Skill Runner */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.85 }}
        >
          <SkillRunner />
        </motion.div>

        {/* Projects */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <ProjectElement />
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
        >
          <CertificationsSection />
        </motion.div>

        {/* Contact */}
        <motion.div 
          initial={{ x: 200, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="w-full"
        >
          <Contact />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
