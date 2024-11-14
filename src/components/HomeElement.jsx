import React from 'react'
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

function HomeElement() {
  return (
    <div className='w-full'>

        {/* Text Part */}
        <div className="mb-12">

          {/* Heading */}
          <h1 className="text-4xl md:text-7xl lg:text-12xl font-bold text-white">
            RAHUL <br className='max-lg:hidden' />
            <span className="text-[#353334]">GOSWAMI</span>
          </h1>
          
          {/* Paragraph */}
          <p className="text-md md:text-lg text-gray-400 mt-4">
            Passionate about creating intuitive and engaging <br className='max-md:hidden' />
            user experiences. Specialize in transforming ideas <br className='max-md:hidden' />
            into beautifully crafted products.
          </p>
        </div>

        {/* Stats Section */}
        <div className="flex gap-10 mb-12">

          {/* Experience */}
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold text-white">+0</h1>
            <h3 className="text-[#B0B0B0] font-semibold mt-2">Year Experience</h3>
          </div>

          {/* Projects */}
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold text-white">+5</h1>
            <h3 className="text-[#B0B0B0] font-semibold mt-2">Projects</h3>
          </div>

        </div>

        {/* Achievement Section  */}
        <div className='flex items-center justify-between gap-4 max-sm:flex-col md:flex-row  md:justify-center'>

          {/* 1st */}
          <div className='w-full h-[250px] bg-[#F46C38] pl-10 pt-10 pr-5 pb-10 flex flex-col rounded-md cursor-pointer relative md:w-1/2'
          style={{
            backgroundImage: `url(${assets.bg_one}), url(${assets.bg_one})`,
            backgroundSize: 'cover, cover',
            backgroundPosition: 'top right, bottom left',
            backgroundRepeat: 'no-repeat,no-repeat',
            backgroundBlendMode: 'overlay',
          }}>
            
            {/* Image */}
            <img width={30} src={assets.stack} alt="stack" />
            
            {/* Text on card */}
            <h3 className='mt-5 text-2xl font-semibold'>DYNAMIC <br className='max-md:hidden' /> ANIMATION, <br className='max-md:hidden' /> MOTION DESIGN</h3>
            
            {/* Link to about */}
            <Link to="/about" className='flex items-center justify-end mt-7'>

              {/* Arrow Image */}
              <img className='absolute bottom-5 right-5 p-1 w-8 h-30 border border-white rounded-sm hover:opacity-75 transition-all duration-300' src={assets.arrow_white} alt="arrow_white" />
            </Link>
          </div>

          {/* 2nd */}
          <div className='w-full h-[250px] bg-[#C5FF41] pl-10 pt-10 pr-5 pb-4 flex flex-col rounded-md cursor-pointer relative md:w-1/2'
          style={{
            backgroundImage: `url(${assets.bg_two}), url(${assets.bg_two})`,
            backgroundSize: '500px 500px',
            backgroundPosition: 'top right,bottom left',
            backgroundRepeat: 'no-repeat, no-repeat',
            backgroundBlendMode: 'normal',
          }}>

            {/* Image */}
            <img width={30} src={assets.layout} alt="layout" />

            {/* Text */}
            <h3 className='mt-5 text-black text-2xl font-semibold'>FRAMER, FIGMA, WORDPRESS, <br className='max-lg:hidden' /> REACTJS</h3>

            {/* Link to Project Section */}
            <Link to="/project" className='flex items-center justify-end mt-7'>

              {/* Arrow Image */}
              <img className='absolute bottom-5 right-5 p-1 w-8 h-30 border border-black rounded-sm hover:opacity-75 transition-all duration-300' src={assets.arrow_black} alt="arrow_black" />
            </Link>
          </div>

        </div>
    </div>
  )
}

export default HomeElement