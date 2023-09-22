import { createAction, props } from "@ngrx/store";

export const entryAdder = createAction(
    'Entriers Adder',
    props<{ desc: string }>()
)

export const entryCompleteToggle = createAction(
    'Toggle Entry Completion',
    props<{ index: number }>()
)