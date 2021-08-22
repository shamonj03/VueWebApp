import { GetterTree } from "vuex";
import { IRootState } from "@/store/modules/root/state";
import { IAuthState } from "./state";

import { User } from "oidc-client";


export enum GetterTypes {
    GET_CURRENT_USER = "GET_CURRENT_USER",
    IS_LOGGED_IN = "IS_LOGGED_IN"
}

export interface IAuthGetters {
    [GetterTypes.GET_CURRENT_USER](state: IAuthState): User | null;
    [GetterTypes.IS_LOGGED_IN](state: IAuthState): boolean
}

export const getters: GetterTree<IAuthState, IRootState> &
    IAuthGetters = {
    [GetterTypes.GET_CURRENT_USER]: (state: IAuthState) => {
        return state.currentUser || null;
    },
    [GetterTypes.IS_LOGGED_IN]: (state: IAuthState) => {
        return state.currentUser != null && !state.currentUser.expired;
    }
};