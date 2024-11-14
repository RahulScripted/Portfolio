import React from 'react';
import Cards from '../components/Cards';
import HomeElement from '../components/HomeElement';
import Contact from '../components/Contact';
import AboutElement from '../components/AboutElement';
import Timeline from '../components/Timeline';
import ProjectElement from '../components/ProjectElement';

function Home() {
  return (
    <div className='flex item-center justify-center flex-col lg:justify-between lg:flex-row relative p-5 lg:p-10 gap-4 mb-10'>

      {/* Left Part */}
      <div className='relative w-full lg:sticky lg:top-10 lg:w-1/2 lg:h-screen'>
        <Cards />
      </div>

       {/* Right Part */}
      <div className="w-full flex flex-col max-sm:pl-5 pl-10 lg:pl-20 gap-28">

        {/* Home - element */}
        <HomeElement />

        {/* About - element */}
        <AboutElement />

        {/* Project - element */}
        <ProjectElement />

        {/* Experience - element */}
        <Timeline />

        {/* Contact - element */}
        <Contact />
      </div>
      
    </div>
  );
}

export default Home;