import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import data from "../Content/questions";
import { Badge, Button } from "@salutejs/plasma-ui";

const Game = React.forwardRef((props, ref) => {
  const location = useLocation();
  const navigate = useNavigate();
  const type = location.state.Type;

  let gameClass = "";
  let header = "";
  let questions = [];

  switch (type) {
    case 1:
      gameClass = "past";
      header = "Past";
      questions = data.past.questions;
      break;
    case 'прошедшее':
      gameClass = "past";
      header = "Past";
      questions = data.past.questions;
      break;
    case 2:
      gameClass = "present";
      header = "Present";
      questions = data.present.questions;
      break;
    case 'настоящее':
      gameClass = "present";
      header = "Present";
      questions = data.present.questions;
      break;
    case 3:
      gameClass = "future";
      header = "Future";
      questions = data.future.questions;
      break;
    case 'будущее':
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

  const [currentQuestIdx, setCurrentQuietIdx] = useState(0);
  const [currentQuest, setCurrentQuiet] = useState(questions[0]);
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
    setCurrentQuietIdx(newIdx);
    setCurrentQuiet(questions[newIdx]);
    setWrongAnswer(null);
    setCurrentAnswer(null);
  }

  function checkAnswer(num) {
    if (currentQuest.validAnswer == num) {
      setCurrentAnswer(num);
      setWrongAnswer(null);
      setCountAnswersCount((x) => x + 1);
    } else {
      setCurrentAnswer(currentQuest.validAnswer);
      setWrongAnswer(num);
    }

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
      <div className="question-block">
        <h1 style={{ margin: "0" }}>{header}</h1>

        {gameState == "game" ? (
          <>
            <h4 style={{ textAlign: "center" }}>Вопрос {currentQuestIdx + 1} из {questions.length}: {currentQuest.question}</h4>
            <div className="answers">
              <div>
                <Button
                  view="secondary"
                  onClick={() => checkAnswer(1)}
                  disabled={currentAnswer != null}
                  size={'m'}
                  className={
                    "answer " +
                    (wrongAnswer == 1 ? "incorrect " : "") +
                    (currentAnswer == "1" ? "correct" : "")
                  }
                >
                  <Badge text="1" size="l" />
                  <div className="answer-text">{currentQuest.answers[0]}</div>
                </Button>
                <Button
                  view="secondary"
                  size={'m'}
                  onClick={() => checkAnswer(2)}
                  disabled={currentAnswer != null}
                  className={
                    "answer " +
                    (wrongAnswer == 2 ? "incorrect " : "") +
                    (currentAnswer == 2 ? "correct" : "")
                  }
                >
                  <Badge text="2" size="l" />
                  <div className="answer-text">{currentQuest.answers[1]}</div>
                </Button>
                <Button
                  size={'m'}
                  view="secondary"
                  onClick={() => checkAnswer(3)}
                  disabled={currentAnswer != null}
                  className={
                    "answer " +
                    (wrongAnswer == 3 ? "incorrect " : "") +
                    (currentAnswer == 3 ? "correct" : "")
                  }
                >
                  <Badge text="3" size="l" />
                  <div className="answer-text">{currentQuest.answers[2]}</div>
                </Button>
                <Button
                  size={'m'}
                  view="secondary"
                  onClick={() => checkAnswer(4)}
                  disabled={currentAnswer != null}
                  className={
                    "answer " +
                    (wrongAnswer == 4 ? "incorrect " : "") +
                    (currentAnswer == 4 ? "correct" : "")
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
                focused={currentAnswer != null}
              >
                Следующий вопрос
              </Button>
              <Button size="s" view="secondary" onClick={toMenu}>
                Список времён
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
              Попробовать снова
            </Button>
          </div>
        )}
      </div>
    </div>
  );
});

export default Game;
