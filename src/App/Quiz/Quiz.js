import React from "react";
import Data from "../../data";
import Question from "./Question/Question";
import "./Quiz.scss";

export default function Quiz(props) {
  const [data, setData] = React.useState(Data.results);
  const [isShown, setIsShown] = React.useState(false);

  const checkAnswersStyle = {
    display: isShown ? "none" : "flex",
  };

  const scoreReplayStyle = {
    display: isShown ? "flex" : "none",
  };

  function addAnswers(arr) {
     return arr.map((ans, ind) => <p className="answer" key={ind}>{ans}</p>)
  }

  return (
    <main className="quiz" style={props.style}>
      <section className="que-component">
        <Question qu={data[0].question} />
        <div className="answers">
          {addAnswers(data[0].incorrect_answers)}
          <p className="answer">{data[0].correct_answer}</p>
        </div>
      </section>
      <section className="que-component">
        <Question qu={data[1].question} />
        <div className="answers">
          {addAnswers(data[1].incorrect_answers)}
          <p className="answer">{data[1].correct_answer}</p>
        </div>
      </section>
      <section className="que-component">
        <Question qu={data[2].question} />
        <div className="answers">
          {addAnswers(data[2].incorrect_answers)}
          <p className="answer">{data[2].correct_answer}</p>
        </div>
      </section>
      <section className="que-component">
        <Question qu={data[3].question} />
        <div className="answers">
          {addAnswers(data[3].incorrect_answers)}
          <p className="answer">{data[3].correct_answer}</p>
        </div>
      </section>
      <section className="que-component">
        <Question qu={data[4].question} />
        <div className="answers">
          {addAnswers(data[4].incorrect_answers)}
          <p className="answer">{data[4].correct_answer}</p>
        </div>
      </section>
      <section className="que-component">
        <Question qu={data[5].question} />
        <div className="answers">
          {addAnswers(data[5].incorrect_answers)}
          <p className="answer">{data[5].correct_answer}</p>
        </div>
      </section>
      <section className="que-component">
        <Question qu={data[6].question} />
        <div className="answers">
          {addAnswers(data[6].incorrect_answers)}
          <p className="answer">{data[6].correct_answer}</p>
        </div>
      </section>
      <section className="que-component">
        <Question qu={data[7].question} />
        <div className="answers">
          {addAnswers(data[7].incorrect_answers)}
          <p className="answer">{data[7].correct_answer}</p>
        </div>
      </section>
      <section className="que-component">
        <Question qu={data[8].question} />
        <div className="answers">
          {addAnswers(data[8].incorrect_answers)}
          <p className="answer">{data[8].correct_answer}</p>
        </div>
      </section>
      <section className="que-component">
        <Question qu={data[9].question} />
        <div className="answers">
          {addAnswers(data[9].incorrect_answers)}
          <p className="answer">{data[9].correct_answer}</p>
        </div>
      </section>
      <button type="button" className="check-answers" style={checkAnswersStyle}>
        Check answers
      </button>
      <section className="score-replay" style={scoreReplayStyle}>
        <p className="score">
          You scored<span className="score">3</span>/
          <span className="total">10</span>correct answers
        </p>
        <button type="button" className="replay">
          Play again
        </button>
      </section>
    </main>
  );
}
