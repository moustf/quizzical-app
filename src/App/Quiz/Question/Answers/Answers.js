import React from "react";
import "./Answers.scss";

export default function Answers(props) {
  const answersArr = props.answers.map((txt, ind) => (
    <p className="answer" key={ind}>{txt}</p>
  ));
  return <div className="answers">{answersArr}</div>;
}
