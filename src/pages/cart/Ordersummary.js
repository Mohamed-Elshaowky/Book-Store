import React from "react";

const Ordersummary = ({ totalprice }) => {
  return (
    <div className="cart-order-summary">
      <div className="order-summary-title">ORDER SUMMARY</div>
      <div className="order-summary-item">
        <span>Subtotal </span>
        <span>${totalprice}</span>
      </div>
      <div className="order-summary-item">
        <span>Shopping Cost </span>
        <span>0</span>
      </div>
      <div className="order-summary-item">
        <span>Discount </span>
        <span>0</span>
      </div>
      <div className="order-summary-item">
        <span>Total </span>
        <span>${totalprice}</span>
      </div>
    </div>
  );
};

export default Ordersummary;
