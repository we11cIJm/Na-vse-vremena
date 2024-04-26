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
      gameClass = "scandinavia";
      header = "Скандинавия";
      questions = data.scn.questions;
      break;
    case 2:
      gameClass = "greece";
      header = "Греция";
      questions = data.gre.questions;
      break;
    case 3:
      gameClass = "egypt";
      header = "Египет";
      questions = data.egpt.questions;
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
      return "Не стоит огорчаться, если результат небольшой. Это отличный повод изучить тему еще более тщательно!";
    } else if (currentAnswersCount < 11) {
      return "Вы проявили неплохие знания, но есть еще, что можно изучить. Продолжайте узнавать новое!";
    } else if (currentAnswersCount < 15) {
      return "Вы хорошо знаете мифологию, но есть несколько ошибок. Попробуйте еще раз!";
    } else {
      return "Безупречный результат! Вы отлично разбираетесь в мифологии!";
    }
  }

  function toMenu() {
    props.assistant_global(null, "list_theme")
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
              Играть снова
            </Button>
          </div>
        )}
      </div>
    </div>
  );
});

export default Game;
