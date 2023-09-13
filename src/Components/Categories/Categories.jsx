import React from 'react'
import { adibData } from '../../lib/data'
import './Categories.scss'
import { Link } from 'react-router-dom'
function Categories() {
    return (
        <div className='Categories'>
            <div className="container">
                <div className="categories__inner">
                   
                    <ul className='categories__list'>
                        {
                            adibData?.map((item,index)=>(
                                <li  key={index} className='categories__item'>
                                    <Link to={`/author/${item.id}`}>
                                        <img src={item.img} alt="img" />
                                        <span className='name'>{item.name}</span>
                                        <p className='age'>{item.age}</p>
                                        <div className="categories__item__bottom">
                                            <span>
                                            <i className="bi bi-file-earmark-spreadsheet"></i>
                                            <p>
                                                {item.bookCount}
                                            </p>
                                            </span>
                                            <span>
                                            <i className="bi bi-headphones"></i>
                                            <p>{item.bookCount}</p>
                                            </span>
                                        </div>
                                    </Link>
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
