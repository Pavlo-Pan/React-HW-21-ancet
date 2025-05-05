import { useDispatch, useSelector } from 'react-redux';
import { answerQuestion } from '../redux/questionnare/questionnareSlice';
import styles from './Question.module.css'
const Question = ({ id }) => {
    const dispatch = useDispatch();
    const question = useSelector(state => state.questionnare?.questions.find(q => q.id === id));
    if (!question) {
        return (
            <p>Loading....</p>
        );
    }
    const handleChange = (e) => {
        dispatch(answerQuestion({ id, answer: e.target.value }));
    };
    return (
        <div className={styles.container}>
            <p className={styles.text}>{question.text}</p>
            <div className={styles.inputs}>
                {question.options.map(opt => (
                    <label key={opt} className={styles.label}>
                        <input
                            type="radio"
                            name={`question-${id}`}
                            value={opt}
                            checked={question.answer === opt}
                            onChange={handleChange}
                        />
                        {opt}
                    </label>
                ))}
            </div>
        </div>
    );

}

export default Question