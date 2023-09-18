import React from 'react'
import BooksCategory from '../../Components/BooksCategory/BooksCategory'
import Hero from '../../Components/Hero/Hero'
import Search from '../../Components/Search/Search'
import './Books.scss'
function Books() {
  return (
    <div className='Books'>
      <Hero/>
      <Search/>
      <BooksCategory/>
    </div>

  )
}

export default Books