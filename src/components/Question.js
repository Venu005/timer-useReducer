import Options from "./Options";

function Question({ question, dispatch, answer }) {
  console.log(question);
  //const [option1, option2, option3, option4] = [...question.options];
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer}/>
    </div>
  );
}

export default Question;
