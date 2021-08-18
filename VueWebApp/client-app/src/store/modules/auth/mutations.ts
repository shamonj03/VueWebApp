import { User } from "oidc-client";
import { MutationTree } from "vuex";
import { IAuthState } from "./state";

export enum MutationTypes {
    SET_CURRENT_USER = "SET_CURRENT_USER"
}

export type AuthMutations<S = IAuthState>= {
    [MutationTypes.SET_CURRENT_USER](state: S, payload: User): void;
}

export const mutations: MutationTree<IAuthState> & AuthMutations = {
    [MutationTypes.SET_CURRENT_USER](state: IAuthState, payload: User) {
        state.currentUser = payload;
    }
};
