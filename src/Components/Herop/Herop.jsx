import React from 'react'
import './Herop.scss'
import farruxImg from '../../asests/img/farrux-img.png'
import bgiHerop from '../../asests/img/bgi-herop.png'
import statiscImg from '../../asests/img/statisc-img.png'
import heropProgress from '../../asests/img/herop-progress.svg'
import heropSec from '../../asests/img/heropsec.svg'
import heropThird from '../../asests/img/herop-third.svg'
import heropFour from '../../asests/img/herop-four.svg'
import audioFirst from '../../asests/img/audio-first.png'
import audioPlay from '../../asests/img/audio-play.svg'
import audioTrack from '../../asests/img/audio-track.svg'
import audioSpotify from '../../asests/img/audio-spotify.svg'
import audioFrame from '../../asests/img/audio-frame.png'
function Herop() {
  return (
    <div className='herop'>
      <div className="container">
        <div className="herop__inner">
          <div>
            <span>
          <img className='herop__img' src={farruxImg} alt="" />
          </span>
          <span className='un__span'>
            <h5>Oltin kitobxon</h5>
            <p>186 ta kitob o’qigan</p>
          </span>
          </div>
          <div className='text'>
            <h1 className='first__sp'> Farruxbek Abdullayev</h1>
            <ul>
              <li className='sec__sp'>Tavallud: <span> February 08, 1999</span></li>
              <li className='third__sp'>Manzili:<span> Jizzax</span></li>
              <li className='fours__sp'>Bio:<span> Graphic designer and Developer</span ></li>
            </ul>
            <img className='second__img' src={bgiHerop} alt="" />
          </div>
        </div>
        <div className="statistic">
          <div className='statistic_item1'>
              <h2>Hozir o’qilmoqda...</h2>
              <i class="bi bi-grid-fill bi_ph"></i>
          </div>
          <ul>  
            <li>
              <img src={statiscImg} alt="" />
              <h5>Ikki eshik orasi</h5>
              <p>96%</p>
              <img className='seco__img' src={heropProgress} alt="" />
              <button>Yangilash <i class="bi1 bi-arrow-clockwise"></i></button>
            </li>
            <li>
              <img src={statiscImg} alt="" />
              <h5>Ikki eshik orasi</h5>
              <p>96%</p>
              <img className='seco__img' src={heropSec} alt="" />
              <button className='btn2'>Yangilash <i class="bi1 bi-arrow-clockwise"></i></button>
            </li>
            <li>
              <img src={statiscImg} alt="" />
              <h5>Ikki eshik orasi</h5>
              <p>96%</p>
              <img className='seco__img' src={heropThird} alt="" />
              <button className='btn3'>Yangilash <i class="bi1 bi-arrow-clockwise"></i></button>
            </li>
            <li>
              <img src={statiscImg} alt="" />
              <h5>Ikki eshik orasi</h5>
              <p>96%</p>
              <img className='seco__img' src={heropFour} alt="" />
              <button className='btn4'>Yangilash <i class="bi1 bi-arrow-clockwise"></i></button>
            </li>
          </ul>
          <button className='last__btn'>Barchasini ko’rish</button>
        </div>
        <div className="audio__kitob">
            <h3 className='audio__tittle'>Audio kitob</h3>
            <img className='left__img' src={audioFirst} alt="" />
            <img className='bet__img' src={audioFirst} alt="" />
            <img className='right__img' src={audioFirst} alt="" />
            
            <div className="audio__inner">
              <h4 className='inner__tittle'>Dunyoning ishlari 5-track</h4>
              <h6 className='little__tittle'>O’tkir Hoshimov</h6>
              <img className='audio__play' src={audioPlay} alt="" />
              <img className='audio__track' src={audioTrack} alt="" />
              <img className='audio__spof' src={audioSpotify} alt="" />
              <div className="audio__inner-item">
                <img className='audio__frame' src={audioFrame} alt="" />
                <img className='audio__inner-img' src={audioFirst} alt="" />
                <h5 className='track__tittle'>Dunyoning ishlari 5-track</h5>
                <p className='track__info'>O'tkir Hoshimov</p>
                <p className='track__time'>02:22:18</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Herop
