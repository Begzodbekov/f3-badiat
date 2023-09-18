import React from "react";
import { Link } from "react-router-dom";
import { bookData2 } from "../../lib/bookData2";
import "./BooksCategory.scss";
import { books } from "../../lib/bookData";
// import { bookData3 } from "../../lib/bookData3";

function BooksCategory() {
  return (
    <div>

      <ul className="book_categories">
        {
        books?.map((item, index) => (
          <li key={index} className="book_item">
            <Link to={`/Home/${item.id}`}>
              <img className="book_img" src={item.img} alt="img" />
              <br />
              <span>{item.name}</span>
              <p>Otkir hoshimov</p>
              <div className="star">
                
                <p>❤️</p>
                <div className="star_text">4.1 • 3400 ta fikrlar</div>

              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BooksCategory;
