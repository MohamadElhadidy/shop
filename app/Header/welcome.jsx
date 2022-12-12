import Image from 'next/image'
import React from 'react'
import {FiUser} from 'react-icons/fi'
import { GrLocation } from 'react-icons/gr'
import { TiPhoneOutline } from 'react-icons/ti'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'
import { HiOutlineSearchCircle } from 'react-icons/hi'
import { SlPresent } from 'react-icons/sl'
function Welcome() {
  return (
    <>
      <div className='flex justify-around p-3  border-b-2 border-[#E1E1E1]'>
        <div>
          <p className='text-[#666] font-bold text-sm'>مرحبا بكم في  متجر روائح التميز للعطور</p>
        </div>
        <div>
          <div className='flex gap-5'>

            <div className="flex gap-1 justify-center items-center">
              <GrLocation className='text-[1.5rem]' />
              <a className="text-[#666] hover:text-blue-500 text-sm font-bold" href="#">تواصل معنا</a>
            </div>
            <span className='text-[1rem] text-[#666]'>|</span>
            <div className="flex gap-1 justify-center items-center">
              <FiUser className='text-[1.5rem]' />
              <a className="text-[#666] hover:text-blue-500 text-sm font-bold" href="#">تسجيل الدخول</a>
              <span className="delimiter">/</span>
              <a className="text-[#666] hover:text-blue-500 text-sm font-bold" href="#">إنشاء حساب</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className='flex justify-around p-6 border-b-2 border-[#E1E1E1]'>
       <div className='flex gap-3'>
          <Image src="/logo.jpg" width="50" height="50" />
          <span className='flex relative'>
            <input type="text" className=' border-blue-600 border-2  w-80 h-14 pr-5  rounded-lg'  placeholder='ابحث'/>
            <span class="absolute left-[30px] top-[12px] rounded-full  w-[18px] h-[19px] top left p-0 m-0 text-black hover:text-blue-500 hover:cursor-pointer   text-sm font-bold text-center">
              <HiOutlineSearchCircle className='text-[2rem] ' />
            </span>
          </span>
       </div>
        <div className='flex gap-4 items-center justify-center'>
          <a href="#" className=" flex items-center justify-center gap-3 group hover:cursor-pointer ">
            <TiPhoneOutline className='text-[2.5rem] group-hover:text-blue-500'/>
            <span className="flex flex-col group-hover:text-blue-500">
              اتصل بنا الآن :
              <strong  dir="ltr">+966558202546</strong>
            </span></a>
          <span className='text-[2rem] text-[#666]'>|</span>
          <div className=' hover:cursor-pointer hover:text-blue-500 relative flex'>
            <AiOutlineHeart className='text-[2.5rem]' />
            <span class="absolute right-[-5px] top-0 rounded-full bg-[#27c] w-[18px] h-[19px] top right p-0 m-0 text-white text-sm font-bold text-center">5
            </span>
          </div>
          <span className='text-[2rem] text-[#666]'>|</span>
          <div className=' flex items-center justify-center gap-3 group hover:cursor-pointer '>
            <span className="flex flex-col group-hover:text-blue-500">
              سلة التسوق
              <strong dir="ltr">$0.00</strong>
            </span>
            <span className='relative flex'>
              <BsBag  className='text-[2rem] group-hover:text-blue-500' />
              <span class="absolute right-[-5px] top-0 rounded-full bg-[#27c] w-[18px] h-[19px] top right p-0 m-0 text-white text-sm font-bold text-center">5
              </span>
            </span>
          </div>
        </div>
       
      </div>
      <div className='flex justify-around p-5 border-b-2 border-[#E1E1E1]'>
       
        <nav className=''>
            <ul className='flex gap-8 items-center justify-center'>
            <li>
              <a href='#' className='font-bold Changa text-lg text-blue-500'>
                    الرئيسية
              </a>
            </li>
              <li>
              <a href='#' className='font-bold Changa text-lg  hover:text-blue-500'>
                  عطور فرنسية
                </a>
              </li>
               <li>
              <a href='#' className='font-bold Changa text-lg  hover:text-blue-500'>
                  معطر جو 
                </a>
              </li>
          </ul>
         </nav>
        <div className='flex group items-center hover:cursor-pointer gap-1'>
          <SlPresent className='text-[2rem] group-hover:text-blue-500 ' />
          <a href="#" className=" font-bold group-hover:text-blue-500">
              عروض و تخفيضات
           </a>
        </div>
      </div>
      </>
  )
}

export default Welcome