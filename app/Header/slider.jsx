"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'
import { BiSupport } from 'react-icons/bi'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Image src="/slider1.png" width='1024' height='720'/></SwiperSlide>
        <SwiperSlide><Image src="/slider1.png" width='1024' height='720' /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider