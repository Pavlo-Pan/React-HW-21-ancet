import { useSelector } from 'react-redux';
import styles from './Results.module.css';

export default function Results() {
    const submitted = useSelector(state => state.questionnare.submitted);
    const score = useSelector(state => state.questionnare.score);
    const total = useSelector(state => state.questionnare.questions.length);

    if (!submitted) return null;

    return (
        <div className={styles.container}>
            <h2>Your Score: {score}</h2>
            <p>You got {score} out of {total} correct.</p>
        </div>
    );
}