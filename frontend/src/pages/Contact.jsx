import React from 'react'
import assets from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray 500'>
        <p>
          CONTACT <span className='text-gray-700n font-semibold'> US </span>
        </p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='md:max-w-[360px] flex rounded m-5' src={assets.contact_us_1} alt='' /> 

           <div className='flex flex-col justify-center items-start gap-6'>
           <p className='font-semibold text-lg text-gray-900'> OUR OFFICE </p>
           <p className='text-gray-700 text-lg'> 542,Old Williams Road, <br/>
               Dehiwala
           </p>
           <p className='text-gray-700 text-lg'> Tel: +94767510946 <br/> servizobooking@gmail.com</p>
           <p className='font-semibold text-lg text-gray-900'> VOCANT AT SERVIZO </p>
           <p className='text-gray-700 text-lg'> Learn more about our team and vocancy opening </p>
           <button className='border bprder-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-300 text-lg'> Explore Vocancies </button>
      </div>

      </div>
        
    </div>
  )
}

export default Contact