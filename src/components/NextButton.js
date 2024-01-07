function NextButton({ dispatch, answer, i, numQuestions }) {
  if (answer === null) return null;
  if (i < numQuestions - 1)
    return (
      <button className="btn btn-ui" onClick={() => dispatch({ type: "next" })}>
        Next
      </button>
    );
  if (i  === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
