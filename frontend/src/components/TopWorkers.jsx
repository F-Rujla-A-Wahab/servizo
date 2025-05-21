import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopWorkers = () => {

  const Navigate= useNavigate()
  const {workers} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-bold'>
            Top Household keeping Workers to Book
        </h1>
        <p className='sm:w-1/3 text-center text-medium'>
            Simply browse through our extensive list of trusted workers.
        </p>

        <div className='w-full grid grid-cols-5  gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {workers.slice(0,10).map((item,index)=>(
              <div onClick={()=>Navigate(`/appointment/${item._id}`)} className='flex flex-col items-center border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px]  transition-all duration-500' key={index}   >
              <img className='w-65 h-60 bg-blue-50 object-contain ' src={item.image} alt=""/>
              <div className='p-4 '> 
                  <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                  <p className='w-2  h-2 bg-green-500 rounded-full'> </p> <p> Available </p>
              </div>
              <p className='text-gray-900 text-lg font-medium'> {item.name} </p>
              <p className='text-gray-600  text-sm'> {item.services} </p>
                 </div>
              </div>
            
             ) )}
        </div>
        <button onClick={() =>{Navigate('/workers');scrollTo(0,0)}} className='bg-blue-200 text-gray-600 px-12 py-3 rounded-full mt-10'>
          more
        </button>
    </div>
  
  )
}

export default TopWorkers