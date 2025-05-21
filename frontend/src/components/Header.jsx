import React from 'react'
import assets from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>


      {/*------------ Left Side -------------------*/}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4p-10 m-auto md:py-[10vw] md:mb-[30px]'>

        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight lg:leading-tight'>
            BOOK APPOINTMENT <br/> WITH TRUSTED WORKERS <br/> <br/> 
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
            <img className='w-28 rounded-lg'  src={assets.group_profiles2} alt=""/>  <br/> <br/> <br/> <br/>
            <p className='text-3xl font-medium'>
                Simply browse through our ex tensive list of trusted workers, <br className='hidden sm:block'/>
                schedule your household service booking..
            </p>
        </div>
        <a href="#AllServices"  className='flex  items-center gap-2 bg-white px-8 py-3 rounded-full text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'> 

            Book your service provider <img className='w-4' src={assets.arrow_icon} alt="" />
        </a>
      </div>  

      {/*--------------Right Side------------------*/}
      <div className='md:w-1/2 relative'>
      <img className='w-100  md:absolute bottom-0 h-100 rounded-lg' src={assets.group_workers2} alt="" />
    
      </div>
    </div>
  )
}

export default Header