import React, { useState } from "react";
import "./SliderCss.css";
import FristBook from "../../images/book1.png";
import SecondBook from "../../images/book2.png";
import ThirdBook from "../../images/book3.png";
const Slider = () => {
  const [slideindex, setSlideindex] = useState(0);
  const handleleft = (direction) => {
    if (direction === "left") {
      setSlideindex(slideindex - 1);
    } else {
      setSlideindex(slideindex + 1);
    }
  };
  return (
    <div className="slider-container">
      {slideindex !== 0 && (
        <i
          onClick={() => handleleft("left")}
          className="bi bi-chevron-double-left arrow-left"
        ></i>
      )}
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(${slideindex * -100}vw)` }}
      >
        <div className="slide frist-slide">
          <div className="slide-img-wrapper">
            <img src={FristBook} alt=""></img>
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title"> Book Store</h1>
            <p className="slide-info-desc">
              It's not just reading. It's living the adventure.
            </p>
          </div>
        </div>
        <div className="slide second-slide">
          <div className="slide-img-wrapper">
            <img src={SecondBook} alt=""></img>
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title"> Book For Every One</h1>
            <p className="slide-info-desc">You can alwasy read any where.</p>
          </div>
        </div>
        <div className="slide third-slide">
          <div className="slide-img-wrapper">
            <img src={ThirdBook} alt=""></img>
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">Chech Out The New Books</h1>
            <p className="slide-info-desc">We send you the book you want.</p>
          </div>
        </div>
      </div>
      {slideindex !== 2 && (
        <i
          onClick={() => handleleft("right")}
          className="bi bi-chevron-double-right arrow-right"
        ></i>
      )}
    </div>
  );
};

export default Slider;
