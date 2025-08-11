import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-between px-[15px] py-[7px] md:px-[70px] md:py-[10px] items-center'>
      <div className='flex gap-[0.6rem]'>
        <img src="Logo2.PNG" alt="" className='w-[60px] h-[60px]' />
        <div className='page text-center'>
          <h1 className=' font-[600] md:font-[700] shadow-gray-200 md:text-[19px] tracking-[2px]'>BESTGATE HERITAGE</h1>
          <p className='font-[600] md:font-[700] text-[14px]'>SECONDARY SCHOOL</p>
        </div>

      </div>
      <ul className='hidden md:flex md:justify-between md:gap-[2rem] md:ml-[17rem] text-[15px] font-[500]'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Academics</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className='hidden bg-[#3333ee] px-[20px] py-[5px] items-center text-center text-[#fff] rounded-[5px] cursor-pointer text-[16px] font-[800] md:text-[15px] md:font-[500]  transition'>Login</button>
     
    </nav>
  )
}
