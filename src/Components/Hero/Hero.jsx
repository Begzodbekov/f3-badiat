import React from 'react'
import './Hero.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import heroSwiper from '../../asests/img/Hero.png'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
function Hero() {
  return (
    <div className='Hero'>
      <div className="container">
        <div className="hero_inner">
        
        <Swiper
        pagination={{
          // type: 'progressbar',
         
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper ta"
      >
        <SwiperSlide> <img className='swiper__img' src={heroSwiper} alt="img" /></SwiperSlide>
        <SwiperSlide> <img className='swiper__img' src={heroSwiper} alt="img" /></SwiperSlide>
        <SwiperSlide> <img className='swiper__img' src={heroSwiper} alt="img" /></SwiperSlide>
        <SwiperSlide> <img className='swiper__img' src={heroSwiper} alt="img" /></SwiperSlide>
        <SwiperSlide> <img className='swiper__img' src={heroSwiper} alt="img" /></SwiperSlide>
        <SwiperSlide> <img className='swiper__img' src={heroSwiper} alt="img" /></SwiperSlide>
        <SwiperSlide> <img className='swiper__img' src={heroSwiper} alt="img" /></SwiperSlide>
        <SwiperSlide> <img className='swiper__img' src={heroSwiper} alt="img" /></SwiperSlide>
        <SwiperSlide> <img className='swiper__img' src={heroSwiper} alt="img" /></SwiperSlide>
      </Swiper>

          {/* <div className="hero__item">
            <h1>
              Temuriylar
              davri
              adabiyoti
            </h1>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Hero