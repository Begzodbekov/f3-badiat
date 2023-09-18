import React, { useState } from 'react'
import './BooksHero.scss'
import Hozircha from '../../asests/img/AuthorImg1.png'
import { useParams } from 'react-router-dom'
// import { adibData } from '../../lib/data'
import Qorqma from '../../asests/img/Qo’rqma.png'
import Rate from '../../asests/img/books_rate.png'
import Kitob from '../../asests/img/books-kitob.png'
import Audio from '../../asests/img/books_audio.png'
import Elektron from '../../asests/img/books_elektron.png'
import { books } from '../../lib/bookData'
function BooksHero() {
  const {slug} = useParams()
  const [kitoblar, setKitoblar] = useState(books.find((item)=> item.id == slug))

  return (
    <div className='BooksHero'>
          <div className="container">
                    <div className="bookshero_inner">
                              <div className="bookshero_left">
                                        <img src={kitoblar.img} alt="" />
                              </div>
                              <div className="bookshero_right">
                                <img src={Qorqma} alt="" />
                                <div className='books_ri_item1'>
                                  <h3>Javlon Jovliyev</h3>
                                  <div className='books_ri_span'></div>
                                 <img src={Rate} alt="" />
                                </div>
                                <ul className='books_ri_list'>
                                  <li>Sahifalar soni: <span className='book_r_lists'>{kitoblar.pages}</span></li>
                                  <li>Chop etilgan: <span className='book_r_lists'>2021</span> </li>
                                  <li>Janri: <span className='book_r_lists'>{kitoblar.category}</span> </li>
                                  <li>Nashriyot <span className='book_r_lists'>{kitoblar.nashiryot}</span> </li>
                                </ul>
                                <div className='books_ri_malumot'>
                                  <p>To’liq ma’lumot</p>
                                  <i class="bi bi-arrow-down bi_booksh_down"></i>
                                  <span></span>
                                </div>
                                <div className='books_ri_description'>
                                  <p className='books_ri_descriptioni1'>Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг хотирасига бағишланади.</p>
                                  <p className='books_ri_descriptioni2'> Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат, кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради. Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.</p>
                                </div>
                                <h4 className='books_ri_format'>Mavjud formatlar</h4>
                                <div className='books_ri_yuklash'>
                                  <div className='books_ri_yuklash_item1'>
                                    <img src={Kitob} alt="" />
                                    <h4>Qog’oz kitob</h4>
                                    <p>{kitoblar.priceQ} so’m</p>
                                  </div>
                                  <div className='books_ri_yuklash_item2'>
                                    <img src={Audio} alt="" />
                                    <h4>Audiokitob</h4>
                                    <p>6:23 soat</p>
                                  </div>
                                  <div className='books_ri_yuklash_item3'>
                                    <img src={Elektron} alt="" />
                                    <h4>Elektron</h4>
                                    <p>pdf, epub</p>
                                  </div>
                                  <button className='books_ri_qoshish'>Javonga qo’shish </button>
                                </div>
                              </div>
                    </div>
          </div>
    </div>
  )
}

export default BooksHero