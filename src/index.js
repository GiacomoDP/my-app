import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
const books = [
  {
    author: "Prince Harry The Duke of Sussex",
    title: "Spare",
    img: "/images/immagine prova.jpg",
  },

  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book img={img} title={title} author={author} />;
      })}
    </section>
  );
};

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img}></img>
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
