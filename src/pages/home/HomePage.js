import React from "react";
import BookSlider from "../../Components/bookslider/BookSlider";
import HeadingTitle from "../../Components/HeadingTitle";
import Services from "../../Components/services/Services";
import Slider from "../../Components/slider/Slider";
import { books } from "../../data/books";

const booksrat = [...books].sort((a, b) => b.rating - a.rating);
const bookscheap = [...books].sort((a, b) => a.price - b.price);

const HomePage = ({ searchValue }) => {
  return (
    <div className="home">
      <Slider />
      <Services />
      <HeadingTitle title="Most Gifed" />
      <BookSlider books={books} searchValue={searchValue} />
      <HeadingTitle title="Most Rating" />
      <BookSlider books={booksrat} searchValue={searchValue} />
      <HeadingTitle title="less expensive" />
      <BookSlider books={bookscheap} searchValue={searchValue} />
    </div>
  );
};

export default HomePage;
