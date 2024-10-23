import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cartContext from "../../context/CartContext";

const HeaderMiddle = ({ searchValue, setSearchvalue }) => {
  const { cartItemsLength } = useContext(cartContext);
  return (
    <div className="header-middle">
      <div className="header-middle-logo">
        <b>Book</b>
        <i className="bi bi-book"></i>
        <b>Store</b>
      </div>
      <div className="header-middle-search-box">
        <input
          className="header-middle-search-box-input"
          type="search"
          placeholder="Search In Book Store"
          value={searchValue}
          onChange={(e) => setSearchvalue(e.target.value)}
        ></input>
        <i className="bi bi-search"></i>
      </div>
      <Link to="/cart" className="header-middle-cart">
        {cartItemsLength > 0 && (
          <b className="cart-notification">{cartItemsLength}</b>
        )}
        <i className="bi bi-cart"></i>
      </Link>
    </div>
  );
};

export default HeaderMiddle;
