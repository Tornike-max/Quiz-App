import { useEffect } from "react";

function Timer({ time, dispatch }) {
  let min = time / 60;
  let sec = time % 60;
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "timer" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);
  return (
    <div className="timer">
      <strong>
        {min < 10 ? "0" : ""}
        {Math.trunc(min)}:{sec < 10 ? "0" : ""}
        {Math.trunc(sec)}
      </strong>
    </div>
  );
}

export default Timer;
