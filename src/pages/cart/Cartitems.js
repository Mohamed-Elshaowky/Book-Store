import { Link } from "react-router-dom";

const Cartitem = ({ cartItems, removeFromcart, addTocart }) => {
  // Cart Functions
  return (
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              className="cart-item-img"
              src={`/books/${item.image}`}
              alt={item.title}
            ></img>
            <div className="cart-item-info">
              <div>
                <div className="cart-item-book-title">
                  <b>Title:</b> {item.title}
                </div>
                <div className="cart-item-book-author">
                  <b>Author:</b> {item.author}
                </div>
              </div>
              <div className="cart-item-quantityprice">
                <div className="cart-item-quantity">
                  <button
                    className=""
                    onClick={() =>
                      addTocart({
                        ...item,
                        quantity: parseInt(item.quantity) + 1,
                      })
                    }
                  >
                    <i className="bi bi-plus-lg"></i>
                  </button>
                  <b>{item.quantity}</b>
                  <button
                    className=""
                    disabled={item.quantity <= 1}
                    onClick={() =>
                      addTocart({
                        ...item,
                        quantity: parseInt(item.quantity) - 1,
                      })
                    }
                  >
                    <i className="bi bi-dash-lg"></i>
                  </button>
                </div>
                <div className="cart-item-price">
                  <div className="cart-priceone">${item.price}</div>
                  <div className="cart-totalprice">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
                <i
                  onClick={() => removeFromcart(item.id)}
                  className="bi bi-trash-fill"
                ></i>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="cart-empty">
          <h2>Your Cart is Empty</h2>
          <Link to="/">Buy Now</Link>
        </div>
      )}
    </div>
  );
};

export default Cartitem;
