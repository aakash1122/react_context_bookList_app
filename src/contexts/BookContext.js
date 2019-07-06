import React, { useReducer, createContext, useEffect } from "react";
import { bookReducer } from "../reducers/BookReducer";

export const BookContext = createContext();

export default function BookContextProvider(props) {
  // Creating the Book Context for data
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const result = JSON.parse(localStorage.getItem("books"));
    return result.length ? result : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
}
