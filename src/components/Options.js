function Options({ question, dispatch, answer }) {
  const hasAnswer = answer !== null;
  return (
    <>
      {question.options.map((option, index) => (
        <button
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          className={`options ${answer === index ? "selected" : ""} ${
            hasAnswer ? (index === question.answer ? "blue" : "peach") : ""
          }`}
        >
          {option}
        </button>
      ))}
    </>
  );
}

export default Options;
