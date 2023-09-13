import React from 'react'
import './BooksHero.scss'
import Hozircha from '../../asests/img/AuthorImg1.png'
import { useParams } from 'react-router-dom'
function BooksHero() {
  const {slug} = useParams()
  // const [booksv]
  const [author, setAuthor] = useState(adibData.find((item)=> item.id == slug))

  return (
    <div className='BooksHero'>
          <div className="container">
                    <div className="bookshero_inner">
                              <div className="bookshero_left">
                                        <img src={Hozircha} alt="" />
                              </div>
                              <div className="bookshero_right">
                                <h1>Qo’rqma</h1>
                              </div>
                    </div>
          </div>
    </div>
  )
}

export default BooksHero