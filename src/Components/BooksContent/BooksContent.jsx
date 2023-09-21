import React from "react";
import "./BooksContent.scss";
import tag from "../../asests/img/tag.png";
import like from "../../asests/img/like.png";
import send from "../../asests/img/send.png";

function BooksContent() {
  return (
    <div className="container">
      <div className="big_category">
        <div className="foot_link">
          <div className="tag_link">Muallif haqida</div>
          <div className="tag_link">Kitobdan iqtiboslar</div>
          <div className="tag_link">Kitobxonlar taqrizi</div>
        </div>

        <div className="comment_tag">
          <div className="comment_box">
            <img src={tag} alt="" className="tag_img" />
            <p className="comment">
              Inson bolasi ne kunlarni ko‘rmaydi?! <br /> Har bir odam o‘z g‘ami
              bilan bo‘lsa, hayotdan ko‘z yumib ketganlarga umr bo‘yi motam
              tutib o‘tsa, bu moddiy olam shu kunlarga yetolarmidi? <br /> Hayot
              to‘lqini ojizlarni qirg‘oqqa irg‘itib tashlaydi. Oqimga qarshi
              suza olganlar, to‘lqinni egarlaganlargina ertangi kunga yetib
              keladi.
            </p>
            <div className="icon">
              <img src={like} alt="" className="like" />
              <img src={send} alt="" className="send" />
            </div>
          </div>

          <div className="comment_box">
            <img src={tag} alt="" className="tag_img" />
            <p className="commentb">
              Yer kurrasida chumolidek mehnat qilayotganlardan ko‘ra, tuproq
              tagida <br /> yotganlar ko‘p. Yer qatlami odam suyaklariga to‘lib
              ketgan.
            </p>
            <div className="icon">
              <img src={like} alt="" className="like" />
              <img src={send} alt="" className="send" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BooksContent;
