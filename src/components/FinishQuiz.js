function FinishQuiz({ points, maxNumPoints, dispatch, highscore }) {
  const percentage = (points / maxNumPoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🌟";
  if (percentage > 80 && percentage < 90) emoji = "👍";
  if (percentage > 50 && percentage < 80) emoji = "🙂";
  if (percentage > 30 && percentage < 50) emoji = "👎";
  if (percentage > 0 && percentage < 30) emoji = "😰";

  return (
    <div className="result">
      <h1>{percentage < 50 ? "You Failed" : "You passed the quiz"}</h1>
      <h3>
        {emoji} Your result is {points} points out of {maxNumPoints} points (
        {Math.trunc(percentage)}%)
      </h3>
      <p>🔝HighScore{highscore}</p>
      <button onClick={() => dispatch({ type: "restart" })} className="btn-ui">
        Restart
      </button>
    </div>
  );
}

export default FinishQuiz;
