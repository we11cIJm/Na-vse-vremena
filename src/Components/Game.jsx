import React, {useRef, useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import data from "../Content/questions";
import { Badge, Button } from "@salutejs/plasma-ui";
import {useDefaultSectionFocus, useSection} from '@salutejs/spatial';
import { saveAnswer, getAnswers } from '../indexedDB';

const Game = React.forwardRef((props, ref) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [ansProps] = useSection('ans');
  const assistantRef = useRef();
  const type = location.state.Type;

  useDefaultSectionFocus('ans');

  let gameClass = "";
  let header = "";
  let questions = [];

  switch (type) {
    case 1:
      gameClass = "past";
      header = "Past";
      questions = data.past.questions;
      break;
    case 2:
      gameClass = "present";
      header = "Present";
      questions = data.present.questions;
      break;
    case 3:
      gameClass = "future";
      header = "Future";
      questions = data.future.questions;
      break;
    default:
      break;
  }

  if (questions.length == 0) {
    navigate("/");
  }

  const [currentQuestIdx, setCurrentQuestIdx] = useState(0);
  const [currentQuest, setCurrentQuest] = useState(questions[0]);
  const [wrongAnswer, setWrongAnswer] = useState(null);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [currentAnswersCount, setCountAnswersCount] = useState(0);
  const [gameState, setGameState] = useState("game");

  const callMethod = (methodName, num) => {
    switch (methodName) {
      case "next":
        nextQuestion();
        break;
      case "ans":
        checkAnswer(num);
        break;
      case "correct_ans":
        isCorrectAns(num);
        break;
      default:
        break;
    }
  };

  React.useImperativeHandle(ref, () => {
    return {
      callMethod,
    };
  });

  function nextQuestion() {
    let newIdx = currentQuestIdx + 1;
    setCurrentQuestIdx(newIdx);
    setCurrentQuest(questions[newIdx]);
    setWrongAnswer(null);
    setCurrentAnswer(null);
  }

  function isCorrectAns(num) {
    if (currentAnswer != null) {
      return; // Prevent changing the answer after it has been checked
    }
    let isCorrect = 0;
    if (currentQuest.validAnswer === num) {
      isCorrect = 1;
    }
    props.assistant_global(isCorrect, "correct_ans");
  }

  function checkAnswer(num) {
    if (currentAnswer != null) {
      return; // Prevent changing the answer after it has been checked
    }

    let isCorrect = (currentQuest.validAnswer === num);
    saveAnswer({ question: currentQuest.question, givenAnswer: num, isCorrect });
    if (isCorrect) {
      setCurrentAnswer(num);
      setWrongAnswer(null);
      setCountAnswersCount((x) => x + 1);
    } else {
      setCurrentAnswer(currentQuest.validAnswer);
      setWrongAnswer(num);
    }

    //props.assistant_global({ answer: num, correctAnswer: currentQuest.validAnswer }, "response");

    if (currentQuestIdx == questions.length - 1) {
      setGameState("results");
    }
  }

  function getComment() {
    if (currentAnswersCount < 6) {
      return "Не расстраивайтесь, если прогресс небольшой. Это замечательная возможность погрузиться в изучение времён в английском более глубоко!";
    } else if (currentAnswersCount < 11) {
      return "Вы проявили хорошее понимание времён в английском языке, однако есть ещё многое, что можно узнать. Продолжайте изучать новое!";
    } else if (currentAnswersCount < 16) {
      return "Ваши знания времён в английском языке хороши, но есть несколько ошибок. Попробуйте ещё раз!";
    } else {
      return "Отличный результат! Вы отлично разбираетесь в английских временах!";
    }
  }

  function toMenu() {
    props.assistant_global(null, "list_of_tense")
    navigate("/");
  }

  return (
      <div className={"game " + gameClass}>
        <div {...ansProps}>
          <div className="question-block">
            <h1 style={{ margin: "0" }}>{header}</h1>

            {gameState === "game" ? (
                <>
                  <h4 style={{ textAlign: "center" }}>Вопрос {currentQuestIdx + 1} из {questions.length}: {currentQuest.question}</h4>
                  <div className="answers">
                    <div>
                      <Button
                          view="secondary"
                          onClick={() => checkAnswer(1)}
                          // onClick={() => {
                          //   checkAnswer(1);
                          //   nextQuestion();
                          // }}
                          disabled={currentAnswer != null}
                          size={'m'}
                          className={
                              "answer " +
                              (wrongAnswer === 1 ? "incorrect " : "") +
                              (currentAnswer === 1 ? "correct" : "")
                          }
                      >
                        <Badge text="1" size="l" />
                        <div className="answer-text">{currentQuest.answers[0]}</div>
                      </Button>
                      <Button
                          view="secondary"
                          size={'m'}
                          onClick={() => checkAnswer(2)}
                          // onClick={() => {
                          //   checkAnswer(2);
                          //   nextQuestion();
                          // }}
                          disabled={currentAnswer != null}
                          className={
                              "answer " +
                              (wrongAnswer === 2 ? "incorrect " : "") +
                              (currentAnswer === 2 ? "correct" : "")
                          }
                      >
                        <Badge text="2" size="l" />
                        <div className="answer-text">{currentQuest.answers[1]}</div>
                      </Button>
                      <Button
                          size={'m'}
                          view="secondary"
                          onClick={() => checkAnswer(3)}
                          // onClick={() => {
                          //   checkAnswer(3);
                          //   nextQuestion();
                          // }}
                          disabled={currentAnswer != null}
                          className={
                              "answer " +
                              (wrongAnswer === 3 ? "incorrect " : "") +
                              (currentAnswer === 3 ? "correct" : "")
                          }
                      >
                        <Badge text="3" size="l" />
                        <div className="answer-text">{currentQuest.answers[2]}</div>
                      </Button>
                      <Button
                          size={'m'}
                          view="secondary"
                          onClick={() => checkAnswer(4)}
                          // onClick={() => {
                          //   checkAnswer(4);
                          //   nextQuestion();
                          // }}
                          disabled={currentAnswer != null}
                          className={
                              "answer " +
                              (wrongAnswer === 4 ? "incorrect " : "") +
                              (currentAnswer === 4 ? "correct" : "")
                          }
                      >
                        <Badge text="4" size="l" />
                        <div className="answer-text">{currentQuest.answers[3]}</div>
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Button
                        size="s"
                        view="primary"
                        onClick={nextQuestion}
                        disabled={currentAnswer == null}
                        style={{ marginRight: '10px' }}
                        //focused={currentAnswer != null}
                    >
                      Следующий вопрос
                    </Button>

                    <Button size="s" view="secondary" onClick={toMenu}>
                    {/*<Button size="s" onClick={toMenu}>*/}
                      Список тем
                    </Button>
                  </div>
                </>
            ) : (
                <div className="results-block">
                  <p className="results-comment">{getComment()}</p>
                  <p className="results-comment">Верных ответов</p>
                  <p className="corr-ans-count">
                    {currentAnswersCount + " из " + questions.length}
                  </p>
                  <Button size="l" view="primary" onClick={toMenu}
                          focused={true}>
                    Список тем
                  </Button>
                </div>
            )}
          </div>
        </div>
      </div>
  );
});

export default Game;
