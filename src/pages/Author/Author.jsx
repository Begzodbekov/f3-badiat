import React from 'react'
import AuthorD from '../../Components/AuthorD/AuthorD'
import { useLocation, useParams } from 'react-router-dom'
import { bookData2 } from '../../lib/bookData2';
import { books } from '../../lib/bookData';

function Author() {
  const {slug} = useParams()
  console.log(slug);
  console.log(books);
  console.log(books.filter((item)=> item.adibId == slug));
  return (
    <div>
        <AuthorD/>
    </div>
  )
}

export default Author