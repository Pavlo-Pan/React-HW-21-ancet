import { configureStore } from '@reduxjs/toolkit';
import questionnareReducer from './questionnare/questionnareSlice'

export const store = configureStore({
    reducer: {
        questionnare: questionnareReducer
    }
});