import Image from 'next/image'
import React from 'react'
import {FiUser} from 'react-icons/fi'
import { GrLocation } from 'react-icons/gr'
import { TiPhoneOutline } from 'react-icons/ti'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsFillBagCheckFill } from 'react-icons/bs'
function Welcome() {
  return (
    <>
      <div className='flex justify-around p-3  border-b-2 border-[#E1E1E1]'>
        <div>
          <p className='text-[#666] font-bold text-sm'>مرحبا بكم في  متجر روائح التميز للعطور</p>
        </div>
        <div>
          <div className='flex gap-5'>
            {/* <select>
          <option>USD</option>
          <option>EGP</option>
         </select>
          <select>
            <option>ENG</option>
            <option>AR</option>
          </select> */}

            <div className="flex gap-1 justify-center items-center">
              <GrLocation className='text-[1.5rem]' />
              <a className="text-[#666] hover:text-blue-500 text-sm font-bold" href="#">تواصل معنا</a>
            </div>
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
          <input type="text" className=' border-blue-600 border-2  px-24 py-3  rounded-lg' />
       </div>
        <div className='flex gap-4 items-center justify-center'>
          <a href="#" className=" flex items-center justify-center gap-3 group hover:cursor-pointer ">
            <TiPhoneOutline className='text-[2.5rem] group-hover:text-blue-500'/>
            <span className="flex flex-col group-hover:text-blue-500">
              اتصل بنا الآن :
              <strong  dir="ltr">+966558202546</strong>
            </span></a>
          <span className='text-[2rem] text-[#666]'>|</span>
          <div className=' hover:cursor-pointer hover:text-blue-500'>
            <AiOutlineHeart className='text-[2.5rem]' />
          </div>
          <span className='text-[2rem] text-[#666]'>|</span>
          <div className=' flex items-center justify-center gap-3 group hover:cursor-pointer '>
            <span className="flex flex-col group-hover:text-blue-500">
              سلة التسوق
              <strong dir="ltr">$0.00</strong>
            </span>
            <BsFillBagCheckFill className='text-[2rem] group-hover:text-blue-500' />
          </div>
        </div>
       
      </div>
      </>
  )
}

export default Welcome