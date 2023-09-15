import React from 'react'
import './Herop.scss'
import farruxImg from '../../asests/img/farrux-img.png'
import bgiHerop from '../../asests/img/bgi-herop.png'
import statiscImg from '../../asests/img/statisc-img.png'
import heropProgress from '../../asests/img/herop-progress.svg'
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
          <h2>Hozir o’qilmoqda...</h2>
              <i class="bi bi-grid-fill"></i>
          <ul>  
            <li>
              <img src={statiscImg} alt="" />
              <h5>Ikki eshik orasi</h5>
              <p>96%</p>
              <img className='seco__img' src={heropProgress} alt="" />
              <button>Yangilash <i class="bi bi-arrow-clockwise"></i></button>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Herop
