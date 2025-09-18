import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

function ProjectElement() {
  return (
    <div className='flex flex-col items-center justify-center gap-8'>
      
      {/* Heading */}
      <motion.h1 
        className="text-5xl md:text-7xl lg:text-12xl font-bold text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        PROJ
        <span className="text-[#353334]">ECTS</span>
      </motion.h1>

      {/* Project 1 */}
      <motion.div 
        className='bg-[#1C1A19] px-2 md:px-7 py-4 rounded-md flex flex-col md:flex-row justify-between items-center gap-3 md:gap-6 transition-all duration-300 cursor-pointer'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Image */}
        <motion.img 
          className='w-full md:w-96 h-auto lg:h-48 mb-4 md:mb-0 cursor-pointer pl-2 pr-2 pt-2 bg-[#F46C38] rounded-md object-fit' 
          src={assets.projects1} 
          alt="projects1" 
        />
        
        {/* Text Part */}
        <div className='flex flex-col items-start'>
          {/* Title */}
          <motion.h1 
            className='text-xl md:text-2xl font-semibold text-left'
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Imagify
          </motion.h1>
          
          {/* Paragraph */}
          <motion.p 
            className='mt-3 text-xs md:text-sm'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            A front-end web application designed to help users prepare for technical interviews with a structured DSA (Data Structures and Algorithms) sheet. Quready offers a clean and intuitive interface, making it easy to track progress and practice essential coding problems efficiently.
          </motion.p>
          
          {/* Links */}
          <div className='flex justify-end items-center w-full mt-5'>
            {/* Preview Link */}
            <a 
              className='text-sm md:text-md flex items-center justify-center gap-2 rounded-md px-5 py-2 text-black bg-[#ffffffe1] hover:bg-[#ffffff44] hover:text-white font-medium transition-all duration-500' 
              href="https://imagify-frontend-hcjw.onrender.com/" 
              target='_blank' 
              rel="noopener noreferrer"
            >
              Preview
              <img width={20} src={assets.arrow_right_up} alt="arrow_right_up" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Project 2 */}
      <motion.div 
        className='bg-[#1C1A19] px-2 md:px-7 py-4 rounded-md flex flex-col md:flex-row justify-between items-center gap-3 md:gap-6 transition-all duration-300 cursor-pointer'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Image */}
        <motion.img 
         className='w-full md:w-96 h-auto lg:h-48 mb-4 md:mb-0 cursor-pointer pl-2 pr-2 pt-2 bg-[#F46C38] rounded-md object-fit' 
          src={assets.projects2} 
          alt="projects2" 
        />
        
        {/* Text Part */}
        <div className='flex flex-col items-start'>
          {/* Title */}
          <motion.h1 
            className='text-xl md:text-2xl font-semibold text-left'
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Quready
          </motion.h1>
          
          {/* Paragraph */}
          <motion.p 
            className='mt-3 text-xs md:text-sm'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            A front-end web application designed to help users prepare for technical interviews with a structured DSA (Data Structures and Algorithms) sheet. Quready offers a clean and intuitive interface, making it easy to track progress and practice essential coding problems efficiently.
          </motion.p>
          
          {/* Links */}
          <div className='flex justify-end items-center w-full mt-5'>
            {/* Preview Link */}
            <a 
              className='text-xs md:text-sm flex items-center justify-center gap-2 rounded-md px-5 py-2 text-black bg-[#ffffffe1] hover:bg-[#ffffff44] hover:text-white font-medium transition-all duration-500' 
              href="https://quready.vercel.app/" 
              target='_blank' 
              rel="noopener noreferrer"
            >
              Preview
              <img width={20} src={assets.arrow_right_up} alt="arrow_right_up" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Project 3 */}
      <motion.div 
        className='bg-[#1C1A19] px-2 md:px-7 py-4 rounded-md flex flex-col md:flex-row justify-between items-center gap-3 md:gap-6 transition-all duration-300 cursor-pointer'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Image */}
        <motion.img 
          className='w-full md:w-96 h-auto lg:h-48 mb-4 md:mb-0 cursor-pointer pl-2 pr-2 pt-2 bg-[#F46C38] rounded-md object-fit' 
          src={assets.projects3} 
          alt="projects3" 
        />
        
        {/* Text Part */}
        <div className='flex flex-col items-start'>
          {/* Title */}
          <motion.h1 
            className='text-xl md:text-2xl font-semibold text-left'
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            SortLab
          </motion.h1>
          
          {/* Paragraph */}
          <motion.p 
            className='mt-3 text-xs md:text-sm'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Imagify is a cutting-edge, cloud-based platform that seamlessly integrates credit-driven systems with advanced generative AI capabilities. Designed to streamline and enhance user experiences, Imagify brings together powerful AI tools. Whether for individuals, developers, or enterprises, Imagify empowers users to create, analyze, and innovate with unprecedented efficiency and intelligence.
          </motion.p>
          
          {/* Links */}
           <div className='flex justify-end items-center w-full mt-5'>
            {/* Preview Link */}
            <a 
              className='text-xs md:text-sm flex items-center justify-center gap-2 rounded-md px-5 py-2 text-black bg-[#ffffffe1] hover:bg-[#ffffff44] hover:text-white font-medium transition-all duration-500' 
              href="https://sorting-visualizer-rahul-goswamis-projects-c6755eb5.vercel.app/" 
              target='_blank' 
              rel="noopener noreferrer"
            >
              Preview
              <img width={20} src={assets.arrow_right_up} alt="arrow_right_up" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectElement;