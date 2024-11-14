import React from 'react';
import Cards from '../components/Cards';
import HomeElement from '../components/HomeElement';
import Contact from '../components/Contact';
import AboutElement from '../components/AboutElement';

function Home() {
  return (
    <div className='flex item-center justify-center flex-col lg:justify-between lg:flex-row relative p-5 lg:p-10 gap-4 mb-10'>

      {/* Left Part */}
      <div className='relative w-full lg:sticky top-0 lg:w-1/2'>
        <Cards />
      </div>

       {/* Right Part */}
      <div className="w-full flex flex-col max-sm:pl-5 pl-10 lg:pl-20 gap-20">

        {/* Home - element */}
        <HomeElement />

        {/* About - element */}
        <AboutElement />

        {/* Contact - element */}
        <Contact />
      </div>
      
    </div>
  );
}

export default Home;