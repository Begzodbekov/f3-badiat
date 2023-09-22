import React from "react";
import "./Hero.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import heroSwiper from "../../asests/img/Hero.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
function Hero() {
  return (
    <div className="Hero">
      <div className="container">
        <div className="hero_inner">
          <Swiper
            pagination={
              {
                // type: 'progressbar',
              }
            }
            navigation={false}
            modules={[Pagination, Navigation]}
            className="mySwiper ta"
          >
            <SwiperSlide>
              <div className="slide">
                <img
                  src="https://img-fotki.yandex.ru/get/480548/395936343.78/0_16b209_2997a774_orig.png"
                  alt="img"
                />
                {/* <p>Temuriylar davri adabiyoti</p> */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <div className="slide">
                  <img
                    src="https://img-fotki.yandex.ru/get/480548/395936343.78/0_16b209_2997a774_orig.png"
                    alt="img"
                  />
                  {/* <p>Temuriylar davri adabiyoti</p> */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <div className="slide">
                  <img
                    src="https://img-fotki.yandex.ru/get/480548/395936343.78/0_16b209_2997a774_orig.png"
                    alt="img"
                  />
                  {/* <p>Temuriylar davri adabiyoti</p> */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <div className="slide">
                  <img
                    src="https://img-fotki.yandex.ru/get/480548/395936343.78/0_16b209_2997a774_orig.png"
                    alt="img"
                  />
                  {/* <p>Temuriylar davri adabiyoti</p> */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <div className="slide">
                  <img
                    src="https://img-fotki.yandex.ru/get/480548/395936343.78/0_16b209_2997a774_orig.png"
                    alt="img"
                  />
                  {/* <p>Temuriylar davri adabiyoti</p> */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <div className="slide">
                  <img
                    src="https://img-fotki.yandex.ru/get/480548/395936343.78/0_16b209_2997a774_orig.png"
                    alt="img"
                  />
                  {/* <p>Temuriylar davri adabiyoti</p> */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <div className="slide">
                  <img
                    src="https://img-fotki.yandex.ru/get/480548/395936343.78/0_16b209_2997a774_orig.png"
                    alt="img"
                  />
                  {/* <p>Temuriylar davri adabiyoti</p> */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <div className="slide">
                  <img
                    src="https://img-fotki.yandex.ru/get/480548/395936343.78/0_16b209_2997a774_orig.png"
                    alt="img"
                  />
                  {/* <p>Temuriylar davri adabiyoti</p> */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <div className="slide">
                  <img
                    src="https://img-fotki.yandex.ru/get/480548/395936343.78/0_16b209_2997a774_orig.png"
                    alt="img"
                  />
                  {/* <p>Temuriylar davri adabiyoti</p> */}
                </div>
              </div>
            </SwiperSlide>
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
  );
}

export default Hero;
