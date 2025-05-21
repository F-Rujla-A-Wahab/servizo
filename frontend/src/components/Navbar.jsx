import React, { useState } from 'react'
//import {assets} from'assets'
import {Navigate, NavLink, useNavigate} from 'react-router-dom'
import logo from '../assets/logo.png'
import  assets  from '../assets/assets'


const Navbar = () => {
  
   const Navigate=useNavigate()
   
   const [showMenu, setShowMenu] =useState(false)
   const [token, setToken] = useState(true)


  return ( 
    <div className='flex item-center justify-between text-sm py-4  px-5 mb-5 border-b border-gray-400'>
<img onClick={()=>Navigate('/')}  className='w-40 cursor-pointer'  src= {logo} alt=''/>
<ul className='hidden md:flex item-start gap-10 font-medium'>

  <NavLink to='/'>
      <li className='py-1'> HOME </li>
      <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
  </NavLink>

  <NavLink to='/workers'>
      <li className='py-1'> ALL WORKERS</li>
      <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
  </NavLink>

  <NavLink to='/about'>
      <li className='py-1'> ABOUT </li>
      <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
  </NavLink>

  <NavLink to='/contact'>
      <li className='py-1'>CONTACT</li>
      <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
  </NavLink>
</ul>

<div className='flex items-center gap-4' >
  {
    token
    ? <div className='flex items-center gap-2 cursor-pointer group relative'>
      <img className='w-12 rounded-full' src={assets.profile_pics} alt =""/>
      <img className='w-3 ' src={assets.dropdown} alt=""/>

      <div className='absolute top-0 right-0 pt-14 text-base front-medium text-gray-600 z-20 hidden group-hover:block'> 
        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'> 
          <p onClick={()=>Navigate('my-profile')} className='hover:text-black cursor-pointer'>  My Profile </p>
          <p onClick={()=>Navigate('my-appointments')} className='hover:text-black cursor-pointer'> My Appointments </p>
          <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'> Logout </p>
        </div>
      </div>
    </div>
    :<button onClick={()=> Navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'> Create account </button>

  }
  </div>
    </div>
  )
}

export default Navbar