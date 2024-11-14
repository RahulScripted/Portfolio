import React from 'react'
import { assets } from '../assets/assets'

function Cards() {
  return (
    <div className='w-full pt-10 pb-10 pl-5 pr-5 h-auto lg:w-[350px] bg-white flex items-center justify-center flex-col rounded-md text-black text-center'>

        {/* Profile Image */}
        <img className='w-[150px] md:w-[200px] rounded-md pt-5 pl-5 pr-5 bg-black' src={assets.profile_pic} alt="profile_pic" />

        {/* Profile Name */}
        <h1 className='text-3xl font-semibold  mt-5'>Rahul Goswami</h1>

        {/* Profile Description */}
        <p className='text-center mt-5 lg:mt-10'>I am passionate about leveraging my programming expertise to create innovative and user-friendly web experiences.</p>

        {/* Social Media */}
        <div className='mt-5 flex flex-wrap items-center justify-center gap-10'>
            <a href="https://github.com/RahulScripted" target='_blank'>
                <img width={30} src={assets.github} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/rahul-goswami-ba2b51232/" target='_blank'>
                <img width={30} src={assets.linkedin} alt="linkedin" />
            </a>
            <a href="https://mail.google.com/mail/u/0/" target='_blank'>
                <img width={30} src={assets.mail} alt="mail" />
            </a>
        </div>
    </div>
  )
}

export default Cards