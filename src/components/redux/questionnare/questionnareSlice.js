import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../data/initialState";

const questionnareSlice = createSlice({
    name: 'questionnare',
    initialState,
    reducers: {
        answerQuestion: (state, action) => {
            const { id, answer } = action.payload;
            const q = state.questions.find(q => q.id === id);
            if (q) q.answer = answer;
        },
        submit: (state) => {
            state.submitted = true;
            const score = state.questions.reduce((sum, q) => {
                return sum + (q.answer === q.correctAnswer ? 1 : 0);
            }, 0);
            state.score = score;
        }
    }
})
export const { answerQuestion, submit } = questionnareSlice.actions;
export default questionnareSlice.reducer;