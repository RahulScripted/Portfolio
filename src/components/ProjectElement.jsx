import React from 'react';
import { assets } from '../assets/assets';

function ProjectElement() {
  return (
    <div className='flex flex-col items-center justify-center gap-8'>
      
       {/* Heading */}
       <h1 className="text-5xl md:text-7xl lg:text-12xl font-bold text-white">
            PROJ
            <span className="text-[#353334]">ECTS</span>
        </h1>

      {/* Project 1 */}
      <div className='hover:bg-[#1C1A19] px-4 md:px-7 py-4 rounded-md flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-300'>

        {/* Image */}
        <img className='w-full md:w-52 h-auto lg:h-36 mb-4 md:mb-0 cursor-pointer pl-2 pr-2 pt-2 bg-[#F46C38] rounded-md object-cover' src={assets.projects1} alt="projects1" />
        
        {/* Text Part */}
        <div className='flex flex-col items-center md:items-start'>

          {/* Title */}
          <h1 className='text-xl md:text-2xl font-semibold text-center md:text-left'>Bg. Removal</h1>
          
          {/* Paragraph */}
          <p className='mt-3 text-sm md:text-md'>
            A front-end web application that allows users to easily remove backgrounds from images. This project focuses on providing a seamless user experience with a clean and intuitive design.
          </p>
          
          {/* Links */}
          <div className='flex justify-between gap-4 md:gap-10 mt-6 md:mt-10 max-sm:flex-col mex-sm:gap-2'>
            {/* GitHub Link */}
            <a className='flex items-center justify-center gap-2 rounded-md px-5 py-2 text-black bg-[#ffffffe1] hover:bg-[#ffffff44] hover:text-white font-medium transition-all duration-500' href="https://github.com/RahulScripted/Bg-removal-web-application" target='_blank' rel="noopener noreferrer">
              GitHub
              <img width={20} src={assets.arrow_right_up} alt="arrow_right_up" />
            </a>
            
            {/* Preview Link */}
            <a className='flex items-center justify-center gap-2 rounded-md px-5 py-2 text-black bg-[#ffffffe1] hover:bg-[#ffffff44] hover:text-white font-medium transition-all duration-500' href="https://bg-removal-web-application.vercel.app/" target='_blank' rel="noopener noreferrer">
              Preview
              <img width={20} src={assets.arrow_right_up} alt="arrow_right_up" />
            </a>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className='hover:bg-[#1C1A19] px-2 md:px-7 py-4 rounded-md flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-300'>

        {/* Image */}
        <img className='w-full md:w-52 h-auto lg:h-36 mb-4 md:mb-0 cursor-pointer pl-2 pr-2 pt-2 bg-[#8c4aea] rounded-md object-cover' src={assets.projects2} alt="projects2" />
        
        {/* Text Part */}
        <div className='flex flex-col items-center md:items-start'>

          {/* Title */}
          <h1 className='text-xl md:text-2xl font-semibold text-center md:text-left'>RentalX</h1>
          
          {/* Paragraph */}
          <p className='mt-3 text-sm md:text-md'>
          A front-end web application that allows explore our seamless car rental service, where convenience meets choice from compact cars to luxury vehicles.
          </p>
          
          {/* Links */}
          <div className='flex justify-between gap-4 md:gap-10 mt-6 md:mt-10 max-sm:flex-col mex-sm:gap-2'>
            {/* GitHub Link */}
            <a className='flex items-center justify-center gap-2 rounded-md px-5 py-2 text-black bg-[#ffffffe1] hover:bg-[#ffffff44] hover:text-white font-medium transition-all duration-500' href="https://github.com/RahulScripted/Full-Website/tree/main/Car%20Rental" target='_blank' rel="noopener noreferrer">
              GitHub
              <img width={20} src={assets.arrow_right_up} alt="arrow_right_up" />
            </a>
            
            {/* Preview Link */}
            <a className='flex items-center justify-center gap-2 rounded-md px-5 py-2 text-black bg-[#ffffffe1] hover:bg-[#ffffff44] hover:text-white font-medium transition-all duration-500' href="https://gilded-kelpie-4a2814.netlify.app/" target='_blank' rel="noopener noreferrer">
              Preview
              <img width={20} src={assets.arrow_right_up} alt="arrow_right_up" />
            </a>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className='hover:bg-[#1C1A19] px-4 md:px-7 py-4 rounded-md flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-300'>

        {/* Image */}
        <img className='w-full md:w-52 h-auto lg:h-36 mb-4 md:mb-0 cursor-pointer pl-2 pr-2 pt-2 bg-[#F46C38] rounded-md object-cover' src={assets.projects3} alt="projects3" />
        
        {/* Text Part */}
        <div className='flex flex-col items-center md:items-start'>

          {/* Title */}
          <h1 className='text-xl md:text-2xl font-semibold text-center md:text-left'>furni.shop</h1>
          
          {/* Paragraph */}
          <p className='mt-3 text-sm md:text-md'>
          A front-end web application that has collection ranges from classic to modern designs, offering everything you need to create a comfortable and beautiful home.
          </p>
          
          {/* Links */}
          <div className='flex justify-between gap-4 md:gap-10 mt-6 md:mt-10 max-sm:flex-col mex-sm:gap-2'>
            {/* GitHub Link */}
            <a className='flex items-center justify-center gap-2 rounded-md px-5 py-2 text-black bg-[#ffffffe1] hover:bg-[#ffffff44] hover:text-white font-medium transition-all duration-500' href="https://github.com/RahulScripted/Full-Website/tree/main/Furniture%20Shop" target='_blank' rel="noopener noreferrer">
              GitHub
              <img width={20} src={assets.arrow_right_up} alt="arrow_right_up" />
            </a>
            
            {/* Preview Link */}
            <a className='flex items-center justify-center gap-2 rounded-md px-5 py-2 text-black bg-[#ffffffe1] hover:bg-[#ffffff44] hover:text-white font-medium transition-all duration-500' href="https://neon-creponne-9812cd.netlify.app/" target='_blank' rel="noopener noreferrer">
              Preview
              <img width={20} src={assets.arrow_right_up} alt="arrow_right_up" />
            </a>
          </div>
        </div>
      </div>

      {/* Project 4 */}
      <div className='hover:bg-[#1C1A19] px-1 md:px-7 py-4 rounded-md flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-300'>

        {/* Image */}
        <img className='w-full md:w-52 h-auto md:h-36 mb-4 md:mb-0 cursor-pointer pl-2 pr-2 pt-2  bg-[#8c4aea] rounded-md object-cover' src={assets.projects4} alt="projects4" />
        
        {/* Text Part */}
        <div className='flex flex-col items-center md:items-start'>

          {/* Title */}
          <h1 className='text-xl md:text-2xl font-semibold text-center md:text-left'>Tech Projects</h1>
          
          {/* Paragraph */}
          <p className='mt-3 text-sm md:text-md'>
          A front-end web application that is perfect for those seeking inspiration or insight into modern design trends, each project demonstrates a keen eye for detail and a passion for enhancing user interaction.
          </p>
          
          {/* Links */}
          <div className='flex justify-between gap-4 md:gap-10 mt-6 md:mt-10 max-sm:flex-col mex-sm:gap-2'>
            {/* GitHub Link */}
            <a className='flex items-center justify-center gap-2 rounded-md px-5 py-2 text-black bg-[#ffffffe1] hover:bg-[#ffffff44] hover:text-white font-medium transition-all duration-500' href="https://github.com/RahulScripted/Get-Tech-Projects" target='_blank' rel="noopener noreferrer">
              GitHub
              <img width={20} src={assets.arrow_right_up} alt="arrow_right_up" />
            </a>
            
            {/* Preview Link */}
            <a className='flex items-center justify-center gap-2 rounded-md px-5 py-2 text-black bg-[#ffffffe1] hover:bg-[#ffffff44] hover:text-white font-medium transition-all duration-500' href="https://glittering-rabanadas-9397d5.netlify.app/" target='_blank' rel="noopener noreferrer">
              Preview
              <img width={20} src={assets.arrow_right_up} alt="arrow_right_up" />
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProjectElement;