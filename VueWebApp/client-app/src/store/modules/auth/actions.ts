import { ActionContext, ActionTree } from "vuex";
import { IRootState } from "@/store/modules/root/state";
import { IAuthState } from "./state";
import { AuthMutations, MutationTypes } from "./mutations";
import { User } from "oidc-client";

export enum ActionTypes {
    SET_CURRENT_USER = "GET_CURRENT_USER"
}

export interface IAuthActions {
    [ActionTypes.SET_CURRENT_USER]({ commit }: AugmentedActionContext, payload: User): void;
}

export const actions: ActionTree<IAuthState, IRootState> & IAuthActions = {
    [ActionTypes.SET_CURRENT_USER]({ commit }, payload: User) {
        commit(MutationTypes.SET_CURRENT_USER, payload);
    }
};

export type AugmentedActionContext = {
    commit<K extends keyof AuthMutations>(
        key: K,
        payload: Parameters<AuthMutations[K]>[1]
    ): ReturnType<AuthMutations[K]>;
} & Omit<ActionContext<IAuthState, IRootState>, "commit">;
