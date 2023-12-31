import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { bookData2 } from "../../lib/bookData2";
import "./BooksCategory.scss";
import { books } from "../../lib/bookData";
import Herop from "../Herop/Herop";
import { Context } from "../../Context/Context";
// import { bookData3 } from "../../lib/bookData3";
// import React, { useState, useEffect } from 'react';

function BooksCategory() {
  // const [isFavorite, setIsFavorite] = useState(false);
  // const handleClick = () => {
  //     // При клике на элемент <p>
  //     // Изменяем состояние и сохраняем его в локальное хранилище
  //     const updatedIsFavorite = !isFavorite;
  //     setIsFavorite(updatedIsFavorite);
  //     localStorage.setItem('isFavorite', updatedIsFavorite.toString());
  //   };
    
    // const {sevimlilar, setSevimlilar} = useContext(Context)
    // window.localStorage.setItem('yoqtirganlar' , JSON.stringify(sevimlilar))
    // console.log(sevimlilar);
    // console.log(JSON.parse(window.localStorage.getItem('yoqtirganlar')));
  // fn(JSON.parse(window.localStorage.getItem('yoqtirganlar')))
  let localData = []
  if(window.localStorage.getItem('localBook')){
    localData = JSON.parse(window.localStorage.getItem('localBook'))
  }
  function addlocalData (id){
    localData.push(books.find((item)=> item.id == id))
    window.localStorage.setItem('localBook', JSON.stringify(localData))
  }
  return (
    <div className="BooksCategory">
      <div className="container">
        
      <ul className="book_categories">
        {
          books?.map((item, index ) => (
            <li key={index} className="book_item">
            <Link to={`/book-view/${item.id}`}>
              <img className="book_img" src={item.img} alt="img" />
              <br />
              <span>{item.name}</span>
              <p>Otkir hoshimov</p>
              <div className="star">
                <div className="star_text">4.1 • 3400 ta fikrlar</div>

              </div>
            </Link>
            <button className="bookscategory_yurak"  onClick={()=> addlocalData(item.id)} >❤️</button>
          </li>
        ))}
      </ul>
        </div>
    </div>
  );
}

export default BooksCategory;
