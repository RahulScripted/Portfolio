import React from 'react'
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets'

function NavBar() {
  return (
    <div className="w-full p-5 flex items-center justify-center">
      <div className="bg-[#1C1A19] px-7 py-3 rounded-full flex gap-10 items-center justify-center">
        
        {/* Home Icon */}
        <Link to="/" className="relative group cursor-pointer">
          
          <img className="transition-all ease-in-out group-hover:scale-110" width={25} src={assets.home} alt="home" />
          
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-xs absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-10 bg-[#1C1A19] px-2 py-0.5 rounded-full">Home</span>
        
        </Link>
        
        {/* About Icon */}
        <Link to="/about" className="relative group cursor-pointer">
         
          <img className="transition-all ease-in-out group-hover:scale-110" width={25} src={assets.folder} alt="about" />
         
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-xs absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-10 bg-[#1C1A19] px-2 py-0.5 rounded-full">About</span>
        
        </Link>

        {/* Projects Icon */}
        <Link to="/project" className="relative group cursor-pointer">
          
          <img className="transition-all ease-in-out group-hover:scale-110" width={25} src={assets.tool} alt="services" />
          
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-xs absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-10 bg-[#1C1A19] px-2 py-0.5 rounded-full">Projects</span>
        
        </Link>

        {/* Experience Icon */}
        <Link to="/experience" className="relative group cursor-pointer">
          
          <img className="transition-all ease-in-out group-hover:scale-110" width={25} src={assets.experience} alt="experience" />
          
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-xs absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-10 bg-[#1C1A19] px-2 py-0.5 rounded-full">Experience</span>
        
        </Link>
      </div>
    </div>
  )
}

export default NavBar;