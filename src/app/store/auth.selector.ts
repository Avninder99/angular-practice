export const authObjectSelector = (state: { auth: { token: string | null, isAdmin: boolean, username: string | null } }): { token: string | null, isAdmin: boolean, username: string | null } => {
    return state.auth;
}