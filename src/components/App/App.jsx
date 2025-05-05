import { useDispatch, useSelector } from 'react-redux';
import { submit } from '../redux/questionnare/questionnareSlice';
import Question from "../Question/Question"
import Results from "../Results/Results"
import styles from './App.module.css'
function App() {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.questionnare.questions);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submit());
  };

  return (
    <div className={styles.container}>
      <h1>Questionnaire</h1>
      <form onSubmit={handleSubmit}>
        {questions.map(q => (
          <Question key={q.id} id={q.id} />
        ))}
        <button type="submit" className={styles.submit}>Submit</button>
      </form>
      <Results />
    </div>
  )
}

export default App
