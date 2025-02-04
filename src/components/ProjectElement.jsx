import React from 'react';
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
        className='hover:bg-[#1C1A19] px-4 md:px-7 py-4 rounded-md flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-300 cursor-pointer'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Image */}
        <motion.img 
          className='w-full md:w-52 h-auto lg:h-36 mb-4 md:mb-0 cursor-pointer pl-2 pr-2 pt-2 bg-[#F46C38] rounded-md object-cover' 
          src={assets.projects5} 
          alt="projects5" 
          whileHover={{ scale: 1.1 }}
        />
        
        {/* Text Part */}
        <div className='flex flex-col items-center md:items-start'>
          {/* Title */}
          <motion.h1 
            className='text-xl md:text-2xl font-semibold text-center md:text-left'
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Quready
          </motion.h1>
          
          {/* Paragraph */}
          <motion.p 
            className='mt-3 text-sm md:text-md'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            A front-end web application designed to help users prepare for technical interviews with a structured DSA (Data Structures and Algorithms) sheet. Quready offers a clean and intuitive interface, making it easy to track progress and practice essential coding problems efficiently.
          </motion.p>
          
          {/* Links */}
          <div className='flex justify-between gap-4 md:gap-10 mt-6 md:mt-10 max-sm:flex-col mex-sm:gap-2'>
            {/* GitHub Link */}
            <a 
              className='flex items-center justify-center gap-2 rounded-md px-5 py-2 text-black bg-[#ffffffe1] hover:bg-[#ffffff44] hover:text-white font-medium transition-all duration-500' 
              href="https://github.com/RahulScripted/Quready" 
              target='_blank' 
              rel="noopener noreferrer"
            >
              GitHub
              <img width={20} src={assets.arrow_right_up} alt="arrow_right_up" />
            </a>
            
            {/* Preview Link */}
            <a 
              className='flex items-center justify-center gap-2 rounded-md px-5 py-2 text-black bg-[#ffffffe1] hover:bg-[#ffffff44] hover:text-white font-medium transition-all duration-500' 
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

      {/* Project 2 */}
      <motion.div 
        className='hover:bg-[#1C1A19] px-4 md:px-7 py-4 rounded-md flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-300 cursor-pointer'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Image */}
        <motion.img 
          className='w-full md:w-52 h-auto lg:h-36 mb-4 md:mb-0 cursor-pointer pl-2 pr-2 pt-2 bg-[#F46C38] rounded-md object-cover' 
          src={assets.projects1} 
          alt="projects1" 
          whileHover={{ scale: 1.1 }}
        />
        
        {/* Text Part */}
        <div className='flex flex-col items-center md:items-start'>
          {/* Title */}
          <motion.h1 
            className='text-xl md:text-2xl font-semibold text-center md:text-left'
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Bg. Removal
          </motion.h1>
          
          {/* Paragraph */}
          <motion.p 
            className='mt-3 text-sm md:text-md'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            A front-end web application that allows users to easily remove backgrounds from images. This project focuses on providing a seamless user experience with a clean and intuitive design.
          </motion.p>
          
          {/* Links */}
          <div className='flex justify-between gap-4 md:gap-10 mt-6 md:mt-10 max-sm:flex-col mex-sm:gap-2'>
            {/* GitHub Link */}
            <a 
              className='flex items-center justify-center gap-2 rounded-md px-5 py-2 text-black bg-[#ffffffe1] hover:bg-[#ffffff44] hover:text-white font-medium transition-all duration-500' 
              href="https://github.com/RahulScripted/Bg-removal-web-application" 
              target='_blank' 
              rel="noopener noreferrer"
            >
              GitHub
              <img width={20} src={assets.arrow_right_up} alt="arrow_right_up" />
            </a>
            
            {/* Preview Link */}
            <a 
              className='flex items-center justify-center gap-2 rounded-md px-5 py-2 text-black bg-[#ffffffe1] hover:bg-[#ffffff44] hover:text-white font-medium transition-all duration-500' 
              href="https://bg-removal-web-application.vercel.app/" 
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
        className='hover:bg-[#1C1A19] px-2 md:px-7 py-4 rounded-md flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-300 cursor-pointer'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img 
          className='w-full md:w-52 h-auto lg:h-36 mb-4 md:mb-0 cursor-pointer pl-2 pr-2 pt-2 bg-[#8c4aea] rounded-md object-cover' 
          src={assets.projects2} 
          alt="projects2" 
          whileHover={{ scale: 1.1 }}
        />
        
        <div className='flex flex-col items-center md:items-start'>
          <motion.h1 
            className='text-xl md:text-2xl font-semibold text-center md:text-left'
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            RentalX
          </motion.h1>
          
          <motion.p 
            className='mt-3 text-sm md:text-md'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            A front-end web application that allows exploring our seamless car rental service, where convenience meets choice from compact cars to luxury vehicles.
          </motion.p>
          
          <div className='flex justify-between gap-4 md:gap-10 mt-6 md:mt-10 max-sm:flex-col mex-sm:gap-2'>
            <a 
              className='flex items-center justify-center gap-2 rounded-md px-5 py-2 text-black bg-[#ffffffe1] hover:bg-[#ffffff44] hover:text-white font-medium transition-all duration-500' 
              href="https://github.com/RahulScripted/Full-Website/tree/main/Car%20Rental" 
              target='_blank' 
              rel="noopener noreferrer"
            >
              GitHub
              <img width={20} src={assets.arrow_right_up} alt="arrow_right_up" />
            </a>
            
            <a 
              className='flex items-center justify-center gap-2 rounded-md px-5 py-2 text-black bg-[#ffffffe1] hover:bg-[#ffffff44] hover:text-white font-medium transition-all duration-500' 
              href="https://gilded-kelpie-4a2814.netlify.app/" 
              target='_blank' 
              rel="noopener noreferrer"
            >
              Preview
              <img width={20} src={assets.arrow_right_up} alt="arrow_right_up" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Project 4 */}
      <motion.div 
        className='hover:bg-[#1C1A19] px-4 md:px-7 py-4 rounded-md flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-300 cursor-pointer'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img 
          className='w-full md:w-52 h-auto lg:h-36 mb-4 md:mb-0 cursor-pointer pl-2 pr-2 pt-2 bg-[#38C6F4] rounded-md object-cover' 
          src={assets.projects3} 
          alt="projects3" 
          whileHover={{ scale: 1.1 }}
        />
        
        <div className='flex flex-col items-center md:items-start'>
          <motion.h1 
            className='text-xl md:text-2xl font-semibold text-center md:text-left'
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            furni.shop
          </motion.h1>
          
          <motion.p 
            className='mt-3 text-sm md:text-md'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            A web application designed for a unique feature that lets you create something amazing with an intuitive interface.
          </motion.p>
          
          <div className='flex justify-between gap-4 md:gap-10 mt-6 md:mt-10 max-sm:flex-col mex-sm:gap-2'>
            <a 
              className='flex items-center justify-center gap-2 rounded-md px-5 py-2 text-black bg-[#ffffffe1] hover:bg-[#ffffff44] hover:text-white font-medium transition-all duration-500' 
              href="https://github.com/RahulScripted/Full-Website/tree/main/Furniture%20Shop" 
              target='_blank' 
              rel="noopener noreferrer"
            >
              GitHub
              <img width={20} src={assets.arrow_right_up} alt="arrow_right_up" />
            </a>
            
            <a 
              className='flex items-center justify-center gap-2 rounded-md px-5 py-2 text-black bg-[#ffffffe1] hover:bg-[#ffffff44] hover:text-white font-medium transition-all duration-500' 
              href="https://neon-creponne-9812cd.netlify.app/" 
              target='_blank' 
              rel="noopener noreferrer"
            >
              Preview
              <img width={20} src={assets.arrow_right_up} alt="arrow_right_up" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Project 5 */}
      <motion.div 
        className='hover:bg-[#1C1A19] px-4 md:px-7 py-4 rounded-md flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-300 cursor-pointer'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img 
          className='w-full md:w-52 h-auto lg:h-36 mb-4 md:mb-0 cursor-pointer pl-2 pr-2 pt-2 bg-[#FFDA0C] rounded-md object-cover' 
          src={assets.projects4} 
          alt="projects4" 
          whileHover={{ scale: 1.1 }}
        />
        
        <div className='flex flex-col items-center md:items-start'>
          <motion.h1 
            className='text-xl md:text-2xl font-semibold text-center md:text-left'
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Tech Projects
          </motion.h1>
          
          <motion.p 
            className='mt-3 text-sm md:text-md'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            A platform for sharing ideas and innovations, designed with a minimalistic approach to enhance user interaction.
          </motion.p>
          
          <div className='flex justify-between gap-4 md:gap-10 mt-6 md:mt-10 max-sm:flex-col mex-sm:gap-2'>
            <a 
              className='flex items-center justify-center gap-2 rounded-md px-5 py-2 text-black bg-[#ffffffe1] hover:bg-[#ffffff44] hover:text-white font-medium transition-all duration-500' 
              href="https://github.com/RahulScripted/Get-Tech-Projects" 
              target='_blank' 
              rel="noopener noreferrer"
            >
              GitHub
              <img width={20} src={assets.arrow_right_up} alt="arrow_right_up" />
            </a>
            
            <a 
              className='flex items-center justify-center gap-2 rounded-md px-5 py-2 text-black bg-[#ffffffe1] hover:bg-[#ffffff44] hover:text-white font-medium transition-all duration-500' 
              href="https://glittering-rabanadas-9397d5.netlify.app/" 
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