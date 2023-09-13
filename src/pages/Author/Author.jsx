import React from 'react'
import AuthorD from '../../Components/AuthorD/AuthorD'
import { useLocation, useParams } from 'react-router-dom'
import { bookData2 } from '../../lib/bookData2';
import { books } from '../../lib/bookData';

function Author() {
  const {slug} = useParams()
  // console.log(slug);
  // console.log(books);
  // console.log(books.filter((item)=> item.adibId == slug));
  return (
    <div>
        <AuthorD/>
<<<<<<< HEAD

=======
>>>>>>> 4394062f560ad2fd812743900fa273f8cbd93c21
    </div>
  )
}

export default Author