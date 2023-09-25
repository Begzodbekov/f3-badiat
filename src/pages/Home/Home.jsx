import React from 'react'
import Search from '../../Components/Search/Search'
import Categories from '../../Components/Categories/Categories'
import Hero from '../../Components/Hero/Hero'

function Home() {
  return (
    <div className='Home'>
       <Hero/>
      <Search />
      <Categories/>
    </div>
  )
}

export default Home