import {createSlice} from "@reduxjs/toolkit";
import type  {PayloadAction} from "@reduxjs/toolkit";
import {LoginResponse} from "./Users.ts";

const initialState = {} as LoginResponse;

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser(state,action:PayloadAction<LoginResponse>){
            state.message = action.payload.message;
            state.token = action.payload.token;
        },

        logoutUser(state){
            state.message = initialState.message;
            state.token = initialState.token
        }
    }
});

export const {loginUser, logoutUser} = userSlice.actions;
export default userSlice.reducer