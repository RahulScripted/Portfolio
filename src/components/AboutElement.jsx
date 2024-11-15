import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import { assets } from '../assets/assets';

function AboutElement() {
  const rahulCV = './cv.pdf';

  // Define animation variants for the elements
  const headingVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const paragraphVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const skillVariant = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className='w-full flex flex-col gap-24'>
      {/* Text Part */}
      <div className='w-full flex flex-col gap-4'>
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-12xl font-bold text-white"
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ Infinity }}
        >
          ABOUT
          <span className="text-[#353334]"> ME</span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-md md:text-lg text-gray-400"
          variants={paragraphVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ Infinity }}
        >
          Hi, I'm Rahul Goswami — a front-end developer passionate about creating clean, engaging user experiences. Currently in my final year at Bankura Unnayani Institute of Engineering, I've built various web projects using JavaScript, Tailwind CSS, and React.
        </motion.p>

        <a href={assets.cv} download={rahulCV.pdf} target='_blank'>
          <motion.button
            className='flex items-center justify-center gap-2 text-md border border-white px-5 py-2 rounded-md transition-all duration-500 cursor-pointer hover:bg-[#353334] hover:border-[#353334] group'
            variants={buttonVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ Infinity }}
          >
            <span>Download CV</span>
            <img
              className='transition-transform duration-500 group-hover:translate-x-2'
              width={20}
              src={assets.arrow_white}
              alt="arrow_white"
            />
          </motion.button>
        </a>
      </div>

      {/* Skills */}
      <div className='w-full items-center justify-center flex flex-col gap-10'>
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-12xl font-bold text-white"
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ Infinity }}
        >
          MY
          <span className="text-[#353334]"> SKILLS</span>
        </motion.h1>

        {/* Skill's Images */}
        <div className='w-full flex flex-wrap gap-10 text-center items-center justify-center md:items-start md:justify-start'>

          {/* C++ */}
          <motion.div
            className='flex flex-col cursor-pointer items-center justify-center gap-2'
            variants={skillVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ Infinity }}
          >
            <img className='hover:scale-110 duration-500' width={70} src={assets.cpp} alt="cpp" />
            <p className='text-md text-gray-400 font-semibold'>C++</p>
          </motion.div>

          {/* HTML */}
          <motion.div
            className='flex flex-col cursor-pointer items-center justify-center gap-2'
            variants={skillVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ Infinity }}
          >
            <img className='hover:scale-110 duration-500' width={70} src={assets.html} alt="html" />
            <p className='text-md text-gray-400 font-semibold'>HTML</p>
          </motion.div>

          {/* CSS */}
          <motion.div
            className='flex flex-col cursor-pointer items-center justify-center gap-2'
            variants={skillVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img className='hover:scale-110 duration-500' width={70} src={assets.css} alt="css" />
            <p className='text-md text-gray-400 font-semibold'>CSS</p>
          </motion.div>

          {/* JAVASCRIPT */}
          <motion.div
            className='flex flex-col cursor-pointer items-center justify-center gap-2'
            variants={skillVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ Infinity }}
          >
            <img className='hover:scale-110 duration-500' width={70} src={assets.javascript} alt="javascript" />
            <p className='text-md text-gray-400 font-semibold'>JAVASCRIPT</p>
          </motion.div>

          {/* TAILWIND CSS */}
          <motion.div
            className='flex flex-col cursor-pointer items-center justify-center gap-2'
            variants={skillVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ Infinity }}
          >
            <img className='hover:scale-110 duration-500' width={70} src={assets.tailwind} alt="tailwind" />
            <p className='text-md text-gray-400 font-semibold'>TAILWIND</p>
          </motion.div>

          {/* REACT */}
          <motion.div
            className='flex flex-col cursor-pointer items-center justify-center gap-2'
            variants={skillVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ Infinity }}
          >
            <img className='hover:scale-110 duration-500' width={70} src={assets.react} alt="react" />
            <p className='text-md text-gray-400 font-semibold'>REACT</p>
          </motion.div>

          {/* MY SQL */}
          <motion.div
            className='flex flex-col cursor-pointer items-center justify-center gap-2'
            variants={skillVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ Infinity }}
          >
            <img className='hover:scale-110 duration-500' width={70} src={assets.mysql} alt="mysql" />
            <p className='text-md text-gray-400 font-semibold'>MY SQL</p>
          </motion.div>

          {/* GIT */}
          <motion.div
            className='flex flex-col cursor-pointer items-center justify-center gap-2'
            variants={skillVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ Infinity }}
          >
            <img className='hover:scale-110 duration-500' width={70} src={assets.git} alt="git" />
            <p className='text-md text-gray-400 font-semibold'>GIT</p>
          </motion.div>

          {/* GITHUB */}
          <motion.div
            className='flex flex-col cursor-pointer items-center justify-center gap-2'
            variants={skillVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ Infinity }}
          >
            <img className='hover:scale-110 duration-500' width={70} src={assets.github_w} alt="github" />
            <p className='text-md text-gray-400 font-semibold'>GITHUB</p>
          </motion.div>

          {/* VERCEL */}
          <motion.div
            className='flex flex-col cursor-pointer items-center justify-center gap-2'
            variants={skillVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ Infinity }}
          >
            <img className='hover:scale-110 duration-500' width={70} src={assets.framer} alt="framer" />
            <p className='text-md text-gray-400 font-semibold'>FRAMER</p>
          </motion.div>

          {/* VERCEL */}
          <motion.div
            className='flex flex-col cursor-pointer items-center justify-center gap-2'
            variants={skillVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ Infinity }}
          >
            <img className='hover:scale-110 duration-500' width={70} src={assets.vercel} alt="vercel" />
            <p className='text-md text-gray-400 font-semibold'>VERCEL</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutElement;