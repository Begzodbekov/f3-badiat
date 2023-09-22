import React from "react";
import "./Hero.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import heroSwiper from "../../asests/img/Hero.png";
import heroBg from '../../asests/img/hero__bg.png'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Keyboard } from "swiper/modules";
function Hero() {
  return (
    <div className="Hero">
      <div className="container">
        <div className="hero_inner">
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        // navigation={true}
        modules={[Keyboard,  Navigation, Pagination]}
        className="mySwiper"
      >
            <SwiperSlide className="salom">
              <div className="slide">
              <img src={heroBg} alt="img"/>
                  
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <div className="slide">
                <img src={heroBg} alt="img"/>
                  
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <div className="slide">
                <img src={heroBg} alt="img"/>
                  
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <div className="slide">
                <img src={heroBg} alt="img"/>
                  
                </div>
              </div>
            </SwiperSlide>
            
          </Swiper>
<div className="bottom__hero">
<p>Temuriylar davri adabiyoti</p>

</div>
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
  );
}

export default Hero;
