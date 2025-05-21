import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex  sm:grid-cols-[3fr_1fr] gap-14 my-10 mt-40 text-sm'>

          {/*--------Left Section---------*/}
          <div>
           <img className=' mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-black-600 leading-6'> Now you all don't have to worry about your Household worker.Simply visit our website and book your workers by your needy.</p>
          </div>

          {/*---------Center Section---------*/}
          <div>
          <p className='text-xl font-medium mb-5'>COMPANY </p>
          <ul className='flex flex-col gap-2'>
            <li> Home</li>
            <li> About Us</li>
            <li> Contact Us</li>
            <li> Privacy policy</li>
          </ul>
          </div>
           {/*---------Right Section---------*/}
          <div>
           <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
           <ul  className='flex flex-col gap-2'>
            <li>+94 767510946 </li>
            <li>servizobooking@gmail.com</li>
           </ul>
          </div>
          
        </div>
          <div>
            {/*-----Copy Right Text------------------*/}
            <div>
              <hr/>
              <p className='py-5 text-sm text-center'> Copyright 2025@ Servizo - All Right Reserved</p>
            </div>
          </div>

    </div>
  )
}

export default Footer