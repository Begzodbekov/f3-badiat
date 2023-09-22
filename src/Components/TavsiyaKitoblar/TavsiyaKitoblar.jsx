import React, { useEffect, useState } from 'react'
import './TavsiyaKitoblar.scss'
import { books } from '../../lib/bookData'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import Tstar from '../../asests/img/tavsiya_star.png'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

// import { Pagination } from 'swiper/modules';
function TavsiyaKitoblar() {
  const navigate = useNavigate()
  function addBookId (id){
    navigate(`/book-view/${id}`)
  }
 
  return (
    <div className='TavsiyaKitoblar'>
        <div className="container">
            <div className="tavsiya_inner">
                <div className="tavsiya_top">
                  <h1 className='tavsiya_h1'>Sizga yoqishi mumkin</h1>
                  <Link className='tavsiya_link'>Barchasini ko’rish</Link>
                </div>
                <div className="tavsiya_bottom">
                  <ul className='tavsiya__botto_list'>
                    <>
                                <Swiper
                     slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    className="mySwiper">
                    {
                      books?.map((item,index)=>(
                        <SwiperSlide>


                        <li onClick={()=> addBookId(item.id)} className='tavsiya_bottom_karta' key={index}>
                          <img src={item.img} alt="" />
                          <h2>{item.name}</h2>
                          <div className='tavsiya_list_itemb'>
                            <img src={Tstar} alt="" />
                            <p>4.1 • 3400 ta fikrlar</p>
                          </div>
                        </li>
                        </SwiperSlide>
                      ))
                    }
                    </Swiper>
                    </>
                  </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TavsiyaKitoblar