import React from 'react'

export default function Home() {
  return (
    <div className='back-img md:flex md:px-[50px] md:items-center '>
      <div className='stroke text-center py-[10px] mb-[3rem] md:mb-[0px] md:py-[0px] md:mt-[-10rem] md:ml-[5rem] md:w-[50%]'>
          <img src="Logo2.PNG" alt="" className='md:ml-[16rem] mt-[5rem] ml-[11rem] md:mt-[0px] ' />
        <h1 className='text-center text-gray-300 font-[700] text-[25px] md:text-[35px] tracking-[5px]'>BESTGATE HERITAGE</h1>
        <p className='text-[#fff] font-[700] text-[19px] tracking-[5px]'>SECONDARY SCHOOL</p>
      </div>
      <div className='md:px-[50px] md:mt-[5rem] md:ml-[3rem] md:w-[50%] px-[30px] leading-[40px]'>
        <h1 className='text-[35px] font-[600] text-gray-300'>Our Special Features</h1>
        <p className='text-[15px] font-[600] text-gray-300 ml-[1.5rem]'>High Quality and Experienced Staff</p>
        <p className='text-[15px] font-[600] text-gray-300 ml-[1.5rem]'>School Buses</p>
        <p className='text-[15px] font-[600] text-gray-300 ml-[1.5rem]'>Spacious and Conductive Classroom</p>
        <p className='text-[15px] font-[600] text-gray-300 ml-[1.5rem]'>Affordable and Moderate School Fees</p>
        <p className='text-[15px] font-[600] text-gray-300 ml-[1.5rem]'>Produce Confident and Cultured Pupils</p>
      </div>
    </div>
  )
}
