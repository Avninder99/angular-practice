import { createAction, props } from "@ngrx/store";

export const setAuth = createAction(
    '[Auth] set',
    props<{ token: string }>()
);