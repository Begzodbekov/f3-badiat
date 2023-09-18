import React from 'react'
import './Booksv.scss'
import BooksHero from '../../Components/BooksHero/BooksHero'
import BooksContent from '../../Components/BooksContent/BooksContent'

import TavsiyaKitoblar from '../../Components/TavsiyaKitoblar/TavsiyaKitoblar'

function Booksv() {

  return (
    <div className='Booksv'>
          <BooksHero/>
          <BooksContent/>
          <TavsiyaKitoblar/>
    </div>
  )
}

export default Booksv