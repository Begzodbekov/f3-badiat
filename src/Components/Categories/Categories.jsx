import React, { useContext, useState } from 'react'
import { adibData } from '../../lib/data'
import './Categories.scss'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'
import { useRef } from 'react'

function Categories({  }) {
    const {from} =useContext(Context)
    const {search, setSearch} = useContext(Context)
    const Liref = useRef()
    return (
        
        <div className='Categories'>
            <div className="container">
                <div className="categories__inner">
                   
                    <ul className='categories__list'>
                        {
                                adibData?.filter((item)=> item.name.includes(search) && item.from == from).map((item,index)=>(
                                
                                <li ref={Liref} key={index} className='categories__item'>
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
                                            <p></p>
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
