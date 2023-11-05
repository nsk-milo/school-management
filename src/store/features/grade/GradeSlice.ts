import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { GradeResponse } from "./Grade";

const initialState = {} as GradeResponse;

export const gradeSlice = createSlice({
    name: "grade",
    initialState,
    reducers: {
        fetchGrades(state,action:PayloadAction<GradeResponse>){
            state.message = action.payload.message
        }
    }
});

export const {fetchGrades} = gradeSlice.actions;
export default gradeSlice.reducer