import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Thriller: [
    { name: "Sacred Games" },
    { name: "Byomkesh Bakshi" },
    { name: "If God was a Banker " },
    { name: "Murder In A Minute" },
    { name: "Patang" }
  ],

  Romance: [
    {
      name: "The One You Cannot Have"
    },
    {
      name: "I Too Had a Love Story"
    },
    {
      name: "This Is Not Your Story"
    },
    {
      name: "The Girl of My Dreams"
    },
    {
      name: "Sorry You're Not My Type"
    }
  ],
  business: [
    {
      name: "Bhaag"
    },
    {
      name: "Connect The Dots"
    },
    {
      name: "Dreams With Your Eyes Open"
    },
    {
      name: "Dhirubhai Ambani:Against All odds"
    },
    {
      name: "Steel King:Lakshmi Mittal"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> By Indian Authors </h1>
      <p style={{ fontSize: "smaller" }}> Checkout Best Collection of Books </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#C6DD70",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "2px solid #5A6922",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
