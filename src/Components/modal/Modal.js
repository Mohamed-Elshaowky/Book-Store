import React, { useContext, useState } from "react";
import "./ModalCss.css";
import Rating from "../bookslider/Rating";
import { Link } from "react-router-dom";
import cartContext from "../../context/CartContext";

const Modal = ({ bookdata, setopenmodal }) => {
  const { image, title, inStock, rating, reviews, author, price, id } =
    bookdata;
  // Add to Cart
  const { addTocart } = useContext(cartContext);
  const [quantity, setQuntaty] = useState(1);
  return (
    <div onClick={() => setopenmodal(false)} className="modal-container">
      <div onClick={(e) => e.stopPropagation()} className="modal-content">
        <i
          onClick={() => setopenmodal(false)}
          className="bi bi-x-circle modal-icon"
        ></i>
        <div className="modal-content-img">
          <img src={`/books/${image}`} alt={title}></img>
        </div>
        <div className="modal-content-info">
          <h4 className="modal-content-info-title">{title}</h4>
          <div className="modal-content-info-stock">
            <b>Status: </b>
            {inStock ? "in stok" : "not in stock"}
          </div>
          <Rating rating={rating} reviews={reviews} />
          <div className="modal-content-info-author">
            <b>Author: </b>
            {author}
          </div>
          <div className="modal-content-inf-price">
            <b>Price: </b>
            {`$ ${price}`}
          </div>
          <div className="modal-add-to-cart">
            Buy Now
            <input
              type="number"
              min={1}
              max={100}
              className="modal-add-to-cart-input"
              onChange={(e) => setQuntaty(e.target.value)}
              value={quantity}
            ></input>
            <button
              className="modal-add-to-cart-btn"
              onClick={() => addTocart({ ...bookdata, quantity: quantity })}
            >
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>
          <div className="modal-content-info-div">
            <Link to={`/book/${id}`} className="modal-content-info-link">
              See More Details
            </Link>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Modal;
