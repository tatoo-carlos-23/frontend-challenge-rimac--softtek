import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserAuth } from "../types";

const initialState: IUserAuth = { loggued: false } as IUserAuth;

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth(state, action: PayloadAction<IUserAuth>) {
            state = action.payload;
            state.loggued = true;
        },
        setAuthClose(state) {
            state = { loggued: false } as IUserAuth;
        },
    }
})

export const { setAuth, setAuthClose } = authSlice.actions;
export default authSlice.reducer;
