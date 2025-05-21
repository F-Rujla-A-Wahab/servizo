import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import assets from '../assets/assets'
import RelatedWorkers from '../components/RelatedWorkers'

const Appointment = () => {

  const {workersId} = useParams()
  const {workers, currencySymbol} =useContext (AppContext)
 const daysOfWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT']


  const [workersInfo,setworkersInfo] = useState(null)
  const [workerSlots,setworkerSlots] = useState([])
  const [slotIndex,setSlotIndex] = useState(0)
  const [slotTime,setSlotTime] = useState('')


     const fetchworkersInfo =async () => {
      const Info = workers.find(worker => worker._id === workersId)
      setworkersInfo(Info)
      
    }

    const getAvailableSlots=async () => {
    const allSlots = [];

    

    
    //getting current date
    const today = new Date();

    for(let i=0; i <7; i++ ){
    //getting date with index
       let currentDate = new Date (today)
    currentDate.setDate(today.getDate() +i)

    //setting end time of the date with index
     const endTime = new Date(currentDate)
     endTime.setHours(21,0,0,0)

     //setting hours
      if (i===0){
      const now = new Date()
      currentDate.setHours(now.getHours() >10 ? currentDate.getHours()+1 :10)
      currentDate.setMinutes(now.getMinutes() > 30 ? 30 : 0 )
     }else {
      currentDate.setHours(10)
      currentDate.setMinutes(0)
     }
      
      const timeSlots = []
    


      while(currentDate < endTime) {
      const formatedTime = currentDate.toLocaleTimeString([],
      {hour:'2-digit',
       minute:'2-digit',
       hours12:false,
       })


    //add slot to array
     timeSlots.push({
     datetime : new Date(currentDate),
     time: formatedTime
     })

     //Increament current Time by 30 minutes
          currentDate.setMinutes(currentDate.getMinutes( )+30 )
     }
     allSlots.push(timeSlots)
     }
     setworkerSlots(allSlots)
     


    
  }
   

    useEffect(() => {
    fetchworkersInfo()
    },[workers,workersId])

    useEffect(()=>{
    if (workersInfo) {
      getAvailableSlots();
    }
    },[workersInfo])
  
       useEffect (() =>{
    console.log(workerSlots)
    },[workerSlots])
  
   return  workersInfo &&  (
    <div>
     {/*---------Workers Detail--------------*/} 
     <div className='flex flex-col sm:flex-row gap-4'>
      <div>
        <img className='bg-primary w-full  sm:max-w-72 rounded-lg' src={workersInfo.image} alt='' />
      </div>

      <div className='flex-1 border border-gray-500 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
        {/*---------workers Info : name.experience-----------------*/}
        <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
           {workersInfo.name} <img className='w-8 h-8'  src={assets.verified_icon_1} alt='' /> 
        </p>
        <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
          <p>
            {workersInfo.services} 
          </p>
          <button className='py-0.5 px-2 border text-xs rounded-full  '>
            {workersInfo.experience}
          </button>
        </div>
        
        {/*----------Workers Address---------------- */}
        <div>
          <p className='flex items-center gap-1 text-sm font -medium text-gray-900 mt-3'>
            Address <img className='w-4 h-4' src={assets.info_Icon} alt='' />
          </p>
          <p className='text-sm text-gray-500 max-w-[700px] mt-1'>
            {workersInfo.address}
          </p>
          <br/>
        </div>
        <p className='text-medium  text-gray-700 mt-4'>
          Appointment fees: <span className='text gray-900'>{currencySymbol} {workersInfo.fees} </span>
        </p>
      </div>
      </div>  
      
      {/*------------Booking Slots-----------*/}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
      <p>
        Booking Slots
      </p>
     
      <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
      {
        workerSlots.length && workerSlots.map((item,index)=>( 
      <div onClick={()=> setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex=== index ? 'bg-primary text-white':'border border-gray-300'}`}>
      <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]} </p>
        <p> {item[0] && item[0].datetime.getDate()} </p>

        
      
       </div>
        ))
      }
      </div>
      <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
        {workerSlots.length && workerSlots[slotIndex].map((item,index)=>(
          <p onClick={()=>setSlotTime(item.time) } className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime? 'bg-primary text-white' : 'text-gray-400 border border-gray-300' }`} key={index}>
            {item.time.toLowerCase()}
          </p>
        ))}
      </div>
       <button className='bg-primary text-white text-sm font-light  px-14 py-3 rounded-full my-6'>
        Book an appointment
       </button>

       </div>

       {/*    Listing Related Workers*/   }
       <RelatedWorkers   workersId={workersId}  services={workersInfo.services}/>
    </div>
  )
}

export default Appointment