import React from "react";
import Data from "../../data";
import Question from "./Question/Question";
import Answers from "./Question/Answers/Answers";
import "./Quiz.scss";

export default function Quiz(props) {
  const [data, setData] = React.useState(Data.results);

  return (
    <main className="quiz" style={props.style}>
      <Question qu={data[0].question} />
      <Answers
        answers={[...data[0].incorrect_answers, data[0].correct_answer]}
      />
      <Question qu={data[1].question} />
      <Answers
        answers={[...data[1].incorrect_answers, data[1].correct_answer]}
      />
      <Question qu={data[2].question} />
      <Answers
        answers={[...data[2].incorrect_answers, data[2].correct_answer]}
      />
      <Question qu={data[3].question} />
      <Answers
        answers={[...data[3].incorrect_answers, data[3].correct_answer]}
      />
      <Question qu={data[4].question} />
      <Answers
        answers={[...data[4].incorrect_answers, data[4].correct_answer]}
      />
      <Question qu={data[5].question} />
      <Answers
        answers={[...data[5].incorrect_answers, data[5].correct_answer]}
      />
      <Question qu={data[6].question} />
      <Answers
        answers={[...data[6].incorrect_answers, data[6].correct_answer]}
      />
      <Question qu={data[7].question} />
      <Answers
        answers={[...data[7].incorrect_answers, data[7].correct_answer]}
      />
      <Question qu={data[8].question} />
      <Answers
        answers={[...data[8].incorrect_answers, data[8].correct_answer]}
      />
      <Question qu={data[9].question} />
      <Answers
        answers={[...data[9].incorrect_answers, data[9].correct_answer]}
      />
    </main>
  );
}
