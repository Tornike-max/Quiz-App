import { useEffect, useReducer } from "react";

import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import StartQuiz from "./StartQuiz";
import Questions from "./Questions";
import NextQuestion from "./NextQuestion";
import Progress from "./Progress";
import FinishQuiz from "./FinishQuiz";
import Timer from "./Timer";
import Footer from "./Footer";
const MINUS_SEC = 1;
const TIMES_SEC = 20;

const initialState = {
  status: "loading",
  questions: [],
  answer: null,
  index: 0,
  points: 0,
  highscore: 0,
  time: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "ready":
      return { ...state, status: "ready", questions: action.payload };
    case "start":
      return {
        ...state,
        status: "start",
        time: state.questions.length * TIMES_SEC,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          question.answer === action.payload
            ? state.points + question.points
            : state.points,
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
      };
    case "restart":
      return {
        ...state,
        status: "ready",
        answer: null,
        points: 0,
        index: 0,
      };
    case "timer":
      return {
        ...state,
        time: state.time - MINUS_SEC,
        status: state.time <= 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Unexpected action");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { status, questions, index, answer, points, highscore, time } = state;

  const numQuestions = questions.length;
  const maxNumPoints = questions.reduce((accum, cur) => accum + cur.points, 0);

  useEffect(() => {
    fetch(`http://localhost:9000/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "ready", payload: data }));
  }, []);

  return (
    <div className="App">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "ready" && <StartQuiz dispatch={dispatch} />}
        {status === "start" && (
          <>
            <Progress
              numQuestions={numQuestions}
              maxNumPoints={maxNumPoints}
              points={points}
              answer={answer}
              index={index}
            />

            <Questions
              questions={questions[index]}
              dispatch={dispatch}
              index={index}
              answer={answer}
            />
            <Footer>
              <Timer time={time} dispatch={dispatch} />
              <NextQuestion
                answer={answer}
                dispatch={dispatch}
                numQuestions={numQuestions}
                index={index}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishQuiz
            points={points}
            maxNumPoints={maxNumPoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
