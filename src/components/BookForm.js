import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const BookForm = () => {
  const { dispatch } = useContext(BookContext);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const submithandler = e => {
    e.preventDefault();
    dispatch({ type: "ADD_BOOK", book: { title, author } });
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={submithandler}>
      <input
        type="text"
        placeholder="Book Title"
        onChange={e => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        placeholder="Book Author"
        onChange={e => setAuthor(e.target.value)}
        value={author}
      />
      <input type="submit" />
    </form>
  );
};

export default BookForm;
