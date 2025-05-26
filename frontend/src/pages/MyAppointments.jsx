import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {

  const { workers } = useContext(AppContext)

  return (
    <div className='pb-3 mt-12 m-6 font-medium text-zinc-700 border-b'>
      <p>
        My Appointments
      </p>
      <div>
        {workers.slice(0, 3).map((item, index) => (

          <div className='grid grid-col-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index} >
            <div className='pt-6'>
              <img  className='w-40 bg-indigo-50'   src={item.image} alt='' />
            </div>
            <div className='flex-1 text-medium text-gray-900 pt-6'>
              <p className='text-neutral-800 text-medium'>{item.name}</p>
              <p>{item.services}</p>
              <p className='text-zinc-900 text-lg mt-1'>Address:</p>
              <p className='text-medium'>{item.address}</p>
             
              <p  className='text-medium mt-1'><span className='text-medium text-neutral-800 font-medium'> Date & Time:</span> 06, June,2025  | 8:00 PM </p>
            </div>
            <div>
            </div>
            <div className='flex flex-col gap-2 justify-end'>
              <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300' >
                Pay Online
              </button>
              <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600  hover:text-white transition-all duration-300'>
                Cancel appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments