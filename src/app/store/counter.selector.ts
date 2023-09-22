import { createSelector } from "@ngrx/store";

export const counterSelector = (state: { counter: number }) => {
    return state.counter;
}