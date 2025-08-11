import React from 'react'
import { FaCaretRight } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  return (
    <div className=' gate bg-gray-300  md:gap-none md:flex justify-between py-[30px] px-[50px] md:py-[20px]'>
      <div className='leading-[20px] mb-[1rem] md:mb-[0px]'>
        <div>
          <h1 className='mb-[0.5rem] text-[25px] font-[700]'>Our School</h1>
        </div>
        <div className='md:flex gap-[3rem]'>
          <div>
            <div className='flex items-center  cursor-pointer '>
              <FaCaretRight className='text-[13px]' />
              <p className='text-[13px] font-[600] hover:text-[#5b4891]'> Photo Gallary</p>
            </div>
            <div className='flex items-center cursor-pointer '>
              <FaCaretRight className='text-[13px]' />
              <p className='text-[13px] font-[600] hover:text-[#5b4891]'> Employment</p>
            </div>
            <div className='flex items-center cursor-pointer '>
              <FaCaretRight className='text-[13px]' />
              <p className='text-[13px] font-[600] hover:text-[#5b4891]'>FAQ</p>
            </div>
          </div>
          <div>
            <div className='flex items-center cursor-pointer '>
              <FaCaretRight className='text-[13px]' />
              <p className='text-[13px] font-[600] hover:text-[#5b4891]'> Privacy Policy</p>
            </div>
            <div className='flex items-center cursor-pointer '>
              <FaCaretRight className='text-[13px]' />
              <p className='text-[13px] font-[600] hover:text-[#5b4891]'> Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className=''>
        <div>
          <h1 className='text-[23px] font-[700]'>Join Our Mailing List </h1>
          <p className='text-[13px] font-[700]'>Subscribe to get our weekly newsletter delivered directly to your inbox</p>
        </div>
        <br />
        <div className=''>
          <input type="text" name="Enter Your email" id="" placeholder='Enter Your email' className='outline-none  bg-white py-[4px] w-[70%] px-[10px]' />
          <button className='ml-[0.5rem] bg-[blue] px-[8px] py-[4px] text-[15px] font-[600] text-white cursor-pointer '>Subscribe</button>
        </div>
      </div> */}

      <div className='leading-[10px]'>
        <div>
          <h1 className='text-[23px] font-[700] mb-[1rem]'> Contact</h1>
        </div>

        <div className='md:flex gap-[2rem] leading-[20px] '>

          <div>
            <div className='flex items-center gap-[0.5rem]'>
              <MdLocationPin className='text-gray-700' />
              <h1 className='text-[14px] font-[700] text-gray-700'>3&5 Akunwa Okoye Street Anambra, Nigeria</h1>
            </div>

            <div className='flex items-center gap-[0.5rem]'>
              <IoMdCall className='text-gray-700' />
              <h1 className='font-[500] text-gray-700'>08033870862</h1>
            </div>
          </div>

          <div>
            <div className='flex items-center gap-[0.5rem]'>
              <FaWhatsapp className='text-gray-700' />
              <h1 className='text-gray-700 font-[500]'>Whatsapp:  08033870862 </h1>
            </div>
            <div className='flex items-center gap-[0.5rem]'>
              <AiOutlineMail className='text-gray-700' />
              <a href="" className='text-gray-700 tex font-[500]'>bestgateheritageschools@gmail.com</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
