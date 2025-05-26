import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const Workers = () => {

  const { services }= useParams()
  const [filterWorkers,SetFilterWorkers] =useState([])
  const [showFilter,setShowFilter] = useState(false)
  const Navigate = useNavigate()
  const {workers} =useContext(AppContext) 
 


const applyFilter = ()=>{
  if(services){
    SetFilterWorkers(workers.filter(worker => worker.services === services))
  } else {
    SetFilterWorkers(workers)
  }
}

useEffect(()=>{
applyFilter()
},[workers,services])


  return (
    <div>
     <p className='text-gray-600'>  Browse through the workers by Services.</p>     
     <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
      <button  className={`py-1 px-3 border rounded text-sm transition-allsm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}onClick={()=> setShowFilter(prev=> ! prev)}>
        Filters
      </button>
      <div className={` flex flex-col gap-4 text-sm text-gray-600 m-4 ${showFilter ? 'flex':'hidden sm-flex'}`}>
        <p onClick={()=> services ===  'AC Technician'? Navigate('/workers') :  Navigate('/workers/AC Technician')} className={`w-[94VW] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded transition-all cursor-pointer ${services === "AC Technician" ? " bg-indigo-100 text-black" :" "}`} >AC Technician</p>
        <p onClick={()=> services ===  'Carpenter'? Navigate('/workers') :  Navigate('/workers/Carpenter')} className={`w-[94VW] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded transition-all cursor-pointer ${services === "Carpenter" ? " bg-indigo-100 text-black" :" "}`}>Carpenter</p>
        <p onClick={()=> services ===  'Chef'? Navigate('/workers') :  Navigate('/workers/Chef')} className={`w-[94VW] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded transition-all cursor-pointer ${services === "Chef" ? " bg-indigo-100 text-black" :" "}`}>Chef</p>
        <p onClick={()=> services ===  'Electrician'? Navigate('/workers') :  Navigate('/workers/Electrician')} className={`w-[94VW] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded transition-all cursor-pointer ${services === "Electrician" ? " bg-indigo-100 text-black" :" "}`}>Electrician</p>
        <p onClick={()=> services ===  'Handyman'? Navigate('/workers') :  Navigate('/workers/Handyman')} className={`w-[94VW] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded transition-all cursor-pointer ${services === "Handyman" ? " bg-indigo-100 text-black" :" "}`}>Handyman</p>
        <p onClick={()=> services ===  'Laundry'? Navigate('/workers') :  Navigate('/workers/Laundry')} className={`w-[94VW] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded transition-all cursor-pointer ${services === "Laundry" ? " bg-indigo-100 text-black" :" "}`}>Laundry</p>
        <p onClick={()=> services ===  'Maid'? Navigate('/workers') :  Navigate('/workers/Maid')} className={`w-[94VW] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded transition-all cursor-pointer ${services === "Maid" ? " bg-indigo-100 text-black" :" "}`}>Maid</p>
        <p onClick={()=> services ===  'Nanny'? Navigate('/workers') :  Navigate('/workers/Nanny')} className={`w-[94VW] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded transition-all cursor-pointer ${services === "Nanny" ? " bg-indigo-100 text-black" :" "}`}>Nanny</p>
        <p onClick={()=> services ===  'Painter'? Navigate('/workers') :  Navigate('/workers/Painter')} className={`w-[94VW] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded transition-all cursor-pointer ${services === "Painter" ? " bg-indigo-100 text-black" :" "}`}>Painter</p>
        <p onClick={()=> services ===  'Plumber'? Navigate('/workers') :  Navigate('/workers/Plumber')} className={`w-[94VW] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded transition-all cursor-pointer ${services === "Plumber" ? " bg-indigo-100 text-black" :" "}`}>Plumber</p>
        <p onClick={()=> services ===  'Security Guard'? Navigate('/workers') :  Navigate('/workers/Security Guard ')} className={`w-[94VW] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded transition-all cursor-pointer ${services === "Security Guard" ? " bg-indigo-100 text-black" :" "}`}>Security Guard</p>
      </div>
      <div className='w-full grid grid-cols-4 gap-4  gap-y-6'>
        {
filterWorkers.map((item,index)=>(
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
            
             ))
        }
      </div>
     </div>
    </div>
  )
}

export default Workers