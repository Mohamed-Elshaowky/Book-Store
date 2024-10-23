import HomePage from "./pages/home/HomePage";
import Footer from "./Components/footer/Footer";
import Header from "./Components/Header/HeaderParts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Authors from "./pages/authors/Authors";
import Book from "./pages/book/Book";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";
import Register from "./pages/forms/Register";
import Login from "./pages/forms/Login";
import { useState } from "react";
function App() {
  const [searchValue, setSearchvalue] = useState("");

  return (
    <BrowserRouter>
      <Header searchValue={searchValue} setSearchvalue={setSearchvalue} />
      <Routes>
        <Route path="/" element={<HomePage searchValue={searchValue} />} />
        <Route path="/about" element={<About />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book/:bookid" element={<Book />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
