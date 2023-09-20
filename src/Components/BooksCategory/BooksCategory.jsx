import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { bookData2 } from "../../lib/bookData2";
import "./BooksCategory.scss";
import { books } from "../../lib/bookData";
import Herop from "../Herop/Herop";
// import { bookData3 } from "../../lib/bookData3";

function BooksCategory() {
  // const Yurakref = useRef()
  // console.log(Yurakref);
  // const [array, setArray] = useState([])
  // // const Array = []
  // function fn (item){
  //   // console.log(item.target);
  //   array.push(Yurakref)
  //   console.log(array);
  // }
  const [liked, setLiked ] = useState([])
  console.log(liked);
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
            <button onClick={()=>{
              setLiked(item)
            }} >❤️</button>
          </li>
        ))}
      </ul>
        </div>
        {/* <Herop data={liked}/> */}
    </div>
  );
}

export default BooksCategory;
