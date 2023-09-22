import { createAction, props } from "@ngrx/store";

export const reset = createAction(
    'Counter Reset'
)

export const increment = createAction(
    'Counter Increment',
    props<{ value: number }>()
)

export const decrement = createAction(
    'Counter Decrement',
    props<{ value: number }>()
)