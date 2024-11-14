import React from 'react'
import Timeline from '../components/Timeline'
import Cards from '../components/Cards'
import Contact from '../components/Contact'

function Experience() {
  return (
    <div className='flex item-center justify-center flex-col-reverse lg:justify-between lg:flex-row relative p-5 lg:p-10 gap-4 mb-10'>

      {/* Left Part */}
      <div className='relative w-full lg:sticky lg:top-10 lg:w-1/2 lg:h-screen'>
        <Cards />
      </div>

       {/* Right Part */}
      <div className="w-full flex flex-col max-sm:pl-5 pl-10 lg:pl-20 gap-20">

        {/* Timeline - element */}
        <Timeline />

        {/* Contact - element */}
        <Contact />
      </div>
      
    </div>
  )
}

export default Experience