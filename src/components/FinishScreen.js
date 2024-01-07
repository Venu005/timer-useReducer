function FinishScreen({ points, totalPoints, highScore, dispatch }) {
  const percent = (points / totalPoints) * 100;
  highScore = highScore ?? 0;
  return (
    <>
      <p className="result">
        You scored {points} out of {totalPoints} ({Math.ceil(percent)}%)
      </p>

      <p className="highscore">(HighScore : {highScore})</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
