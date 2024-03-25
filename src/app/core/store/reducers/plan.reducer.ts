import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlanValues } from "../types";

const initialState: IPlanValues = {} as IPlanValues;

const planSlice = createSlice({
    name: "plan",
    initialState,
    reducers: {
        setPlan(state, action: PayloadAction<IPlanValues>) {
            state.name = action.payload.name;
            state.price = action.payload.price;
            state.description = action.payload.description;
            state.age = action.payload.age;
            state.recommendedPlan = action.payload.recommendedPlan;
            state.inHome = action.payload.inHome;
            state.priceDiscount = action.payload?.priceDiscount;
            state.typeCard = action.payload.typeCard;
        },
        setRemovePlan(state) {
            state = undefined as any;
        },
    }
})

export const { setPlan, setRemovePlan } = planSlice.actions;
export default planSlice.reducer;
