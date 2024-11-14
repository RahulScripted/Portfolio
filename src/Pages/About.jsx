import React from 'react'
import Contact from '../components/Contact';
import AboutElement from '../components/AboutElement';
import Cards from '../components/Cards';

function About() {
  return (
    <div className='flex item-center justify-center flex-col-reverse lg:justify-between lg:flex-row p-5 lg:p-10 gap-10'>

      {/* Left Part */}
      <div className='relative w-full lg:sticky lg:top-10 lg:w-1/2 lg:h-screen'>
        <Cards />
      </div>

       {/* Right Part */}
      <div className="w-full flex flex-col max-sm:pl-5 pl-10 lg:pl-20 gap-28">

        {/* About - element */}
        <AboutElement />

        {/* Contact - element */}
        <Contact />
      </div>

    </div>
  )
}

export default About