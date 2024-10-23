import React, { useContext, useEffect, useRef, useState } from "react";
import "./BookSliderCss.css";
import { motion } from "framer-motion";
import Rating from "./Rating";
import Modal from "../modal/Modal";
import cartContext from "../../context/CartContext";

const BookSlider = ({ books, searchValue }) => {
  const carouseRef = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(carouseRef.current.scrollWidth - carouseRef.current.offsetWidth);
  }, []);

  // Model Function
  const [openmodal, setopenmodal] = useState(false);
  const [bookdata, setbookdata] = useState(null);
  // Handle Modal
  const handlemodal = (book) => {
    setopenmodal(true);
    setbookdata(book);
  };
  // Add to Cart
  const { addTocart } = useContext(cartContext);
  return (
    <motion.div ref={carouseRef} className="bookslider-container">
      <motion.div
        className="bookslider-wrapper"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {books
          .filter((book) =>
            book.title
              .toLocaleLowerCase()
              .includes(searchValue.toLocaleLowerCase())
          )
          .map((item) => (
            <motion.div key={item.id} className="book-slide-item">
              <img
                className="book-slide-item-image"
                src={`/books/${item.image}`}
                alt={item.title}
              ></img>
              <h3 className="book-slide-item-title"> {item.title}</h3>
              <Rating rating={item.rating} reviews={item.reviews} />
              <div className="book-slide-item-price">${item.price}</div>
              <div className="book-slide-icons-wrapper">
                <i className="bi bi-eye" onClick={() => handlemodal(item)}></i>
                <i
                  onClick={() =>
                    addTocart({
                      ...item,
                      quantity: +1,
                    })
                  }
                  className="bi bi-cart-plus"
                ></i>
              </div>
            </motion.div>
          ))}
      </motion.div>
      {openmodal && <Modal bookdata={bookdata} setopenmodal={setopenmodal} />}
    </motion.div>
  );
};

export default BookSlider;
