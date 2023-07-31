import Options from "./Options";

function Questions({ questions, dispatch, answer }) {
  console.log(questions);
  return (
    <div className="questions">
      <div className="question-div">
        <h3>{questions.question}</h3>
      </div>
      <Options question={questions} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Questions;


//use npm start