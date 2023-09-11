import React from 'react'
import { adibData } from '../../lib/data'
import './Categories.scss'
function Categories() {
    return (
        <div className='Categories'>
            <div className="container">
                <div className="categories__inner">
                   
                    <ul className='categories__list'>
                        {
                            adibData?.map((item,index)=>(
                                <li key={index} className='categories__item'>
                                     <img src={item.img} alt="img" />
                                     <span>{item.name}</span>
                                     <p>{item.age}</p>
                                    <div className="categories__item__bottom">
                                        <span>
                                        <i class="bi bi-file-earmark-spreadsheet">{item.bookCount}</i>
                                        
                                        </span>
                                        <span>
                                        <i class="bi bi-headphones">{item.bookCount}</i>
                                        </span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Categories
