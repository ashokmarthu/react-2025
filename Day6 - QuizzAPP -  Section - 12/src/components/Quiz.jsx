import React, { useState } from "react";
import QUESTIONS from "../utils.js/questions";
import QUIZ_COMPLETED_IMG from "../assets/quiz-complete.png";
const Quiz = () => {
  const [userAnswers, setuserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizCompleted = QUESTIONS.length === activeQuestionIndex;

  const handleAnswers = (selectedAnswer) => {
    setuserAnswers((prevAnswer) => [...prevAnswer, selectedAnswer]);
  };
  if (quizCompleted) {
    return (
      <div id="summary">
        <img src={QUIZ_COMPLETED_IMG} alt="quiz-completed-img" />
        <h2>QUIZZ Completed</h2>
      </div>
    );
  }
  const shuffledAnswers = QUESTIONS[activeQuestionIndex].answers;
  shuffledAnswers.sort(() => Math.random() - 0.5);
  return (
    <div id="quiz">
      <div id="question">
        <h2> {QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => {
            return (
              <li key={answer} className="answer">
                <button onClick={() => handleAnswers(answer)}>{answer}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
