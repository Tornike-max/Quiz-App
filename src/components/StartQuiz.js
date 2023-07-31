function StartQuiz({ dispatch }) {
  return (
    <div className="start">
      <h4>Are you ready to go? </h4>
      <button onClick={() => dispatch({ type: "start" })} className="start-btn">
        Let's Start
      </button>
    </div>
  );
}

export default StartQuiz;
