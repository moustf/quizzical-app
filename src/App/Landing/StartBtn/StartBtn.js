import React from "react";
import ReactDOM from "react-dom/client";
import "./StartBtn.scss";

export default function StartBtn(props) {
    return (
        <button className="landing__start-game" type="button" onClick={props.fn}>
        Start quiz
      </button>
    );
}