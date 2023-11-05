import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./features/user/UserSlice.ts";
import gradeSlice  from "./features/grade/GradeSlice.ts";

export const store = configureStore({
    reducer: {
        user:userSlice,
        grade:gradeSlice

    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
