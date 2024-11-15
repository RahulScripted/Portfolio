import React from 'react'
import { assets } from '../assets/assets'

function Cards() {
  return (
    <div className='w-full pt-10 pb-10 pl-5 pr-5 h-auto lg:w-[350px] bg-white flex items-center justify-center flex-col rounded-md text-black text-center'>

        {/* Profile Image */}
        <img className='w-[175px] lg:h-[220px] object-cover md:w-[200px] rounded-lg pt-5 pl-5 pr-5 bg-[#9E2101]' src={assets.profile_pic} alt="profile_pic" />

        {/* Profile Name */}
        <h1 className='text-3xl font-semibold mt-5 lg:mt-7'>Rahul Goswami</h1>

        {/* Profile Description */}
        <p className='text-center mt-5 lg:mt-16'>I am passionate about leveraging my programming expertise to create innovative and user-friendly web experiences.</p>

        {/* Social Media */}
        <div className='mt-5 flex flex-wrap items-center justify-center gap-10'>

            {/* GitHub */}
            <a href="https://github.com/RahulScripted" target='_blank'>
                <img width={30} src={assets.github} alt="github" />
            </a>

            {/* Linkedin */}
            <a href="https://www.linkedin.com/in/rahul-goswami-ba2b51232/" target='_blank'>
                <img width={30} src={assets.linkedin} alt="linkedin" />
            </a>

            {/* Mail */}
            <a href="mailto:goswami.rahul1002@gmail.com" target='_blank' rel="noopener noreferrer">
                <img width={30} src={assets.mail} alt="mail" />
            </a>
        </div>
    </div>
  )
}

export default Cards