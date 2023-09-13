import React, { useState } from 'react'
import AuthorImg1 from '../../asests/img/AuthorImg1.png'
import './AuthorD.scss'
import { bookData2 } from '../../lib/bookData2'
import { Link, useParams } from 'react-router-dom'
import { adibData } from '../../lib/data'
import { books } from '../../lib/bookData'
import Swiper from 'swiper'
function AuthorD() {
  const { slug } = useParams()
  console.log();

  const [author, setAuthor] = useState(adibData.find((item) => item.id == slug))
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
              <p className='part1__text2'>{author.title1}</p>
            </div>
            <div className="part2">
              <i class="bi bi-bookmark mark"> Ijodi</i>
              <p className='mark__text1'>{author.title2}</p>
            </div>
            <div className="part3">
              <span className='head__part3'>
              <h4 className='part3__text1'>Asarlari</h4>
              <Link className='see__all' to='/books'>Barchasini ko’rish</Link>
              </span>

              <br />
              <ul className='books__con'>

                {
                  books.filter((item) => item.adibId == slug).map((item) => (
                    <li className='books'>
                      <img className='books__img' width={164} src={item.img} alt="" />
                      <b className='books__title'>{item.name}</b>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default AuthorD