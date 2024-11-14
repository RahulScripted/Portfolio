import React from 'react'
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets'

function NavBar() {
  const navLinkStyle = ({ isActive }) => {
    return {
      transform: isActive ? 'scale(1.2)' : 'scale(1)',
      color: isActive ? '#FFD700' : '#FFFFFF',
      opacity: isActive ? 1 : 0.7,
      transition: 'transform 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
    };
  };

  return (
    <div className="w-full p-5 flex items-center justify-center">
      <div className="bg-[#1C1A19] px-7 py-3 rounded-full flex gap-10 items-center justify-center">
        
        {/* Home Icon */}
        <NavLink style={navLinkStyle} to="/" className="relative group cursor-pointer">
          
          <img className="transition-all ease-in-out group-hover:scale-110" width={25} src={assets.home} alt="home" />
          
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-xs absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-10 bg-[#1C1A19] px-2 py-0.5 rounded-full">Home</span>
        
        </NavLink>
        
        {/* About Icon */}
        <NavLink style={navLinkStyle}  to="/about" className="relative group cursor-pointer">
         
          <img className="transition-all ease-in-out group-hover:scale-110" width={25} src={assets.folder} alt="about" />
         
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-xs absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-10 bg-[#1C1A19] px-2 py-0.5 rounded-full">About</span>
        
        </NavLink>

        {/* Projects Icon */}
        <NavLink style={navLinkStyle}  to="/project" className="relative group cursor-pointer">
          
          <img className="transition-all ease-in-out group-hover:scale-110" width={25} src={assets.tool} alt="services" />
          
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-xs absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-10 bg-[#1C1A19] px-2 py-0.5 rounded-full">Projects</span>
        
        </NavLink>

        {/* Experience Icon */}
        <NavLink style={navLinkStyle}  to="/experience" className="relative group cursor-pointer">
          
          <img className="transition-all ease-in-out group-hover:scale-110" width={25} src={assets.experience} alt="experience" />
          
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-xs absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-10 bg-[#1C1A19] px-2 py-0.5 rounded-full">Experience</span>
        
        </NavLink>
      </div>
    </div>
  )
}

export default NavBar;