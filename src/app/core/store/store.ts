import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth.reducer";

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    devTools: false
})

export type RootState = ReturnType<typeof store.getState>;

export default store