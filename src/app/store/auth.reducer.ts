import { createReducer, on } from "@ngrx/store";
import { setAuth } from "./auth.action";

const initialState: { token: string | null, isAdmin: boolean, username: string | null } = { 
    token: null,
    username: null,
    isAdmin: false
};

export const authReducer = createReducer(
    initialState,
    on(setAuth, (state, action) => {
        let base64Url = action.token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = JSON.parse(decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join('')));

        console.log("payload => ", jsonPayload);

        return {
            token: action.token,
            isAdmin: jsonPayload.role === 'admin',
            username: jsonPayload.username
        };
    })
)