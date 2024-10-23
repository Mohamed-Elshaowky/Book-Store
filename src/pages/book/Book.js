import React, { useContext, useState } from "react";
import { books } from "../../data/books";
import { useParams } from "react-router-dom";
import Rating from "../../Components/bookslider/Rating";
import "./BookCss.css";
import cartContext from "../../context/CartContext";

const Book = () => {
  // Functions Cart
  const { addTocart } = useContext(cartContext);
  const [quantity, setQuntaty] = useState(1);

  const { bookid } = useParams();
  const book = books.find((b) => b.id === +bookid); // parseInt(id) == + id
  console.log(book);
  return (
    <div className="book">
      <div className="book-conent">
        <img
          src={`/books/${book.image}`}
          alt={book.title}
          className="book-content-img"
        ></img>
        <div className="book-content-info">
          <div className="book-title">{book.title}</div>
          <div className="book-author">
            By <span>{book.author}</span> (Author)
          </div>
          <Rating
            className="book-rating"
            rating={book.rating}
            reviews={book.reviews}
          />
          <div className="book-stock">
            <b>Stock :</b> {book.inStock ? "in stock" : "not in stock"}
          </div>
          <div className="book-date">
            <b>Publicat in :</b> {book.PublicationDate}
          </div>
          <div className="book-add-to-cart">
            Buy Now
            <input
              type="number"
              min={1}
              max={100}
              className="book-add-to-cart-input"
              value={quantity}
              onChange={(e) => setQuntaty(e.target.value)}
            ></input>
            <button
              onClick={() => addTocart({ ...book, quantity: quantity })}
              className="book-add-to-cart-btn"
            >
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <p className="book-description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam soluta
        neque eveniet repudiandae necessitatibus doloremque, sint repellat,
        voluptates facere sapiente animi dolorem, ipsam culpa quos itaque iure
        modi atque ut.
      </p>
      <div className="book-icons">
        <div className="book-icon">
          <small>Print Length</small>
          <i className="bi bi-file-earmark-break"></i>
          <b>{book.printLength} Pages</b>
        </div>
        <div className="book-icon">
          <small>Language</small>
          <i className="bi bi-globe"></i>
          <b>{book.language}</b>
        </div>
      </div>
    </div>
  );
};

export default Book;
