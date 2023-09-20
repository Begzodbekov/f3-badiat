import React from 'react'
import './Booksv.scss'
import BooksHero from '../../Components/BooksHero/BooksHero'
import BooksContent from '../../Components/BooksContent/BooksContent'
import Ormanto from '../../asests/img/tavsiya_ornament.png'
import TavsiyaKitoblar from '../../Components/TavsiyaKitoblar/TavsiyaKitoblar'

function Booksv() {

  return (
    <div className='Booksv'>
          <BooksHero/>
          <BooksContent/>
          <TavsiyaKitoblar/>
          <div className='booksv_bgul'>      
            <img src={Ormanto} alt="" />
          </div>

    </div>
  )
}

export default Booksv