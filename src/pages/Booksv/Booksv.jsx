import React from 'react'
import BooksHero from '../../Components/BooksHero/BooksHero'
import BooksContent from '../../Components/BooksContent/BooksContent'
import { useParams } from 'react-router-dom'

function Booksv() {

  return (
    <div className='Booksv'>
          <BooksHero/>
          <BooksContent/>
    </div>
  )
}

export default Booksv