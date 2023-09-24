import React, { useContext, useRef, useState } from 'react'
import './Search.scss'
import { adibData } from '../../lib/data'
import { Context } from '../../Context/Context'
import Categories from '../Categories/Categories'

function Search() {
    const ref = useRef()
    let arrCategory = []
    adibData.forEach((item)=>{
        if(!arrCategory.find((i)=> i == item.from)){
        arrCategory.push(item.from)
        }

    })
    const [active , setActive]=useState(0)
    const {from,setFrom}= useContext(Context)
    // console.log(arrCategory);
    return (
        <div className='Search'>
            <div className="container">
                <div className="search__inner">
                    <div className="search__text">
                        <h1>Qidirish</h1>
                        <div className='search_inputq'>
                            <input ref={ref} type="text" placeholder='Adiblar, kitoblar, audiolar, maqolalar...'/>
                            <button><i class="bi bi-search"></i> Izlash</button>
                        </div>
                    </div>
                   
                    <div className="bottom">
                     <div className="categories__top">
                          <h2>
                              Asosiy kategoriyalar
                          </h2>
                      </div>
                      <div className="categories__center">
                          <div className="ul">
                          {
                              arrCategory?.map((item,index)=>(
                                  <button onClick={()=>{
                                      setActive(index)
                                      setFrom(item)
                                  }} className={active == index?'actives': 'li'} key={index}>
                                      {item}
                                  </button>
                              ))
                          }
                          </div>
                      </div>
                   </div>
            </div>
            </div>
        </div>
    )
}

export default Search
