import { User } from "oidc-client";

export interface IAuthState {
    currentUser: User | undefined
}

export const state: IAuthState = {
    currentUser: undefined
}