import React from 'react'
import assets from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>
          ABOUT <span className='text-gray-700 font-medium'> US</span>
        </p>
      </div> 

      <div className='my-1 flex flex flex-col md:flex-row gap-12'>
      <img  className='m-3 w-full  rounded-lg md:max-w-[360px] gap-10 ' src={assets.about_og} alt=''/> 
      <div className='flex flex-col justfy-center gap-6 md:w-2/4 text-sm text-gray-600'>
        <p className='text-gray-700 text-xl'> Welcome to Servizo, your one-stop solution for all household services. Whether you need a plumber, electrician, cleaner, or a helping hand for daily chores, we are here to make your life easier. Our platform connects you with skilled and verified professionals who are ready to deliver quality services at your convenience.</p>
        <p className='text-gray-700 text-xl'>We understand the importance of trust and reliability when it comes to letting someone into your home. That’s why every worker on our platform goes through a strict background check, skill verification, and rating system. You can view customer reviews, compare prices, and book the right person with confidence—anytime, anywhere. </p>
        <b className='text-gray-800 text-2xl'> Our Mission</b>
        <p className='text-gray-700 text-xl'>  Our mission is to simplify your daily life while empowering local service workers with more opportunities. With just a few clicks, you can schedule services that are fast, secure, and affordable. At Servizo, we bring trustworthy help to your doorstep, so you can focus on what matters most.</p>
        <b  className='text-gray-800 text-2xl'> Our Vision</b>
        <p className='text-gray-700 text-xl'> To become the most trusted and accessible platform for household services, empowering communities by connecting families with skilled, verified workers—quickly, safely, and reliably</p>
      </div>
      </div>
      <div className='text-xl my-4'>
        <p className='font-semibold m-12'> WHY <span className='text-gray-700 font-semibold'> CHOOSE US</span> </p>
      </div>

      <div className='flex flex-col md:flex-row mb-20 m-14'>
        <div className='border rounded px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer'>
        <b className='text-xl'>EFFICIENCY</b>
        <p className='text-xl'>Our household booking website boosts efficiency by letting users quickly find, book, and manage trusted services. With fast access, smooth scheduling, and reliable support, home tasks are handled with minimal time and effort.</p>
        </div>

        <div className='border rounded px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer'>
         <b className='text-xl'> CONVENIENCE </b> 
        <p className='text-xl'>Our website offers easy, 24/7 booking of trusted home service providers. With simple steps and real-time updates, it brings convenience to your doorstep—saving time and effort for busy households.</p>
        </div>

        <div className='border rounded px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer'> 
        <b> PROFESSIONALIZATION </b>
        <p className='text-xl'>  Our platform ensures professional household services by connecting users with trained, verified workers. We raise service standards through quality checks, reviews, and skilled support for a reliable experience every time.</p>
        </div>
      </div>

      </div> 
   
  )
}

export default About