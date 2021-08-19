import { User } from "oidc-client";

export interface IAuthState {
    currentUser: User | null
}

export const state: IAuthState = {
    currentUser: null
}