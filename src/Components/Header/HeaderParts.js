import React, { useState } from "react";
import "./Header.css";
import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import Navbar from "./Navbar";

const Header = ({ searchValue, setSearchvalue }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header">
      <HeaderTop setToggle={setToggle} />
      <HeaderMiddle searchValue={searchValue} setSearchvalue={setSearchvalue} />
      <Navbar toggle={toggle} setToggle={setToggle} />
    </header>
  );
};

export default Header;
