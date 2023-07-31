function NextQuestion({ dispatch, answer, numQuestions, index }) {
  const hasAnswer = answer !== null;
  return (
    <div className="next-div">
      {hasAnswer && numQuestions - 1 !== index && (
        <button
          onClick={() => dispatch({ type: "nextQuestion" })}
          className="btn btn-ui"
        >
          Next
        </button>
      )}
      {hasAnswer && numQuestions - 1 === index && (
        <button
          onClick={() => dispatch({ type: "finish" })}
          className="btn btn-ui"
        >
          Finish
        </button>
      )}
    </div>
  );
}

export default NextQuestion;
