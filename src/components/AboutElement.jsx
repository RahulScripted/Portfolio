import React from 'react'
import { assets } from '../assets/assets'

function AboutElement() {

  const rahulCV = './cv.pdf'
  return (
    <div className='w-full flex flex-col gap-12'>

        {/* Text Part */}
        <div className='w-full flex flex-col gap-4'>

            {/* Heading */}
            <h1 className="text-4xl md:text-7xl lg:text-12xl font-bold text-white">
                ABOUT <br className='max-lg:hidden' />
                <span className="text-[#353334]">ME</span>
            </h1>
            
            {/* Paragraph */}
            <p className="text-md md:text-lg text-gray-400">Hi, I'm Rahul Goswami — a front-end developer passionate about creating clean, engaging user experiences. Currently in my final year at Bankura Unnayani Institute of Engineering, I've built various web projects using JavaScript, Tailwind CSS, and React</p>

            <a href={assets.cv} download={rahulCV.pdf} target='_blank'>
                <button className='flex items-center justify-center gap-2 text-md border border-white px-5 py-2 rounded-md transition-all duration-500 cursor-pointer hover:bg-[#353334] hover:border-[#353334] group'>
                    <span>Download CV</span>
                    <img className='transition-transform duration-500 group-hover:translate-x-2' width={20} src={assets.arrow_white} alt="arrow_white" />
                </button>
            </a>
        </div>

        {/* Skills */}
        <div className='w-full items-center justify-center flex flex-col gap-10'>
            {/* Heading */}
            <h1 className="text-4xl md:text-7xl lg:text-12xl font-bold text-white">
                MY <br className='max-lg:hidden' />
                <span className="text-[#353334]">SKILLS</span>
            </h1>

            {/* Skill's Images */}
            <div className='w-full flex flex-wrap gap-10 text-center items-center justify-center md:items-start md:justify-start'>

                {/* C++ */}
                <div className='flex flex-col cursor-pointer items-center justify-center gap-2'>

                    {/* Image */}
                    <img className='hover:scale-110 duration-500' width={70} src={assets.cpp} alt="cpp" />

                    {/* Paragraph */}
                    <p className='text-md text-gray-400 font-semibold'>C++</p>
                </div>

                {/* HTML */}
                <div className='flex flex-col cursor-pointer items-center justify-center gap-2'>

                    {/* Image */}
                    <img className='hover:scale-110 duration-500' width={70} src={assets.html} alt="html" />

                    {/* Paragraph */}
                    <p className='text-md text-gray-400 font-semibold'>HTML</p>
                </div>

                {/* CSS */}
                <div className='flex flex-col cursor-pointer items-center justify-center gap-2'>

                    {/* Image */}
                    <img className='hover:scale-110 duration-500' width={70} src={assets.css} alt="css" />

                    {/* Paragraph */}
                    <p className='text-md text-gray-400 font-semibold'>CSS</p>
                </div>

                {/* JAVASCRIPT */}
                <div className='flex flex-col cursor-pointer items-center justify-center gap-2'>

                    {/* Image */}
                    <img className='hover:scale-110 duration-500' width={70} src={assets.javascript} alt="javascript" />

                    {/* Paragraph */}
                    <p className='text-md text-gray-400 font-semibold'>JAVASCRIPT</p>
                </div>

                {/* TAILWIND CSS */}
                <div className='flex flex-col cursor-pointer items-center justify-center gap-2'>

                    {/* Image */}
                    <img className='hover:scale-110 duration-500' width={70} src={assets.tailwind} alt="tailwind" />

                    {/* Paragraph */}
                    <p className='text-md text-gray-400 font-semibold'>TAILWIND</p>
                </div>

                {/* REACT */}
                <div className='flex flex-col cursor-pointer items-center justify-center gap-2'>

                    {/* Image */}
                    <img className='hover:scale-110 duration-500' width={70} src={assets.react} alt="react" />

                    {/* Paragraph */}
                    <p className='text-md text-gray-400 font-semibold'>REACT</p>
                </div>

                {/* MY SQL */}
                <div className='flex flex-col cursor-pointer items-center justify-center gap-2'>

                    {/* Image */}
                    <img className='hover:scale-110 duration-500' width={70} src={assets.mysql} alt="mysql" />

                    {/* Paragraph */}
                    <p className='text-md text-gray-400 font-semibold'>MY SQL</p>
                </div>

                {/* GIT */}
                <div className='flex flex-col cursor-pointer items-center justify-center gap-2'>

                    {/* Image */}
                    <img className='hover:scale-110 duration-500' width={70} src={assets.git} alt="git" />

                    {/* Paragraph */}
                    <p className='text-md text-gray-400 font-semibold'>GIT</p>
                </div>

                {/* GITHUB */}
                <div className='flex flex-col cursor-pointer items-center justify-center gap-2'>

                    {/* Image */}
                    <img className='hover:scale-110 duration-500' width={70} src={assets.github_w} alt="github" />

                    {/* Paragraph */}
                    <p className='text-md text-gray-400 font-semibold'>GITHUB</p>
                </div>
      
                {/* VERCEL */}
                <div className='flex flex-col cursor-pointer items-center justify-center gap-2'>

                    {/* Image */}
                    <img className='hover:scale-110 duration-500' width={70} src={assets.vercel} alt="vercel" />

                    {/* Paragraph */}
                    <p className='text-md text-gray-400 font-semibold'>VERCEL</p>
                </div>

            </div>
        </div>

    </div>
  )
}

export default AboutElement