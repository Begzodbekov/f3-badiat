import React, { useContext, useState } from 'react'
import './Search.scss'
import { adibData } from '../../lib/data'

function Search() {
    let arrCategory = []
    adibData.forEach((item)=>{
        if(!arrCategory.find((i)=> i == item.from)){
        arrCategory.push(item.from)
        }

    })
    const [active , setActive]=useState(0)
    // const [from,setFrom ]=useContext('Temuriylar davri ')

    return (
        <div className='Search'>
            <div className="container">
                <div className="search__inner">
                    <div className="search__text">
                        <h3>
                            Qidirish
                        </h3>

                    </div>
                    <div className="search__inp-btn">
                        <input type="text" placeholder='Adiblar, kitoblar, audiolar, maqolalar...' />
                        <button><i className="bi bi-search"></i> Izlash</button>
                    </div>
                   
                </div>
                
            </div>
            <div className="container">
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
                                    // setFrom(item)
                                }} className={active == index?'actives': 'li'} key={index}>
                                    {item}
                                </button>
                            ))
                        }
                        </div>
                        <ul>




                            {/* <li onClick={()=>setActive(1)} className={active == 1?'actives': 'li'}   >
                                Temuriylar davri
                            </li>
                            <li onClick={()=>setActive(2)} className={active == 2?'actives': 'li'}>
                                Jadid adabiyoti
                            </li>
                            <li onClick={()=>setActive(3)} className={active == 3?'actives': 'li'}>
                                Sovet davri
                            </li>
                            <li onClick={()=>setActive(4)} className={active == 4?'actives': 'li'}>
                                Mustaqillik davri
                            </li> */}
                        </ul>
                    </div>
                   </div>
            </div>
        </div>
    )
}

export default Search
