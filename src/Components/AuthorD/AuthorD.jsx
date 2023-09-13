import React, { useState } from 'react'
import AuthorImg1 from '../../asests/img/AuthorImg1.png'
import './AuthorD.scss'
import { bookData2 } from '../../lib/bookData2'
import { useParams } from 'react-router-dom'
import { adibData } from '../../lib/data'
function AuthorD() {
  const {slug} = useParams()
  console.log();

  const [author, setAuthor] = useState(adibData.find((item)=> item.id == slug))
  return (
    <div className='AuthorD'>
      <div className="container">
        <div className="Author__body">
          <div className="container__left">
            <img className='img1' src={author.img} alt="" />
            <p className='left__text1'>{author.age}</p>
            <div className="left__text__con1">
              <span className='left__row1'>
                <h1 className='left__text2'>5-Avg 1941</h1>
                <span className='minus'> - </span>
                <span className='left__col1'>
                  <p className='col1__text1'>Tavallud sanasi</p>
                  <span className='left__text4'>24-MAY 2013</span>
                  <p className='col1__text2'>Toshkent, Uzbekistan</p>
                </span>
              </span>
              <p className='left__text3'>Toshkent, Uzbekistan</p>
            </div>

          </div>
          <div className="container__right">
            <div className="part1">
              <h1 className='part1__text1'>{author.name}v</h1>
              <p className='part1__text2'>Oʻtkir Hoshimov 1941 yil Toshkent viloyatining Zangiota (hozirgi Chilonzor) tumanidagi Doʻmbiravot mavzeida tugʻildi. Oʻ. Hoshimov mehnat faoliyatini erta boshladi. Toshkent Davlat universiteti (hozirgi Oʻzbekiston Milliy universiteti)ning jurnalistika kulliyotida oʻqish bilan baravar gazeta tahririyatida ishladi. 1959 yildan 1963 yilgacha “Temiryoʻlchi”, “Qizil Oʻzbekiston”, “Transportniy rabochiy” gazetalarida xat tashuvchi, mussaxhih, tarjimon boʻlib ishladi. Soʻng “Toshkent haqiqati” gazetasida adabiy xodim (1963–1966), “Toshkent oqshomi” gazetasida boʻlim mudiri (1966–1982), Gʻ. Gʻulom nomidagi Adabiyot va sanʼat nashriyotida bosh muharrir oʻrinbosari (1982–1985) boʻldi. 1985–1995 yillarda “Sharq yulduzi” jurnaliga bosh muharrirlik qildi. 1995 yildan 2005 yilgacha Oʻzbekiston Respublikasi Oliy Majlisining Matbuot va axborot qoʻmitasi raisi lavozimida ishladi. 2005 yildan “Teatr“ jurnalida bosh muharrir boʻlib ishladi.</p>
            </div>
            <div className="part2">
              <i class="bi bi-bookmark mark"> Ijodi</i>
              <p className='mark__text1'>Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor qaytmaydi“ qissasi boʻldi.</p>
            </div>
            <div className="part3">
              <h4 className='part3__text1'>Asarlari</h4>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default AuthorD