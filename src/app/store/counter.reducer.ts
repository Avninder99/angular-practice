import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.action";

export const counterReducer = createReducer(
    0,
    on(increment, (state, action) => {
        return state + action.value;
    }),
    on(decrement, (state, action) => {
        return state - action.value;
    }),
    on(reset, (state) => {
        return 0;
    })
)