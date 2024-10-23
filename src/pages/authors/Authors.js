import React, { useState } from "react";
import "./AuthorsCss.css";
import { authors } from "../../data/authors";

const Authors = () => {
  const [searchValue, setSearchvalue] = useState("");

  return (
    <section className="authors">
      <div className="authors-search-wrapper">
        <input
          className="authors-search-input"
          type="search"
          placeholder="Search in authors"
          onChange={(e) => setSearchvalue(e.target.value)}
          value={searchValue}
        ></input>
      </div>
      <div className="authors-wrapper">
        {authors
          .filter((author) =>
            author.name
              .toLocaleLowerCase()
              .includes(searchValue.toLocaleLowerCase())
          )
          .map((author) => (
            <div key={author.id} className="author">
              <img
                className="author-img"
                src={author.image}
                alt={author.name}
              ></img>
              <h2 className="author-name">{author.name}</h2>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Authors;
