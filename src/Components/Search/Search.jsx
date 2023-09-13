import React from 'react'
import './Search.scss'

function Search() {
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
            <div className="bottom">
                   <div className="categories__top">
                        <h2>
                            Asosiy kategoriyalar
                        </h2>
                    </div>
                    <div className="categories__center">
                        <ul>
                            <li>
                                Temuriylar davri
                            </li>
                            <li>
                                Jadid adabiyoti
                            </li>
                            <li>
                                Sovet davri
                            </li>
                            <li>
                                Mustaqillik davri
                            </li>
                        </ul>
                    </div>
                   </div>
        </div>
    )
}

export default Search
