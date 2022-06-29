import React from "react";
import Question from "./Question/Question";
import axios from "axios";
import Confetti from "react-confetti";
import "./Quiz.scss";

export default function Quiz(props) {
  const [questions, setQuestions] = React.useState([]);
  const [choices, setChoices] = React.useState([]);
  const [isDone, setIsDone] = React.useState(false);
  const [answers, setAnswers] = React.useState([]);
  const [isConfetti, setIsConfetti] = React.useState(false);

  React.useEffect(() => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple"
      )
      .then((res) => {
        setQuestions(res.data.results.map((obj) => obj.question));
        setChoices(
          res.data.results.map((obj) => [
            ...obj.incorrect_answers,
            obj.correct_answer,
          ])
        );
        setIsDone(true);
      });
  }, []);

  function isCorrect(e) {
    e.target.classList.add("selected");
    answers.push(e.target.textContent);
  }

  let checkAnswersStyle = {
    display: "flex",
  };

  let scoreReplayStyle = {
    display: "none",
  };

  function addAnswers(arr) {
    return arr.map((ans, ind) => (
      <p
        className={ind === 3 ? "answer correct-ans" : "answer"}
        key={ind}
        onClick={isCorrect}
      >
        {ans}
      </p>
    ));
  }

  function getScore() {
    let score = 0;
    choices.forEach((answer, ind) => {
      if (answers[ind] === answer[3]) {
        score++;
        document
          .getElementsByClassName("correct-ans")
          [ind].classList.add("correct");
      } else {
        document.getElementsByClassName("selected")[ind].classList.add("wrong");
        document
          .getElementsByClassName("selected")
          [ind].classList.add("selected");
        document
          .getElementsByClassName("correct-ans")
          [ind].classList.add("correct");
      }
    });
    const scoreSpan = document.querySelector("span.score");
    scoreSpan.textContent = score;
    document.querySelector(".check-answers").style.display = "none";
    document.querySelector(".score-replay").style.display = "flex";
    setIsConfetti(true);
  }

  function playAgain() {
    window.location.reload();
  }

  return (
    <main className="quiz" style={props.style}>
      {isConfetti && (
        <Confetti width={1500} height={2000} />
      )}
      {isDone && (
        <section className="que-component">
          <Question qu={questions[0]} />
          <div className="answers">{addAnswers(choices[0])}</div>
        </section>
      )}
      {isDone && (
        <section className="que-component">
          <Question qu={questions[1]} />
          <div className="answers">{addAnswers(choices[1])}</div>
        </section>
      )}
      {isDone && (
        <section className="que-component">
          <Question qu={questions[2]} />
          <div className="answers">{addAnswers(choices[2])}</div>
        </section>
      )}
      {isDone && (
        <section className="que-component">
          <Question qu={questions[3]} />
          <div className="answers">{addAnswers(choices[3])}</div>
        </section>
      )}
      {isDone && (
        <section className="que-component">
          <Question qu={questions[4]} />
          <div className="answers">{addAnswers(choices[4])}</div>
        </section>
      )}
      {isDone && (
        <section className="que-component">
          <Question qu={questions[5]} />
          <div className="answers">{addAnswers(choices[5])}</div>
        </section>
      )}
      {isDone && (
        <section className="que-component">
          <Question qu={questions[6]} />
          <div className="answers">{addAnswers(choices[6])}</div>
        </section>
      )}
      {isDone && (
        <section className="que-component">
          <Question qu={questions[7]} />
          <div className="answers">{addAnswers(choices[7])}</div>
        </section>
      )}
      {isDone && (
        <section className="que-component">
          <Question qu={questions[8]} />
          <div className="answers">{addAnswers(choices[8])}</div>
        </section>
      )}
      {isDone && (
        <section className="que-component">
          <Question qu={questions[9]} />
          <div className="answers">{addAnswers(choices[9])}</div>
        </section>
      )}
      <button
        type="button"
        className="check-answers"
        style={checkAnswersStyle}
        onClick={getScore}
      >
        Check answers
      </button>
      <section className="score-replay" style={scoreReplayStyle}>
        <p className="score">
          You scored<span className="score"></span>/
          <span className="total">10</span>correct answers
        </p>
        <button type="button" className="replay" onClick={playAgain}>
          Play again
        </button>
      </section>
    </main>
  );
}
