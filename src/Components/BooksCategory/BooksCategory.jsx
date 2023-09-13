import React from "react";
import { Link } from "react-router-dom";
import { bookData2 } from "../../lib/bookData2";
import Hero from "../Hero/Hero";
import Search from "../Search/Search";
import "./BooksCategory.scss";

function BooksCategory() {
  return (
    <div>
      <Hero/>
      <Search/>
      <ul className="book_categories">
        {bookData2?.map((item, index) => (
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
