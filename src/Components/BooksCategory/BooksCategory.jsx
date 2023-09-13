import React from "react";
import "./BooksCategory.scss";

function BooksCategory() {
  return (
    <div>
      <ul className="book_categories">
        {bookData2?.map((item, index) => (
          <li key={index} className="book_categories__item">
            <img src={item.img} alt="img" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BooksCategory;
