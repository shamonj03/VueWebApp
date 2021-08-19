import { GetterTree } from "vuex";
import { IRootState } from "@/store/modules/root/state";
import { IAuthState } from "./state";

import { User } from "oidc-client";

export interface IAuthGetters {
    currentUser(state: IAuthState): User | null;
    isLoggedIn(state: IAuthState): boolean
}

export const getters: GetterTree<IAuthState, IRootState> &
    IAuthGetters = {
    currentUser: (state: IAuthState) => {
        return state.currentUser || null;
    },
    isLoggedIn: (state: IAuthState) => {
        return state.currentUser != null && !state.currentUser.expired;
    }
};