function Progress({ numQuestions, index, answer, maxNumPoints, points }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        <strong>
          {index + 1}/{numQuestions}
        </strong>
      </p>

      <p>
        <strong>
          {points}/{maxNumPoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
