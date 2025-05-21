import React from 'react'
import { servicesData } from '../assets/assets'
import { Link } from 'react-router-dom'

const ServicesMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='AllServices'>
        <h1 className='text-3xl font-bold'> Find services by needy </h1>
        <p className='sm:w-1/3 text-center text-sm'>      Simply browse through our ectensive list of trusted workers,
                schedule your household service booking..
        </p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
        {servicesData.map((item,index)=>(
            <Link onClick={()=> scrollTo(0,0)} className='flex flex-col items-center text-xs  cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/workers/${item.services}`}>

            <img className='w-16 sm:w-24 mb-2'  src={item.image} alt=''/>
            <p>
                {item.services}
            </p>
            </Link>
        ))}
        </div>
    </div>
  )
}

export default ServicesMenu