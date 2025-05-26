import React, { useState } from 'react'
//import {assets} from'assets'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import assets from '../assets/assets'


const Navbar = () => {

  const Navigate = useNavigate()

  const [showMenu, setShowMenu] = useState(false)
  const [token, setToken] = useState(true)


  return (
    <div className='flex item-center justify-between text-sm py-1  px-5 border-b border-gray-400'>
      <img onClick={() => Navigate('/')} className='w-28 h-24 cursor-pointer object-contain' src={logo} alt='' />
      <ul className='hidden md:flex md:justify-center md:items-center item-start gap-10 md:text-xl font-medium'>

        <NavLink to='/'>
          <li className='py-1'> HOME </li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to='/workers'>
          <li className='py-1'> ALL WORKERS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to='/about'>
          <li className='py-1'> ABOUT </li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to='/contact'>
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-4' >
        {
          token
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-12 rounded-full' src={assets.profile_pics} alt="" />
              <img className='w-3 ' src={assets.dropdown} alt="" />

              <div className='absolute top-0 right-0 pt-14 text-base front-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                  <p onClick={() => Navigate('my-profile')} className='hover:text-black cursor-pointer'>  My Profile </p>
                  <p onClick={() => Navigate('my-appointments')} className='hover:text-black cursor-pointer'> My Appointments </p>
                  <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'> Logout </p>
                </div>
              </div>
            </div>
            : <button onClick={() => Navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'> Create account </button>

        }
        <img onClick={() => setShowMenu(true)} className='w-12 md:hidden' src={assets.menu_icon} alt='' />
        {/*-----mobile menu-----*/}
        <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0z-20 overflow-hidden bg-white transition-all`}> 
          <div className='flex items-center justify-between px-5 py-6'>
            <img   className='w-28 h-24' src={assets.logo}     alt='' />
            <img onClick={()=> setShowMenu(false)} className='w-16'  src={assets.cross_icon} alt='' />
          </div>
          <ul className='flex flex-col  items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink   onClick ={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>  HOME </p></NavLink>
             <NavLink  onClick ={()=>setShowMenu(false)} to='/workers'>  <p className='px-4 py-2 rounded inline-block'> ALL WORKERS </p></NavLink>
            <NavLink  onClick ={()=>setShowMenu(false)}to='/about'><p className='px-4 py-2 rounded inline-block'> ABOUT</p></NavLink>
            <NavLink  onClick ={()=>setShowMenu(false)} to='/contact'>< p className='px-4 py-2 rounded inline-block'>CONTACT</p>  </NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar