import React from "react";
import ReactDOM from "react-dom/client";
import StartBtn from "./StartBtn/StartBtn";
import "./Landing.scss";

export default function Landing(props) {
  const style = {
    display: props.isHidden ? "none" : "flex",
  };

  return (
    <section className="landing" style={style}>
      <h1 className="landing__title">Quizzical</h1>
      <p className="landing__para">
        An app for taking a quick quiz on sports topic.
      </p>
      <StartBtn fn={props.fn} />
    </section>
  );
}
