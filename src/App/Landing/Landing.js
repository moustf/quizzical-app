import React from "react";
import ReactDOM from "react-dom/client";

export default function Landing() {
  return (
    <section className="landing">
      <h1 className="landing__title">Quizzical</h1>
      <p className="landing__para">
        An app for taking a quick quiz on sports topic.
      </p>
      <button className="landing__start-game" type="button">
        Start quiz
      </button>
    </section>
  );
}
